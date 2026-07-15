export interface Question {
  id: number;
  category: string;
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
}

export const categories: string[] = [
  "היסטולוגיה",
  "וושט",
  "פצעת עיכול / גסטריטיס",
  "פיזיולוגיה והורמונים",
  "כבד / לבלב / מערכת מרה",
  "IBD",
  "סרטן מעי גס",
  "אנדוסקופיה",
  "שונות",
  "מקרה קליני",
];

export const questions: Question[] = [

  {
    id: 1,
    category: "היסטולוגיה",
    question: "איזו שכבה של דופן מעי מכילה את plexus submucosus (Meissner)?",
    options: [
      "רירית (mucosa) – כוללת epithelium ו-lamina propria",
      "תת-רירית (submucosa) – עם כלי דם, לימפה ורשת עצבים",
      "muscularis propria – בין שכבות השריר האורכי והמעגלי",
      "serosa / adventitia – השכבה החיצונית של דופן המעי",
    ],
    correctIndex: 1,
    explanation:
      "plexus submucosus (Meissner) ממוקם בתת-רירית ושולט בעיקר בזרימת הדם, ברירית ובלוטות. plexus myenteric (Auerbach) ממוקם בין שכבות השריר של muscularis propria ושולט בעיקר בפריסטלטיקה.",
  },
  {
    id: 2,
    category: "היסטולוגיה",
    question: "מה מפרישות בלוטות הרוק לפי הסיכום?",
    options: [
      "עמילאז ברוק לפירוק פחמימות מורכבות",
      "bile salts לאמולסיה של שומנים בלשון",
      "HCl ו-intrinsic factor לעיכול חלבונים בפה",
      "pancreatic lipase לפירוק שומנים לפני הבליעה",
    ],
    correctIndex: 0,
    explanation:
      "לפי הסיכום: בלוטות הרוק (תת-אוזנית, תת-לסתית, תת-לשונית) מפרישות עמילאז ברוק לפירוק פחמימות. HCl ו-IF מפרישים תאי parietal בקיבה. bile ו-lipase פועלים במעי דק.",
  },
  {
    id: 3,
    category: "היסטולוגיה",
    question: "מהו סוג האפיתל המצפה את הוושט?",
    options: [
      "אפיתל גלנדולרי (glandular) – עם בלוטות הפרשה של mucus ו-enzymes",
      "אפיתל מעבר (transitional) – כמו בשלפוחית השתן; מאפשר מתיחה",
      "אפיתל עמודי חד-שכבתי (simple columnar) – כמו בקיבה וב-duodenum",
      "אפיתל שטוח רב-שכבתי (stratified squamous) – לא קרטיניזציה מלאה",
    ],
    correctIndex: 3,
    explanation:
      "הוושט מצופה באפיתל שטוח רב-שכבתי שאינו קרטיניזציה מלאה, המתאים לעמידות במעבר מזון. המעבר ל-Junction squamocolumnar (Z-line) מסמן מעבר לאפיתל עמודי חד-שכבתי בקיבה.",
  },
  {
    id: 4,
    category: "היסטולוגיה",
    question: "איזו תאי קיבה אחראים על הפרשת intrinsic factor?",
    options: [
      "תאי D – מפרישים somatostatin",
      "תאי parietal (אוקסינטיים) – גם מפרישים HCl",
      "תאי chief (זימוגניים) – מפרישים pepsinogen",
      "תאי G – מפרישים gastrin באנטרום",
    ],
    correctIndex: 1,
    explanation:
      "תאי parietal מפרישים HCl ו-intrinsic factor. תאי chief מפרישים pepsinogen. תאי G מפרישים gastrin. תאי D מפרישים somatostatin.",
  },
  {
    id: 5,
    category: "היסטולוגיה",
    question: "מהו מבנה היסטולוגי האופייני של villi במעי הדק?",
    options: [
      "ליבת muscularis mucosae עם ganglia של Auerbach ותנועות פריסטלטיות",
      "ליבת submucosa עם plexus submucosus, כלי דם גדולים ו-Brunner glands",
      "ליבת connective tissue של serosa עם mesothelium ו-adipose tissue",
      "ליבת lamina propria עם כלי דם ו-lacteal, מכוסה אפיתל עמודי עם goblet cells",
    ],
    correctIndex: 3,
    explanation:
      "villi במעי הדק מכילים ליבת lamina propria עם capillaries ו-lacteal (לימפה), מכוסים באפיתל עמודי עם enterocytes, goblet cells ו-absorptive cells. microvilli (brush border) מגדילים שטח ספיגה.",
  },
  {
    id: 6,
    category: "היסטולוגיה",
    question: "איפה נמצאים תאי Paneth?",
    options: [
      "בשכבת muscularis externa של הקיבה – תאי ICC לפריסטלטיקה",
      "בבסיס קריפטות (crypts) של המעי הדק, בעיקר ב-jejunum ו-ileum",
      "בלובולי הכבד (hepatic acini) – סינתזת bile acids ודטוקסיפיקציה",
      "באפיתל הלשון בתאי taste buds – אחראים על חישת טעם מתוק",
    ],
    correctIndex: 1,
    explanation:
      "תאי Paneth נמצאים בבסיס קריפטות המעי הדק, בעיקר ב-jejunum ו-ileum. הם מפרישים lysozyme, defensins ואנזימים אנטי-מיקרוביאליים. הם אינם נמצאים בוושט, כבד או פה.",
  },
  {
    id: 7,
    category: "היסטולוגיה",
    question: "מהו תפקיד ה-muscularis mucosae?",
    options: [
      "יצירת קפלים בריריתיים (rugae) ותנועות מקומיות של הרירית",
      "ספיגת B12 עם intrinsic factor באזור ה-fundus",
      "הפרשת pepsinogen ו-HCl מתאי parietal בגוף הקיבה",
      "עיכול מכני של שומנים עם lingual lipase בפה",
    ],
    correctIndex: 0,
    explanation:
      "muscularis mucosae הוא שכבת שריר דקה מתחת ל-lamina propria, האחראית על תנועות מקומיות של הרירית ויצירת rugae בקיבה. פריסטלטיקה עיקרית נשלטת על ידי muscularis propria ו-plexus myenteric (Auerbach).",
  },
  {
    id: 8,
    category: "היסטולוגיה",
    question: "איזה סוג אפיתל מאפיין את המעי הגס (מלבד אזור אנאלי)?",
    options: [
      "אפיתל עמודי חד-שכבתי עם goblet cells רבים, ללא villi",
      "אפיתל עמודה רב-שכבתי (stratified columnar)",
      "אפיתל עמודי חד-שכבתי עם villi ו-microvilli",
      "אפיתל שטוח רב-שכבתי ללא קרניפיקציה",
    ],
    correctIndex: 0,
    explanation:
      "המעי הגס מצופה באפיתל עמודי חד-שכבתי עם goblet cells רבים המפרישים mucus. אין villi. crypts עמוקים יותר. האזור האנאלי מכיל מעבר לאפיתל שטוח.",
  },
  {
    id: 9,
    category: "היסטולוגיה",
    question: "מהו מבנה ה-hepatic lobule?",
    options: [
      "יחידה עם central vein במרכז ו-portal triad בפינות",
      "מבנה acinar עם enzymatic secretion למרכז",
      "יחידה עם portal vein במרכז ו-hepatic artery בפינות",
      "מבנה לימפואידי עם germinal centers ו-cortex",
    ],
    correctIndex: 0,
    explanation:
      "hepatic lobule קלאסי: central vein במרכז, hepatocytes מסודרים באונות רדיאליות, portal triad (hepatic artery, portal vein, bile duct) בפינות. hepatocytes מפרישים bile ל-canaliculi.",
  },
  {
    id: 10,
    category: "היסטולוגיה",
    question: "איזו שכבה של קיבה מכילה glands ו-muscularis mucosae?",
    options: [
      "muscularis propria – עם שכבות שריר אורכי ומעגלי",
      "תת-רירית (submucosa) – עם Meissner plexus",
      "serosa – רקמת חיבור עם peritoneum",
      "רירית (mucosa) – epithelium, lamina propria, glands",
    ],
    correctIndex: 3,
    explanation:
      "שכבת הרירית (mucosa) בקיבה כוללת: epithelium, lamina propria, muscularis mucosae ו-gastric glands. תת-רירית מכילה plexus submucosus וכלי דם. muscularis propria מכילה שכבות שריר ו-Auerbach plexus.",
  },
  {
    id: 11,
    category: "היסטולוגיה",
    question: "מה מאפיין histologically את Brunner glands?",
    options: [
      "בלוטות pyloric באנטרום עם mucus בלבד",
      "בלוטות חומציות ב-mucosa של jejunum",
      "בלוטות oxyntic בגוף הקיבה (fundus/body)",
      "בלוטות אלקליניות ב-submucosa של duodenum",
    ],
    correctIndex: 3,
    explanation:
      "Brunner glands נמצאות ב-submucosa של duodenum (בעיקר proximal) ומפרישות mucus אלקלי להגנה מפני חומצה ולubrication. הן אינן ב-jejunum, ileum או קיבה.",
  },
  {
    id: 12,
    category: "היסטולוגיה",
    question: "מהו תפקיד ה-Peyer's patches במעי?",
    options: [
      "רקמת לימפואידית מאורגנת (GALT) ב-ileum",
      "רקמת שריר חלק לפריסטלטיקה ב-submucosa",
      "בלוטות הפרשת אנזימים ב-mucosa של duodenum",
      "מבנה ספיגת שומן – אגרגט lymphoid סביב lacteal",
    ],
    correctIndex: 0,
    explanation:
      "Peyer's patches הם אגרגטים לימפואידיים (GALT) ב-submucosa ו-mucosa של ileum. הם חלק ממערכת החיסון המעי ומזהים אנטיגנים. אינם קשורים להפרשה, ספיגת שומן או פריסטלטיקה.",
  },
  {
    id: 13,
    category: "היסטולוגיה",
    question: "איזה תא בלוטת הלבלב (pancreas) מפריש אינסולין?",
    options: [
      "תאי β (beta) ב-islets of Langerhans",
      "תאי δ (delta) – מפרישים somatostatin",
      "תאי acinar – מפרישים amylase ו-lipase",
      "תאי α (alpha) – מפרישים glucagon",
    ],
    correctIndex: 0,
    explanation:
      "ב-islets of Langerhans: תאי β מפרישים אינסולין, תאי α מפרישים glucagon, תאי δ מפרישים somatostatin. תאי acinar מפרישים אנזימי עיכול (exocrine). תאי ductal מובילים נוזל.",
  },
  {
    id: 14,
    category: "היסטולוגיה",
    question: "מה מאפיין את אפיתל כלי המרה (bile duct)?",
    options: [
      "אפיתל עמודי חד-שכבתי (simple columnar)",
      "אפיתל מעבר (transitional) – כמו בדרכי השתן",
      "אפיתל קובי חד-שכבתי (simple cuboidal) של canaliculi",
      "אפיתל שטוח רב-שכבתי – כמו בוושט",
    ],
    correctIndex: 0,
    explanation:
      "כלי מרה מצופים באפיתל עמודי חד-שכבתי. אפיתל שטוח מאפיין וושט ואזור אנאלי. אפיתל עמודה רב-שכבתי נפוץ באפיתל מעבר. בלוטות קיבה הן glandular columnar.",
  },
  {
    id: 15,
    category: "היסטולוגיה",
    question: "מהו plexus myenteric (Auerbach)?",
    options: [
      "רשת עצבים ב-submucosa – שולטת בזרימת דם ורירית",
      "רשת עצבים ב-lamina propria – ליד crypts",
      "רשת בכבד – לוויסות זרימת bile ב-canaliculi",
      "רשת עצבים בין שכבות muscularis propria – שולטת בפריסטלטיקה",
    ],
    correctIndex: 3,
    explanation:
      "plexus myenteric (Auerbach) ממוקם בין שכבות השריר החלק והאורכי של muscularis propria ושולט בפריסטלטיקה ותנועות מעי. plexus submucosus (Meissner) ב-submucosa שולט בזרימת דם, בלוטות ורירית.",
  },
  {
    id: 16,
    category: "וושט",
    question: "מהו הגורם העיקרי ל-GERD?",
    options: [
      "ירידה בלחץ LES והחזרת חומצה קיבתית לוושט",
      "achlorhydria – חוסר הפרשת HCl בקיבה",
      "היפרמוטיליות אסופגית בלבד ללא dysfunction של LES",
      "עלייה מתמדת בלחץ LES (hypertension) ללא reflux",
    ],
    correctIndex: 0,
    explanation:
      "GERD נגרם בעיקר מ-transient LES relaxations ו/או hypotonia של LES, המאפשרים reflux של תוכן קיבתי (חומצה, pepsin) לוושט. גורמים נוספים: hiatal hernia, עיכוב ריקון וושטי, obesity. לא עלייה בלחץ LES או היפומוטיליות.",
  },
  {
    id: 17,
    category: "וושט",
    question: "מהם התסמינים הקלאסיים של GERD?",
    options: [
      "כאב בטן תחתון ימני (RLQ) בלבד",
      "שלשול דמי (hematochezia) כתסמין מוביל",
      "צרבת (heartburn) ו-regurgitation",
      "צהבת ואיורכיה (acholic stools)",
    ],
    correctIndex: 2,
    explanation:
      "תסמיני GERD קלאסיים: heartburn (צרבת retrosternal), regurgitation (החזרת טעם חמוץ/מר), לעיתים dysphagia, כאב חזה. שלשול דמי, צהבת וכאב RLQ אינם תסמינים אופייניים ל-GERD.",
  },
  {
    id: 18,
    category: "וושט",
    question: "מהו Barrett esophagus?",
    options: [
      "דלקת ויראלית חריפה (herpes esophagitis)",
      "intestinal metaplasia של אפיתל וושטי בעקבות GERD כרוני",
      "גידול שפיר – leiomyoma של הוושט",
      "achalasia – אי-מנוחה של LES ואובדן peristalsis",
    ],
    correctIndex: 1,
    explanation:
      "Barrett esophagus הוא החלפת אפיתל שטוח באפיתל עמודה (intestinal metaplasia עם goblet cells) באזור distal esophagus בעקבות reflux כרוני. מגדיל סיכון ל-adenocarcinoma וושטי. אינו דלקת ויראלית, גידול שפיר או achalasia.",
  },
  {
    id: 19,
    category: "וושט",
    question: "מהו הטיפול הראשוני ל-GERD?",
    options: [
      "כריתה כירורגית מיידית (fundoplication) לכל המטופלים",
      "אנטיביוטיקה ל-H. pylori כטיפול יחיד ללא PPI",
      "שינויי אורח חיים + מעכבי proton pump (PPI)",
      "גלוקוקorticoids מערכתיים לדיכוי דלקת",
    ],
    correctIndex: 2,
    explanation:
      "טיפול ראשוני ב-GERD: שינויי אורח חיים (הרמת ראש, הימנעות מארוחות לילה, ירידה במשקל, הימנעות מטריגרים) + PPI (אומפרזול וכו'). H2 blockers לתסמינים קלים. כירורגיה (fundoplication) למקרים עמידים. אנטיביוטיקה ל-H. pylori לא לGERD בלבד.",
  },
  {
    id: 20,
    category: "וושט",
    question: "מה מאפיין achalasia?",
    options: [
      "אי-מנוחה של LES ואובדן peristalsis בגוף הוושט",
      "Barrett metaplasia עם goblet cells",
      "stenosis ממאירה (malignant stricture) בלבד",
      "hypotonia של LES עם reflux כרוני – דומה ל-GERD",
    ],
    correctIndex: 0,
    explanation:
      "achalasia: אי-מנוחה (failure to relax) של LES במהלך בליעה + אובדן peristalsis בגוף הוושט. גורם: נזק ל-myenteric plexus. תסמינים: dysphagia לנוזלים ומוצקים, regurgitation, כאב חזה. bird-beak sign ב-barium swallow.",
  },
  {
    id: 21,
    category: "וושט",
    question: "מהו הטיפול העיקרי ל-achalasia?",
    options: [
      "הזרקת botulinum toxin ל-LES כטיפול קבוע ראשון לכל המטופלים",
      "PPI במינון מלא לטיפול ב-GERD ו-Barrett ללא הרחבה",
      "הרחבה פנאומטית אנדוסקופית או ניתוח הלר (cardiomyotomy)",
      "resection של esophagus עם anastomosis מיידית ללא dilatation",
    ],
    correctIndex: 2,
    explanation:
      "טיפול achalasia בסיכום: הרחבה פנאומטית אנדוסקופית; ניתוח הלר לפרוסקופי ± ניסן fundoplication. PPI לא מטפל ב-achalasia. אנטיביוטיקה וכימותרפיה לא רלוונטיים.",
  },
  {
    id: 22,
    category: "וושט",
    question: "מהו סוג הסרטן השכיח בוושט distal עם Barrett?",
    options: [
      "Leiomyosarcoma – גידול שריר חלק",
      "lymphoma – MALT של הוושט",
      "adenocarcinoma",
      "squamous cell carcinoma – שכיח בוושט פרוקסימלי",
    ],
    correctIndex: 2,
    explanation:
      "באזור distal עם Barrett והיסטוריה של GERD שכיח adenocarcinoma. squamous cell carcinoma שכיח יותר בוושט proximal/מזרח אסיה. lymphoma ו-leiomyosarcoma (נדיר) אינם הסוגים השכיחים בוושט.",
  },
  {
    id: 23,
    category: "וושט",
    question: "מהם גורמי הסיכון ל-squamous cell carcinoma של הוושט?",
    options: [
      "H. pylori – גורם עיקרי לגסטריטיס ופצעת",
      "IBD – קשור בעיקר ל-CRC ולא ל-SCC וושטי",
      "GERD כרוני ו-obesity – גורמים עיקריים ל-adenocarcinoma",
      "עישון, אלכוהול, achalasia, caustic injury, Plummer-Vinson",
    ],
    correctIndex: 3,
    explanation:
      "גורמי סיכון ל-esophageal SCC: עישון, אלכוהול, achalasia, caustic stricture, Plummer-Vinson syndrome, tylosis. GERD ו-obesity קשורים יותר ל-adenocarcinoma. H. pylori ו-IBD אינם גורמי סיכון עיקריים ל-SCC וושטי.",
  },
  {
    id: 24,
    category: "וושט",
    question: "מהו סיבוך כרוני של GERD לא מטופל לפי הסיכום?",
    options: [
      "Achalasia עם bird-beak ב-barium ואובדן peristalsis",
      "Hiatal hernia sliding ללא דלקת או שינוי ברירית",
      "Esophageal stricture – היצרות מצלקת בוושט",
      "H. pylori gastritis בלבד ללא reflux או נזק לוושט",
    ],
    correctIndex: 2,
    explanation:
      "סיבוכי GERD בסיכום: esophagitis, esophageal stricture, Barrett's esophagus, laryngitis, bronchial asthma, aspiration pneumonia. stricture = רקמת צלקת קשיחה בעקבות דלקת כרונית.",
  },
  {
    id: 25,
    category: "וושט",
    question: "מה מאפיין esophageal varices?",
    options: [
      "ורידים מורחבים ב-submucosa distal בעקבות portal hypertension",
      "achalasia – אי-מנוחה של LES; bird-beak ב-barium ללא varices",
      "stenosis פיברוטית מ-GERD כרונית – היצרות מצלקת ללא varices",
      "גידולים שפירים (papilloma) של הרירית הוושטית – לא קשור ל-portal HTN",
    ],
    correctIndex: 0,
    explanation:
      "esophageal varices: ורידים מורחבים (בעיקר left gastric vein → esophageal veins) ב-submucosa distal esophagus בגלל portal hypertension (cirrhosis). סיכון לדימום מסיבי. לא גידולים שפירים, stenosis GERD או achalasia.",
  },
  {
    id: 26,
    category: "וושט",
    question: "מהו הטיפול הראשון בדימום varices וושטיות?",
    options: [
      "PPI בלבד ללא אנדוסקופיה",
      "ייצוב המודינמי + קשירת דליות בגסטרוסקופיה",
      "אנטיביוטיקה ל-H. pylori כטיפול ראשון",
      "כימותרפיה לפני stabilisation hemodynamic",
    ],
    correctIndex: 1,
    explanation:
      "דימום varices בסיכום: חוסמי בטא לא סלקטיביים; קשירת דליות בגסטרוסקופיה (גומיות על הורידים). PPI לא מטפל ב-varices. H. pylori וכימותרפיה לא רלוונטיים לדימום חריף.",
  },
  {
    id: 27,
    category: "וושט",
    question: "מהו סיבוך אפשרי של סרטן וושט לפי הסיכום?",
    options: [
      "GERD עם heartburn בלבד ללא סיבוכים מבניים",
      "Achalasia עם bird-beak ב-barium ודיספניה לנוזלים",
      "Hiatal hernia sliding בלבד ללא קשר לסרטן",
      "Tracheo-esophageal fistula – שיעול אחרי בליעה, דלקת ריאות",
    ],
    correctIndex: 3,
    explanation:
      "בסיכום: coughing after swallowing, pneumonia & pleural effusion מעידים על fistula בין קנה הנשימה לוושט (tracheo-esophageal fistula) כשהגידול חודר. achalasia ו-GERD הם מצבים נפרדים.",
  },
  {
    id: 28,
    category: "וושט",
    question: "מהו hiatal hernia?",
    options: [
      "hernia inguinal – מעבר תוכן דרך inguinal canal",
      "corrosive stricture – היצרות מחומרים קורוזיביים",
      "הרמת חלק מהקיבה דרך hiatus אסופגי לחזה",
      "stricture מ-caustic ingestion בוושט",
    ],
    correctIndex: 2,
    explanation:
      "hiatal hernia: herniation של stomach (ועיתוי GE junction) דרך esophageal hiatus לתוך thorax. סוגים: sliding (Type I, שכיח) ו-paraoesophageal (Type II+). קשור ל-GERD. לא inguinal hernia, corrosive stricture stricture.",
  },
  {
    id: 29,
    category: "פצעת עיכול / גסטריטיס",
    question: "מהו המיקום השכיח ביותר לפצעת עיכול?",
    options: [
      "duodenal bulb (duodenal ulcer)",
      "gastric fundus – אזור עם הכי הרבה parietal cells",
      "rectum – חלק distal של המעי הגס",
      "jejunum – מעי דק פרוקסימלי",
    ],
    correctIndex: 0,
    explanation:
      "פצעות עיכול שכיחות ב-duodenal bulb (הכי שכיח) ו-gastric antrum/body. נדירות ב-jejunum, rectum ו-cecum (אלא אם קשור ל-מצבים נדירים).",
  },
  {
    id: 30,
    category: "פצעת עיכול / גסטריטיס",
    question: "מהו הקשר בין H. pylori לפצעת עיכול?",
    options: [
      "H. pylori קשור רק ל-Crohn ולא לגסטריטיס או פצעת",
      "H. pylori מגן מפני GERD ומפחית סיכון לפצעת ו-adenocarcinoma",
      "H. pylori גורם לגסטריטיס כרונית ועלייה בחומצה → סיכון לפצעת",
      "H. pylori מטופל ב-PPI בלבד ללא אנטיביוטיקה או בדיקת eradication",
    ],
    correctIndex: 2,
    explanation:
      "H. pylori: גסטריטיס כרונית, עלייה ב-gastrin ו-HCl (במיוחד antral), פגיעה במנגנוני הגנה → duodenal ו-gastric ulcers. גם קשור ל-gastric cancer ו-MALT lymphoma. לא מונע פצעות ולא קשור ל-CRC ישירות.",
  },
  {
    id: 31,
    category: "פצעת עיכול / גסטריטיס",
    question: "מהו triple therapy ל-H. pylori?",
    options: [
      "PPI בלבד × 4 שבועות ללא אנטיביוטיקה – מספיק ל-eradication",
      "PPI + clarithromycin + amoxicillin (או metronidazole) × 14 יום",
      "סטטין + PPI לטיפול ב-H. pylori ו-hyperlipidemia",
      "metronidazole PO בודד ללא PPI או amoxicillin",
    ],
    correctIndex: 1,
    explanation:
      "Triple therapy קלאסי: PPI (למשל omeprazole) + clarithromycin + amoxicillin (או metronidazole אם allergy) למשך 14 יום. quadruple therapy (bismuth) כחלופה. PPI בלבד לא מטפל ב-H. pylori. אנטיביוטיקה בודדת לא מספיקה.",
  },
  {
    id: 32,
    category: "פצעת עיכול / גסטריטיס",
    question: "מהו התסמין האופייני ל-duodenal ulcer?",
    options: [
      "צהבת וכאב בטן מפושט עם fever",
      "שלשול דמי כתסמין מוביל",
      "כאב epigastric שמחמיר לאחר אכילה – כמו ב-gastric ulcer",
      "כאב epigastric שמוקל לאחר אכילה (pain relief with food)",
    ],
    correctIndex: 3,
    explanation:
      "duodenal ulcer: כאב epigastric בדרך כלל מוקל באכילה (pain relief with food), מחמיר 2-3 שעות לאחר ארוחה, לעיתים nocturnal pain. gastric ulcer: כאב מחמיר באכילה. צהבת ושלשול דמי לא אופייניים לפצעת פשוטה.",
  },
  {
    id: 33,
    category: "פצעת עיכול / גסטריטיס",
    question: "מהו התסמין האופייני ל-gastric ulcer?",
    options: [
      "מצב אסימפטומטי תמיד עד perforation – ללא כאב epigastric",
      "כאב שמוקל באכילה – כמו ב-duodenal ulcer (pain relieved by food)",
      "כאב epigastric שמחמיר באכילה (pain worsened by food)",
      "כאב לילי בלבד ללא קשר לאכילה – תמיד duodenal ulcer",
    ],
    correctIndex: 2,
    explanation:
      "gastric ulcer: כאב epigastric שמחמיר באכילה (pain worsened by food) בגלל contact עם פצעת. duodenal: מוקל באכילה. gastric ulcer דורשת biopsies לשלילת malignancy.",
  },
  {
    id: 34,
    category: "פצעת עיכול / גסטריטיס",
    question: "מהם גורמי הסיכון לפצעת עיכול (מלבד H. pylori)?",
    options: [
      "NSAIDs, עישון, אלכוהול, stress (ICU), קפאין",
      "דיאטה צמחונית עשירה בסיבים",
      "שימוש כרוני ב-PPI – מגדיל סיכון לפצעת",
      "שתיית מים בכמויות גדולות",
    ],
    correctIndex: 0,
    explanation:
      "גורמי סיכון לפצעת עיכול: H. pylori, NSAIDs (עיקרי), עישון, אלכוהול, stress ulcers (ICU), קפאין (מעלה הפרשת חומצה), family history. PPI מגן מפצעת NSAID. צמחונות ומים אינם גורמי סיכון.",
  },
  {
    id: 35,
    category: "פצעת עיכול / גסטריטיס",
    question: "מהי גסטריטיס אירוזיבית לפי הסיכום?",
    options: [
      "דלקת transmural עם granulomas ו-skip lesions כמו ב-Crohn",
      "מחלה אוטואימונית עם anti-parietal antibodies ו-B12 deficiency",
      "גסטריטיס ויראלית מ-HAV עם IgM anti-HAV בלבד",
      "דלקת רירית קיבה עם erosions שטחיות – לרוב stress, NSAIDs, אלכוהול",
    ],
    correctIndex: 3,
    explanation:
      "בסיכום: erosive gastritis – erosions שטחיות ברירית; גורמים: stress (ICU), NSAIDs, אלכוהול. שונה מ-atrophic gastritis אוטואימונית/סביבתית ומ-Crohn.",
  },
  {
    id: 36,
    category: "פצעת עיכול / גסטריטיס",
    question: "מהו acute gastritis?",
    options: [
      "דלקת כרונית אטרופית – אוטואימונית נגד parietal cells",
      "achalasia – motility disorder של הוושט",
      "דלקת קיבתית חריפה (למשל NSAIDs, אלכוהול, stress)",
      "גידול אפיתלiali בקיבה (adenoma)",
    ],
    correctIndex: 2,
    explanation:
      "acute gastritis: דלקת חריפה – גורמים: NSAIDs, אלכוהול, stress (ICU), bile reflux, viral. תסמינים: epigastric pain, nausea, bleeding. chronic gastritis: H. pylori, autoimmune. לא גידול או achalasia.",
  },
  {
    id: 37,
    category: "פצעת עיכול / גסטריטיס",
    question: "מהו autoimmune (atrophic) gastritis?",
    options: [
      "דלקת אנטרלית מ-H. pylori בלבד ללא השפעה על intrinsic factor",
      "גסטריטיס ללא השפעה על ספיגת B12 או על parietal cells",
      "אוטואימונית נגד parietal cells → חוסר B12 ו-pernicious anemia",
      "דלקת חריפה erosive מ-NSAIDs ללא autoantibodies",
    ],
    correctIndex: 2,
    explanation:
      "autoimmune gastritis: antibodies נגד parietal cells / intrinsic factor → atrophy, achlorhydria, hypergastrinemia, vitamin B12 deficiency → pernicious anemia. סיכון מוגבר ל-gastric cancer. שונה מ-H. pylori gastritis.",
  },
  {
    id: 38,
    category: "פצעת עיכול / גסטריטיס",
    question: "מהו סיבוך מסוכן של פצעת עיכול?",
    options: [
      "צהבת obstructive מ-gallstones",
      "gastric outlet obstruction – היצרות מוצא קיבה",
      "התפתחות IBD (Crohn/UC)",
      "דימום, perforation, obstruction",
    ],
    correctIndex: 3,
    explanation:
      "סיבוכי פצעת עיכול: hemorrhage (הכי שכיח), perforation (חירום כירורגי), gastric outlet obstruction (stricture/edema). צהבת, IBD ו-gastric outlet obstruction מצוין בסיכום ישירים של פצעת עיכול.",
  },
  {
    id: 39,
    category: "פצעת עיכול / גסטריטיס",
    question: "איך מאבחנים H. pylori?",
    options: [
      "anti-tTG serology בלבד לאבחון H. pylori ללא breath test או biopsy",
      "colonoscopy עם FIT לזיהוי H. pylori בקיבה ללא urea breath test",
      "urea breath test, stool antigen, biopsy עם histology/rapid urease",
      "serology ל-HAV (IgM anti-HAV) לאבחון גסטריטיס מ-H. pylori",
    ],
    correctIndex: 2,
    explanation:
      "אבחון H. pylori: urea breath test (לאחר הפסקת PPI/antibiotics), stool antigen, endoscopic biopsy (histology, rapid urease test, culture). serology פחות שימושי לאחר טיפול. B12, colonoscopy ו-ERCP לא לאבחון H. pylori.",
  },
  {
    id: 40,
    category: "פצעת עיכול / גסטריטיס",
    question: "מהו MALT lymphoma בקיבה?",
    options: [
      "leiomyosarcoma – גידול שריר נדיר ללא קשר ל-H. pylori",
      "adenocarcinoma שטחי של cardia – לא קשור ל-H. pylori",
      "GIST mesenchymal – לא מגיב ל-eradication של H. pylori",
      "lymphoma לימפואידי קשור ל-H. pylori, עשוי להגיב ל-eradication",
    ],
    correctIndex: 3,
    explanation:
      "gastric MALT lymphoma: low-grade B-cell lymphoma קשור ל-H. pylori כרוני. שלבים מוקדמים עשויים להיגמר לאחר eradication של H. pylori. שונה מ-adenocarcinoma, adenocarcinoma ופצעת.",
  },
  {
    id: 41,
    category: "פיזיולוגיה והורמונים",
    question: "מה תפקיד gastrin?",
    options: [
      "עיכוב הפרשת HCl ו-stimulation של somatostatin",
      "גירוי הפרשת bicarbonate מ-pancreas",
      "ספיגת גלוקוז ב-jejunum",
      "גירוי הפרשת HCl מתאי parietal וגדילת רירית קיבתית",
    ],
    correctIndex: 3,
    explanation:
      "gastrin (מ-G cells באנטרום): מגביר הפרשת HCl (parietal cells), מגביר תנועת קיבה, גדילת mucosa. מופרש בתגובה לאכילה, distension, peptides. somatostatin ו-secretin מעכבים.",
  },
  {
    id: 42,
    category: "פיזיולוגיה והורמונים",
    question: "מה תפקיד secretin?",
    options: [
      "גירוי peristalsis בוושט בזמן בליעה ראשונית",
      "גירוי הפרשת insulin מ-β cells בלבלב",
      "גירוי הפרשת bicarbonate מ-pancreas ו-bile, עיכוב gastrin",
      "גירוי הפרשת HCl מ-parietal cells והגברת pepsinogen",
    ],
    correctIndex: 2,
    explanation:
      "secretin (מ-S cells ב-duodenum): מופרש בתגובה לחומצה ב-duodenum. מגביר bicarbonate מ-pancreas ו-ductal cells כבד, מעכב gastrin ו-HCl. לא מגביר HCl, ghrelin או ספיגת שומן ישירה.",
  },
  {
    id: 43,
    category: "פיזיולוגיה והורמונים",
    question: "מה תפקיד CCK (cholecystokinin)?",
    options: [
      "גירוי אינסולין מתאי β בלבלב – תגובה לגלוקוז בדם",
      "גירוי הפרשת אנזימים לבלב, התכווצות כיס מרה, ספינcter of Oddi",
      "גירוי הפרשת HCl מ-parietal cells בגוף הקיבה לאחר ארוחה",
      "פריסטלטיקה וושטית בזמן בליעה ראשונית – לא קשור ל-CCK",
    ],
    correctIndex: 1,
    explanation:
      "CCK (מ-I cells): מופרש בתגובה לשומן ו-amino acids. מגביר pancreatic enzyme secretion, gallbladder contraction, relaxation of sphincter of Oddi, מעכב ריקון קיבה. לא HCl, אינסולין בלבד או פריסטלטיקה וושטית.",
  },
  {
    id: 44,
    category: "פיזיולוגיה והורמונים",
    question: "מה תפקיד ghrelin?",
    options: [
      "סומטוסטטין – עיכוב הפרשות",
      "הורמון רעב מקיבה, מגביר תיאבון",
      "somatostatin – מעכב הפרשות ו-motility",
      "CCK – גירוי הפרשת אנזימי לבלב",
    ],
    correctIndex: 1,
    explanation:
      "גרלין מופרש מתאים אנדוקריניים בקיבה ומתאי אפסילון בלבלב בזמן צום, מגביר תיאבון ומשחרר GH. סומטוסטטין ו-CCK הם הורמונים אחרים במערכת העיכול. לא HCl או B12.",
  },
  {
    id: 45,
    category: "פיזיולוגיה והורמונים",
    question: "מהי peristalsis?",
    options: [
      "ספיגת מים פסיבית ב-colon",
      "segmentation – תנועה מקומית לעירבוב ללא קידום",
      "גל תנועה מעייתי שמקדם תוכן קדימה",
      "הפרשת אנזימים מ-pancreas ל-duodenum",
    ],
    correctIndex: 2,
    explanation:
      "peristalsis: contraction proximal + relaxation distal (פריסטלטיקה) מקדם bolus קדימה. נשלטת על ידי enteric nervous system (Auerbach, Meissner) ו-modulated by autonomic/vagal. לא תנועה הפוכה בלבד, הפרשה או ספיגה.",
  },
  {
    id: 46,
    category: "פיזיולוגיה והורמונים",
    question: "מהם שלבי עיכול המערכת לפי הסיכום?",
    options: [
      "מכני (פה+קיבה), בליעה (לוע+ושט), כימי, ספיגה, הפרשת פסולת",
      "רק ספיגה במעי גס ללא עיכול כימי בפה או בקיבה",
      "רק הפרשת פסולת בפה ולוע ללא שלב בליעה",
      "עיכול כימי בוושט בלבד ללא תפקיד מכני בפה",
    ],
    correctIndex: 0,
    explanation:
      "בסיכום – עיכול לפי שלבים: (1) מכני פה+קיבה; (2) בליעה לוע+ושט; (3) כימי פה+קיבה+מעי דק+מעי גס; (4) ספיגה; (5) הפרשת פסולת במעי גס.",
  },
  {
    id: 47,
    category: "פיזיולוגיה והורמונים",
    question: "מה תפקיד somatostatin במערכת העיכול?",
    options: [
      "עיכוב gastrin, HCl, pancreatic secretion",
      "גירוי תיאבון דרך hypothalamus",
      "ספיגת שומן ב-ileum",
      "גירוי HCl ו-gastrin release",
    ],
    correctIndex: 0,
    explanation:
      "somatostatin (מ-D cells): מעכב gastrin, HCl, pancreatic/biliary secretion, GI motility. universal inhibitor. לא מגביר HCl, תיאבון או ספיגת שומן.",
  },
  {
    id: 48,
    category: "פיזיולוגיה והורמונים",
    question: "מה קורה בשלב cephalic של עיכול?",
    options: [
      "הפרשת intrinsic factor ב-duodenum בתגובה ל-vagus",
      "הפרשת bile מכיס המרה בלבד ללא הפרשת אנזימים",
      "הפרשת רוק, HCl ואנזימים בתגובה לריח/מראה/טעם אוכל (vagus)",
      "ספיגת גלוקוז ב-jejunum בתגובה לריח אוכל",
    ],
    correctIndex: 2,
    explanation:
      "cephalic phase: vagal stimulation → saliva, gastric HCl, pepsinogen לפני בליעה. gastric phase: distension, peptides. intestinal phase: CCK, secretin. לא ספיגה, מעי גס בלבד או bile בלבד.",
  },
  {
    id: 49,
    category: "פיזיולוגיה והורמונים",
    question: "איך מתבצעת ספיגת B12?",
    options: [
      "סינתזה וספיגה על ידי bacteria ב-colon",
      "ספיגה ישירה על ידי parietal cells בקיבה",
      "ספיגה פסיבית ב-duodenum ללא intrinsic factor",
      "קשורה ל-intrinsic factor ב-ileum terminal",
    ],
    correctIndex: 3,
    explanation:
      "B12: נספג ב-ileum terminal דרך complex עם intrinsic factor (מ-parietal cells). ליקוי ב-pernicious anemia, resection ileum, Crohn ileal. לא duodenum, קיבה או colon.",
  },
  {
    id: 50,
    category: "פיזיולוגיה והורמונים",
    question: "מה תפקיד המרה (bile) בפירוק שומנים לפי הסיכום?",
    options: [
      "ספיגת גלוקוז ישירות דרך SGLT1 ב-jejunum",
      "אמולסיה – הפיכת שומנים לטיפות קטנות יותר לספיגה",
      "הפרשת intrinsic factor לספיגת B12 בקיבה",
      "ניטרול חומצת הקיבה ב-duodenum בלבד ללא תפקיד בשומן",
    ],
    correctIndex: 1,
    explanation:
      "בסיכום: כיס המרה מפריש מרה למעי הדק; המרה מתחלבת שומנים (הופכת לטיפות קטנות). lipase מהלבלב משלים. B12 נספג ב-terminal ileum עם IF. ניטרול חומצה – bicarbonate מלבלב.",
  },
  {
    id: 51,
    category: "כבד / לבלב / מערכת מרה",
    question: "מהם תפקידי הכבד העיקריים?",
    options: [
      "אחסון glycogen בלבד – ללא תפקיד ב-bilirubin, bile או חלבוני דם",
      "הפרשת אינסולין ו-glucagon, ספיגת B12 וסינתזת intrinsic factor",
      "פריסטלטיקה מעייתית, הפרשת gastrin וספיגת גלוקוז במעי הדק",
      "מטבוליזם, detoxification, סינתזת bile וחלבונים (albumin, clotting factors)",
    ],
    correctIndex: 3,
    explanation:
      "תפקידי כבד: מטבוליזם (גלוקוז, lipids, חלבונים), detoxification, bile synthesis/secretion, protein synthesis (albumin, clotting factors), storage (glycogen, iron, B12). אינסולין מופרש מפנקרס; ספיגת B12 ב-ileum; gastrin מ-G cells.",
  },
  {
    id: 52,
    category: "כבד / לבלב / מערכת מרה",
    question: "מהם גורמי הסיכון העיקריים ל-cirrhosis?",
    options: [
      "צמחונות ממושכת, שתיית מים מרובה וחוסר חשיפה לאלכוהול",
      "H. pylori בלבד, ללא קשר ל-viral hepatitis או מחלות מטבוליות כבד",
      "GERD כרוני, hiatal hernia ושימוש קבוע ב-PPI ללא גורם מזיק אחר",
      "אלכוהול כרוני, NAFLD/NASH, viral hepatitis (B,C), hemochromatosis, Wilson",
    ],
    correctIndex: 3,
    explanation:
      "גורמי cirrhosis: אלכוהול כרוני, NAFLD/NASH, hepatitis B/C כרוני, hemochromatosis, Wilson disease, autoimmune hepatitis, מחלות דרכי מרה (biliary disease). GERD, PPI, צמחונות ומים אינם גורמי סיכון לשחמת.",
  },
  {
    id: 53,
    category: "כבד / לבלב / מערכת מרה",
    question: "מהם סימני portal hypertension?",
    options: [
      "כאב RLQ, RLQ tenderness ו-anorexia עם leukocytosis – סימני portal HTN",
      "heartburn, regurgitation ו-dysphagia לנוזלים – סימני portal hypertension",
      "צהבת בלבד ללא ascites, varices, splenomegaly או שינויי hemodynamics",
      "ascites, esophageal/gastric varices, splenomegaly, caput medusae",
    ],
    correctIndex: 3,
    explanation:
      "portal hypertension: ascites, esophageal/gastric varices, splenomegaly, caput medusae, hemorrhoids. צהבת יכולה להיות נלווית אך אינה סימן ייחודי. heartburn ו-RLQ pain אינם ספציפיים; cholecystitis שונה לחלוטין.",
  },
  {
    id: 54,
    category: "כבד / לבלב / מערכת מרה",
    question: "מהו הגורם השכיח ביותר ל-acute pancreatitis?",
    options: [
      "gallstones (אבנים בכיס מרה) ואלכוהול",
      "autoimmune gastritis ו-pernicious anemia עם חוסר B12",
      "viral gastroenteritis בלבד ללא hypertriglyceridemia או ERCP",
      "H. pylori, GERD ו-inflammatory bowel disease",
    ],
    correctIndex: 0,
    explanation:
      "גורמים שכיחים ל-acute pancreatitis: gallstones (הכי שכיח), אלכוהול, hypertriglyceridemia, ERCP, תרופות, trauma. H. pylori, GERD ו-IBD אינם גורמים עיקריים לדלקת לבלב חריפה.",
  },
  {
    id: 55,
    category: "כבד / לבלב / מערכת מרה",
    question: "מהם התסמינים האופייניים ל-acute pancreatitis?",
    options: [
      "שלשול דמי, urgency ו-tenesmus עם דלקת רירית rectum",
      "dysphagia לנוזלים ו-masses ב-RLQ עם fistulas פריאנליות",
      "heartburn retrosternal, regurgitation ותגובה מיידית ל-PPI",
      "כאב epigastric קורן לגב, nausea/vomiting, lipase/amylase מוגברים",
    ],
    correctIndex: 3,
    explanation:
      "acute pancreatitis: כאב epigastric חזק קורן לגב, nausea/vomiting, fever, lipase/amylase מוגברים. Cullen/Grey Turner signs בדימום. heartburn = GERD; שלשול דמי = UC; dysphagia + fistulas = Crohn.",
  },
  {
    id: 56,
    category: "כבד / לבלב / מערכת מרה",
    question: "מהו acute cholecystitis?",
    options: [
      "reflux של תוכן קיבתי לוושט עם erosions ברירית distal esophagus",
      "דלקת כיס מרה, לרוב מ-obstruction של cystic duct מאבן",
      "דלקת לבלב עם lipase מוגבר וכאב קורן לגב ללא Murphy sign",
      "דלקת כבד ויראלית עם עליית transaminases ו-jaundice ממוקד",
    ],
    correctIndex: 1,
    explanation:
      "acute cholecystitis: inflammation כיס מרה, בדרך כלל stone ב-cystic duct. כאב RUQ, Murphy sign, fever, leukocytosis. US: wall thickening, pericholecystic fluid. שונה מ-hepatitis, pancreatitis ו-GERD.",
  },
  {
    id: 57,
    category: "כבד / לבלב / מערכת מרה",
    question: "מהו Charcot triad?",
    options: [
      "כאב, vomiting ו-diarrhea ב-gastroenteritis לא ספציפי",
      "חום, chest pain ו-dyspnea ב-pulmonary embolism",
      "חום, jaundice וכאב RUQ ב-acute cholangitis",
      "jaundice, ascites ו-hepatic encephalopathy ב-liver failure",
    ],
    correctIndex: 2,
    explanation:
      "Charcot triad (acute cholangitis): fever, jaundice, RUQ pain. Reynolds pentad מוסיף hypotension ו-mental status change. ascites + encephalopathy = decompensated cirrhosis; chest pain triad לא קשור.",
  },
  {
    id: 58,
    category: "כבד / לבלב / מערכת מרה",
    question: "מה מאפיין hepatitis B כרוני?",
    options: [
      "מניעה מוחלטת של HCC ללא צורך ב-surveillance או antiviral therapy",
      "HBsAg חיובי מעל 6 חודשים, סיכון ל-cirrhosis ו-hepatocellular carcinoma (HCC)",
      "HBsAg שלילי תמיד תוך 6 חודשים, ללא סיכון ל-cirrhosis או HCC",
      "זיהום חד-פעמי בלבד עם anti-HBs מתמשך וללא viral replication",
    ],
    correctIndex: 1,
    explanation:
      "HBV כרוני: HBsAg+ >6 months, עלול להתקדם ל-cirrhosis ו-HCC. טיפול: antivirals (entecavir, tenofovir). HBV חדה: HBsAg+ זמני; anti-HBs = חיסון או החלמה.",
  },
  {
    id: 59,
    category: "IBD",
    question: "מהו PSC (Primary Sclerosing Cholangitis) לפי הסיכום?",
    options: [
      "דלקת כבד ויראלית חדה (HAV) עם IgM anti-HAV וללא autoantibodies",
      "cholestasis מ-obstruction חיצוני של common bile duct מאבן בלבד",
      "דלקת לבלב חריפה מ-gallstones עם lipase מוגבר וכאב קורן לגב",
      "מחלה אוטואימונית – נוגדנים תוקפים צינורות מרה; צלקות; קשר ל-UC וסיכון CRC",
    ],
    correctIndex: 3,
    explanation:
      "בסיכום: PSC – אוטואימונית, נוגדנים תוקפים צינורות מרה בכבד, צלקות כרוניות, מעלה סיכון לסרטן; שכיח ב-UC. שונה מ-pancreatitis, choledocholithiasis ו-hepatitis ויראלית.",
  },
  {
    id: 60,
    category: "כבד / לבלב / מערכת מרה",
    question: "מהו hepatocellular carcinoma (HCC)?",
    options: [
      "metastasis שכיחה מ-colon בלבד, ללא קשר ל-liver disease כרונית",
      "lymphoma הפטי שכיח יותר מ-primary liver malignancy ב-cirrhotics",
      "גידול נדיר של כבד עם c-KIT mutation, ללא קשר ל-cirrhosis",
      "סרטן כבד ראשוני, קשור ל-cirrhosis, HBV/HCV ו-hemochromatosis",
    ],
    correctIndex: 3,
    explanation:
      "HCC: primary liver cancer; גורמים: cirrhosis (כל סיבה), HBV, HCV, aflatoxin, hemochromatosis. סקר עם US + AFP ב-cirrhotics. CRC metastasis, גידול נדיר ו-lymphoma אינם ההגדרה של HCC.",
  },
  {
    id: 61,
    category: "כבד / לבלב / מערכת מרה",
    question: "מהו chronic pancreatitis?",
    options: [
      "דלקת לבלב חד-פעמית עם lipase חולף וללא fibrosis או exocrine failure",
      "GERD כרוני עם erosive esophagitis ו-Barrett metaplasia",
      "acute cholecystitis חוזר עם Murphy sign וללא steatorrhea",
      "נזק כרוני ללבלב (אלכוהול שכיח), כאב, malabsorption, סוכרת לבלבית",
    ],
    correctIndex: 3,
    explanation:
      "chronic pancreatitis: fibrosis, atrophy, אלכוהול שכיח. כאב כרוני, steatorrhea, diabetes (exocrine/endocrine failure), calcifications ב-CT. שונה מ-acute pancreatitis, GERD ו-cholecystitis.",
  },
  {
    id: 62,
    category: "כבד / לבלב / מערכת מרה",
    question: "מהו hepatic encephalopathy?",
    options: [
      "stroke ischemic ב-cortex עם focal deficit וללא קשר ל-liver failure",
      "הפרעה נוירולוגית מ-hyperammonemia ב-liver failure/cirrhosis",
      "GERD עם regurgitation וללא שינויי mental status או flapping tremor",
      "migraine עם aura חזותית ללא hyperammonemia או asterixis",
    ],
    correctIndex: 1,
    explanation:
      "hepatic encephalopathy: hyperammonemia → neuro dysfunction (confusion, asterixis, coma) ב-liver failure/cirrhosis. טיפול: lactulose, rifaximin. stroke ו-migraine אינם מנגנון אמוניה; GERD לא גורם encephalopathy.",
  },
  {
    id: 63,
    category: "IBD",
    question: "מה ההבדל העיקרי בין Crohn ל-Ulcerative Colitis במיקום?",
    options: [
      "שניהם מוגבלים ל-stomach ו-duodenum ללא מעורבות colonic",
      "Crohn – colon רציף בלבד; UC – skip lesions ב-terminal ileum",
      "Crohn – כל מעי (mouth to anus, skip lesions); UC – colon רציף מ-rectum",
      "UC – כל מעי כולל small bowel; Crohn – מוגבל ל-rectum בלבד",
    ],
    correctIndex: 2,
    explanation:
      "Crohn: כל GI tract, skip lesions, terminal ileum שכיח. UC: continuous inflammation מ-rectum proximally, colon בלבד (לרוב). ההפך מהאפשרויות השגויות הוא בלבול נפוץ.",
  },
  {
    id: 64,
    category: "IBD",
    question: "מה ההבדל ההיסטולוגי העיקרי בין Crohn ל-UC?",
    options: [
      "Crohn תמיד ב-colon בלבד; UC תמיד במעי דק בלבד ללא מעורבות קולונית",
      "שניהם מוגבלים לרירית בלבד ללא מעורבות submucosa, muscularis או serosa",
      "Crohn – transmural, granulomas, skip lesions; UC – רירית/submucosa, crypt abscesses",
      "UC – transmural עם granulomas; Crohn – רירית בלבד רציפה ללא skip lesions",
    ],
    correctIndex: 2,
    explanation:
      "Crohn: transmural inflammation, non-caseating granulomas, skip lesions, fistulas. UC: mucosal/submucosal, crypt abscesses, pseudopolyps, continuous, ללא granulomas. ההפך בין המחלות הוא מלכודת קלאסית.",
  },
  {
    id: 65,
    category: "IBD",
    question: "מהם התסמינים האופייניים ל-Ulcerative Colitis?",
    options: [
      "bloody diarrhea, urgency, tenesmus, כאבי בטן crampy",
      "dysphagia לנוזלים ו-regurgitation עם heartburn retrosternal",
      "אסימפטומטי תמיד עד שלב metastatic, ללא שינוי bowel habits",
      "constipation כרונית ללא דם, עם כאב RLQ ו-mass palpable",
    ],
    correctIndex: 0,
    explanation:
      "UC: bloody diarrhea, urgency, tenesmus, abdominal cramps, weight loss. חומרה לפי extent. constipation + RLQ mass = Crohn terminal ileum; dysphagia = esophageal; UC אינה אסימפטומטית תמיד.",
  },
  {
    id: 66,
    category: "IBD",
    question: "מהם התסמינים האופייניים ל-Crohn disease?",
    options: [
      "צהבת cholestatic בלבד ללא GI symptoms או weight loss",
      "כאב בטן, diarrhea, weight loss, fistulas, mass ב-RLQ",
      "אסימפטומטי תמיד; אבחון רק בסקר colonoscopy ללא תסמינים",
      "heartburn ו-regurgitation בלבד ללא מעורבות מעי או perianal disease",
    ],
    correctIndex: 1,
    explanation:
      "Crohn: chronic diarrhea (לא תמיד דמי), abdominal pain, weight loss, fever, perianal disease, fistulas, obstruction, RLQ mass (terminal ileum). heartburn, צהבת בלבד או אסימפטומטי תמיד – שגוי.",
  },
  {
    id: 67,
    category: "IBD",
    question: "מהו סיבוך שכיח ב-Crohn ופחות אופייני ל-UC?",
    options: [
      "toxic megacolon כסיבוך ייחודי ל-Crohn ללא קשר ל-UC חמור",
      "Barrett esophagus עם intestinal metaplasia ב-distal esophagus",
      "fistulas, strictures ו-abscesses עקב inflammation transmural",
      "CRC ללא דלקת מוקדמת, ללא dysplasia או IBD history",
    ],
    correctIndex: 2,
    explanation:
      "Crohn (transmural): fistulas, strictures, abscesses, obstruction. UC: toxic megacolon, severe bleeding. שניהם סיכון CRC (UC יותר עם pancolitis ארוך). Barrett לא קשור ל-IBD.",
  },
  {
    id: 68,
    category: "IBD",
    question: "מהו toxic megacolon?",
    options: [
      "הגדלת ורידים ב-submucosa של esophagus ב-portal hypertension",
      "הרחבת colon מעל 6 ס\"מ עם systemic toxicity ב-severe colitis (בעיקר UC)",
      "גידול שפיר של colon ללא dilation, fever או leukocytosis",
      "הרחבת esophagus ב-achalasia עם bird-beak sign ב-barium swallow",
    ],
    correctIndex: 1,
    explanation:
      "toxic megacolon: colonic dilation >6cm + toxicity (fever, tachycardia, leukocytosis) ב-severe colitis (בעיקר UC). חירום – IV steroids, surgery אם אין שיפור. achalasia, polyp ו-varices – מלכודות שונות.",
  },
  {
    id: 69,
    category: "IBD",
    question: "מהו הטיפול הראשוני ל-UC קל-בינוני?",
    options: [
      "5-ASA (mesalamine) – topical (enemas) או systemic לפי extent",
      "כימותרפיה מערכתית כטיפול קו ראשון ל-proctitis קלה",
      "PPI בלבד ללא aminosalicylates או topical therapy",
      "fundoplication כירורגית לטיפול ב-disease מוגבל ל-rectum",
    ],
    correctIndex: 0,
    explanation:
      "UC קל-בינוני: 5-ASA (mesalamine) – enemas ל-proctitis, oral ל-extensive. moderate-severe: corticosteroids, biologics. PPI, fundoplication ו-chemo אינם טיפול ל-UC.",
  },
  {
    id: 70,
    category: "IBD",
    question: "מהו הטיפול ל-Crohn moderate-severe?",
    options: [
      "corticosteroids, immunomodulators (azathioprine) ו-biologics (infliximab)",
      "antibiotics PO בלבד ל-Crohn ו-UC ללא biologics, סטרואידים או azathioprine",
      "PPI במינון מלא כטיפול יחיד ל-IBD moderate-severe ללא immunomodulators",
      "colectomy מיידית לכל מטופל עם IBD ללא ניסיון טיפול רפואי או biologics",
    ],
    correctIndex: 0,
    explanation:
      "Crohn moderate-severe: steroids induction, maintenance – azathioprine/6-MP, methotrexate, biologics (infliximab, adalimumab, ustekinumab). nutrition, surgery ל-strictures/fistulas. PPI, H. pylori eradication ו-achalasia dilation לא רלוונטיים.",
  },
  {
    id: 71,
    category: "IBD",
    question: "מהי המשמעות של ASCA ו-p-ANCA ב-IBD?",
    options: [
      "PSA לסקר prostate cancer בחולי IBD, לא markers מעיים",
      "ASCA תומך ב-Crohn, p-ANCA תומך ב-UC – סרולוגיה משלימה, לא אבחון יחיד",
      "HBsAg ו-anti-HCV לאבחון viral hepatitis בלבד, ללא קשר ל-IBD",
      "troponin ו-BNP לסיכון cardiovascular ב-IBD, לא לסיווג מחלה",
    ],
    correctIndex: 1,
    explanation:
      "סרולוגיה IBD: ASCA+ ב-Crohn, p-ANCA+ ב-UC – supportive בלבד. אבחון: clinical, endoscopy, histology. HBsAg, troponin ו-PSA אינם markers ל-IBD.",
  },
  {
    id: 72,
    category: "IBD",
    question: "מהו extraintestinal manifestation אופייני של IBD?",
    options: [
      "Barrett esophagus כביטוי יחיד של IBD – ללא מעורבות מפרקים, עור או כבד",
      "heartburn ו-regurgitation כתסמינים יחידים – EIM טיפוסי של IBD",
      "acute cholecystitis עם RLQ point tenderness – EIM של Crohn ו-UC",
      "arthritis, uveitis, erythema nodosum, pyoderma gangrenosum, PSC",
    ],
    correctIndex: 3,
    explanation:
      "extraintestinal IBD: joint (peripheral, axial), eye (uveitis, episcleritis), skin (erythema nodosum, pyoderma gangrenosum), liver (PSC עם UC), osteoporosis. heartburn ו-Barrett לא EIM טיפוסיים.",
  },
  {
    id: 73,
    category: "IBD",
    question: "מהו primary sclerosing cholangitis (PSC) וקשרו ל-IBD?",
    options: [
      "viral hepatitis B חדה עם HBsAg ו-IgM anti-HBc, ללא קשר ל-UC",
      "cholestasis כרוני מ-fibrosis של bile ducts, קשור בעיקר ל-UC",
      "acute pancreatitis מ-alcohol עם lipase מוגבר, ללא bile duct disease",
      "GERD עם erosions וושטיות; אין קשר ל-cholestasis או IBD",
    ],
    correctIndex: 1,
    explanation:
      "PSC: chronic cholestatic liver disease, fibrosis bile ducts, קשור ל-UC (70-80%). סיכון cholangiocarcinoma. MRCP לאבחון. שונה מ-viral hepatitis, GERD ו-pancreatitis.",
  },
  {
    id: 74,
    category: "IBD",
    question: "מתי מומלץ colonoscopy surveillance ל-CRC ב-UC?",
    options: [
      "לכלל האוכלוסייה ללא IBD, מגיל 20, ללא התחשבות ב-extent או duration",
      "רק לפני גיל 20 ב-UC מוגבלת ל-proctitis ללא סיכון מוגבר",
      "pancolitis מעל 8-10 שנים – biopsies לדיספלזיה (chromoendoscopy מועדף)",
      "אף פעם ב-UC; סקר CRC רק ב-average-risk population",
    ],
    correctIndex: 2,
    explanation:
      "UC CRC surveillance: pancolitis >8-10 years, PSC – colonoscopy עם random/dye-spray biopsies. Crohn colitis גם סיכון. לא ללא IBD, לא רק <20, ולא never.",
  },
  {
    id: 75,
    category: "IBD",
    question: "מהו microscopic colitis?",
    options: [
      "IBS – שלשול לסירוגין; calprotectin תקין; histology נורמלית ב-biopsy ללא collagen band",
      "שלשול כרוני עם histology אבנורמלית (lymphocytic/collagenous) ו-colonoscopy תקין מקרוסקופית",
      "UC – crypt abscesses, דימום רציף ב-colonoscopy; מעורבות mucosa/submucosa ללא skip lesions",
      "Crohn – transmural inflammation, skip lesions, granulomas ב-biopsy; לא collagenous colitis",
    ],
    correctIndex: 1,
    explanation:
      "microscopic colitis: chronic watery diarrhea, normal colonoscopy macroscopically, biopsy shows lymphocytic או collagenous colitis. טיפול: budesonide. לא UC severe, Crohn fistula או GERD.",
  },
  {
    id: 76,
    category: "IBD",
    question: "כיצד calprotectin בצואה מסייע לפי הסיכום?",
    options: [
      "אבחנה מבדלת בין IBD ל-IBS ומעקב תגובה לטיפול",
      "סקר CRC ב-average risk ללא תסמינים או דלקת",
      "אבחון GERD עם pH monitoring בלבד ללא בדיקות דלקת",
      "אבחון cholelithiasis ב-US בלבד ללא מדד דלקת מעי",
    ],
    correctIndex: 0,
    explanation:
      "בסיכום: calprotectin מופרש מנויטרופילים בדלקת מעי; שימושים: (1) אבחנה מבדלת IBD מ-IBS; (2) מעקב – ירידה מעידה על החלמת רירית.",
  },
  {
    id: 77,
    category: "IBD",
    question: "מהו pouchitis?",
    options: [
      "דלקת של ileal pouch לאחר IPAA (colectomy) ל-UC",
      "דלקת כיס מרה חריפה עם Murphy sign ו-obstruction של cystic duct",
      "GERD עם reflux ל-denuded esophageal mucosa ו-stricture",
      "achalasia עם אי-מנוחה של LES ואובדן peristalsis וושטי",
    ],
    correctIndex: 0,
    explanation:
      "pouchitis: inflammation של ileal pouch אחרי colectomy + IPAA ל-UC. תסמינים: increased stool frequency, urgency, bleeding. טיפול: antibiotics (cipro/metronidazole). לא cholecystitis, GERD או achalasia.",
  },
  {
    id: 78,
    category: "סרטן מעי גס",
    question: "מהו מסלול השכיח ביותר ל-colorectal cancer (CRC)?",
    options: [
      "adenoma-carcinoma sequence (APC, KRAS, p53) מ-polyp דרך dysplasia",
      "מעבר ישיר מ-UC ל-CRC ללא polyp או dysplasia בכל המקרים",
      "זיהום viral בלבד (HPV) כגורם עיקרי ל-CRC sporadic",
      "Barrett metaplasia של esophagus כמסלול עיקרי ל-CRC",
    ],
    correctIndex: 0,
    explanation:
      "CRC pathway שכיח: adenomatous polyp → carcinoma (chromosomal instability: APC, KRAS, p53). microsatellite instability (Lynch). UC dysplasia pathway נפרד. לא viral בלבד או Barrett (esophagus).",
  },
  {
    id: 79,
    category: "סרטן מעי גס",
    question: "מהם גורמי הסיכון העיקריים ל-CRC?",
    options: [
      "צמחונות כגורם סיכון יחיד; מים ופעילות גופנית מעלים סיכון לחלוטין",
      "H. pylori כגורם הסיכון היחיד; ללא תפקיד לגיל או family history",
      "גיל, polyp history, IBD, Lynch/FAP, בשר אדום, obesity, עישון",
      "שתיית מים בלבד ו-PPI כגורמי סיכון מרכזיים ל-adenocarcinoma מעי גס",
    ],
    correctIndex: 2,
    explanation:
      "גורמי סיכון CRC: age >50, adenomatous polyps, IBD, family history, Lynch, FAP, diet (red/processed meat), obesity, smoking, diabetes. צמחונות מגנה; מים ו-PPI לא גורמים. H. pylori לא גורם CRC.",
  },
  {
    id: 80,
    category: "סרטן מעי גס",
    question: "מהו Lynch syndrome (HNPCC)?",
    options: [
      "H. pylori gastritis כרונית עם סיכון gastric MALT בלבד",
      "מוטציה ב-MMR genes – CRC מוקדם, endometrial, ovarian ו-gastric",
      "FAP עם APC mutation ואלפי adenomatous polyps ב-colon צעיר",
      "GERD כרוני עם Barrett ו-adenocarcinoma וושטי distal",
    ],
    correctIndex: 1,
    explanation:
      "Lynch (HNPCC): inherited MMR mutations (MLH1, MSH2...) → MSI-high CRC, endometrial, ovarian, gastric. FAP = APC, thousands polyps. H. pylori ו-GERD/Barrett לא Lynch.",
  },
  {
    id: 81,
    category: "סרטן מעי גס",
    question: "מהו FAP (familial adenomatous polyposis)?",
    options: [
      "UC עם pancolitis ו-pseudopolyps – ללא APC mutation או polyposis",
      "polyp אדנומטי בודד sporadic ללא גנטיקה – אין סיכון ל-FAP או CRC עד 40",
      "Lynch syndrome עם MMR deficiency – polyp count נמוך; סרטן בגיל 40-60",
      "APC mutation – מאות-אלפי adenomatous polyps, CRC כמעט ודאי ללא colectomy",
    ],
    correctIndex: 3,
    explanation:
      "FAP: autosomal dominant APC mutation, hundreds-thousands colonic adenomas, near 100% CRC risk without prophylactic colectomy. extracolonic: duodenal, desmoid. Lynch = MMR. polyp בודד או UC שונים.",
  },
  {
    id: 82,
    category: "סרטן מעי גס",
    question: "מהו סקר CRC המומלץ לאוכלוסייה average-risk?",
    options: [
      "upper endoscopy (EGD) בלבד ללא בדיקת colon",
      "colonoscopy כל 10 שנים מגיל 45-50, או FIT שנתי, או חלופות מוכחות",
      "בדיקת B12 בדם שנתית כתחליף ל-colonoscopy או FIT",
      "אין סקר מומלץ; אבחון רק עם תסמינים (דימום, obstruction)",
    ],
    correctIndex: 1,
    explanation:
      "CRC screening average risk (45-50+): colonoscopy q10y, annual FIT/FOBT, flexible sigmoidoscopy, CT colonography, stool DNA – per guidelines. לא no screening, B12 או EGD alone.",
  },
  {
    id: 83,
    category: "סרטן מעי גס",
    question: "מהו המיקום השכיח ביותר ל-CRC?",
    options: [
      "duodenum ו-jejunum כמיקום ראשוני שכיח ל-adenocarcinoma מעי",
      "rectosigmoid ו-rectum – המיקום השכיח ביותר ל-CRC",
      "cecum בלבד; rectum ו-sigmoid נדירים יחסית ל-CRC",
      "esophagus proximal – squamous או adenocarcinoma וושטי",
    ],
    correctIndex: 1,
    explanation:
      "CRC שכיח ב-rectum ו-sigmoid colon. יורד ב-proximal colon בשנים האחרונות במערב. esophagus = esophageal cancer; duodenum/jejunum נדירים ל-primary CRC.",
  },
  {
    id: 84,
    category: "סרטן מעי גס",
    question: "מהם התסמינים האופייניים ל-CRC?",
    options: [
      "צהבת בלבד ללא hematochezia, weight loss או שינוי caliber",
      "דם בצואה, שינוי bowel habits, weight loss, anemia, obstruction",
      "dysphagia לנוזלים בלבד ללא שינוי צואה או anemia",
      "heartburn retrosternal ו-regurgitation המגיבים ל-PPI",
    ],
    correctIndex: 1,
    explanation:
      "CRC: hematochezia/melena, change in stool caliber/frequency, abdominal pain, weight loss, iron deficiency anemia, obstruction (left-sided). early may be asymptomatic. heartburn, dysphagia alone, jaundice alone לא typical.",
  },
  {
    id: 85,
    category: "סרטן מעי גס",
    question: "מהי המשמעות הקלינית של CEA ב-CRC?",
    options: [
      "marker לאבחון H. pylori; חיובי עם gastritis אקטיבית",
      "אבחון יחיד וסקר first-line ל-CRC באוכלוסייה asymptomatic",
      "marker ל-GERD ו-erosive esophagitis; עולה עם reflux חמור",
      "tumor marker למעקב recurrence לאחר resection – לא לסקר אוכלוסייה",
    ],
    correctIndex: 3,
    explanation:
      "CEA: elevated ב-CRC, משמש monitoring recurrence post-resection, לא screening (low sensitivity/specificity). לא diagnosis alone, GERD marker או H. pylori marker.",
  },
  {
    id: 86,
    category: "סרטן מעי גס",
    question: "מהו staging העיקרי ל-CRC?",
    options: [
      "TNM – עומק גידול (T), lymph nodes (N), metastasis (M)",
      "גודל polyp בלבד – ללא הערכת lymph nodes או metastasis",
      "גיל המטופל ו-CEA בלבד – קובעים prognosis ללא imaging",
      "מספר polyps ב-colonoscopy – ללא histology או invasion depth",
    ],
    correctIndex: 0,
    explanation:
      "CRC staging: TNM – T (tumor depth), N (lymph nodes), M (metastasis). Stage I-IV determines prognosis/treatment. polyp size, age, CEA alone לא staging מלא.",
  },
  {
    id: 87,
    category: "סרטן מעי גס",
    question: "לאיזה איבר CRC metastasizes הכי שכיח?",
    options: [
      "מוח בלבד כאתר metastasis ראשון בכל מקרי CRC",
      "כבד – דרך portal venous drainage מהמעי הגס",
      "עור כ-metastasis שכיחה ראשונה לפני כבד או ריאות",
      "ריאות בלבד תמיד ראשונות, ללא מעורבות כבד בשלב מוקדם",
    ],
    correctIndex: 1,
    explanation:
      "CRC metastasis שכיח לכבד (portal venous drainage). גם lungs, peritoneum. לא lungs always first, brain alone או skin primary.",
  },
  {
    id: 88,
    category: "אנדוסקופיה",
    question: "מהו EGD (esophagogastroduodenoscopy)?",
    options: [
      "MRI של כבד ודרכי מרה – ללא גישה endoscopic למעי עליון",
      "אנדוסקופיה של colon עד cecum עם polypectomy וביופסיות",
      "CT abdomen עם contrast – הדמיה רדיולוגית ללא ביופסיה ישירה",
      "אנדוסקופיה של esophagus, stomach ו-duodenum – מעי עליון",
    ],
    correctIndex: 3,
    explanation:
      "EGD: upper endoscopy – esophagus, stomach, duodenum. לאבחון GERD, ulcers, H. pylori biopsy, varices, Barrett. colonoscopy = lower GI; CT/MRI לא endoscopy.",
  },
  {
    id: 89,
    category: "אנדוסקופיה",
    question: "מהו colonoscopy?",
    options: [
      "capsule endoscopy של small bowel – ללא גישה ל-colon",
      "אנדוסקופיה של כל ה-colon עד cecum – polypectomy, biopsies, סקר CRC",
      "ERCP – canulation של ampulla עם contrast ל-bile/pancreatic ducts",
      "אנדוסקופיה עליונה של esophagus ו-stomach בלבד",
    ],
    correctIndex: 1,
    explanation:
      "colonoscopy: entire colon to cecum, screening, polypectomy, biopsy IBD/CRC. EGD = upper. ERCP = biliary/pancreatic ducts. capsule endoscopy = small bowel.",
  },
  {
    id: 90,
    category: "אנדוסקופיה",
    question: "מהו ERCP?",
    options: [
      "colonoscopy עם bowel prep – הדמיה של colon ללא cannulation של ampulla",
      "endoscopic retrograde cholangiopancreatography – דימות וטיפול בדרכי מרה/לבלב",
      "EGD סטנדרטי ללא injection contrast ל-bile או pancreatic ducts",
      "barium swallow – fluoroscopy של esophagus ללא endoscope או cannulation",
    ],
    correctIndex: 1,
    explanation:
      "ERCP: endoscope ל-duodenum, cannulation ampulla, contrast ל-bile/pancreatic ducts, stone extraction, stent, sphincterotomy. סיכון post-ERCP pancreatitis. לא colonoscopy, EGD alone או barium swallow.",
  },
  {
    id: 91,
    category: "אנדוסקופיה",
    question: "מתי נדרשות biopsies ב-Barrett esophagus?",
    options: [
      "רק ב-CT chest – ללא endoscopic sampling של esophageal mucosa",
      "PPI מלא + EGD כל שנתיים לפי הסיכום",
      "אף פעם – Barrett מאובחן ויזואלית בלבד ללא histology",
      "רק ב-colonoscopy – Barrett אינו אינדיקציה ל-biopsy ב-EGD",
    ],
    correctIndex: 1,
    explanation:
      "Barrett בסיכום: PPI מלא; מעקב EGD כל שנתיים לשלילת התפתחות סרטנית. לא never, colonoscopy או CT.",
  },
  {
    id: 92,
    category: "אנדוסקופיה",
    question: "מהו endoscopic variceal band ligation?",
    options: [
      "הסרת colonic polyp ב-snare electrocautery במהלך colonoscopy",
      "טיפול endoscopic ב-varices וושטיות/גסטריות – rubber bands לעצירת דימום",
      "הזרקת PPI IV ל-varices – עצירת דימום pharmacologic בלבד",
      "כימותרפיה systemic ל-esophageal varices – ללא endoscopic therapy",
    ],
    correctIndex: 1,
    explanation:
      "endoscopic variceal band ligation: rubber bands על varices לעצירת דימום/מניעה. polypectomy = snare. PPI IV לא ligation. chemo לא endoscopic hemostasis.",
  },
  {
    id: 93,
    category: "אנדוסקופיה",
    question: "מהי הכנה נאותה ל-colonoscopy?",
    options: [
      "ארוחה כבדה עשירה בשומן לפני 12 שעות – לשיפור visualization",
      "MRI abdomen בלבד – ללא bowel prep או צום",
      "צום נוזלים, bowel prep (PEG), הפסקת anticoagulants לפי פרוטוקול",
      "ללא צום – אכילה רגילה עד השעה שלפני הבדיקה",
    ],
    correctIndex: 2,
    explanation:
      "colonoscopy prep: clear liquids, bowel prep (PEG solution), hold iron/anticoagulants per protocol. heavy meal, no fast, MRI לא prep.",
  },
  {
    id: 94,
    category: "אנדוסקופיה",
    question: "מהו capsule endoscopy?",
    options: [
      "קפסולה בליעה עם מצלמה – הדמיית מעי דק (obscure bleeding, Crohn)",
      "colonoscopy מלאה עם CO2 insufflation ו-polypectomy",
      "ERCP עם sphincterotomy – לא מתאים ל-small bowel imaging",
      "ERCP עם sphincterotomy – לא מתאים ל-small bowel imaging",
    ],
    correctIndex: 0,
    explanation:
      "capsule endoscopy: wireless camera capsule ל-small bowel (obscure bleeding, Crohn). לא colon, EGD או ERCP.",
  },
  {
    id: 95,
    category: "אנדוסקופיה",
    question: "מהו polypectomy במהלך colonoscopy?",
    options: [
      "fundoplication – כירורגיה ל-GERD, לא procedure ב-colonoscopy",
      "הסרת adenomatous polyp (snare) – מניעת התקדמות ל-CRC",
      "כריתת appendix laparoscopic – לא מתבצעת במהלך colonoscopy",
      "Heller myotomy – טיפול ב-achalasia, לא ב-colon",
    ],
    correctIndex: 1,
    explanation:
      "polypectomy: removal adenomatous polyp during colonoscopy – prevents CRC. appendectomy, fundoplication ו-myotomy = procedures אחרים.",
  },
  {
    id: 96,
    category: "אנדוסקופיה",
    question: "מה תפקיד VCE (קפסולה אנדוסקופית) לפי הסיכום?",
    options: [
      "הוצאת אבנים מ-CBD כחלופה ל-ERCP במעי דק",
      "סקר Barrett עם biopsies כל שנה ללא VCE",
      "טיפול ב-varices בוושט עם קשירת דליות בגסטרוסקופיה",
      "בירור דימום ממקור לא ידוע במעי הדק; אבחון Crohn במעי דק",
    ],
    correctIndex: 3,
    explanation:
      "בסיכום: VCE – מצלמה נבלעת; דימום ממקור לא ידוע אחרי בדיקות תקינות; Crohn במעי דק. לא varices, Barrett surveillance או אבנים.",
  },
  {
    id: 97,
    category: "סרטן מעי גס",
    question: "מהי תסמונת Peutz-Jeghers לפי הסיכום?",
    options: [
      "Lynch – MMR mutation; סרטן מעי גס בגיל 40-60; פוליפים מעטים יחסית",
      "average-risk CRC screening מגיל 50 עם FIT – ללא פיגמנטציה או פוליפים hamartomatous",
      "FAP – מאות פוליפים מגיל 10-12; APC mutation; כמעט 100% CRC עד 40 ללא colectomy",
      "מחלה גנטית נדירה – כתמי פיגמנטציה בשפתיים ופה + פוליפים במעי; מעלה סיכון לסרטן",
    ],
    correctIndex: 3,
    explanation:
      "בסיכום: Peutz-Jeghers – כתמים כהים בשפתיים/פה + פוליפים לאורך GI; מעלה סיכון לסרטן במעי. FAP ו-Lynch הם תסמונות אחרות מהסיכום.",
  },
  {
    id: 98,
    category: "IBD",
    question: "איך מבדילים IBD מ-IBS לפי הסיכום?",
    options: [
      "H. pylori breath test כבדיקה ראשונה להבחנה IBD/IBS",
      "תסמינים פונקציונליים בלבד ללא בדיקות מעבדה או אנדוסקופיה",
      "Murphy sign ב-RUQ להבחנה בין Crohn ל-UC",
      "calprotectin בצואה גבוה ב-IBD ונמוך ב-IBS; CRP/ESR; אנדוסקופיה",
    ],
    correctIndex: 3,
    explanation:
      "בסיכום: calprotectin מבדיל IBD מ-IBS; גם CRP/ESR; אנדוסקופיה עם biopsies לאבחנת IBD.",
  },
  {
    id: 99,
    category: "שונות",
    question: "מהם מקורות דימום GI לפי הסיכום?",
    options: [
      "רק דימום עליון ו-קרע וושטי בכל דימום",
      "רק מצב קולוני (לא מפורט בסיכום) ו-מקור דימום – ללא מקור עליון",
      "varices בלבד בכל hematemesis ללא PUD",
      "עליון: PUD, varices; hematemesis ו-melena; תסמינים מעידים על דימום פעיל",
    ],
    correctIndex: 3,
    explanation:
      "בסיכום: hematemesis ו-melena = דימום פעיל בוושט/עליון; PUD דימום נפוץ; varices ב-cirrhosis. אינדיקציות colonoscopy: דימום רקטלי.",
  },
  {
    id: 100,
    category: "שונות",
    question: "מהו flapping tremor (asterixis) לפי הסיכום?",
    options: [
      "רעד ב-Wilson disease בלבד ללא קשר לכבד או לאמוניה",
      "סימן ב-GERD עם heartburn ללא encephalopathy",
      "רעד בידיים באנצפלופתיה כבדית – מאמוניה שלא מסוננת",
      "כאב RLQ ב-cholecystitis עם Murphy sign חיובי",
    ],
    correctIndex: 2,
    explanation:
      "בסיכום: אנצפלופתיה כבדית – אמוניה מגיעה למוח; flapping tremor (דורסי פלקשן). Wilson יש נזק נוירולוגי אך asterixis ספציפי ל-encephalopathy.",
  },
  {
    id: 101,
    category: "היסטולוגיה",
    question: "מהו תפקיד tight junctions (צמות הדוקות) בין אנטרוציטים במעי הדק?",
    options: [
      "הפרשת mucus ו-bicarbonate מ-goblet cells לשכבת הרירית הקיבתית",
      "יצירת microvilli (brush border) המגדילים שטח אפיתל לספיגת נוטריינטים",
      "יצירת מחסום פרה-תאי ומניעת מעבר חומרים בין אנטרוציטים",
      "קישור אנטרוציטים ל-basement membrane דרך hemidesmosomes ו-desmosomes",
    ],
    correctIndex: 2,
    explanation:
      "tight junctions (zonula occludens) יוצרים מחסום פרה-תאי בין אנטרוציטים סמוכים, מונעים מעבר חומרים מחלל המעי ל-lamina propria בין התאים, ומאפשרים ספיגה טרנס-תאית סלקטיבית. פגיעה בהן (למשל ב-מחלה אחרת (לא בסיכום)) גורמת ל-'leaky gut'. goblet cells מפרישים mucus; microvilli הם הארכות תא; hemidesmosomes מחברים ל-basement membrane.",
  },
  {
    id: 102,
    category: "היסטולוגיה",
    question: "מה נמצא בליבת (core) כל villus במעי הדק?",
    options: [
      "lacteal (צינור לימפה מרכזי) ורשת capillaries לספיגת חומרים ממוססים",
      "Peyer's patch במרכז כל villus לספיגת חלבונים",
      "hepatic portal vein ישירות בתוך villus ללא capillaries",
      "bile duct בתוך villus לאמולסיה של שומנים",
    ],
    correctIndex: 0,
    explanation:
      "ליבת villus מכילה lacteal מרכזי (לספיגת chylomicrons ושומנים) ורשת capillaries (לספיגת חומרים ממוססים במים). האפיתל מכסה מבחוץ. Brunner glands נמצאות ב-submucosa של duodenum. plexus myenteric ממוקם ב-muscularis propria, לא ב-villi.",
  },
  {
    id: 103,
    category: "היסטולוגיה",
    question: "מה מאפיין את rugae בקיבה?",
    options: [
      "קפלים אורכיים של mucosa ו-submucosa המאפשרים התרחבות קיבתית",
      "קפלים מעגליים ב-muscularis externa של המעי הגס (taenia coli)",
      "בלוטות אלקליניות ב-submucosa של duodenum (Brunner glands)",
      "מבנים דמויי אצבע (plica circulares) ב-jejunum לעליית שטח ספיגה",
    ],
    correctIndex: 0,
    explanation:
      "rugae הם קפלים אורכיים של mucosa ו-submucosa בקיבה, המאפשרים התרחבות לאחסון מזון. plica circulares (valves of Kerckring) נמצאים ב-jejunum. taenia coli הם פסי שריר במעי הגס. Brunner glands ב-duodenum.",
  },
  {
    id: 104,
    category: "היסטולוגיה",
    question: "מהו תפקיד תאי Kupffer בכבד?",
    options: [
      "סינתזת albumin וגורמי קרישה (clotting factors) ב-hepatocytes",
      "מקרופאגים קבועים ב-sinusoids – בליעת חיידקים וחלקיקים מהדם הפורטלי",
      "אחסון ויטמין A וייצור extracellular matrix בזמן מנוחה",
      "הפרשת bile ל-bile canaliculi בין hepatocytes",
    ],
    correctIndex: 1,
    explanation:
      "תאי Kupffer הם מקרופאגים של מערכת מונונוקליארית פגוציטרית, יושבים על endothelium של sinusoids, ומסננים חיידקים, endotoxin וחלקיקים מהדם הפורטלי. hepatocytes מייצרים albumin, clotting factors ו-bile. Stellate cells (Ito) מאחסנים ויטמין A ומופעלים ל-fibrosis.",
  },
  {
    id: 105,
    category: "היסטולוגיה",
    question: "מה קורה ל-hepatic stellate cells (Ito) בכבד במחלה כרונית?",
    options: [
      "מתמיינים ל-hepatocytes חדשים ומשחזרים נגזרת אפיתל כבד",
      "מאבדים ויטמין A ומפרישים bile salts ישירות ל-sinusoids",
      "הופכים ל-Kupffer cells ומגבירים phagocytosis של patogenים",
      "מופעלים ל-myofibroblasts, מפרישים collagen → פיברוזיס ו-cirrhosis",
    ],
    correctIndex: 3,
    explanation:
      "במנוחה stellate cells מאחסנים ויטמין A. באקטיבציה (על ידי TGF-β, נזק כרוני) הם הופכים ל-myofibroblasts, מפרישים collagen type I ו-III → פיברוזיס → cirrhosis. hepatocyte regeneration הוא תהליך נפרד. Kupffer cells הם lineage שונה.",
  },
  {
    id: 106,
    category: "וושט",
    question: "מהו תפקיד UES (upper esophageal sphincter)?",
    options: [
      "שולט בזרימת bile ו-pancreatic enzymes ל-duodenum",
      "מפריד בין pharynx ל-esophagus; סגור במנוחה למניעת אספירציה",
      "מווסת את כניסת אוויר לריאות במהלך בליעה",
      "מפריד בין esophagus ל-stomach ומונע GERD במנוחה",
    ],
    correctIndex: 1,
    explanation:
      "UES (cricopharyngeus) מפריד בין pharynx ל-esophagus, סגור במנוחה, ונפתח בבליעה רצונית. LES מפריד esophagus מ-stomach ומונע reflux. sphincter of Oddi שולט בזרימת bile/pancreatic juice. UES אינו קשור ל-GERD או ל-aspiration לריאות ישירות.",
  },
  {
    id: 107,
    category: "וושט",
    question: "מהו מבנה שרירי ה-esophagus לפי שלישים (proximal → distal)?",
    options: [
      "כולו skeletal muscle (רצוני) – כמו pharynx",
      "3 שכבות smooth muscle אורכיות, זהות ל-muscularis propria של הקיבה",
      "כולו smooth muscle (לא רצוני) לאורך כל הוושט",
      "עליון: skeletal; אמצעי: mixed; תחתון: smooth muscle",
    ],
    correctIndex: 3,
    explanation:
      "muscularis externa של ה-esophagus: שליש עליון – skeletal (רצוני, innervation מ-vagus); שליש אמצעי – mixed; שליש תחתון – smooth (לא רצוני, peristalsis אוטונומית). מבנה זה תואם מעבר מבליעה רצונית לפריסטלטיקה אוטומטית.",
  },
  {
    id: 108,
    category: "וושט",
    question: "מהם אמצעי האבחון העיקריים ל-GERD?",
    options: [
      "serology ל-H. pylori IgG כאבחון יחיד ל-reflux",
      "CT בטן בלבד ללא endoscopy או מדידת pH",
      "ניסיון טיפולי ב-PPI, pH monitoring 24 שעות, EGD (גסטרוסקופיה)",
      "colonoscopy, FIT (fecal immunochemical test) ו-CEA",
    ],
    correctIndex: 2,
    explanation:
      "אבחון GERD: (1) PPI trial – תגובה תומכת באבחנה; (2) ambulatory pH/impedance monitoring – כשהאבחנה לא ברורה או לפני ניתוח; (3) EGD – esophagitis, Barrett, שלילת מחלות אחרות. colonoscopy/FIT/CEA ל-CRC. H. pylori serology לא מאבחן GERD.",
  },
  {
    id: 109,
    category: "וושט",
    question: "מהם שינויי אורח חיים המומלצים ב-GERD?",
    options: [
      "הגדלת ארוחות לילה כבדות, שכיבה מיד אחרי אכילה והימנעות מפעילות גופנית",
      "הגבלת נוזלים בלבד ללא שינוי משקל, עישון, תזונה או תזמון ארוחות",
      "משקל נאות, הרמת מראשות, הימנעות מאכילה לפני שינה, הפסקת עישון, הימנעות מטריגרים",
      "fundoplication כטיפול ראשון לפני כל ניסיון תרופתי, PPI או שינוי התנהגות",
    ],
    correctIndex: 2,
    explanation:
      "שינויי אורח חיים ב-GERD: ירידה במשקל, הרמת מראשות 15–30°, הימנעות מארוחות לילה ושכיבה מיד אחרי אוכל, לעיסה איטית, הפסקת עישון, הימנעות מקפאין, אלכוהול, שומנים וחריפים, והימנעות מתרופות מחמירות reflux. fundoplication שמור למקרים עמידים לטיפול רפואי.",
  },
  {
    id: 110,
    category: "פצעת עיכול / גסטריטיס",
    question: "מהם מנגנוני ההגנה התקינים של gastric mucosa?",
    options: [
      "gastrin ו-histamine כחומרים מגנים על הרירית מפני חומצה",
      "שכבת mucus, bicarbonate מקומי, ו-prostaglandins (PGE2)",
      "tight junctions בלבד ללא שכבת ריר או ביקרבונט",
      "HCl ו-pepsinogen כמנגנוני הגנה עיקריים מפני פציעה",
    ],
    correctIndex: 1,
    explanation:
      "הגנת רירית קיבתית: (1) mucus gel – מחסום פיזי; (2) bicarbonate – ניטרול חומצה בשכבה הסטומית; (3) prostaglandins – מגבירים זרימת דם, mucus ו-bicarbonate. HCl ו-pepsin הם גורמי פגיעה; gastrin מגביר חומציות. NSAIDs פוגעים ב-prostaglandins.",
  },
  {
    id: 111,
    category: "פצעת עיכול / גסטריטיס",
    question: "מהם סיבוכי peptic ulcer disease (PUD)?",
    options: [
      "fistulas perianal, strictures ו-abscesses טרנסמורליים – סיבוכי PUD",
      "toxic megacolon, fulminant colitis ו-CRC מיידי – סיבוכי פצעת",
      "דימום (hematemesis/melena), perforation, gastric outlet obstruction",
      "צהבת cholestatic, ascites ו-hepatic encephalopathy – סיבוכי PUD",
    ],
    correctIndex: 2,
    explanation:
      "סיבוכי PUD: hemorrhage (הנפוץ ביותר), perforation (חירום כירורגי, free air), obstruction (stricture/edema במוצא קיבה). צהבת/ascites/encephalopathy קשורים ל-liver disease. fistulas/strictures אופייניים ל-Crohn. toxic megacolon ל-UC חמור.",
  },
  {
    id: 112,
    category: "פצעת עיכול / גסטריטיס",
    question: "מה ההבדל העיקרי בין gastric ulcer ל-duodenal ulcer?",
    options: [
      "gastric ulcer: כאב מוחמר באוכילה + biopsy; duodenal: מוקל באוכילה, H. pylori",
      "gastric ulcer: שכיח יותר; duodenal ulcer: קשור ל-NSAIDs בלבד ללא H. pylori",
      "שניהם מוקלים באוכילה; שניהם ללא סיכון malignancy וללא צורך ב-biopsy",
      "שניהם מחמירים באכילה; שניהם דורשים biopsies חובה לשלילת malignancy",
    ],
    correctIndex: 0,
    explanation:
      "gastric ulcer: כאב מוחמר באכילה (contact עם פצעת), סיכון adenocarcinoma – EGD עם biopsies חובה. duodenal ulcer: שכיח יותר, ~90% H. pylori, כאב מוקל באוכילה (neutralization חומצה), nocturnal pain, סיכון malignancy נמוך. anterior duodenal → perforation; posterior → bleeding (gastroduodenal artery).",
  },
  {
    id: 113,
    category: "פצעת עיכול / גסטריטיס",
    question: "מהן תופעות לוואי עיקריות של טיפול ארוך טווח ב-PPI?",
    options: [
      "שחמת (cirrhosis) ו-hepatocellular carcinoma תוך שבועות",
      "אנמיית B12 חיונית ותמידית בכל מטופל תוך ימים",
      "שלשול, אוסטאופורוזיס/סיכון שברים, עלייה בסיכון pneumonia ו-CDI",
      "צהבת מכאנית, ascites ו-INR מוגבר מיידית",
    ],
    correctIndex: 2,
    explanation:
      "תופעות לוואי PPI ארוכי טווח: שלשול; ירידה בספיגת סידן → אוסטאופורוזיס; עלייה בסיכון community-acquired pneumonia (פגיעה בקו הגנה חומצי); Clostridioides difficile infection. B12 deficiency אפשרית אך לא תמידית/מיידית. PPI לא גורמים ישירות ל-cirrhosis או צהבת מכאנית.",
  },
  {
    id: 114,
    category: "פיזיולוגיה והורמונים",
    question: "מהם תפקידי HCl (חומצת קיבה)?",
    options: [
      "ספיגת גלוקוז דרך SGLT1 ב-villi של הקיבה",
      "ניטרול salivary amylase, הפעלת pepsinogen→pepsin, חיסול patogenים",
      "עיכול מלא של שומנים עם pancreatic lipase בקיבה",
      "הפרשת bile מכיס המרה וספיגת B12 עם intrinsic factor",
    ],
    correctIndex: 1,
    explanation:
      "HCl (pH 1.5–3.5): (1) ניטרול salivary amylase; (2) המרת pepsinogen ל-pepsin לעיכול חלבון; (3) bactericidal effect; (4) יצירת סביבה חומצית לעיכול. B12 נספג ב-terminal ileum עם intrinsic factor. bile מיוצר בכבד. ספיגת מים עיקרית במעי הגס.",
  },
  {
    id: 115,
    category: "פיזיולוגיה והורמונים",
    question: "מהם 3 זוגות בלוטות הרוק (salivary glands)?",
    options: [
      "goblet cells בלבד בכל בלוטות הרוק ללא acinar cells",
      "Brunner glands ב-duodenum, Paneth cells ב-crypts, hepatic acini בכבד",
      "parotid (תת-אוזנית), submandibular (תת-לסתית), sublingual (תת-לשונית)",
      "gastric glands בפה – HCl ו-pepsinogen מפרישים בלוטות הרוק",
    ],
    correctIndex: 2,
    explanation:
      "3 זוגות בלוטות רוק: parotid (serous, עמילאז), submandibular (mixed), sublingual (mucous). רוק מכיל amylase, mucin, lysozyme. Brunner glands ב-duodenum; hepatic acini בכבד; Paneth בקריפטות מעי דק. כבד/לבלב/קיבה אינם בלוטות רוק.",
  },
  {
    id: 116,
    category: "פיזיולוגיה והורמונים",
    question: "מהם תפקידי המעי הגס (large intestine)?",
    options: [
      "ספיגת B12 עם intrinsic factor; enterohepatic circulation של bile acids ב-terminal ileum",
      "ספיגת מים ואלקטרוליטים, הפרשת mucus, יצירת צואה, סינתזת ויטמינים (K, B) ע\"י microbiota",
      "הפרשת bile ו-pancreatic enzymes; ניטרול חומצה קיבתית – תפקיד duodenum ולא המעי הגס",
      "עיכול חלבונים וספיגת amino acids – תפקיד עיקרי של jejunum ו-ileum, לא המעי הגס",
    ],
    correctIndex: 1,
    explanation:
      "מעי גס (~1.5 מ'): ספיגת מים/NaCl; הפרשת mucus; יצור feces; bacterial synthesis של ויטמין K ו-B. אין עיכול/ספיגת נוטריינטים משמעותית (נעשה במעי דק). bile/pancreatic enzymes פועלים ב-duodenum. B12 נספג ב-terminal ileum.",
  },
  {
    id: 117,
    category: "פיזיולוגיה והורמונים",
    question: "מהו תפקיד ה-mesentery במעי הדק?",
    options: [
      "בלוטות הפרשה של digestive enzymes ל-lumen – כמו Brunner glands",
      "שכבת אפיתל עם microvilli לספיגת נוטריינטים – תפקיד enterocytes",
      "חיבור המעי לדופן הבטן, מעבר כלי דם/לימפה/עצבים, תמיכה מבנית",
      "יצירת bile salts ו-enterohepatic circulation – תפקיד כבד ב-mesentery",
    ],
    correctIndex: 2,
    explanation:
      "mesentery – קפל peritoneal כפול המחבר jejunum/ileum ל-posterior abdominal wall; מכיל superior mesenteric vessels, lymphatics, nerves; מאפשר תנועה מבוקרת ומונע volvulus. אפיתל עם microvilli על villi. enzymes מופרשים מ-pancreas. bile בכבד.",
  },
  {
    id: 118,
    category: "פיזיולוגיה והורמונים",
    question: "מהו תפקיד sphincter of Oddi?",
    options: [
      "ספיגת B12 ב-terminal ileum עם intrinsic factor מ-parietal cells",
      "הפרשת gastrin מ-G cells והגברת HCl בגוף ואנטרום הקיבה",
      "עיכול מכני של פחמימות עם salivary amylase בפה לפני הגעה ל-duodenum",
      "ויסות זרימת bile ו-pancreatic juice ל-duodenum; מניעת reflux לצינורות",
    ],
    correctIndex: 3,
    explanation:
      "sphincter of Oddi (hepatopancreatic sphincter) ב-major duodenal papilla שולט בזרימת bile ו-pancreatic secretions ל-duodenum, מונע reflux. פגיעה/spasm/post-ERCP → pancreatitis. internal anal sphincter ל-defecation. LES נפרד. gastrin מ-G cells.",
  },
  {
    id: 119,
    category: "פיזיולוגיה והורמונים",
    question: "מהם תפקידי חלקי המעי הדק (duodenum, jejunum, ileum)?",
    options: [
      "כל חלקי המעי הדק: ספיגת מים ואלקטרוליטים בלבד – ללא הבדל אנטומי או פונקציונלי",
      "duodenum: ערבוב enzymatic וניטרול חומצה; jejunum: ספיגה עיקרית; ileum: bile acids, B12, Peyer's patches",
      "jejunum: ניטרול חומצה ו-Brunner glands; duodenum: ספיגה עיקרית; ileum: ללא תפקיד מיוחד",
      "duodenum: ספיגת B12 ו-Peyer's patches; jejunum: Brunner glands; ileum: עיכול חלבונים ראשוני",
    ],
    correctIndex: 1,
    explanation:
      "duodenum (~25 ס\"מ): קבלת gastric chyme, pancreatic enzymes ו-bile, neutralization חומצית. jejunum (~2.5 מ'): ספיגה עיקרית, plicae circulares, villi רבים. ileum (~3.5 מ'): enterohepatic circulation של bile acids, B12+IF absorption, Peyer's patches (GALT). Brunner glands ב-duodenum בלבד.",
  },
  {
    id: 120,
    category: "כבד / לבלב / מערכת מרה",
    question: "מהם מקורות אספקת הדם לכבד?",
    options: [
      "portal vein בלבד – ללא תרומת עורק כבדי לספקת חמצן",
      "hepatic artery בלבד מספקת ~100% מזרימת הדם לכבד – portal vein לא משמעותית",
      "portal vein ~75% (nutrient-rich) + hepatic artery ~25% (oxygen-rich)",
      "IVC ישירות ל-lobules – ללא portal vein או hepatic artery",
    ],
    correctIndex: 2,
    explanation:
      "dual blood supply: portal vein ~75% (דם ורידי מ-GI, עשיר בנוטריינטים, 'first-pass metabolism'); hepatic artery ~25% (עשיר בחמצן). ניקוז: hepatic veins → IVC. כבד יכול לקבל O2 מ-hepatic artery גם ב-portal occlusion.",
  },
  {
    id: 121,
    category: "כבד / לבלב / מערכת מרה",
    question: "מהו enterohepatic circulation של bile acids?",
    options: [
      "ספיגה פסיבית של bile acids ב-duodenum; אובדן ב-ileum אינו משמעותי קלינית",
      "ייצור bile acids ב-gallbladder בלבד; כבד אינו מסנטז acid de novo",
      "כל bile acids מופרשים בצואה – אין מחזור enterohepatic; נדרשת סינתזה מלאה מחדש",
      "~95% מ-bile acids נספגים ב-terminal ileum, חוזרים ב-portal vein לכבד לשימוש חוזר",
    ],
    correctIndex: 3,
    explanation:
      "enterohepatic circulation: כבד מסנתז bile acids → gallbladder/intestine → emulsification שומנים → ספיגה ב-terminal ileum (active transport) → portal vein → כבד. ~95% ממוחזר. אובדן (ileal resection, Crohn) → bile acid diarrhea/steatorrhea.",
  },
  {
    id: 122,
    category: "כבד / לבלב / מערכת מרה",
    question: "מהם גורמי hepatitis (דלקת כבד)?",
    options: [
      "GERD ו-IBS כגורמי דלקת כבדית כרונית עיקריים",
      "H. pylori כגורם יחיד ושכיח ל-hepatitis כרונית בכל הגילאים",
      "ויראלי, אלכוהול, אוטואימונית, תרופות, cholestasis, NAFLD/NASH",
      "אלכוהול בלבד – שאר הגורמים נדירים ולא נבחנים בקליניקה",
    ],
    correctIndex: 2,
    explanation:
      "גורמי hepatitis: viral (A-E, CMV, EBV); alcohol; autoimmune hepatitis; drugs (acetaminophen overdose, INH); biliary obstruction; NAFLD/NASH; Wilson, hemochromatosis. H. pylori לא גורם hepatitis. GERD/IBS לא גורמים inflammation כבדית.",
  },
  {
    id: 123,
    category: "כבד / לבלב / מערכת מרה",
    question: "מהי הקליניקה של hepatitis?",
    options: [
      "שלשול דמי, urgency, tenesmus ו-bloating – תמונה קלאסית של acute viral hepatitis",
      "כאב RUQ, Murphy sign ו-leukocytosis – תמונה קלאסית של HAV עם IgM anti-HAV",
      "עייפות, anorexia, אי נוחות RUQ, pruritus, jaundice; fulminant: coagulopathy ו-encephalopathy",
      "heartburn, regurgitation ו-dysphagia לנוזלים – תסמינים מובילים של viral hepatitis",
    ],
    correctIndex: 2,
    explanation:
      "hepatitis: לעיתים אסימפטומטית (elevated LFTs); fatigue, anorexia, nausea, RUQ discomfort, pruritus (cholestasis), jaundice, dark urine. Fulminant hepatic failure: coagulopathy (INR↑), encephalopathy. heartburn=GERD; bloody diarrhea=IBD/CRC; RLQ=cholecystitis.",
  },
  {
    id: 124,
    category: "כבד / לבלב / מערכת מרה",
    question: "מהם סימני portal hypertension?",
    options: [
      "כאב RLQ, RLQ tenderness ו-anorexia עם leukocytosis – סימני portal HTN",
      "צהבת בלבד ללא ascites, varices, splenomegaly או שינויי hemodynamics",
      "esophageal/gastric varices, splenomegaly, ascites, caput medusae, encephalopathy",
      "heartburn, regurgitation ו-dysphagia לנוזלים – סימני portal hypertension",
    ],
    correctIndex: 2,
    explanation:
      "portal hypertension (בעיקר cirrhosis): esophageal/gastric varices (דימום קטלני), splenomegaly, ascites, caput medusae, hemorrhoids. hepatic encephalopathy מ-portosystemic shunting. heartburn=GERD; steatorrhea=chronic pancreatitis/malabsorption; bloody diarrhea=UC.",
  },
  {
    id: 125,
    category: "כבד / לבלב / מערכת מרה",
    question: "מהם גורמי cirrhosis (שחמת)?",
    options: [
      "GERD כרוני, achalasia ו-IBS כגורמי שחמת עיקריים במבוגרים",
      "HBV/HCV בלבד – ללא אלכוהול, NAFLD או מחלות מטבוליות של נחושת/ברזל",
      "אלכוהול כרוני בלבד – ללא תרומה של NASH, וירוסים או מחלות cholestatic",
      "alcohol, NAFLD/NASH, HBV/HCV, מחלות דרכי מרה, hemochromatosis, Wilson",
    ],
    correctIndex: 3,
    explanation:
      "גורמי cirrhosis: alcohol; NAFLD/NASH (שכיח הולך וגובר); chronic viral hepatitis B/C; מחלות דרכי מרה (biliary disease); hemochromatosis; Wilson disease; autoimmune hepatitis; cryptogenic. GERD ו-achalasia לא גורמים cirrhosis.",
  },
  {
    id: 126,
    category: "כבד / לבלב / מערכת מרה",
    question: "מהם סיבוכי liver failure / decompensated cirrhosis?",
    options: [
      "bloody diarrhea, urgency ו-tenesmus כסימנים עיקריים של liver failure",
      "dysphagia לנוזלים ו-megaesophagus ב-barium – סימן עיקרי של cirrhosis",
      "jaundice, coagulopathy, hypoalbuminemia/ascites, SBP, hepatic encephalopathy",
      "heartburn ו-regurgitation כתסמינים מובילים של decompensated cirrhosis",
    ],
    correctIndex: 2,
    explanation:
      "decompensated cirrhosis: jaundice; impaired synthesis (albumin↓, clotting factors↓); ascites (hypoalbuminemia + portal HTN); SBP; hepatic encephalopathy (ammonia, asterixis); hormonal (gynecomastia, spider angiomata). PUD, toxic megacolon, achalasia – מחלות נפרדות.",
  },
  {
    id: 127,
    category: "כבד / לבלב / מערכת מרה",
    question: "מהי המשמעות הקלינית של unconjugated vs conjugated hyperbilirubinemia?",
    options: [
      "unconjugated↑ = hemolysis/Gilbert; conjugated↑ = פגיעת כבד או cholestasis",
      "conjugated גבוה = hemolysis; unconjugated גבוה = biliary obstruction בלבד",
      "hyperbilirubinemia קשורה רק לאנמיה מחוסר ברזל ללא קשר לכבד או מרה",
      "אין הבדל קליני – שניהם גורמים צהבת זהה ללא הבחנה אבחנתית",
    ],
    correctIndex: 0,
    explanation:
      "unconjugated (↑ indirect): hemolysis, ineffective erythropoiesis, Gilbert/Crigler-Najjar (conjugation defect). conjugated (↑ direct): hepatocellular injury, cholestasis, biliary obstruction (dark urine, pale stools, pruritus). הבחנה מכוונת אבחנה (hemolysis labs vs LFTs/imaging).",
  },
  {
    id: 128,
    category: "כבד / לבלב / מערכת מרה",
    question: "מהם קריטריוני האבחנה ל-acute pancreatitis?",
    options: [
      "CT בלבד ללא כאב או אנזימים – קריטריון יחיד לאבחנה",
      "כאב אפיגסטרי בלבד ללא lipase או imaging – מספיק לאבחנה",
      "lipase תקין תמיד שולל pancreatitis גם עם כאב חזק",
      "2 מתוך 3: כאב תואם, lipase/amylase ≥3× ULN, imaging תומך",
    ],
    correctIndex: 3,
    explanation:
      "acute pancreatitis – 2/3: (1) epigastric pain radiating to back; (2) lipase או amylase ≥3× ULN (lipase יותר specific); (3) CT/MRI/US findings. גורמים: gallstones 40–70%, alcohol 25–35%. biopsy לא נדרש. Charcot triad = cholangitis.",
  },
  {
    id: 129,
    category: "כבד / לבלב / מערכת מרה",
    question: "מהי הקליניקה של severe acute pancreatitis?",
    options: [
      "כאב אפיגסטרי קל המוקל בשכיבה – ללא SIRS, necrosis, organ failure או effusions",
      "pruritus cholestatic, dark urine ו-neurologic signs – סימנים עיקריים של acute pancreatitis",
      "melena, hematemesis ו-esophageal varices – סיבוכים הדומיננטיים ב-pancreatitis חריפה",
      "organ failure (renal, respiratory/ARDS), SIRS, ascites/pleural effusion; Cullen sign, Grey Turner sign",
    ],
    correctIndex: 3,
    explanation:
      "severe pancreatitis: persistent organ failure (כשל איברים מתמשך), SIRS, ARDS, acute kidney injury, pancreatic necrosis, fluid collections. Cullen sign (periumbilical ecchymosis), Grey Turner sign (flank). melena=PUD/varices. pruritus=cholestasis.",
  },
  {
    id: 130,
    category: "כבד / לבלב / מערכת מרה",
    question: "מהו הטיפול ב-acute pancreatitis?",
    options: [
      "NPO מוחלט ל-14 יום ללא נוזלים IV או תזונה",
      "אנטיביוטיקה מונעת לכל pancreatitis קלה עם lipase מורם בלבד",
      "נוזלים IV, ניטור, משככי כאב, תזונה מוקדמת – ללא אנטיביוטיקה שגרתית",
      "כריתת לבלב דחופה בכל pancreatitis חריפה ללא conservative therapy",
    ],
    correctIndex: 2,
    explanation:
      "acute pancreatitis: aggressive IV fluids (Ringer's lactate), pain control (opioids), early enteral nutrition (low-fat) כשאפשר – מפחית complications. אנטיביוטיקה רק ב-infected necrosis/cholangitis. צום ממושך מזיק. surgery ל-necrosis infected או complications מכניים.",
  },
  {
    id: 131,
    category: "כבד / לבלב / מערכת מרה",
    question: "מהי הקליניקה של chronic pancreatitis?",
    options: [
      "epigastric pain מוחמר 15–30 דק' אחרי אכילה, steatorrhea, חוסר ADEK, diabetes mellitus מאוחר",
      "heartburn ו-regurgitation בלבד – ללא steatorrhea, malabsorption או סוכרת פנקריאטית",
      "bloody diarrhea, urgency, continuous colitis ו-pseudopolyps – תמונה של chronic pancreatitis",
      "dysphagia לנוזלים, regurgitation ו-megaesophagus – תמונה של exocrine pancreatic insufficiency",
    ],
    correctIndex: 0,
    explanation:
      "chronic pancreatitis (alcohol שכיח): postprandial epigastric pain → back; exocrine insufficiency (steatorrhea, ADEK deficiency); endocrine failure (pancreatic diabetes). CT: calcifications, ductal dilation. GERD, UC, achalasia – מצבים שונים.",
  },
  {
    id: 132,
    category: "IBD",
    question: "מהם 3 עמודי התווך של IBD?",
    options: [
      "חריפה בלבד ללא remission; לא immune-mediated",
      "מזוהה רק בילדים; תמיד מוגבלת ל-rectum",
      "כרונית והתקפתית (relapsing-remitting), immune-mediated, idiopathic",
      "מחלה זיהומית בלבד – מטופלת באנטיביוטיקה ללא immunomodulators",
    ],
    correctIndex: 2,
    explanation:
      "IBD מוגדרת ב: (1) כרונית והתקפתית – flares ו-remission; (2) immune-mediated – תגובה dysregulated ל-microbiota; (3) idiopathic – גורם ראשוני לא ידוע. Crohn יכול לפגוע בכל GI tract. גנטיקה תורמת אך לא מסבירה לבד.",
  },
  {
    id: 133,
    category: "IBD",
    question: "מהו פרדוקס העישון ב-IBD?",
    options: [
      "עישון קשור רק ל-CRC ו-pancreatic cancer – לא ל-IBD",
      "עישון מגן מפני Crohn ומחמיר UC תמיד – ללא פרדוקס קליני",
      "עישון מעלה סיכון ל-Crohn; עשוי להגן ב-UC (החמרה אפשרית בהפסקה)",
      "עישון מפחית סיכון ל-Crohn ו-UC באותה מידה – אין פרדוקס",
    ],
    correctIndex: 2,
    explanation:
      "smoking paradox: ב-Crohn עישון מעלה סיכון, מחמיר מחלה ומגביר צורך בניתוחים. ב-UC עישון נראה protective – הפסקה עלולה להחמיר. לעולם לא ממליצים לעשן; חשוב לבחינות וליעוץ גמילה.",
  },
  {
    id: 134,
    category: "IBD",
    question: "מהו בירור חובה לפני התחלת טיפול ביולוגי ב-IBD?",
    options: [
      "אין בירור נדרש לפני anti-TNF, biologics או JAK inhibitors בכל מטופל",
      "colonoscopy בלבד ללא screening ל-TB, viral hepatitis או varicella immunity",
      "שלילת TB, HBV/HCV, HIV, VZV; בדיקות דם; חיסונים; הימנעות מחיסונים חיים",
      "MRI בטן בלבד ללא בדיקות זיהומיות, serology או עדכון חיסונים לפני immunosuppression",
    ],
    correctIndex: 2,
    explanation:
      "לפני biologics/immunosuppressants: TB screening (PPD/IGRA + CXR); HBV/HCV/HIV; VZV immunity; CBC, LFTs, creatinine; lipid panel לפני JAK inhibitors. חיסונים: Shingrix, pneumococcal, influenza. חיסונים חיים (MMR, yellow fever) אסורים/נדחים.",
  },
  {
    id: 135,
    category: "IBD",
    question: "מהם מאפיינים היסטולוגיים של UC לעומת Crohn?",
    options: [
      "Crohn תמיד ב-colon; UC תמיד במעי דק בלבד – אין overlap אנטומי או היסטולוגי",
      "UC: mucosa/submucosa, רציף, crypt abscesses; Crohn: transmural, skip lesions, granulomas",
      "UC: transmural עם granulomas; Crohn: רירית בלבד רציפה ללא skip lesions או fistulas",
      "שניהם מוגבלים לרירית בלבד ללא מעורבות submucosa, muscularis או serosa",
    ],
    correctIndex: 1,
    explanation:
      "UC: inflammation מוגבל ל-mucosa/submucosa, continuous מ-rectum, crypt abscesses, pseudopolyps, ללא granulomas. Crohn: transmural, skip lesions, non-caseating granulomas (לא pathognomonic), fissures, fistulas. Paneth metaplasia ב-Crohn terminal ileum.",
  },
  {
    id: 136,
    category: "IBD",
    question: "מהו טיפול ב-ASUC (acute severe ulcerative colitis) מאושפז?",
    options: [
      "colectomy מיידית בכל מטופל מאושפז ללא ניסיון טיפול רפואי או rescue therapy",
      "PPI ו-5-ASA per os בלבד בשחרור ביתי מיידי ללא מעקב או סטרואידים IV",
      "IV corticosteroids יום 1; הערכה ימים 3–5; rescue anti-TNF או colectomy אם אין תגובה",
      "אנטיביוטיקה בו-פרופרצין כטיפול יחיד ללא IV corticosteroids או biologics",
    ],
    correctIndex: 2,
    explanation:
      "ASUC (Truelove-Witts): IV hydrocortisone/methylprednisolone; monitoring ימים 3–5 (Lichtiger score); אם אין שיפור – infliximab/ciclosporin rescue; colectomy חירום אם כשל טיפולי. PPI/אנטיביוטיקה לבד לא מספיקים. colectomy לא ראשון בכל מקרה.",
  },
  {
    id: 137,
    category: "סרטן מעי גס",
    question: "מהם שלבי מסלול adenoma-carcinoma ב-CRC?",
    options: [
      "רק flat serrated lesions – ללא tubular adenomas או מסלול APC/KRAS",
      "התפתחות מ-H. pylori gastritis ישירות ל-CRC ללא dysplasia קולונית",
      "mucosa תקינה → crypt foci → adenoma → advanced adenoma → carcinoma",
      "מעבר ישיר מ-mucosa תקינה ל-invasive carcinoma תוך שבועות ללא polyp ביניים",
    ],
    correctIndex: 2,
    explanation:
      "adenoma-carcinoma sequence (~80% CRC): APC loss → aberrant crypt foci → small adenoma → advanced adenoma (villous, high-grade dysplasia) → carcinoma. ~10 שנים – חלון ל-polypectomy. מסלול נוסף: MSI (Lynch). H. pylori → gastric cancer, לא CRC ישיר.",
  },
  {
    id: 138,
    category: "סרטן מעי גס",
    question: "מהם גורמי סיכון ל-CRC – ניתנים ולא ניתנים לשינוי?",
    options: [
      "ניתנים: בשר אדום, השמנה, עישון; לא: גיל, IBD, Lynch/FAP",
      "אין גורמי סיכון מוכחים ל-CRC מלבד מקרים מזדמנים בודדים",
      "רק תזונה – גנטיקה, IBD ומשפחתיות אינם גורמי סיכון ל-CRC",
      "רק גיל מעל 50 – אין גורמי סיכון אחרים משמעותיים ל-CRC",
    ],
    correctIndex: 0,
    explanation:
      "modifiable: red/processed meat, obesity, sedentary lifestyle, smoking, alcohol, low fiber, diabetes, antibiotics. non-modifiable: age, male sex, family/personal history, IBD (surveillance מ-8–10 שנים), radiation, Lynch/FAP, African American higher risk.",
  },
  {
    id: 139,
    category: "סרטן מעי גס",
    question: "מהו Amsterdam criteria ל-Lynch syndrome (HNPCC)?",
    options: [
      "polyp אחד ב-colonoscopy כקריטריון יחיד ל-Lynch – ללא דורות או גיל",
      "רק CRC ללא סרטנים אקסטרא-קוליים (רחם, שחלות, לבלב) – Amsterdam",
      "≥3 קרובי משפחה עם סרטן קשור, ≥2 דורות, ≥1 לפני גיל 50",
      "רק גיל מעל 70 עם CRC בודד – מספיק לאבחנת Lynch syndrome",
    ],
    correctIndex: 2,
    explanation:
      "Amsterdam II: ≥3 relatives עם Lynch-associated cancer (CRC, endometrial, ovarian, gastric, pancreatic, brain, ureter/renal pelvis); ≥1 FDR; ≥2 generations; ≥1 diagnosed <50 years. Lynch = MMR mutations (MLH1, MSH2, MSH6, PMS2). polyp בודד לא מספיק.",
  },
  {
    id: 140,
    category: "סרטן מעי גס",
    question: "מה ההבדל הקליני בין גידול בצד ימין לשמאל של המעי הגס?",
    options: [
      "ימין: לרוב אסימפטומטי, iron deficiency anemia; שמאל: שינוי bowel habits, hematochezia, narrowing",
      "ימין: תמיד hematochezia גלוי; שמאל: תמיד אנמיה מחוסר ברזל בלבד ללא שינוי בצואה",
      "ימין: obstruction מוקדם תמיד; שמאל: לרוב אסימפטומטי עם occult anemia בלבד",
      "אין הבדל קליני – כל הגידולים מציגים hematochezia גלוי ו-obstruction מוקדם באותה מידה",
    ],
    correctIndex: 0,
    explanation:
      "right-sided (cecum, ascending): lumen רחב, bleeding occult → iron deficiency anemia, אסימפטומטי מוקדם. left-sided (sigmoid, rectum): lumen צר, change in caliber/frequency, visible hematochezia, obstruction. חשוב לסקר ולא להניח תסמינים אחידים.",
  },
  {
    id: 141,
    category: "אנדוסקופיה",
    question: "מהן אינדיקציות ל-EGD (esophagogastroduodenoscopy)?",
    options: [
      "כאב RUQ ו-Murphy sign – אינדיקציה ל-US ולא ל-EGD כבדיקה ראשונה",
      "צהבת cholestatic בלבד ללא תסמינים עליונים – אינדיקציה ל-EGD",
      "anemia, dysphagia, upper GI bleeding, epigastric pain, weight loss, chronic vomiting",
      "סקר CRC ב-average risk ללא תסמינים – אינדיקציה עיקרית ל-EGD במקום colonoscopy",
    ],
    correctIndex: 2,
    explanation:
      "EGD: iron deficiency anemia, dysphagia/odynophagia, UGIB (hematemesis, melena), epigastric pain, weight loss, chronic nausea/vomiting, Barrett surveillance. מאפשרת biopsy, hemostasis, dilatation. CRC screening = colonoscopy. RLQ pain = cholecystitis workup.",
  },
  {
    id: 142,
    category: "אנדוסקופיה",
    question: "מהם סיבוכי colonoscopy?",
    options: [
      "תמיד ללא סיכונים – בדיקה בטוחה לחלוטין גם ללא bowel prep או INR",
      "perforation, דימום post-polypectomy, כוויה, הפרעות אלקטרוליטים מה-prep",
      "רק כאב בטן קל חולף ללא דימום, perforation או הפרעות אלקטרוליטים",
      "סיכון יחיד: אלרגיה ל-latex של הצוות – ללא דימום או perforation אפשריים",
    ],
    correctIndex: 1,
    explanation:
      "colonoscopy complications: perforation (sigmoid, cecum – higher risk); bleeding post-polypectomy; deep thermal injury; cardiovascular events; prep-related dehydration/hypokalemia. encephalopathy=cirrhosis. post-ERCP pancreatitis=ERCP specific. סיכון נמוך אך קיים.",
  },
  {
    id: 143,
    category: "אנדוסקופיה",
    question: "מה ההבדל בין ERCP ל-MRCP?",
    options: [
      "ERCP: אבחון וטיפול (invasive, סיכון pancreatitis); MRCP: הדמיה לא פולשנית ללא טיפול",
      "זהים לחלוטין – שניהם לא פולשניים וללא סיכון post-procedure",
      "ERCP: MRI של ducts ללא endoscope; MRCP: endoscopy טיפולית עם sphincterotomy",
      "MRCP פולשני עם סיכון post-ERCP pancreatitis; ERCP הוא MRI בלבד",
    ],
    correctIndex: 0,
    explanation:
      "ERCP: endoscopic + fluoroscopy + contrast, therapeutic (stone extraction, stent, sphincterotomy), post-ERCP pancreatitis 3–5%. MRCP: MRI של biliary tree, non-invasive, no therapy, no pancreatitis risk – לאבחון לפני ERCP. לא זהים.",
  },
  {
    id: 144,
    category: "אנדוסקופיה",
    question: "מהו EUS (endoscopic ultrasound) ומתי משתמשים בו?",
    options: [
      "בדיקת דם ל-amylase/lipase – חלופה ל-EUS ב-T/N staging של pancreatic cancer",
      "אנדוסקופיה + ultrasound – staging גידולים, אבנים, FNA/FNB; רגיש ל-pancreas ו-bile ducts",
      "אנדוסקופיה של הוושט בלבד – ללא יכולת הדמיה של לבלב, כבד, lymph nodes או FNA",
      "סקר CRC חלופי ל-colonoscopy/FIT – ללא יכולת FNA, staging או הדמיית bile ducts",
    ],
    correctIndex: 1,
    explanation:
      "EUS: high-resolution ultrasound דרך endoscope – T/N staging (pancreatic, esophageal, rectal cancer), characterization pancreatic lesions, bile duct stones, EUS-guided FNA/FNB של mass/lymph nodes. לא בדיקת דם. CRC screening = colonoscopy/FIT.",
  },
  {
    id: 145,
    category: "שונות",
    question: "מהי תסמונת FAP לפי הסיכום?",
    options: [
      "average-risk polyp בודד sporadic בגיל 60 – ללא APC mutation או סיכון גנטי",
      "Peutz-Jeghers – כתמי פיגמנטציה בפה + פוליפים hamartomatous לאורך GI",
      "Lynch – MMR mutation; פוליפים מעטים; סרטן מעי גס בגיל 40-60; colonoscopy מגיל 20",
      "מחלה גנטית AD; מאות פוליפים מגיל 10-12; כמעט 100% יפתחו CRC עד 40 ללא מניעה",
    ],
    correctIndex: 3,
    explanation:
      "בסיכום: FAP – APC mutation; פוליפים רבים מגיל 10-12; כמעט 100% CRC עד 40; מניעה: prophylactic colectomy; colonoscopy מגיל 10-12 כל שנתיים.",
  },
  {
    id: 146,
    category: "IBD",
    question: "מהו ASCD (Acute Severe UC) לפי הסיכום?",
    options: [
      "PPI PO בלבד ושחרור מיידי ביום – מתאים ל-GERD קל; לא ל-ASUC עם ≥6 bowel movements/יום ודם",
      "מצב חירום – אשפוז; יום 1 IV steroids; ימים 3-5 הערכה; rescue anti-TNF אם אין תגובה",
      "colectomy מיידית ביום 1 ללא IV steroids – ללא הערכת תגובה days 3-5 וללא rescue anti-TNF",
      "antibiotics PO בלבד (cipro/metronidazole) ללא סטרואידים IV – ל-SBP; לא ל-ASUC חמור",
    ],
    correctIndex: 1,
    explanation:
      "בסיכום ASCD: אשפוז מיידי; יום 1 IV steroids; ימים 3-5 הערכה (Truelove/Lichtiger); אם כשל – anti-TNF rescue; colectomy אם נכשל.",
  },
  {
    id: 147,
    category: "שונות",
    question: "מהם תפקידי הכבד?",
    options: [
      "מטבוליזם, bile, detoxification, חלבונים, אגירה (glycogen, ADEK), חיסון (Kupffer)",
      "ייצור bile בלבד – ללא מטבוליזם, detoxification או סינתזת חלבונים",
      "הפרשת insulin בלבד – תפקיד endocrine בלעדי ללא parenchymal function",
      "ספיגת נוטריינטים – כמו enterocytes במעי דק עם villi ו-microvilli",
    ],
    correctIndex: 0,
    explanation:
      "תפקידי כבד: carbohydrate/lipid/protein metabolism; bile acid synthesis; detoxification (drugs, ammonia→urea); synthesis (albumin, clotting factors); storage (glycogen, vitamins ADEK, B12, iron, copper); immune (Kupffer cells, IgA transport). insulin מ-pancreas. ספיגה במעי.",
  },
  {
    id: 148,
    category: "שונות",
    question: "מהי Wilson disease?",
    options: [
      "acute hepatitis A – IgM anti-HAV; מחלים לרוב ללא antiviral",
      "הצטברות ברזל – ferritin גבוה, transferrin saturation מוגבר, phlebotomy",
      "NAFLD – steatosis ללא אלכוהול; weight loss כטיפול עיקרי",
      "מחלת הצטברות נחושת אוטוזומלית רצסיבית – cirrhosis, neuro, סימנים נוירולוגיים",
    ],
    correctIndex: 3,
    explanation:
      "Wilson disease (ATP7B mutation): impaired copper excretion → accumulation בכבד (cirrhosis), basal ganglia (movement disorder), cornea (סימנים נוירולוגיים rings). טיפול: chelation (penicillamine), zinc. hemochromatosis=iron. חוסר copper נדיר. HBV=viral hepatitis.",
  },
  {
    id: 149,
    category: "שונות",
    question: "מהם תפקידי תאי islets of Langerhans בלבלב?",
    options: [
      "רק glucagon מ-α cells – ללא תאי β, δ או PP בלבלב האנושי",
      "רק amylase, lipase ו-proteases – תפקיד endocrine בלבד ללא acinar cells",
      "α: glucagon; β: insulin; δ: somatostatin; PP: pancreatic polypeptide; ε: ghrelin",
      "כל תאי ה-islets מפרישים insulin – אין הפרדה תאית או תפקידים שונים",
    ],
    correctIndex: 2,
    explanation:
      "islets of Langerhans (endocrine): α cells – glucagon (↑glucose); β – insulin (↓glucose, חוסר→DM); δ – somatostatin (inhibits); PP – exocrine/motility regulation; תאי אפסילון – גרלין (הגברת רעב). acinar cells מפרישים amylase, lipase, proteases (exocrine).",
  },
  {
    id: 150,
    category: "שונות",
    question: "מהו fecal calprotectin ב-IBD?",
    options: [
      "סקר CRC חלופי ל-colonoscopy – מבוסס על calprotectin בלבד",
      "מדד תפקיד כבד (ALT/AST/bilirubin) – משמש להבחנה בין UC ל-Crohn",
      "חלבון מנויטרופילים – מדד דלקת מעי; מבדיל IBD מ-IBS; מעקב תגובה לטיפול",
      "בדיקת נשיפה/צואה לאבחון H. pylori – מדד דלקת מעי ב-IBD",
    ],
    correctIndex: 2,
    explanation:
      "fecal calprotectin: released מ-neutrophils ב-inflammation; sensitive marker ל-intestinal inflammation; elevated ב-IBD, low ב-IBS; monitors mucosal healing ו-treatment response. לא ל-H. pylori (urea breath/stool antigen). CRC screening = FIT/colonoscopy. LFTs=כבד.",
  },
  {
    id: 151,
    category: "מקרה קליני",
    question: "מטופל בן 52, מעשן, מתלונן על צריבה אחרי ארוחות ושיפור בשכיבה. אין dysphagia, איבוד משקל או דימום. מה הצעד הראשוני המתאים?",
    options: [
      "colonoscopy ראשונה ללא EGD ב-GERD עם pyrosis",
      "colectomy דחופה לכל מטופל עם heartburn",
      "PPI במינון מלא + שינויי אורח חיים; EGD אם alarm symptoms",
      "antibiotics ל-H. pylori בלבד ללא PPI או lifestyle",
    ],
    correctIndex: 2,
    explanation:
      "GERD קלאסית: heartburn אחרי אכילה, שיפור בשכיבה (מעבר חומצה). ללא alarm symptoms (dysphagia, weight loss, bleeding, anemia, age >55 new symptoms): טיפול empiric ב-PPI + lifestyle. EGD אם כשל טיפול, alarm symptoms, או Barrett surveillance. לא מטפלים ב-H. pylori ללא אבחנה.",
  },
  {
    id: 152,
    category: "מקרה קליני",
    question: "אישה בת 35, dysphagia לנוזלים ולמוצקים באותה מידה, regurgitation של מזון לא מעוכל, וירידה במשקל. בצילום barium swallow: esophagus מורחב עם 'צוואר ציפור'. מה האבחנה הסבירה ביותר?",
    options: [
      "דימום עליון tear – קרע ריריתי אחרי הקאות",
      "esophageal cancer – stricture פרוגרסיבית לנוזלים בלבד",
      "GERD עם esophagitis erosive – dysphagia רק למוצקים",
      "achalasia – כשל relaxation של LES ואובדן פריסטלטיקה",
    ],
    correctIndex: 3,
    explanation:
      "achalasia: dysphagia לנוזלים ומוצקים (לא פרוגרסיבית מוצקים→נוזלים), regurgitation, weight loss. manometry: incomplete LES relaxation, aperistalsis. barium: dilated esophagus + bird-beak. GERD: dysphagia לרוב מוצקים; cancer: פרוגרסיבית; דימום עליון: hematemesis אחרי vomiting.",
  },
  {
    id: 153,
    category: "מקרה קליני",
    question: "מטופל בן 58 עם היסטוריה של GERD כרונית. ב-EGD: metaplasia עמודית ב-distal esophagus מעל Z-line. מה הצעד הבא?",
    options: [
      "surveillance EGD לפי protocol (dysplasia grading) + PPI מלא",
      "אנטיביוטיקה ל-H. pylori בלבד ללא PPI או מעקב",
      "שחרור ללא מעקב – Barrett אינו דורש surveillance",
      "colonoscopy במקום EGD חוזר – Barrett אינו קשור ל-esophagus",
    ],
    correctIndex: 0,
    explanation:
      "Barrett esophagus = intestinal metaplasia מעל GEJ, סיכון ל-adenocarcinoma. ניהול: PPI מלא (מפחית התקדמות), surveillance EGD עם biopsies לפי מעקב EGD כל שנתיים / dysplasia grade. RFA/EMR אם dysplasia. לא מספיק H. pylori eradication בלבד.",
  },
  {
    id: 154,
    category: "מקרה קליני",
    question: "מטופל בן 48, מציג melena ותולעת דם (hypotension, tachycardia). יציב לאחר נוזלים IV. מה הבדיקה האבחנתית והטיפולית הראשונה?",
    options: [
      "EGD דחופה (תוך 24 שעות) – מקור UGIB נפוץ (PUD, varices)",
      "colonoscopy דחופה – מקור הדימום לרוב ב-colon",
      "אנמיה בדם בלבד – אין צורך באנדוסקופיה אם Hb ידוע",
      "CT abdomen בלבד ללא endoscopy עד יציבות מלאה",
    ],
    correctIndex: 0,
    explanation:
      "melena = upper GI bleeding עד ligament of Treitz. גורמים נפוצים: PUD, varices, דימום עליון, erosive gastritis. EGD דחופה לאבחון וטיפול (hemostasis). colonoscopy אם EGD שלילית וחשד ל-LGIB. resuscitation קודם, אך לא לדחות EGD מיותרת.",
  },
  {
    id: 155,
    category: "מקרה קליני",
    question: "אישה בת 40 עם dyspepsia, ללא alarm symptoms. רוצה לאבחן H. pylori לפני טיפול. מה הבדיקה המתאימה ביותר?",
    options: [
      "culture מדגימת דם – הבדיקה הסטנדרטית ל-H. pylori",
      "EGD עם biopsy בכל מקרה של dyspepsia ללא קשר לגיל",
      "serology ל-IgG – הבדיקה המועדפת ל-confirmation of cure",
      "urea breath test או stool antigen – לא פולשני, לפני או אחרי טיפול",
    ],
    correctIndex: 3,
    explanation:
      "אבחון H. pylori: urea breath test או stool antigen (non-invasive). לא לבדוק serology ל-cure (נשאר חיובי שנים). EGD+histology/biopsy כשיש אינדיקציה לאנדוסקופיה. test-of-cure ≥4 שבועות אחרי טיפול. triple/quadruple therapy: PPI + clarithromycin + amoxicillin/metronidazole.",
  },
  {
    id: 156,
    category: "מקרה קליני",
    question: "אישה בת 40, כאב חד ב-RUQ 20 דקות אחרי ארוחה שמנה, נעלם תוך שעה. אין חום. מה האבחנה?",
    options: [
      "Biliary colic – חסימה זמנית של מוצא כיס המרה",
      "GERD – heartburn אחרי ארוחה ללא כאב RUQ חד וחולף",
      "Acute cholecystitis – כאב ממושך >4-6 שעות, חום, Murphy sign חיובי",
      "Acute pancreatitis – lipase גבוה, כאב קורן לגב, amylase מורם",
    ],
    correctIndex: 0,
    explanation:
      "בסיכום: biliary colic – כאב RUQ אחרי ארוחה שמנה, 15-30 דק', חולף כשהאבן זזה. cholecystitis – כאב ממושך >4-6 שעות, חום, Murphy. pancreatitis – lipase, כאב לגב.",
  },
  {
    id: 157,
    category: "מקרה קליני",
    question: "בחור בן 24, שלשול כרוני עם דם לסירוגין, כאב RLQ, ירידה במשקל, fistula perianal. CT: thickening terminal ileum, skip lesions. מה האבחנה?",
    options: [
      "acute דלקת מעי (לא מפורטת בסיכום) – LLQ בלבד בגיל צעיר",
      "Crohn disease – transmural, skip lesions, fistulas",
      "ulcerative colitis – דלקת רציפה מ-rectum",
      "IBS – אבחנה של הדרה ללא דלקת",
    ],
    correctIndex: 1,
    explanation:
      "Crohn: כל שכבות, כל מקום GI (ileum שכיח), skip lesions, fistulas, perianal disease, weight loss, non-bloody/bloody diarrhea. UC: רציף מ-rectum, ללא fistulas, ללא transmural. IBS: calprotectin ותסמינים, calprotectin שלילי. דלקת מעי (לא מפורטת בסיכום): LLQ, מבוגרים יותר.",
  },
  {
    id: 158,
    category: "מקרה קליני",
    question: "אישה בת 30, שלשול דמי 6 פעמים ביום, urgency, tenesmus, כאב בטן. ללא fistulas. colonoscopy: דלקת רציפה מ-rectum עד splenic flexure. מה האבחנה?",
    options: [
      "infectious colitis – תמיד מוגבל ל-rectum בלבד",
      "Crohn colitis – skip lesions ו-fistulas בדרך כלל",
      "ulcerative colitis – דלקת רציפה של mucosa/submucosa מ-rectum",
      "ischemic colitis – בדרך כלל בצעירים בריאים",
    ],
    correctIndex: 2,
    explanation:
      "UC: bloody diarrhea, urgency, tenesmus; inflammation רציף מ-rectum proximally; mucosa/submucosa בלבד; crypt abscesses; ללא fistulas. Crohn: skip lesions, transmural, fistulas. infectious: לרוב self-limited; ischemic: מבוגרים, vascular risk.",
  },
  {
    id: 159,
    category: "מקרה קליני",
    question: "מטופל בן 55, אלכוהול כבד, כאב אפיגסטרי חד קורן לגב, בחילה והקאות. lipase 1,200 (ULN 60). מה האבחנה והטיפול הראשוני?",
    options: [
      "MI אינפריור – aspirin בלבד ללא הדמיה",
      "peptic ulcer – PPI בלבד ללא ניטור",
      "acute pancreatitis – נוזלים IV, משככי כאב, תזונה מוקדמת",
      "acute cholecystitis – כולציסטקטומיה מיידית בכל מקרה",
    ],
    correctIndex: 2,
    explanation:
      "acute pancreatitis: 2/3 – כאב אפיגסטרי לגב, lipase ≥3× ULN, imaging. גורמים: gallstones, alcohol. טיפול: aggressive IV fluids, pain control, early enteral nutrition. לא אנטיביוטיקה שגרתית. cholecystitis: RUQ, Murphy; MI: troponin/ECG.",
  },
  {
    id: 160,
    category: "מקרה קליני",
    question: "אישה בת 48, כאב RUQ אחרי ארוחה שמנה, חום 38.5°C, Murphy sign חיובי. WBC 13,000. מה הבדיקה והטיפול?",
    options: [
      "observation בלבד – כאב RUQ אחרי ארוחה שמנה עם חום תמיד עובר ללא טיפול",
      "EGD – cholecystitis מאובחנת תמיד באנדוסקופיה עליונה; Murphy sign לא רלוונטי",
      "MRCP בלבד ללא US – הבדיקה הראשונה ב-RUQ pain עם חום ו-leukocytosis",
      "abdominal ultrasound – cholelithiasis/cholecystitis; antibiotics + cholecystectomy",
    ],
    correctIndex: 3,
    explanation:
      "acute cholecystitis: RUQ pain, fever, Murphy+, leukocytosis, post-fatty meal. US ראשון: gallstones, wall thickening, pericholecystic fluid. טיפול: NPO, IV fluids, antibiotics, cholecystectomy (early vs delayed). MRCP/ERCP אם חשד ל-choledocholithiasis (jaundice, dilated ducts).",
  },
  {
    id: 161,
    category: "מקרה קליני",
    question: "מטופל בן 62, צהבת, כאב RUQ, חום 39°C, confusion. לחץ דם 90/55. מה האבחנה והטיפול הדחוף?",
    options: [
      "biliary colic – כאב חולף ללא חום; ללא אנטיביוטיקה או biliary drainage",
      "acute pancreatitis – lipase גבוה; NPO ונוזלים IV ללא ERCP drainage",
      "acute cholangitis (Charcot triad) – IV antibiotics + biliary drainage (ERCP)",
      "acute cholecystitis – US + cholecystectomy; ללא Charcot triad או jaundice",
    ],
    correctIndex: 2,
    explanation:
      "Charcot triad: fever, jaundice, RUQ pain = acute cholangitis (obstruction + infection). Reynolds pentad מוסיף hypotension + confusion (severe). טיפול: IV antibiotics (pip-tazo/cephalosporin+metronidazole) + urgent biliary decompression (ERCP). לא לדחות drainage.",
  },
  {
    id: 162,
    category: "מקרה קליני",
    question: "מטופל בן 58 עם cirrhosis, בטן נפוחה חדשה, אין חום. ascitic fluid: PMN 400/μL. מה האבחנה והטיפול?",
    options: [
      "portal hypertension ללא פריצה – מעקב בלבד",
      "simple ascites – רק spironolactone ללא אנטיביוטיקה",
      "hepatic encephalopathy – lactulose בלבד",
      "SBP – IV ceftriaxone ואלבומין",
    ],
    correctIndex: 3,
    explanation:
      "בסיכום: SBP – PMN ≥250 ב-ascites; טיפול ceftriaxone + albumin. simple ascites ללא PMN מוגבר.",
  },
  {
    id: 163,
    category: "מקרה קליני",
    question: "מטופל בן 50 עם cirrhosis מגיע עם hematemesis כמותית ו-tachycardia. מה סדר הפעולות הראשוני?",
    options: [
      "colonoscopy ראשונה – varices נמצאות ב-colon",
      "CT abdomen לפני כל טיפול – אין צורך ב-resuscitation",
      "PPI PO בלבד – מספיק ל-variceal bleeding",
      "ייצוב + קשירת דליות בגסטרוסקופיה (גסטרוסקופיה דחופה)",
    ],
    correctIndex: 3,
    explanation:
      "variceal UGIB (cirrhosis): resuscitation מוגבלת (לא over-transfuse), ייצוב/vasopressin, prophylactic antibiotics (ceftriaxone), EGD דחוף ל-band ligation. PPI פחות מרכזי מ-varices. קשירת דליות אם כשל ligation. avoid β-blockers בדימום פעיל.",
  },
  {
    id: 164,
    category: "מקרה קליני",
    question: "סטודנט בן 22 חוזר מטיול לדרום אמריקה, צהבת, עייפות, ALT 2,500. anti-HAV IgM חיובי. מה האבחנה והטיפול?",
    options: [
      "acute hepatitis A – supportive care; מחלים לרוב",
      "Wilson disease – chelation דחוף",
      "autoimmune hepatitis – סטרואידים מיידית",
      "chronic hepatitis B – טיפול antiviral מיידי",
    ],
    correctIndex: 0,
    explanation:
      "acute HAV: IgM anti-HAV, transmission fecal-oral, self-limited, supportive (אין antiviral). מניעה: vaccine. HBV: HBsAg, anti-HBc IgM; chronic אם HBsAg >6 חודשים. Wilson: young + neuro + סימנים נוירולוגיים. AIH: anti-smooth muscle, hypergammaglobulinemia.",
  },
  {
    id: 165,
    category: "מקרה קליני",
    question: "אישה בת 50, BMI 35, diabetes, ALT 85, US: steatosis. ללא אלכוהול משמעותי. מה האבחנה הסבירה?",
    options: [
      "hemochromatosis – אבחנה ראשונה ב-US steatosis ללא ferritin או saturation",
      "acute viral hepatitis – תמיד עם ALT <100 וללא קשר ל-obesity/diabetes",
      "NAFLD/NASH – שומן בכבד קשור למטבוליזם; fibrosis assessment",
      "alcoholic hepatitis – תמיד עם ALT נורמלי וללא steatosis ב-US",
    ],
    correctIndex: 2,
    explanation:
      "NAFLD: steatosis ללא אלכוהול מוגזם, קשור obesity/diabetes/metabolic syndrome. NASH = inflammation + possible fibrosis. הערכה קלינית ו-LFTs, לעיתים biopsy. טיפול: weight loss, diabetes control. alcoholic liver: history; hemochromatosis: ferritin, transferrin saturation.",
  },
  {
    id: 166,
    category: "מקרה קליני",
    question: "גבר בן 68, עייפות, מעילים חדשים. Hb 9.2, MCV 72, ferritin נמוך. אין תסמיני כאב בטן או שינוי בצואה. מה הצעד הבא?",
    options: [
      "colonoscopy – iron deficiency anemia בגיל >50 דורשת שלילת CRC/malignancy",
      "ברזל PO בלבד – אין צורך בחיפוש מקור דימום במבוגר עם אנמיה מחוסר ברזל",
      "B12 injection – MCV נמוך מצביע תמיד על B12 ללא בירור GI occult bleeding",
      "אולטרסאונד כבד בלבד – מספיק לשלילת דימום GI occult ו-CRC במבוגר",
    ],
    correctIndex: 0,
    explanation:
      "iron deficiency anemia במבוגר: חובה לשלול GI blood loss (CRC שכיח, במיוחד right-sided occult). colonoscopy + often EGD (dual evaluation). right colon cancer: occult bleeding, anemia ללא hematochezia גלוי. treat iron + find source.",
  },
  {
    id: 167,
    category: "מקרה קליני",
    question: "אישה בת 62, שינוי בדפוס צואה ודם על הנייר 3 חודשים. אין אנמיה. מה הבדיקה המתאימה?",
    options: [
      "colonoscopy – דימום גלוי + שינוי bowel habits בגיל >50",
      "FIT/FOBT בלבד – מספיק ללא colonoscopy אם חיובי",
      "H. pylori breath test – קשור ל-hematochezia",
      "abdominal X-ray – מאבחן CRC בוודאות",
    ],
    correctIndex: 0,
    explanation:
      "alarm symptoms ל-CRC: hematochezia, change in caliber/frequency, weight loss, anemia, age. colonoscopy לאבחון + polypectomy. FIT טוב לסקר אסימפטומטי, לא מחליף colonoscopy כשיש symptoms. left-sided CRC: hematochezia, narrowing.",
  },
  {
    id: 168,
    category: "מקרה קליני",
    question: "מטופל בן 45, אביו ואחיו עם CRC לפני גיל 50. אין תסמינים. מה ההמלצה?",
    options: [
      "סקר ממוצע מגיל 50 בלבד – משפחתיות עם CRC מוקדם לא משנה",
      "אין צורך בסקר אם אסימפטומטי – גם עם first-degree relative CRC <50",
      "colonoscopy מגיל 40 או 10 שנים לפני המקרה המוקדם ביותר במשפחה",
      "FIT שנתי בלבד – מספיק ב-high-risk family history עם 2 קרובים עם CRC",
    ],
    correctIndex: 2,
    explanation:
      "משפחתיות: first-degree relative CRC <60 או ≥2 relatives → colonoscopy מוקדם (40 או 10 שנים לפני מקרה מוקדם). Lynch (Amsterdam): MMR testing. FAP: genetic testing + sigmoidoscopy מגיל 10-15. average risk: 45-50.",
  },
  {
    id: 169,
    category: "מקרה קליני",
    question: "מטופל עם cirrhosis, ascites חדש. נוזל ניקר: PMN 350/μL. מה האבחנה והטיפול?",
    options: [
      "Simple ascites – רק משתנים ללא אנטיביוטיקה",
      "SBP – אנטיביוטיקה IV (ceftriaxone) ואלבומין",
      "Acute דלקת מעי (לא מפורטת בסיכום) – כאב LLQ ואנטיביוטיקה PO",
      "GERD – PPI בלבד",
    ],
    correctIndex: 1,
    explanation:
      "בסיכום: SBP – PMN ≥250 ב-ascites; טיפול ceftriaxone + albumin. simple ascites ללא PMN מוגבר. דלקת מעי (לא מפורטת בסיכום) לא בסיכום.",
  },
  {
    id: 170,
    category: "מקרה קליני",
    question: "אישה בת 28, כאב בטן ושלשול לסירוגין 6 חודשים. calprotectin בצואה תקין, בדיקות דם תקינות. מה האבחנה הסבירה לפי הסיכום?",
    options: [
      "UC – bloody diarrhea חובה; calprotectin גבוה תמיד",
      "IBS – calprotectin שלילי מבדיל מ-IBD; אין דלקת אורגנית",
      "CRC – שכיח בגיל 28 אסימפטומטי עם calprotectin תקין",
      "Crohn – calprotectin תמיד גבוה; transmural inflammation",
    ],
    correctIndex: 1,
    explanation:
      "בסיכום: calprotectin נמוך ב-IBS, גבוה ב-IBD. כאב כרוני + calprotectin תקין → IBS לאחר שלילת red flags. calprotectin ותסמינים לא מוזכרים.",
  },
  {
    id: 171,
    category: "מקרה קליני",
    question: "אישה בת 50, אנמיה, dysphagia, glossitis. אין דימום גלוי. מה הסינדром החשוד לפי הסיכום?",
    options: [
      "Achalasia – bird-beak ב-barium; dysphagia לנוזלים ומוצקים",
      "Plummer-Vinson – אנמיה, web בוושט, dysphagia; סיכון לסרטן וושט",
      "GERD – heartburn בלבד ללא אנמיה, web או glossitis",
      "IBS – calprotectin תקין; כאב בטן לסירוגין ללא אנמיה",
    ],
    correctIndex: 1,
    explanation:
      "בסיכום: Plummer-Vinson – אנמיה קשה ושינויים ברירית הוושט; גורם סיכון לסרטן וושט.",
  },
  {
    id: 172,
    category: "מקרה קליני",
    question: "מטופל עם melena יציב לאחר נוזלים. מה סדר הפעולות לפי הסיכום?",
    options: [
      "אנטיביוטיקה ל-H. pylori לפני resuscitation, PPI ו-EGD דחופה",
      "colonoscopy ראשונה ללא אנדוסקופיה עליונה ב-melena – מקור עליון לא נבדק",
      "ייצוב המודינמי, PPI IV במינון גבוה, גסטרוסקופיה דחופה תוך 12-24 שעות",
      "מעקב בלבד ללא אנדוסקופיה ב-melena יציב – PPI PO ללא EGD",
    ],
    correctIndex: 2,
    explanation:
      "בסיכום – דימום PUD: ייצוב המודינמי, PPI IV גבוה, גסטרוסקופיה דחופה 12-24 שע'. melena = דימום עליון. colonoscopy אם מקור תחתון.",
  },
  {
    id: 173,
    category: "מקרה קליני",
    question: "בחור בן 22, רעד בידיים, שינויי אישיות, צהבת קלה. תסמינים נוירולוגיים ופגיעת כבד. מה האבחנה והטיפול?",
    options: [
      "hemochromatosis – therapeutic phlebotomy ומעקב ferritin",
      "NAFLD – weight loss ושליטה בסוכר",
      "Wilson disease – copper chelation (penicillamine/trientine) + zinc",
      "acute hepatitis A – טיפול תומך; מחלים לרוב ללא antiviral",
    ],
    correctIndex: 2,
    explanation:
      "בסיכום: Wilson – הצטברות נחושת בכבד ונזק חמור; טיפול: chelators + zinc. hemochromatosis: עודף ברזל. HAV: תומך.",
  },
  {
    id: 174,
    category: "מקרה קליני",
    question: "גבר בן 48, diabetes, כאבי מפרקים, צהבת קלה. ferritin 1,200, transferrin saturation 65%. מה האבחנה והטיפול?",
    options: [
      "hereditary hemochromatosis – therapeutic phlebotomy",
      "iron deficiency – ברזל PO עם ferritin נמוך",
      "Wilson disease – copper chelation (penicillamine/trientine) + zinc",
      "acute hepatitis B – lamivudine או entecavir כטיפול מיידי",
    ],
    correctIndex: 0,
    explanation:
      "hemochromatosis (HFE C282Y): iron overload – ferritin↑, transferrin saturation↑, liver cirrhosis, diabetes, arthropathy, bronze skin. טיפול: phlebotomy להורדת ferritin. Wilson: copper, young, neuro. iron deficiency: ferritin נמוך.",
  },
  {
    id: 175,
    category: "מקרה קליני",
    question: "אישה בת 32 עם UC, 8 bowel movements ביום עם דם, חום 38°C, Hb 9.5, ESR 55. מאושפזת. מה הטיפול הראשוני?",
    options: [
      "colectomy מיידית ביום 1 ללא ניסיון סטרואידים IV או rescue anti-TNF",
      "IV corticosteroids (hydrocortisone/methylprednisolone) – ASUC protocol",
      "PPI PO בלבד ושחרור מיידי ללא סטרואידים IV או מעקב בימים 3-5",
      "5-ASA enema בלבד ל-ASUC עם חום, tachycardia ו-≥6 bowel movements/יום",
    ],
    correctIndex: 1,
    explanation:
      "ASUC (Truelove-Witts): ≥6 bloody stools/day + systemic toxicity (fever, tachycardia, anemia, ESR↑). טיפול: IV steroids; assess ימים 3-5; rescue infliximab/ciclosporin; colectomy אם כשל. 5-ASA לא מספיק ל-ASUC. surgery אם refractory.",
  },
  {
    id: 176,
    category: "מקרה קליני",
    question: "מטופל עם UC חמור, בטן נפוחה, חום, tachycardia. X-ray: colon רחב >6 ס\"מ. מה האבחנה והטיפול?",
    options: [
      "toxic megacolon – IV steroids, antibiotics, NPO; surgery אם אין שיפור",
      "simple constipation – enema, laxatives ושחרור ללא הדמיה",
      "acute דלקת מעי (לא מפורטת בסיכום) – LLQ pain, antibiotics; לא megacolon בדרך כלל",
      "IBS flare – antispasmodics PO; megacolon אינו מאפיין IBS",
    ],
    correctIndex: 0,
    explanation:
      "toxic megacolon: colonic dilation >6 cm + systemic toxicity (UC, Crohn, C. diff, infectious). טיפול: IV steroids, broad antibiotics, NPO, NG decompression, monitor; colectomy אם deterioration. לא enema/barium – סיכון perforation.",
  },
  {
    id: 177,
    category: "מקרה קליני",
    question: "גבר בן 72, צהבת ללא כאב, ירידה במשקל 5 ק\"ג, stool בהיר. CA 19-9 מורם. מה הצעד הבא?",
    options: [
      "colonoscopy – אינדיקציה ראשונה ל-jaundice, weight loss ו-elevated bilirubin",
      "abdominal CT (pancreatic protocol) – חשד ל-pancreatic head cancer",
      "abdominal ultrasound בלבד – מספיק ל-staging של pancreatic head cancer",
      "EGD – הבדיקה הראשונה לחשד לגידול לבלב עם jaundice obstructive",
    ],
    correctIndex: 1,
    explanation:
      "painless obstructive jaundice + weight loss + pale stools + dark urine = pancreatic head cancer עד proven otherwise. CT pancreas protocol; ERCP/EUS ל-biopsy/staging. Courvoisier sign: palpable gallbladder + painless jaundice. cholangitis: pain + fever.",
  },
  {
    id: 178,
    category: "מקרה קליני",
    question: "מטופל עם UGIB, יציב. EGD: כיב ב-bulb עם דימום פעיל. מה הטיפול לפי הסיכום?",
    options: [
      "מעקב שבועי ללא התערבות בדימום פעיל – PPI PO ללא hemostasis",
      "גסטרוסקופיה דחופה לאבחון וטיפול (hemostasis) + PPI IV",
      "PPI PO בלבד ללא endoscopy בדימום פעיל מכיב ב-duodenal bulb",
      "colonoscopy דחופה בלבד ללא EGD ב-UGIB עם דימום פעיל מכיב",
    ],
    correctIndex: 1,
    explanation:
      "בסיכום: דימום מפצעת – ייצוב, PPI IV, EGD דחופה לאבחון וטיפול (עצירת דימום).",
  },
  {
    id: 179,
    category: "מקרה קליני",
    question: "אישה בת 55, אנמיה, dysphagia לנוזלים ומוצקים, glossitis. בדיקות: Hb 8, MCV 110, low reticulocytes. מה האבחנה?",
    options: [
      "Plummer-Vinson syndrome – iron deficiency + esophageal web; rule out malignancy",
      "GERD erosive – heartburn בלבד; glossitis ו-anemia לא קשורים ל-Plummer-Vinson",
      "acute viral hepatitis – macrocytic anemia ו-esophageal web נדירים; IgM anti-HAV",
      "achalasia – dysphagia לנוזלים ומוצקים; MCV בדרך כלל נורמלי; bird-beak",
    ],
    correctIndex: 0,
    explanation:
      "Plummer-Vinson (Paterson-Kelly): iron deficiency anemia + esophageal web + dysphagia + glossitis/cheilosis. סיכון ל-squamous cell carcinoma של esophagus/hypopharynx. טיפול: iron supplementation; dilatation אם צריך; evaluate for GI malignancy.",
  },
  {
    id: 180,
    category: "מקרה קליני",
    question: "מטופל בן 44, כאב אפיגסטרי, amylase מורם קלות. CT: אבן ב-CBD 8 מ\"מ, CBD dilated, חום 38°C. מה הטיפול?",
    options: [
      "cholecystectomy בלבד ללא ERCP – אבן ב-CBD תמיד עוברת",
      "colonoscopy – אבנים במרה מאובחנות שם",
      "PPI ל-6 שבועות – מטפל ב-choledocholithiasis",
      "ERCP עם sphincterotomy ואבן – cholangitis + choledocholithiasis",
    ],
    correctIndex: 3,
    explanation:
      "choledocholithiasis + cholangitis: ERCP דחוף ל-sphincterotomy, stone extraction, drainage + IV antibiotics. cholecystectomy אחרי stabilization (אותו admission או מאוחר). MRCP non-invasive לאבחון לפני ERCP. gallstone pancreatitis: ERCP אם cholangitis/obstruction.",
  },
];
