#!/usr/bin/env python3
"""Replace short distractors with substantive (but wrong) medical options — no meta padding."""
import json
import re
from pathlib import Path

BASE = Path(__file__).resolve().parent.parent / "src" / "data"

# Suffixes added by the previous generic-padding approach — strip before rebalancing.
STRIP_SUFFIXES = [
    " – אינו מסביר את האבחנה או את הצעד הבא לפי הנתונים הקליניים והסיכום",
    " – אינו תואם את פרוטוקול הטיפול, את הממצא או את ההבחנה המתוארים בסיכום",
    " – אינו מתאר נכון את הסימן, הבדיקה או הטיפול הרלוונטי לפי הסיכום",
    " – אינו מתאים לאינדיקציה, לבדיקה או לטיפול האנדוסקופי הנכון מהסיכום",
    " – אינו תואם את התסמונת, הסיכון או פרוטוקול המעקב המתואר בסיכום",
    " – אינו מתאר נכון את הסיבוך, הסימן או הטיפול בוושט לפי הסיכום",
    " – אינו תואם את הגורם, הסיבוך או הטיפול בקיבה לפי הסיכום",
    " – אינו מתאר נכון את המבנה, התא או האזור ההיסטולוגי לפי הסיכום",
    " – אינו מתאר נכון את התפקיד, המנגנון או ההורמון לפי הסיכום",
    " – אינו עונה נכונה על ההגדרה, הסימן או המושג המרכזי לפי הסיכום",
    " ואינו כולל את המאפיין המבדיל מהחומר הנלמד",
    " – חלופה שגויה או חלקית שלא מתאימה לשאלה",
    " – אינו תואם את ההגדרה, הסימן או הטיפול המרכזי לפי הסיכום",
    " ואינו כולל את המאפיין המבדיל או את הפרוטוקול הנכון מהחומר",
    " – תיאור חלקי או שגוי שאינו עונה נכון על מלוא השאלה",
    " ללא קשר לנתיב הפיזיולוגי, לאבחנה או להתערבות המתאימה בסיכום",
    " – חלופה שגויה שאינה מתאימה לתמונה הקלינית או לנתונים בשאלה",
    " ואינה מסבירה את המנגנון, הבדיקה או הטיפול הנדרש לפי הסיכום",
]

