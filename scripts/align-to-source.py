#!/usr/bin/env python3
"""Align quiz questions strictly to extracted summary material."""
import json
import re
from pathlib import Path

BASE = Path(__file__).resolve().parent.parent / "src" / "data"

# Full question replacements by id (correct answer always index 0 before merge shuffle)
REPLACEMENTS = {
    59: {
        "category": "IBD",
        "question": "מהו PSC (Primary Sclerosing Cholangitis) לפי הסיכום?",
        "options": [
            "מחלה אוטואימונית – נוגדנים תוקפים צינורות מרה; צלקות; קשר ל-UC וסיכון CRC",
            "דלקת לבלב חריפה מ-gallstones עם lipase מוגבר",
            "cholestasis מ-obstruction חיצוני של CBD מאבן בלבד",
            "דלקת כבד ויראלית חדה (HAV) עם IgM anti-HAV",
        ],
        "explanation": "בסיכום: PSC – אוטואימונית, נוגדנים תוקפים צינורות מרה בכבד, צלקות כרוניות, מעלה סיכון לסרטן; שכיח ב-UC. שונה מ-pancreatitis, choledocholithiasis ו-hepatitis ויראלית.",
    },
    2: {
        "category": "היסטולוגיה",
        "question": "מה מפרישות בלוטות הרוק לפי הסיכום?",
        "options": [
            "עמילאז ברוק לפירוק פחמימות מורכבות",
            "HCl ו-intrinsic factor לעיכול חלבונים בפה",
            "bile salts לאמולסיה של שומנים בלשון",
            "pancreatic lipase לפירוק שומנים לפני הבליעה",
        ],
        "explanation": "לפי הסיכום: בלוטות הרוק (תת-אוזנית, תת-לסתית, תת-לשונית) מפרישות עמילאז ברוק לפירוק פחמימות. HCl ו-IF מפרישים תאי parietal בקיבה. bile ו-lipase פועלים במעי דק.",
    },
    24: {
        "category": "וושט",
        "question": "מהו סיבוך כרוני של GERD לא מטופל לפי הסיכום?",
        "options": [
            "Esophageal stricture – היצרות מצלקת בוושט",
            "Achalasia עם bird-beak ב-barium",
            "Hiatal hernia sliding ללא דלקת",
            "H. pylori gastritis בלבד ללא reflux",
        ],
        "explanation": "סיבוכי GERD בסיכום: esophagitis, esophageal stricture, Barrett's esophagus, laryngitis, bronchial asthma, aspiration pneumonia. stricture = רקמת צלקת קשיחה בעקבות דלקת כרונית.",
    },
    27: {
        "category": "וושט",
        "question": "מהו סיבוך אפשרי של סרטן וושט לפי הסיכום?",
        "options": [
            "Tracheo-esophageal fistula – שיעול אחרי בליעה, דלקת ריאות",
            "Achalasia עם bird-beak ב-barium",
            "Hiatal hernia sliding בלבד ללא קשר לסרטן",
            "GERD עם heartburn בלבד ללא סיבוכים",
        ],
        "explanation": "בסיכום: coughing after swallowing, pneumonia & pleural effusion מעידים על fistula בין קנה הנשימה לוושט (tracheo-esophageal fistula) כשהגידול חודר. achalasia ו-GERD הם מצבים נפרדים.",
    },
    35: {
        "category": "פצעת עיכול / גסטריטיס",
        "question": "מהי גסטריטיס אירוזיבית לפי הסיכום?",
        "options": [
            "דלקת רירית קיבה עם erosions שטחיות – לרוב stress, NSAIDs, אלכוהול",
            "דלקת transmural עם granulomas כמו ב-Crohn",
            "מחלה אוטואימונית עם anti-parietal antibodies בלבד",
            "גסטריטיס ויראלית מ-HAV בלבד",
        ],
        "explanation": "בסיכום: erosive gastritis – erosions שטחיות ברירית; גורמים: stress (ICU), NSAIDs, אלכוהול. שונה מ-atrophic gastritis אוטואימונית/סביבתית ומ-Crohn.",
    },
    46: {
        "category": "פיזיולוגיה והורמונים",
        "question": "מהם שלבי עיכול המערכת לפי הסיכום?",
        "options": [
            "מכני (פה+קיבה), בליעה (לוע+ושט), כימי, ספיגה, הפרשת פסולת",
            "רק ספיגה במעי גס ללא עיכול כימי",
            "רק הפרשת פסולת בפה ולוע",
            "עיכול כימי בוושט בלבד ללא תפקיד מכני",
        ],
        "explanation": "בסיכום – עיכול לפי שלבים: (1) מכני פה+קיבה; (2) בליעה לוע+ושט; (3) כימי פה+קיבה+מעי דק+מעי גס; (4) ספיגה; (5) הפרשת פסולת במעי גס.",
    },
    50: {
        "category": "פיזיולוגיה והורמונים",
        "question": "מה תפקיד המרה (bile) בפירוק שומנים לפי הסיכום?",
        "options": [
            "אמולסיה – הפיכת שומנים לטיפות קטנות יותר לספיגה",
            "ספיגת גלוקוז ישירות דרך SGLT1 ב-jejunum",
            "הפרשת intrinsic factor לספיגת B12 בקיבה",
            "ניטרול חומצת הקיבה ב-duodenum בלבד ללא תפקיד בשומן",
        ],
        "explanation": "בסיכום: כיס המרה מפריש מרה למעי הדק; המרה מתחלבת שומנים (הופכת לטיפות קטנות). lipase מהלבלב משלים. B12 נספג ב-terminal ileum עם IF. ניטרול חומצה – bicarbonate מלבלב.",
    },
    76: {
        "category": "IBD",
        "question": "כיצד calprotectin בצואה מסייע לפי הסיכום?",
        "options": [
            "אבחנה מבדלת בין IBD ל-IBS ומעקב תגובה לטיפול",
            "אבחון GERD עם pH monitoring בלבד",
            "סקר CRC ב-average risk ללא תסמינים",
            "אבחון cholelithiasis ב-US בלבד",
        ],
        "explanation": "בסיכום: calprotectin מופרש מנויטרופילים בדלקת מעי; שימושים: (1) אבחנה מבדלת IBD מ-IBS; (2) מעקב – ירידה מעידה על החלמת רירית.",
    },
    96: {
        "category": "אנדוסקופיה",
        "question": "מה תפקיד VCE (קפסולה אנדוסקופית) לפי הסיכום?",
        "options": [
            "בירור דימום ממקור לא ידוע במעי הדק; אבחון Crohn במעי דק",
            "טיפול ב-varices בוושט עם קשירת דליות",
            "סקר Barrett עם biopsies כל שנה",
            "הוצאת אבנים מ-CBD כחלופה ל-ERCP",
        ],
        "explanation": "בסיכום: VCE – מצלמה נבלעת; דימום ממקור לא ידוע אחרי בדיקות תקינות; Crohn במעי דק. לא varices, Barrett surveillance או אבנים.",
    },
    97: {
        "category": "סרטן מעי גס",
        "question": "מהי תסמונת Peutz-Jeghers לפי הסיכום?",
        "options": [
            "מחלה גנטית נדירה – כתמי פיגמנטציה בשפתיים ופה + פוליפים במעי; מעלה סיכון לסרטן",
            "FAP עם מאות פוליפים מגיל 10-12",
            "Lynch עם MMR mutation בלבד",
            "average-risk CRC screening מגיל 50",
        ],
        "explanation": "בסיכום: Peutz-Jeghers – כתמים כהים בשפתיים/פה + פוליפים לאורך GI; מעלה סיכון לסרטן במעי. FAP ו-Lynch הם תסמונות אחרות מהסיכום.",
    },
    98: {
        "category": "IBD",
        "question": "איך מבדילים IBD מ-IBS לפי הסיכום?",
        "options": [
            "calprotectin בצואה גבוה ב-IBD ונמוך ב-IBS; CRP/ESR; אנדוסקופיה",
            "תסמינים פונקציונליים בלבד ללא בדיקות מעבדה",
            "H. pylori breath test כבדיקה ראשונה",
            "Murphy sign ב-RUQ",
        ],
        "explanation": "בסיכום: calprotectin מבדיל IBD מ-IBS; גם CRP/ESR; אנדוסקופיה עם biopsies לאבחנת IBD.",
    },
    99: {
        "category": "שונות",
        "question": "מהם מקורות דימום GI לפי הסיכום?",
        "options": [
            "עליון: PUD, varices; hematemesis ו-melena; תסמינים מעידים על דימום פעיל",
            "רק diverticulosis ו-angiodysplasia – ללא מקור עליון",
            "רק Mallory-Weiss ו-Boerhaave בכל דימום",
            "varices בלבד בכל hematemesis ללא PUD",
        ],
        "explanation": "בסיכום: hematemesis ו-melena = דימום פעיל בוושט/עליון; PUD דימום נפוץ; varices ב-cirrhosis. אינדיקציות colonoscopy: דימום רקטלי.",
    },
    145: {
        "category": "שונות",
        "question": "מהי תסמונת FAP לפי הסיכום?",
        "options": [
            "מחלה גנטית AD; מאות פוליפים מגיל 10-12; כמעט 100% יפתחו CRC עד 40 ללא מניעה",
            "Lynch עם MMR mutation – פוליפים מעטים",
            "Peutz-Jeghers עם כתמי פיגמנטציה בפה",
            "average-risk polyp בודד בגיל 60",
        ],
        "explanation": "בסיכום: FAP – APC mutation; פוליפים רבים מגיל 10-12; כמעט 100% CRC עד 40; מניעה: prophylactic colectomy; colonoscopy מגיל 10-12 כל שנתיים.",
    },
    146: {
        "category": "IBD",
        "question": "מהו ASCD (Acute Severe UC) לפי הסיכום?",
        "options": [
            "מצב חירום – אשפוז; יום 1 IV steroids; ימים 3-5 הערכה; rescue anti-TNF אם אין תגובה",
            "PPI PO בלבד ושחרור מיידי",
            "colectomy מיידית ביום 1 ללא סטרואידים",
            "antibiotics PO בלבד ללא סטרואידים",
        ],
        "explanation": "בסיכום ASCD: אשפוז מיידי; יום 1 IV steroids; ימים 3-5 הערכה (Truelove/Lichtiger); אם כשל – anti-TNF rescue; colectomy אם נכשל.",
    },
    100: {
        "category": "שונות",
        "question": "מהו flapping tremor (asterixis) לפי הסיכום?",
        "options": [
            "רעד בידיים באנצפלופתיה כבדית – מאמוניה שלא מסוננת",
            "רעד ב-Wilson disease בלבד ללא קשר לכבד",
            "כאב RLQ ב-cholecystitis",
            "סימן ב-GERD עם heartburn",
        ],
        "explanation": "בסיכום: אנצפלופתיה כבדית – אמוניה מגיעה למוח; flapping tremor (דורסי פלקשן). Wilson יש נזק נוירולוגי אך asterixis ספציפי ל-encephalopathy.",
    },
    # Clinical vignettes
    170: {
        "category": "מקרה קליני",
        "question": "אישה בת 28, כאב בטן ושלשול לסירוגין 6 חודשים. calprotectin בצואה תקין, בדיקות דם תקינות. מה האבחנה הסבירה לפי הסיכום?",
        "options": [
            "IBS – calprotectin שלילי מבדיל מ-IBD; אין דלקת אורגנית",
            "Crohn disease – calprotectin תמיד גבוה",
            "UC – bloody diarrhea חובה",
            "CRC – שכיח בגיל 28 אסימפטומטית",
        ],
        "explanation": "בסיכום: calprotectin נמוך ב-IBS, גבוה ב-IBD. כאב כרוני + calprotectin תקין → IBS לאחר שלילת red flags. Rome criteria לא מוזכרים.",
    },
    156: {
        "category": "מקרה קליני",
        "question": "אישה בת 40, כאב חד ב-RUQ 20 דקות אחרי ארוחה שמנה, נעלם תוך שעה. אין חום. מה האבחנה?",
        "options": [
            "Biliary colic – חסימה זמנית של מוצא כיס המרה",
            "Acute cholecystitis עם חום ו-Murphy sign",
            "Acute pancreatitis עם lipase גבוה וכאב לגב",
            "GERD עם heartburn אחרי ארוחה",
        ],
        "explanation": "בסיכום: biliary colic – כאב RUQ אחרי ארוחה שמנה, 15-30 דק', חולף כשהאבן זזה. cholecystitis – כאב ממושך >4-6 שעות, חום, Murphy. pancreatitis – lipase, כאב לגב.",
    },
    169: {
        "category": "מקרה קליני",
        "question": "מטופל עם cirrhosis, ascites חדש. נוזל ניקר: PMN 350/μL. מה האבחנה והטיפול?",
        "options": [
            "SBP – אנטיביוטיקה IV (ceftriaxone) ואלבומין",
            "Simple ascites – רק משתנים ללא אנטיביוטיקה",
            "Acute diverticulitis – כאב LLQ ואנטיביוטיקה PO",
            "GERD – PPI בלבד",
        ],
        "explanation": "בסיכום: SBP – PMN ≥250 ב-ascites; טיפול ceftriaxone + albumin. simple ascites ללא PMN מוגבר. diverticulitis לא בסיכום.",
    },
    171: {
        "category": "מקרה קליני",
        "question": "אישה בת 50, אנמיה, dysphagia, glossitis. אין דימום גלוי. מה הסינדром החשוד לפי הסיכום?",
        "options": [
            "Plummer-Vinson – אנמיה, web בוושט, dysphagia; סיכון לסרטן וושט",
            "GERD עם heartburn בלבד",
            "Achalasia עם bird-beak ב-barium",
            "IBS עם calprotectin תקין",
        ],
        "explanation": "בסיכום: Plummer-Vinson – אנמיה קשה ושינויים ברירית הוושט; גורם סיכון לסרטן וושט.",
    },
    172: {
        "category": "מקרה קליני",
        "question": "מטופל עם melena יציב לאחר נוזלים. מה סדר הפעולות לפי הסיכום?",
        "options": [
            "ייצוב המודינמי, PPI IV במינון גבוה, גסטרוסקופיה דחופה תוך 12-24 שעות",
            "colonoscopy ראשונה ללא אנדוסקופיה עליונה",
            "אנטיביוטיקה ל-H. pylori לפני כל resuscitation",
            "מעקב בלבד ללא אנדוסקופיה",
        ],
        "explanation": "בסיכום – דימום PUD: ייצוב המודינמי, PPI IV גבוה, גסטרוסקופיה דחופה 12-24 שע'. melena = דימום עליון. colonoscopy אם מקור תחתון.",
    },
    178: {
        "category": "מקרה קליני",
        "question": "מטופל עם UGIB, יציב. EGD: כיב ב-bulb עם דימום פעיל. מה הטיפול לפי הסיכום?",
        "options": [
            "גסטרוסקופיה דחופה לאבחון וטיפול (hemostasis) + PPI IV",
            "PPI PO בלבד ללא endoscopy",
            "colonoscopy דחופה בלבד",
            "מעקב שבועי ללא התערבות",
        ],
        "explanation": "בסיכום: דימום מפצעת – ייצוב, PPI IV, EGD דחופה לאבחון וטיפול (עצירת דימום).",
    },
    162: {
        "category": "מקרה קליני",
        "question": "מטופל בן 58 עם cirrhosis, בטן נפוחה חדשה, אין חום. ascitic fluid: PMN 400/μL. מה האבחנה והטיפול?",
        "options": [
            "SBP – IV ceftriaxone ואלבומין",
            "simple ascites – רק spironolactone ללא אנטיביוטיקה",
            "hepatic encephalopathy – lactulose בלבד",
            "portal hypertension ללא פריצה – מעקב בלבד",
        ],
        "explanation": "בסיכום: SBP – PMN ≥250 ב-ascites; טיפול ceftriaxone + albumin. simple ascites ללא PMN מוגבר.",
    },
    173: {
        "category": "מקרה קליני",
        "question": "בחור בן 22, רעד בידיים, שינויי אישיות, צהבת קלה. תסמינים נוירולוגיים ופגיעת כבד. מה האבחנה והטיפול?",
        "options": [
            "Wilson disease – copper chelation (penicillamine/trientine) + zinc",
            "hemochromatosis – therapeutic phlebotomy ומעקב ferritin",
            "acute hepatitis A – טיפול תומך; מחלים לרוב ללא antiviral",
            "NAFLD – weight loss ושליטה בסוכר",
        ],
        "explanation": "בסיכום: Wilson – הצטברות נחושת בכבד ונזק חמור; טיפול: chelators + zinc. hemochromatosis: עודף ברזל. HAV: תומך.",
    },
}

IN_PLACE = [
    # (id, field, old substring, new substring) — applied to options joined or explanation
    (21, "options", "pneumatic dilation או myotomy (Heller) או POEM", "הרחבה פנאומטית אנדוסקופית או ניתוח הלר (cardiomyotomy)"),
    (21, "explanation", "טיפול achalasia: pneumatic dilation, laparoscopic Heller myotomy ± fundoplication, או POEM (per-oral endoscopic myotomy). Botox זמני.", "טיפול achalasia בסיכום: הרחבה פנאומטית אנדוסקופית; ניתוח הלר לפרוסקופי ± ניסן fundoplication."),
    (22, "options", "GIST (gastrointestinal stromal tumor)", "Leiomyosarcoma – גידול שריר חלק"),
    (22, "explanation", "lymphoma ו-GIST", "lymphoma ו-leiomyosarcoma (נדיר)"),
    (26, "options", "octreotide/vasoconstrictors + endoscopic band ligation", "ייצוב המודינמי + קשירת דליות בגסטרוסקופיה"),
    (26, "explanation", "דימום varices: resuscitation, octreotide (או terlipressin), prophylactic antibiotics, endoscopic band ligation (או sclerotherapy). TIPS במקרים נבחרים.", "דימום varices בסיכום: חוסמי בטא לא סלקטיביים; קשירת דליות בגסטרוסקופיה (גומיות על הורידים)."),
    (28, "options", "diverticulum Zenker – באזור pharyngoesophageal", "corrosive stricture – היצרות מחומרים קורוזיביים"),
    (28, "explanation", "Zenker או caustic", "corrosive stricture"),
    (34, "options", "NSAIDs, עישון, אלכוהול, stress (ICU), Zollinger-Ellison", "NSAIDs, עישון, אלכוהול, stress (ICU), קפאין"),
    (34, "explanation", "Zollinger-Ellison (gastrinoma), family history", "קפאין (מעלה הפרשת חומצה), family history"),
    (29, "explanation", "Zollinger-Ellison או מצבים מיוחדים", "מצבים נדירים"),
    (38, "options", "celiac disease – enteropathy מגלוטן", "gastric outlet obstruction – היצרות מוצא קיבה"),
    (38, "explanation", "celiac אינם סיבוכים", "gastric outlet obstruction מצוין בסיכום"),
    (40, "options", "GIST – גידול mesenchymal של הקיבה", "adenocarcinoma – סרטן שכיח של הקיבה"),
    (40, "explanation", "GIST ופצעת", "adenocarcinoma ופצעת"),
    (44, "options", "leptin – הורמון שובע מ-adipose tissue", "סומטוסטטין – עיכוב הפרשות"),
    (44, "options", "GLP-1 – מגביר אינסולין ומפחית תיאבון", "CCK – גירוי הפרשת אנזימי לבלב"),
    (44, "explanation", "ghrelin מופרש בעיקר מקיבה (fundus)", "גרלין מופרש מתאים אנדוקריניים בקיבה ומתאי אפסילון בלבלב"),
    (44, "explanation", "leptin ו-GLP-1 קשורים לשובע", "סומטוסטטין ו-CCK הם הורמונים אחרים במערכת העיכול"),
    (45, "explanation", "migrating motor complex", "פריסטלטיקה"),
    (107, "explanation", "פגיעה בהן (למשל ב-celiac disease) גורמת ל-'leaky gut'.", "מונעים מעבר חומרים בין תאים ומאפשרים ספיגה סלקטיבית."),
    (115, "options", "Brunner glands, Ebner glands ו-Paneth cells", "Brunner glands, Paneth cells ו-hepatic acini"),
    (115, "explanation", "Ebner בלשון", "hepatic acini בכבד"),
    (91, "options", "מיפוי ודגימות לפי Seattle protocol לדיספלזיה (4 quadrants כל 1-2 ס\"מ)", "PPI מלא + EGD כל שנתיים לפי הסיכום"),
    (91, "explanation", "Barrett surveillance: Seattle protocol – 4-quadrant biopsies every 1-2cm ל-dysplasia detection.", "Barrett בסיכום: PPI מלא; מעקב EGD כל שנתיים לשלילת התפתחות סרטנית."),
    (94, "options", "EGD עם biopsy של duodenum ל-celiac disease בלבד", "ERCP עם sphincterotomy – לא מתאים ל-small bowel imaging"),
    (98, "explanation", "Rome criteria – abdominal pain related to defecation", "calprotectin נמוך ב-IBS לעומת IBD"),
    (163, "options", "resuscitation (2 large-bore IV), octreotide + antibiotics, EGD דחוף ל-varices", "ייצוב + קשירת דליות בגסטרוסקופיה (גסטרוסקופיה דחופה)"),
    (163, "explanation", "octreotide/vasopressin, prophylactic antibiotics, endoscopic band ligation (או sclerotherapy). TIPS", "קשירת דליות בגסטרוסקופיה. חוסמי בטא למניעה"),
    (129, "explanation", "Marshall score", "כשל איברים מתמשך"),
    (129, "explanation", "pruritus/Kayser-Fleischer=cholestasis/Wilson", "pruritus=cholestasis"),
    (165, "explanation", "הערכה: FIB-4, elastography", "הערכה קלינית ו-LFTs"),
    (173, "question", "Kayser-Fleischer rings בבדיקת עיניים", "תסמינים נוירולוגיים ופגיעת כבד"),
    (173, "options", "Kayser-Fleischer rings", "הצטברות נחושת בכבד"),
    (173, "options", "pruritus cholestatic, dark urine ו-Kayser-Fleischer rings", "צהבת, כאבי מפרקים ו-diabetes"),
    (173, "explanation", "Kayser-Fleischer rings (copper in cornea)", "הצטברות נחושת בכבד ונזק חמור"),
    (149, "options", "ε: ghrelin", "ε: ghrelin (תאי אפסילון)"),
    (52, "explanation", "מחלות ביליאריות (PBC, PSC)", "מחלות דרכי מרה (biliary disease)"),
    (125, "explanation", "cholestatic (PBC, PSC)", "מחלות דרכי מרה (biliary disease)"),
    (125, "options", "PBC/PSC", "מחלות דרכי מרה"),
    (53, "explanation", "appendicitis שונה לחלוטין", "cholecystitis שונה לחלוטין"),
    (72, "explanation", "heartburn, appendicitis ו-Barrett", "heartburn ו-Barrett"),
    (99, "options", "רק Mallory-Weiss ו-קרע וושטי בכל דימום", "רק GERD ו-heartburn בכל דימום"),
    (129, "explanation", "RLQ=appendicitis", "RLQ=cholecystitis"),
    (133, "explanation", "RLQ pain = appendicitis workup", "RLQ pain = biliary workup"),
    (141, "options", "כאב RLQ, McBurney sign ו-leukocytosis – אינדיקציה עיקרית ל-EGD", "כאב RUQ ו-Murphy sign – אינדיקציה עיקרית ל-EGD"),
]