# Full option sets (correct answer always index 0). Substantive wrong distractors only.
SUBSTANTIVE = {
    5: [
        "ליבת lamina propria עם כלי דם ו-lacteal, מכוסה אפיתל עמודי עם goblet cells",
        "ליבת submucosa עם plexus submucosus, כלי דם גדולים ו-Brunner glands",
        "ליבת muscularis mucosae עם ganglia של Auerbach ותנועות פריסטלטיות",
        "ליבת connective tissue של serosa עם mesothelium ו-adipose tissue",
    ],
    6: [
        "בבסיס קריפטות (crypts) של המעי הדק, בעיקר ב-jejunum ו-ileum",
        "באפיתל הלשון בתאי taste buds – אחראים על חישת טעם מתוק",
        "בשכבת muscularis externa של הקיבה – תאי ICC לפריסטלטיקה",
        "בלובולי הכבד (hepatic acini) – סינתזת bile acids ודטוקסיפיקציה",
    ],
    7: [
        "יצירת קפלים בריריתיים (rugae) ותנועות מקומיות של הרירית",
        "הפרשת pepsinogen ו-HCl מתאי parietal בגוף הקיבה",
        "ספיגת B12 עם intrinsic factor באזור ה-fundus",
        "עיכול מכני של שומנים עם lingual lipase בפה",
    ],
    21: [
        "הרחבה פנאומטית אנדוסקופית או ניתוח הלר (cardiomyotomy)",
        "PPI במינון מלא לטיפול ב-GERD ו-Barrett ללא הרחבה",
        "הזרקת botulinum toxin ל-LES כטיפול קבוע ראשון לכל המטופלים",
        "resection של esophagus עם anastomosis מיידית ללא dilatation",
    ],
    24: [
        "Esophageal stricture – היצרות מצלקת בוושט",
        "Achalasia עם bird-beak ב-barium ואובדן peristalsis",
        "Hiatal hernia sliding ללא דלקת או שינוי ברירית",
        "H. pylori gastritis בלבד ללא reflux או נזק לוושט",
    ],
    27: [
        "Tracheo-esophageal fistula – שיעול אחרי בליעה, דלקת ריאות",
        "Achalasia עם bird-beak ב-barium ודיספניה לנוזלים",
        "Hiatal hernia sliding בלבד ללא קשר לסרטן",
        "GERD עם heartburn בלבד ללא סיבוכים מבניים",
    ],
    30: [
        "H. pylori גורם לגסטריטיס כרונית ועלייה בחומצה → סיכון לפצעת",
        "H. pylori מגן מפני GERD ומפחית סיכון לפצעת ו-adenocarcinoma",
        "H. pylori קשור רק ל-Crohn ולא לגסטריטיס או פצעת",
        "H. pylori מטופל ב-PPI בלבד ללא אנטיביוטיקה או בדיקת eradication",
    ],
    31: [
        "PPI + clarithromycin + amoxicillin (או metronidazole) × 14 יום",
        "PPI בלבד × 4 שבועות ללא אנטיביוטיקה – מספיק ל-eradication",
        "metronidazole PO בודד ללא PPI או amoxicillin",
        "סטטין + PPI לטיפול ב-H. pylori ו-hyperlipidemia",
    ],
    35: [
        "דלקת רירית קיבה עם erosions שטחיות – לרוב stress, NSAIDs, אלכוהול",
        "דלקת transmural עם granulomas ו-skip lesions כמו ב-Crohn",
        "מחלה אוטואימונית עם anti-parietal antibodies ו-B12 deficiency",
        "גסטריטיס ויראלית מ-HAV עם IgM anti-HAV בלבד",
    ],
    37: [
        "אוטואימונית נגד parietal cells → חוסר B12 ו-pernicious anemia",
        "דלקת אנטרלית מ-H. pylori בלבד ללא השפעה על intrinsic factor",
        "דלקת חריפה erosive מ-NSAIDs ללא autoantibodies",
        "גסטריטיס ללא השפעה על ספיגת B12 או על parietal cells",
    ],
    39: [
        "urea breath test, stool antigen, biopsy עם histology/rapid urease",
        "anti-tTG בלבד לאבחון H. pylori ללא endoscopy",
        "colonoscopy עם FIT לזיהוי H. pylori בקיבה",
        "serology ל-HAV לאבחון גסטריטיס מ-H. pylori",
    ],
    40: [
        "lymphoma לימפואידי קשור ל-H. pylori, עשוי להגיב ל-eradication",
        "adenocarcinoma שטחי של cardia – לא קשור ל-H. pylori",
        "leiomyosarcoma – גידול שריר נדיר ללא קשר ל-H. pylori",
        "GIST mesenchymal – לא מגיב ל-eradication של H. pylori",
    ],
    42: [
        "גירוי הפרשת bicarbonate מ-pancreas ו-bile, עיכוב gastrin",
        "גירוי הפרשת HCl מ-parietal cells והגברת pepsinogen",
        "גירוי הפרשת insulin מ-β cells בלבלב",
        "גירוי peristalsis בוושט בזמן בליעה ראשונית",
    ],
    43: [
        "גירוי הפרשת אנזימים לבלב, התכווצות כיס מרה, ספינcter of Oddi",
        "גירוי הפרשת HCl מ-parietal cells בגוף הקיבה",
        "גירוי אינסולין מתאי β בלבלב לאחר ארוחה",
        "פריסטלטיקה וושטית בזמן בליעה ראשונית",
    ],
    46: [
        "מכני (פה+קיבה), בליעה (לוע+ושט), כימי, ספיגה, הפרשת פסולת",
        "רק ספיגה במעי גס ללא עיכול כימי בפה או בקיבה",
        "רק הפרשת פסולת בפה ולוע ללא שלב בליעה",
        "עיכול כימי בוושט בלבד ללא תפקיד מכני בפה",
    ],
    48: [
        "הפרשת רוק, HCl ואנזימים בתגובה לריח/מראה/טעם אוכל (vagus)",
        "הפרשת bile מכיס המרה בלבד ללא הפרשת אנזימים",
        "ספיגת גלוקוז ב-jejunum בתגובה לריח אוכל",
        "הפרשת intrinsic factor ב-duodenum בתגובה ל-vagus",
    ],
    59: [
        "מחלה אוטואימונית – נוגדנים תוקפים צינורות מרה; צלקות; קשר ל-UC וסיכון CRC",
        "דלקת לבלב חריפה מ-gallstones עם lipase מוגבר וכאב קורן לגב",
        "cholestasis מ-obstruction חיצוני של common bile duct מאבן בלבד",
        "דלקת כבד ויראלית חדה (HAV) עם IgM anti-HAV וללא autoantibodies",
    ],
    64: [
        "Crohn – transmural, granulomas, skip lesions; UC – רירית/submucosa, crypt abscesses",
        "UC – transmural עם granulomas; Crohn – רירית בלבד רציפה",
        "שניהם מוגבלים לרירית ללא מעורבות submucosa או muscularis",
        "Crohn תמיד ב-colon בלבד; UC תמיד במעי דק בלבד",
    ],
    70: [
        "corticosteroids, immunomodulators (azathioprine) ו-biologics (infliximab)",
        "PPI במינון מלא כטיפול יחיד ל-IBD פעיל ללא immunomodulators",
        "antibiotics PO בלבד ל-Crohn ו-UC ללא biologics או סטרואידים",
        "colectomy מיידית לכל מטופל עם IBD ללא ניסיון טיפול רפואי",
    ],
    75: [
        "שלשול כרוני עם histology אבנורמלית (lymphocytic/collagenous) ו-colonoscopy תקין",
        "IBS – שלשול לסירוגין ללא שינוי histologic ב-biopsy",
        "UC – crypt abscesses ודימום רציף ב-colonoscopy",
        "Crohn – transmural inflammation עם skip lesions",
    ],
    76: [
        "אבחנה מבדלת בין IBD ל-IBS ומעקב תגובה לטיפול",
        "אבחון GERD עם pH monitoring בלבד ללא בדיקות דלקת",
        "סקר CRC ב-average risk ללא תסמינים או דלקת",
        "אבחון cholelithiasis ב-US בלבד ללא מדד דלקת מעי",
    ],
    96: [
        "בירור דימום ממקור לא ידוע במעי הדק; אבחון Crohn במעי דק",
        "טיפול ב-varices בוושט עם קשירת דליות בגסטרוסקופיה",
        "סקר Barrett עם biopsies כל שנה ללא VCE",
        "הוצאת אבנים מ-CBD כחלופה ל-ERCP במעי דק",
    ],
    97: [
        "מחלה גנטית נדירה – כתמי פיגמנטציה בשפתיים ופה + פוליפים במעי; מעלה סיכון לסרטן",
        "FAP – מאות פוליפים מגיל 10-12; APC mutation; כמעט 100% CRC עד 40",
        "Lynch – MMR mutation; סרטן מעי גס בגיל 40-60; פוליפים מעטים",
        "average-risk CRC screening מגיל 50 עם FIT בלבד",
    ],
    98: [
        "calprotectin בצואה גבוה ב-IBD ונמוך ב-IBS; CRP/ESR; אנדוסקופיה",
        "תסמינים פונקציונליים בלבד ללא בדיקות מעבדה או אנדוסקופיה",
        "H. pylori breath test כבדיקה ראשונה להבחנה IBD/IBS",
        "Murphy sign ב-RUQ להבחנה בין Crohn ל-UC",
    ],
    100: [
        "רעד בידיים באנצפלופתיה כבדית – מאמוניה שלא מסוננת",
        "רעד ב-Wilson disease בלבד ללא קשר לכבד או לאמוניה",
        "כאב RLQ ב-cholecystitis עם Murphy sign חיובי",
        "סימן ב-GERD עם heartburn ללא encephalopathy",
    ],
    102: [
        "lacteal (צינור לימפה מרכזי) ורשת capillaries לספיגת חומרים ממוססים",
        "hepatic portal vein ישירות בתוך villus ללא capillaries",
        "bile duct בתוך villus לאמולסיה של שומנים",
        "Peyer's patch במרכז כל villus לספיגת חלבונים",
    ],
    114: [
        "ניטרול salivary amylase, הפעלת pepsinogen→pepsin, חיסול patogenים",
        "הפרשת bile מכיס המרה וספיגת B12 עם intrinsic factor",
        "עיכול מלא של שומנים עם pancreatic lipase בקיבה",
        "ספיגת גלוקוז דרך SGLT1 ב-villi של הקיבה",
    ],
    115: [
        "parotid (תת-אוזנית), submandibular (תת-לסתית), sublingual (תת-לשונית)",
        "Brunner glands ב-duodenum, Paneth cells ב-crypts, hepatic acini בכבד",
        "goblet cells בלבד בכל בלוטות הרוק ללא acinar cells",
        "gastric glands בפה – HCl ו-pepsinogen מפרישים בלוטות הרוק",
    ],
    118: [
        "ויסות זרימת bile ו-pancreatic juice ל-duodenum; מניעת reflux לצינורות",
        "הפרשת gastrin מ-G cells והגברת HCl בקיבה",
        "ספיגת B12 ב-terminal ileum עם intrinsic factor",
        "עיכול מכני של פחמימות עם salivary amylase בפה",
    ],
    124: [
        "esophageal/gastric varices, splenomegaly, ascites, caput medusae, encephalopathy",
        "heartburn, regurgitation ו-dysphagia לנוזלים בלבד",
        "כאב RLQ, RLQ tenderness ו-anorexia עם עליית WBC",
        "צהבת בלבד ללא ascites, varices או שינויי hemodynamics",
    ],
    126: [
        "jaundice, coagulopathy, hypoalbuminemia/ascites, SBP, hepatic encephalopathy",
        "heartburn ו-regurgitation כתסמינים מובילים של cirrhosis",
        "bloody diarrhea, urgency ו-tenesmus כסימנים עיקריים של שחמת",
        "dysphagia לנוזלים ו-megaesophagus ב-barium swallow",
    ],
    128: [
        "2 מתוך 3: כאב תואם, lipase/amylase ≥3× ULN, imaging תומך",
        "כאב אפיגסטרי בלבד ללא lipase או imaging – מספיק לאבחנה",
        "lipase תקין תמיד שולל pancreatitis גם עם כאב חזק",
        "CT בלבד ללא כאב או אנזימים – קריטריון יחיד לאבחנה",
    ],
    130: [
        "נוזלים IV, ניטור, משככי כאב, תזונה מוקדמת – ללא אנטיביוטיקה שגרתית",
        "אנטיביוטיקה מונעת לכל pancreatitis קלה עם lipase מורם בלבד",
        "NPO מוחלט ל-14 יום ללא נוזלים IV או תזונה",
        "כריתת לבלב דחופה בכל pancreatitis חריפה ללא conservative therapy",
    ],
    132: [
        "כרונית והתקפתית (relapsing-remitting), immune-mediated, idiopathic",
        "חריפה בלבד ללא remission; לא immune-mediated",
        "מזוהה רק בילדים; תמיד מוגבלת ל-rectum",
        "מחלה זיהומית בלבד – מטופלת באנטיביוטיקה ללא immunomodulators",
    ],
    133: [
        "עישון מעלה סיכון ל-Crohn; עשוי להגן ב-UC (החמרה אפשרית בהפסקה)",
        "עישון מפחית סיכון ל-Crohn ו-UC באותה מידה",
        "עישון קשור רק ל-CRC ולא ל-IBD",
        "עישון מגן מפני Crohn ומחמיר UC תמיד",
    ],
    135: [
        "UC: mucosa/submucosa, רציף, crypt abscesses; Crohn: transmural, skip lesions",
        "UC: transmural עם granulomas; Crohn: רירית בלבד",
        "שניהם מוגבלים לרירית ללא הבדל היסטולוגי",
        "Crohn תמיד ב-colon; UC תמיד במעי דק בלבד",
    ],
    142: [
        "perforation, דימום post-polypectomy, כוויה, הפרעות אלקטרוליטים מה-prep",
        "תמיד ללא סיכונים – בדיקה בטוחה לחלוטין בכל מטופל",
        "רק כאב בטן קל ללא דימום או perforation אפשריים",
        "סיכון יחיד: אלרגיה ל-latex של הצוות הרפואי",
    ],
    145: [
        "מחלה גנטית AD; מאות פוליפים מגיל 10-12; כמעט 100% יפתחו CRC עד 40 ללא מניעה",
        "Lynch – MMR mutation; פוליפים מעטים; סרטן מעי גס בגיל 40-60",
        "Peutz-Jeghers – כתמי פיגמנטציה בפה + פוליפים hamartomatous",
        "average-risk polyp בודד בגיל 60 ללא מוטציה גנטית",
    ],
    146: [
        "מצב חירום – אשפוז; יום 1 IV steroids; ימים 3-5 הערכה; rescue anti-TNF אם אין תגובה",
        "PPI PO בלבד ושחרור מיידי ביום – מתאים ל-GERD קל; לא ל-ASUC עם ≥6 bowel movements/יום ודם",
        "colectomy מיידית ביום 1 ללא IV steroids – ללא הערכת תגובה days 3-5 וללא rescue anti-TNF",
        "antibiotics PO בלבד (cipro/metronidazole) ללא סטרואידים IV – ל-SBP; לא ל-ASUC חמור",
    ],
    148: [
        "מחלת הצטברות נחושת אוטוזומלית רצסיבית – cirrhosis, neuro, סימנים נוירולוגיים",
        "הצטברות ברזל – ferritin גבוה, transferrin saturation מוגבר, phlebotomy",
        "NAFLD – steatosis ללא אלכוהול; weight loss כטיפול עיקרי",
        "acute hepatitis A – IgM anti-HAV; מחלים לרוב ללא antiviral",
    ],
    151: [
        "PPI במינון מלא + שינויי אורח חיים; EGD אם alarm symptoms",
        "antibiotics ל-H. pylori בלבד ללא PPI או lifestyle",
        "colectomy דחופה לכל מטופל עם heartburn",
        "colonoscopy ראשונה ללא EGD ב-GERD עם pyrosis",
    ],
    156: [
        "Biliary colic – חסימה זמנית של מוצא כיס המרה",
        "Acute cholecystitis – כאב ממושך >4-6 שעות, חום, Murphy sign חיובי",
        "Acute pancreatitis – lipase גבוה, כאב קורן לגב, amylase מורם",
        "GERD – heartburn אחרי ארוחה ללא כאב RUQ חד וחולף",
    ],
    160: [
        "abdominal ultrasound – cholelithiasis/cholecystitis; antibiotics + cholecystectomy",
        "EGD – cholecystitis מאובחנת תמיד באנדוסקופיה עליונה בלבד",
        "MRCP בלבד ללא US – הבדיקה הראשונה ב-RUQ pain עם חום",
        "observation בלבד – כאב RUQ אחרי ארוחה שמנה תמיד עובר ללא טיפול",
    ],
    161: [
        "acute cholangitis (Charcot triad) – IV antibiotics + biliary drainage (ERCP)",
        "biliary colic – כאב חולף ללא חום; ללא אנטיביוטיקה או drainage",
        "acute cholecystitis – US + cholecystectomy; ללא Charcot triad",
        "acute pancreatitis – lipase גבוה; NPO ונוזלים IV ללא ERCP",
    ],
    166: [
        "colonoscopy – iron deficiency anemia בגיל >50 דורשת שלילת CRC/malignancy",
        "ברזל PO בלבד – אין צורך בחיפוש מקור דימום במבוגר עם אנמיה",
        "B12 injection – MCV נמוך מצביע תמיד על B12 ללא בירור GI",
        "אולטרסאונד כבד בלבד – מספיק לשלילת דימום GI occult",
    ],
    170: [
        "IBS – calprotectin שלילי מבדיל מ-IBD; אין דלקת אורגנית",
        "Crohn – calprotectin תמיד גבוה; transmural inflammation",
        "UC – bloody diarrhea חובה; calprotectin גבוה תמיד",
        "CRC – שכיח בגיל 28 אסימפטומטי עם calprotectin תקין",
    ],
    171: [
        "Plummer-Vinson – אנמיה, web בוושט, dysphagia; סיכון לסרטן וושט",
        "GERD – heartburn בלבד ללא אנמיה, web או glossitis",
        "Achalasia – bird-beak ב-barium; dysphagia לנוזלים ומוצקים",
        "IBS – calprotectin תקין; כאב בטן לסירוגין ללא אנמיה",
    ],
    172: [
        "ייצוב המודינמי, PPI IV במינון גבוה, גסטרוסקופיה דחופה תוך 12-24 שעות",
        "colonoscopy ראשונה ללא אנדוסקופיה עליונה ב-melena",
        "אנטיביוטיקה ל-H. pylori לפני resuscitation ו-PPI",
        "מעקב בלבד ללא אנדוסקופיה ב-melena יציב",
    ],
    174: [
        "hereditary hemochromatosis – therapeutic phlebotomy",
        "Wilson disease – copper chelation (penicillamine/trientine) + zinc",
        "acute hepatitis B – lamivudine או entecavir כטיפול מיידי",
        "iron deficiency – ברזל PO עם ferritin נמוך",
    ],
    175: [
        "IV corticosteroids (hydrocortisone/methylprednisolone) – ASUC protocol",
        "PPI PO בלבד ושחרור מיידי ללא סטרואידים IV",
        "5-ASA enema בלבד ל-ASUC עם חום ודימום",
        "colectomy מיידית ביום 1 ללא ניסיון סטרואידים IV",
    ],
    177: [
        "abdominal CT (pancreatic protocol) – חשד ל-pancreatic head cancer",
        "abdominal ultrasound בלבד – מספיק ל-staging של pancreatic cancer",
        "EGD – הבדיקה הראשונה לחשד לגידול לבלב",
        "colonoscopy – אינדיקציה ראשונה ל-jaundice וירידה במשקל",
    ],
    75: [
        "שלשול כרוני עם histology אבנורמלית (lymphocytic/collagenous) ו-colonoscopy תקין מקרוסקופית",
        "IBS – שלשול לסירוגין; calprotectin תקין; histology נורמלית ב-biopsy ללא collagen band",
        "UC – crypt abscesses, דימום רציף ב-colonoscopy; מעורבות mucosa/submucosa ללא skip lesions",
        "Crohn – transmural inflammation, skip lesions, granulomas ב-biopsy; לא collagenous colitis",
    ],
    64: [
        "Crohn – transmural, granulomas, skip lesions; UC – רירית/submucosa, crypt abscesses",
        "UC – transmural עם granulomas; Crohn – רירית בלבד רציפה ללא skip lesions",
        "שניהם מוגבלים לרירית בלבד ללא מעורבות submucosa, muscularis או serosa",
        "Crohn תמיד ב-colon בלבד; UC תמיד במעי דק בלבד ללא מעורבות קולונית",
    ],
    135: [
        "UC: mucosa/submucosa, רציף, crypt abscesses; Crohn: transmural, skip lesions, granulomas",
        "UC: transmural עם granulomas; Crohn: רירית בלבד רציפה ללא skip lesions או fistulas",
        "שניהם מוגבלים לרירית בלבד ללא מעורבות submucosa, muscularis או serosa",
        "Crohn תמיד ב-colon; UC תמיד במעי דק בלבד – אין overlap אנטומי או היסטולוגי",
    ],
    126: [
        "jaundice, coagulopathy, hypoalbuminemia/ascites, SBP, hepatic encephalopathy",
        "heartburn ו-regurgitation כתסמינים מובילים של decompensated cirrhosis",
        "bloody diarrhea, urgency ו-tenesmus כסימנים עיקריים של liver failure",
        "dysphagia לנוזלים ו-megaesophagus ב-barium – סימן עיקרי של cirrhosis",
    ],
    124: [
        "esophageal/gastric varices, splenomegaly, ascites, caput medusae, encephalopathy",
        "heartburn, regurgitation ו-dysphagia לנוזלים – סימני portal hypertension",
        "כאב RLQ, RLQ tenderness ו-anorexia עם leukocytosis – סימני portal HTN",
        "צהבת בלבד ללא ascites, varices, splenomegaly או שינויי hemodynamics",
    ],
    118: [
        "ויסות זרימת bile ו-pancreatic juice ל-duodenum; מניעת reflux לצינורות",
        "הפרשת gastrin מ-G cells והגברת HCl בגוף ואנטרום הקיבה",
        "ספיגת B12 ב-terminal ileum עם intrinsic factor מ-parietal cells",
        "עיכול מכני של פחמימות עם salivary amylase בפה לפני הגעה ל-duodenum",
    ],
    175: [
        "IV corticosteroids (hydrocortisone/methylprednisolone) – ASUC protocol",
        "PPI PO בלבד ושחרור מיידי ללא סטרואידים IV או מעקב בימים 3-5",
        "5-ASA enema בלבד ל-ASUC עם חום, tachycardia ו-≥6 bowel movements/יום",
        "colectomy מיידית ביום 1 ללא ניסיון סטרואידים IV או rescue anti-TNF",
    ],
    142: [
        "perforation, דימום post-polypectomy, כוויה, הפרעות אלקטרוליטים מה-prep",
        "תמיד ללא סיכונים – בדיקה בטוחה לחלוטין גם ללא bowel prep או INR",
        "רק כאב בטן קל חולף ללא דימום, perforation או הפרעות אלקטרוליטים",
        "סיכון יחיד: אלרגיה ל-latex של הצוות – ללא דימום או perforation אפשריים",
    ],
    39: [
        "urea breath test, stool antigen, biopsy עם histology/rapid urease",
        "anti-tTG serology בלבד לאבחון H. pylori ללא breath test או biopsy",
        "colonoscopy עם FIT לזיהוי H. pylori בקיבה ללא urea breath test",
        "serology ל-HAV (IgM anti-HAV) לאבחון גסטריטיס מ-H. pylori",
    ],
    133: [
        "עישון מעלה סיכון ל-Crohn; עשוי להגן ב-UC (החמרה אפשרית בהפסקה)",
        "עישון מפחית סיכון ל-Crohn ו-UC באותה מידה – אין פרדוקס",
        "עישון קשור רק ל-CRC ו-pancreatic cancer – לא ל-IBD",
        "עישון מגן מפני Crohn ומחמיר UC תמיד – ללא פרדוקס קליני",
    ],
    160: [
        "abdominal ultrasound – cholelithiasis/cholecystitis; antibiotics + cholecystectomy",
        "EGD – cholecystitis מאובחנת תמיד באנדוסקופיה עליונה; Murphy sign לא רלוונטי",
        "MRCP בלבד ללא US – הבדיקה הראשונה ב-RUQ pain עם חום ו-leukocytosis",
        "observation בלבד – כאב RUQ אחרי ארוחה שמנה עם חום תמיד עובר ללא טיפול",
    ],
    172: [
        "ייצוב המודינמי, PPI IV במינון גבוה, גסטרוסקופיה דחופה תוך 12-24 שעות",
        "colonoscopy ראשונה ללא אנדוסקופיה עליונה ב-melena – מקור עליון לא נבדק",
        "אנטיביוטיקה ל-H. pylori לפני resuscitation, PPI ו-EGD דחופה",
        "מעקב בלבד ללא אנדוסקופיה ב-melena יציב – PPI PO ללא EGD",
    ],
    43: [
        "גירוי הפרשת אנזימים לבלב, התכווצות כיס מרה, ספינcter of Oddi",
        "גירוי הפרשת HCl מ-parietal cells בגוף הקיבה לאחר ארוחה",
        "גירוי אינסולין מתאי β בלבלב – תגובה לגלוקוז בדם",
        "פריסטלטיקה וושטית בזמן בליעה ראשונית – לא קשור ל-CCK",
    ],
    145: [
        "מחלה גנטית AD; מאות פוליפים מגיל 10-12; כמעט 100% יפתחו CRC עד 40 ללא מניעה",
        "Lynch – MMR mutation; פוליפים מעטים; סרטן מעי גס בגיל 40-60; colonoscopy מגיל 20",
        "Peutz-Jeghers – כתמי פיגמנטציה בפה + פוליפים hamartomatous לאורך GI",
        "average-risk polyp בודד sporadic בגיל 60 – ללא APC mutation או סיכון גנטי",
    ],
    3: [
        "אפיתל שטוח רב-שכבתי (stratified squamous) – לא קרטיניזציה מלאה",
        "אפיתל עמודי חד-שכבתי (simple columnar) – כמו בקיבה וב-duodenum",
        "אפיתל גלנדולרי (glandular) – עם בלוטות הפרשה של mucus ו-enzymes",
        "אפיתל מעבר (transitional) – כמו בשלפוחית השתן; מאפשר מתיחה",
    ],
    25: [
        "ורידים מורחבים ב-submucosa distal בעקבות portal hypertension",
        "גידולים שפירים (papilloma) של הרירית הוושטית – לא קשור ל-portal HTN",
        "stenosis פיברוטית מ-GERD כרונית – היצרות מצלקת ללא varices",
        "achalasia – אי-מנוחה של LES; bird-beak ב-barium ללא varices",
    ],
    33: [
        "כאב epigastric שמחמיר באכילה (pain worsened by food)",
        "כאב שמוקל באכילה – כמו ב-duodenal ulcer (pain relieved by food)",
        "כאב לילי בלבד ללא קשר לאכילה – תמיד duodenal ulcer",
        "מצב אסימפטומטי תמיד עד perforation – ללא כאב epigastric",
    ],
    53: [
        "ascites, esophageal/gastric varices, splenomegaly, caput medusae",
        "heartburn, regurgitation ו-dysphagia לנוזלים – סימני portal hypertension",
        "כאב RLQ, RLQ tenderness ו-anorexia עם leukocytosis – סימני portal HTN",
        "צהבת בלבד ללא ascites, varices, splenomegaly או שינויי hemodynamics",
    ],
    72: [
        "arthritis, uveitis, erythema nodosum, pyoderma gangrenosum, PSC",
        "heartburn ו-regurgitation כתסמינים יחידים – EIM טיפוסי של IBD",
        "acute cholecystitis עם RLQ point tenderness – EIM של Crohn ו-UC",
        "Barrett esophagus כביטוי יחיד של IBD – ללא מעורבות מפרקים, עור או כבד",
    ],
    81: [
        "APC mutation – מאות-אלפי adenomatous polyps, CRC כמעט ודאי ללא colectomy",
        "Lynch syndrome עם MMR deficiency – polyp count נמוך; סרטן בגיל 40-60",
        "polyp אדנומטי בודד sporadic ללא גנטיקה – אין סיכון ל-FAP או CRC עד 40",
        "UC עם pancolitis ו-pseudopolyps – ללא APC mutation או polyposis",
    ],
    90: [
        "endoscopic retrograde cholangiopancreatography – דימות וטיפול בדרכי מרה/לבלב",
        "colonoscopy עם bowel prep – הדמיה של colon ללא cannulation של ampulla",
        "EGD סטנדרטי ללא injection contrast ל-bile או pancreatic ducts",
        "barium swallow – fluoroscopy של esophagus ללא endoscope או cannulation",
    ],
    111: [
        "דימום (hematemesis/melena), perforation, gastric outlet obstruction",
        "צהבת cholestatic, ascites ו-hepatic encephalopathy – סיבוכי PUD",
        "fistulas perianal, strictures ו-abscesses טרנסמורליים – סיבוכי PUD",
        "toxic megacolon, fulminant colitis ו-CRC מיידי – סיבוכי פצעת",
    ],
    117: [
        "חיבור המעי לדופן הבטן, מעבר כלי דם/לימפה/עצבים, תמיכה מבנית",
        "שכבת אפיתל עם microvilli לספיגת נוטריינטים – תפקיד enterocytes",
        "בלוטות הפרשה של digestive enzymes ל-lumen – כמו Brunner glands",
        "יצירת bile salts ו-enterohepatic circulation – תפקיד כבד ב-mesentery",
    ],
    139: [
        "≥3 קרובי משפחה עם סרטן קשור, ≥2 דורות, ≥1 לפני גיל 50",
        "polyp אחד ב-colonoscopy כקריטריון יחיד ל-Lynch – ללא דורות או גיל",
        "רק גיל מעל 70 עם CRC בודד – מספיק לאבחנת Lynch syndrome",
        "רק CRC ללא סרטנים אקסטרא-קוליים (רחם, שחלות, לבלב) – Amsterdam",
    ],
    147: [
        "מטבוליזם, bile, detoxification, חלבונים, אגירה (glycogen, ADEK), חיסון (Kupffer)",
        "ספיגת נוטריינטים – כמו enterocytes במעי דק עם villi ו-microvilli",
        "ייצור bile בלבד – ללא מטבוליזם, detoxification או סינתזת חלבונים",
        "הפרשת insulin בלבד – תפקיד endocrine בלעדי ללא parenchymal function",
    ],
    51: [
        "מטבוליזם, detoxification, סינתזת bile וחלבונים (albumin, clotting factors)",
        "הפרשת אינסולין ו-glucagon, ספיגת B12 וסינתזת intrinsic factor",
        "פריסטלטיקה מעייתית, הפרשת gastrin וספיגת גלוקוז במעי הדק",
        "אחסון glycogen בלבד – ללא תפקיד ב-bilirubin, bile או חלבוני דם",
    ],
    179: [
        "Plummer-Vinson syndrome – iron deficiency + esophageal web; rule out malignancy",
        "achalasia – dysphagia לנוזלים ומוצקים; MCV בדרך כלל נורמלי; bird-beak",
        "GERD erosive – heartburn בלבד; glossitis ו-anemia לא קשורים ל-Plummer-Vinson",
        "acute viral hepatitis – macrocytic anemia ו-esophageal web נדירים; IgM anti-HAV",
    ],
    166: [
        "colonoscopy – iron deficiency anemia בגיל >50 דורשת שלילת CRC/malignancy",
        "ברזל PO בלבד – אין צורך בחיפוש מקור דימום במבוגר עם אנמיה מחוסר ברזל",
        "B12 injection – MCV נמוך מצביע תמיד על B12 ללא בירור GI occult bleeding",
        "אולטרסאונד כבד בלבד – מספיק לשלילת דימום GI occult ו-CRC במבוגר",
    ],
    161: [
        "acute cholangitis (Charcot triad) – IV antibiotics + biliary drainage (ERCP)",
        "biliary colic – כאב חולף ללא חום; ללא אנטיביוטיקה או biliary drainage",
        "acute cholecystitis – US + cholecystectomy; ללא Charcot triad או jaundice",
        "acute pancreatitis – lipase גבוה; NPO ונוזלים IV ללא ERCP drainage",
    ],
    177: [
        "abdominal CT (pancreatic protocol) – חשד ל-pancreatic head cancer",
        "abdominal ultrasound בלבד – מספיק ל-staging של pancreatic head cancer",
        "EGD – הבדיקה הראשונה לחשד לגידול לבלב עם jaundice obstructive",
        "colonoscopy – אינדיקציה ראשונה ל-jaundice, weight loss ו-elevated bilirubin",
    ],
    165: [
        "NAFLD/NASH – שומן בכבד קשור למטבוליזם; fibrosis assessment",
        "alcoholic hepatitis – תמיד עם ALT נורמלי וללא steatosis ב-US",
        "hemochromatosis – אבחנה ראשונה ב-US steatosis ללא ferritin או saturation",
        "acute viral hepatitis – תמיד עם ALT <100 וללא קשר ל-obesity/diabetes",
    ],
    168: [
        "colonoscopy מגיל 40 או 10 שנים לפני המקרה המוקדם ביותר במשפחה",
        "סקר ממוצע מגיל 50 בלבד – משפחתיות עם CRC מוקדם לא משנה",
        "FIT שנתי בלבד – מספיק ב-high-risk family history עם 2 קרובים עם CRC",
        "אין צורך בסקר אם אסימפטומטי – גם עם first-degree relative CRC <50",
    ],
    70: [
        "corticosteroids, immunomodulators (azathioprine) ו-biologics (infliximab)",
        "PPI במינון מלא כטיפול יחיד ל-IBD moderate-severe ללא immunomodulators",
        "antibiotics PO בלבד ל-Crohn ו-UC ללא biologics, סטרואידים או azathioprine",
        "colectomy מיידית לכל מטופל עם IBD ללא ניסיון טיפול רפואי או biologics",
    ],
    97: [
        "מחלה גנטית נדירה – כתמי פיגמנטציה בשפתיים ופה + פוליפים במעי; מעלה סיכון לסרטן",
        "FAP – מאות פוליפים מגיל 10-12; APC mutation; כמעט 100% CRC עד 40 ללא colectomy",
        "Lynch – MMR mutation; סרטן מעי גס בגיל 40-60; פוליפים מעטים יחסית",
        "average-risk CRC screening מגיל 50 עם FIT – ללא פיגמנטציה או פוליפים hamartomatous",
    ],
    178: [
        "גסטרוסקופיה דחופה לאבחון וטיפול (hemostasis) + PPI IV",
        "PPI PO בלבד ללא endoscopy בדימום פעיל מכיב ב-duodenal bulb",
        "colonoscopy דחופה בלבד ללא EGD ב-UGIB עם דימום פעיל מכיב",
        "מעקב שבועי ללא התערבות בדימום פעיל – PPI PO ללא hemostasis",
    ],
}


def strip_generic_padding(text: str) -> str:
    for suffix in STRIP_SUFFIXES:
        text = text.replace(suffix, "")
    return text.strip()


def apply_substantive(q: dict) -> bool:
    qid = q["id"]
    if qid in SUBSTANTIVE:
        q["options"] = SUBSTANTIVE[qid]
        q["correctIndex"] = 0
        return True
    changed = False
    for i, opt in enumerate(q["options"]):
        cleaned = strip_generic_padding(opt)
        if cleaned != opt:
            q["options"][i] = cleaned
            changed = True
    return changed


def main():
    files = [
        "improved-1-50.json",
        "improved-51-100.json",
        "improved-101-150.json",
        "clinical-vignettes.json",
    ]
    stats = {"substantive": 0, "stripped": 0}
    for fname in files:
        batch = json.loads((BASE / fname).read_text(encoding="utf-8"))
        for q in batch:
            if apply_substantive(q):
                stats["substantive"] += 1
            elif any(strip_generic_padding(o) != o for o in q["options"]):
                stats["stripped"] += 1
        (BASE / fname).write_text(
            json.dumps(batch, ensure_ascii=False, indent=2) + "\n",
            encoding="utf-8",
        )
    print("balance-distractors:", stats)


if __name__ == "__main__":
    main()