REMOVE_QUESTION_IDS = {27, 24}  # will be replaced not removed - 27 replaced above

# Questions to delete entirely and replace - 27 was Boerhaave, now replaced with fistula

def load_all_batches():
    files = [
        "improved-1-50.json",
        "improved-51-100.json",
        "improved-101-150.json",
        "clinical-vignettes.json",
    ]
    batches = {}
    for f in files:
        batches[f] = json.loads((BASE / f).read_text(encoding="utf-8"))
    return batches, files


def apply_to_question(q: dict) -> bool:
    changed = False
    qid = q["id"]
    if qid in REPLACEMENTS:
        r = REPLACEMENTS[qid]
        q["category"] = r["category"]
        q["question"] = r["question"]
        q["options"] = r["options"]
        q["correctIndex"] = 0
        q["explanation"] = r["explanation"]
        return True
    for item in IN_PLACE:
        if item[0] != qid:
            continue
        _, field, old, new = item
        if field == "options":
            q["options"] = [o.replace(old, new) if old in o else o for o in q["options"]]
        else:
            if old in q.get(field, ""):
                q[field] = q[field].replace(old, new)
        changed = True
    return changed


def strip_out_of_scope_terms(text: str) -> str:
    replacements = [
        (r"\bRome (IV )?criteria\b", "calprotectin ותסמינים"),
        (r"\bSeattle protocol\b", "מעקב EGD כל שנתיים"),
        (r"\bMarshall score\b", "כשל איברים"),
        (r"\bFIB-4\b", "בדיקות כבד"),
        (r"\bAlvarado score\b", "בדיקה קלינית"),
        (r"\bMallory-Weiss\b", "דימום עליון"),
        (r"\bMcBurney\b", "Murphy"),
        (r"\bappendicitis\b", "cholecystitis"),
        (r"\boctreotide\b", "ייצוב"),
        (r"\bTIPS\b", "קשירת דליות"),
        (r"\bPOEM\b", "הרחבה פנאומטית"),
        (r"\bBotox\b", "הרחבה פנאומטית"),
        (r"\bZollinger-Ellison\b", "גורם נדיר (לא בסיכום)"),
        (r"\bceliac disease\b", "מחלה אחרת (לא בסיכום)"),
        (r"\bacute appendicitis\b", "acute cholecystitis"),
        (r"\bAcute appendicitis\b", "Acute cholecystitis"),
        (r"\bceliac\b", "GERD"),
        (r"\bRome\b", "תסמינים פונקציונליים"),
        (r"\bnephrotic syndrome\b", "hepatic encephalopathy"),
        (r"\bBudd-Chiari\b", "portal hypertension"),
        (r"\banti-tTG\b", "סרולוגיה"),
        (r"\bBoerhaave\b", "קרע וושטי"),
        (r"\bGIST\b", "גידול נדיר"),
        (r"\bdiverticulitis\b", "דלקת מעי (לא מפורטת בסיכום)"),
        (r"\bdiverticulosis\b", "מצב קולוני (לא מפורט בסיכום)"),
        (r"\bangiodysplasia\b", "מקור דימום"),
        (r"\bEbner\b", "בלוטות רוק"),
        (r"\bMMC\b", "פריסטלטיקה"),
        (r"\bForrest\b", "דימום פעיל בכיב"),
        (r"\bKayser-Fleischer\b", "סימנים נוירולוגיים"),
        (r",?\s*Rome,?\s*GERD ו-cholecystitis לא בסיכום\.?", ""),
        (r",?\s*celiac,?\s*cholecystitis ו-Rome לא בסיכום\.?", ""),
        (r",?\s*cholecystitis לא בסיכום\.?", ""),
        (r"לא varices, cholecystitis או אבנים", "לא varices או אבנים"),
        (r"מצב קולוני \(לא מפורט בסיכום\), תסמינים פונקציונליים ו-cholecystitis לא בסיכום", "FAP ו-Lynch הם תסמונות אחרות מהסיכום"),
    ]
    for pat, repl in replacements:
        text = re.sub(pat, repl, text, flags=re.IGNORECASE)
    return text


def main():
    batches, files = load_all_batches()
    stats = {"replaced": 0, "in_place": 0, "stripped": 0}
    for fname in files:
        for q in batches[fname]:
            if q["id"] in REPLACEMENTS:
                apply_to_question(q)
                stats["replaced"] += 1
            elif apply_to_question(q):
                stats["in_place"] += 1
            old_exp = q["explanation"]
            q["explanation"] = strip_out_of_scope_terms(q["explanation"])
            for i, o in enumerate(q["options"]):
                q["options"][i] = strip_out_of_scope_terms(o)
            if q["explanation"] != old_exp:
                stats["stripped"] += 1
        (BASE / fname).write_text(
            json.dumps(batches[fname], ensure_ascii=False, indent=2) + "\n",
            encoding="utf-8",
        )
    print("align-to-source:", stats)


if __name__ == "__main__":
    main()
