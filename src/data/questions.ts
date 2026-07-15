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
];

export const questions: Question[] = [
  // היסטולוגיה (1-15)
  {
    id: 1,
    category: "היסטולוגיה",
    question: "איזו שכבה של דופן מעי מכילה את plexus submucosus (Meissner)?",
    options: [
      "תת-רירית (submucosa)",
      "רירית (mucosa)",
      "שריר (muscularis propria)",
      "serosa / adventitia",
    ],
    correctIndex: 0,
    explanation:
      "plexus submucosus (Meissner) ממוקם בתת-רירית ושולט בעיקר בזרימת הדם, ברירית ובלוטות. plexus myenteric (Auerbach) ממוקם בין שכבות השריר של muscularis propria ושולט בעיקר בפריסטלטיקה.",
  },
  {
    id: 2,
    category: "היסטולוגיה",
    question: "איזו תאי בלוטה בולטים בלשון ומפרישים lingual lipase?",
    options: [
      "תאי Ebner",
      "תאי parietal",
      "תאי chief",
      "תאי Paneth",
    ],
    correctIndex: 0,
    explanation:
      "תאי Ebner בלשון מפרישים lingual lipase. תאי parietal מפרישים HCl ו-intrinsic factor. תאי chief מפרישים pepsinogen. תאי Paneth נמצאים בקריפטות המעי הדק ומפרישים חומרים אנטי-מיקרוביאליים.",
  },
  {
    id: 3,
    category: "היסטולוגיה",
    question: "מהו סוג האפיתל המצפה את הוושט?",
    options: [
      "אפיתל שטוח רב-שכבתי (stratified squamous)",
      "אפיתל עמודי חד-שכבתי (simple columnar)",
      "אפיתל גלנדולרי (glandular)",
      "אפיתל מעבר (transitional)",
    ],
    correctIndex: 0,
    explanation:
      "הוושט מצופה באפיתל שטוח רב-שכבתי שאינו קרטיניזציה מלאה, המתאים לעמידות במעבר מזון. המעבר ל-Junction squamocolumnar (Z-line) מסמן מעבר לאפיתל עמודי חד-שכבתי בקיבה.",
  },
  {
    id: 4,
    category: "היסטולוגיה",
    question: "איזו תאי קיבה אחראים על הפרשת intrinsic factor?",
    options: [
      "תאי parietal (אוקסינטיים)",
      "תאי chief (זימוגניים)",
      "תאי G",
      "תאי D",
    ],
    correctIndex: 0,
    explanation:
      "תאי parietal מפרישים HCl ו-intrinsic factor. תאי chief מפרישים pepsinogen. תאי G מפרישים gastrin. תאי D מפרישים somatostatin.",
  },
  {
    id: 5,
    category: "היסטולוגיה",
    question: "מהו מבנה היסטולוגי האופייני של villi במעי הדק?",
    options: [
      "ליבה של lamina propria עם כלי דם ולימפה, מכוסה אפיתל עמודי עם goblet cells",
      "ליבה של שריר חלק עם ganglia",
      "ליבה של adipose tissue בלבד",
      "ליבה של cartilage עם chondrocytes",
    ],
    correctIndex: 0,
    explanation:
      "villi במעי הדק מכילים ליבת lamina propria עם capillaries ו-lacteal (לימפה), מכוסים באפיתל עמודי עם enterocytes, goblet cells ו-absorptive cells. microvilli (brush border) מגדילים שטח ספיגה.",
  },
  {
    id: 6,
    category: "היסטולוגיה",
    question: "איפה נמצאים תאי Paneth?",
    options: [
      "בקריפטות (crypts) של המעי הדק, בעיקר ב-ileum",
      "באפיתל הוושט",
      "ב-hepatic lobule",
      "באפיתל הפה בלבד",
    ],
    correctIndex: 0,
    explanation:
      "תאי Paneth נמצאים בבסיס קריפטות המעי הדק, בעיקר ב-jejunum ו-ileum. הם מפרישים lysozyme, defensins ואנזימים אנטי-מיקרוביאליים. הם אינם נמצאים בוושט, כבד או פה.",
  },
  {
    id: 7,
    category: "היסטולוגיה",
    question: "מהו תפקיד ה-muscularis mucosae?",
    options: [
      "יצירת קפלים בריריתיים (rugae) ותנועות מקומיות של הרירית",
      "פריסטלטיקה עיקרית של כל דופן המעי",
      "הפרשת mucus",
      "ספיגת חומצות שומן",
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
      "אפיתל עמודי חד-שכבתי עם goblet cells רבים",
      "אפיתל שטוח רב-שכבתי",
      "אפיתל עמודה רב-שכבתי",
      "אפיתל גלנדולרי של בלוטות saliva",
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
      "יחידה היסטולוגית עם central vein במרכז ו-portal triad בפינות",
      "יחידה עם portal vein במרכז",
      "מבנה גלנדולרי עם acini",
      "מבנה לימפואידי עם germinal centers",
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
      "רירית (mucosa)",
      "תת-רירית (submucosa)",
      "muscularis propria",
      "serosa",
    ],
    correctIndex: 0,
    explanation:
      "שכבת הרירית (mucosa) בקיבה כוללת: epithelium, lamina propria, muscularis mucosae ו-gastric glands. תת-רירית מכילה plexus submucosus וכלי דם. muscularis propria מכילה שכבות שריר ו-Auerbach plexus.",
  },
  {
    id: 11,
    category: "היסטולוגיה",
    question: "מה מאפיין histologically את Brunner glands?",
    options: [
      "בלוטות אלקליניות ב-submucosa של duodenum",
      "בלוטות ב-mucosa של jejunum",
      "בלוטות ב-ileum בלבד",
      "בלוטות בקיבה (oxyntic glands)",
    ],
    correctIndex: 0,
    explanation:
      "Brunner glands נמצאות ב-submucosa של duodenum (בעיקר proximal) ומפרישות mucus אלקלי להגנה מפני חומצה ולubrication. הן אינן ב-jejunum, ileum או קיבה.",
  },
  {
    id: 12,
    category: "היסטולוגיה",
    question: "מהו תפקיד ה-Peyer's patches במעי?",
    options: [
      "רקמת לימפואידית מאורגנת (GALT) ב-ileum",
      "בלוטות הפרשת אנזימים",
      "מבנה ספיגת שומן",
      "רקמת שריר לפריסטלטיקה",
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
      "תאי acinar",
      "תאי α (alpha)",
      "תאי ductal",
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
      "אפיתל שטוח רב-שכבתי",
      "אפיתל עמודה רב-שכבתי",
      "אפיתל גלנדולרי של stomach",
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
      "רשת עצבים בין שכבות muscularis propria, שולטת בפריסטלטיקה",
      "רשת עצבים ב-submucosa, שולטת בזרימת דם",
      "רשת בכבד לזרימת bile",
      "רשת בלבלב לאינסולין",
    ],
    correctIndex: 0,
    explanation:
      "plexus myenteric (Auerbach) ממוקם בין שכבות השריר החלק והאורכי של muscularis propria ושולט בפריסטלטיקה ותנועות מעי. plexus submucosus (Meissner) ב-submucosa שולט בזרימת דם, בלוטות ורירית.",
  },

  // וושט (16-28)
  {
    id: 16,
    category: "וושט",
    question: "מהו הגורם העיקרי ל-GERD?",
    options: [
      "ירידה בלחץ של lower esophageal sphincter (LES) והחזרת חומצה",
      "עלייה בלחץ LES בלבד",
      "היפרמוטיליות וושטית בלבד",
      "חוסר הפרשת HCl",
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
      "צרבת (heartburn) ו-regurgitation",
      "שלשול דמי בלבד",
      "צהבת ואיורכיה",
      "כאב בטן תחתון ימני בלבד",
    ],
    correctIndex: 0,
    explanation:
      "תסמיני GERD קלאסיים: heartburn (צרבת retrosternal), regurgitation (החזרת טעם חמוץ/מר), לעיתים dysphagia, כאב חזה. שלשול דמי, צהבת וכאב RLQ אינם תסמינים אופייניים ל-GERD.",
  },
  {
    id: 18,
    category: "וושט",
    question: "מהו Barrett esophagus?",
    options: [
      "metaplasia של אפיתל שטוח ל-columnar (intestinal metaplasia) בעקבות GERD",
      "דלקת ויראלית של הוושט",
      "גידול שפיר של הוושט",
      "achalasia",
    ],
    correctIndex: 0,
    explanation:
      "Barrett esophagus הוא החלפת אפיתל שטוח באפיתל עמודה (intestinal metaplasia עם goblet cells) באזור distal esophagus בעקבות reflux כרוני. מגדיל סיכון ל-adenocarcinoma וושטי. אינו דלקת ויראלית, גידול שפיר או achalasia.",
  },
  {
    id: 19,
    category: "וושט",
    question: "מהו הטיפול הראשוני ל-GERD?",
    options: [
      "שינויי אורח חיים + מעכבי proton pump (PPI)",
      "אנטיביוטיקה ל-H. pylori בלבד",
      "כריתה כירורגית מיידית",
      "גלוקוקorticoids בלבד",
    ],
    correctIndex: 0,
    explanation:
      "טיפול ראשוני ב-GERD: שינויי אורח חיים (הרמת ראש, הימנעות מארוחות לילה, ירידה במשקל, הימנעות מטריגרים) + PPI (אומפרזול וכו'). H2 blockers לתסמינים קלים. כירורגיה (fundoplication) למקרים עמידים. אנטיביוטיקה ל-H. pylori לא לGERD בלבד.",
  },
  {
    id: 20,
    category: "וושט",
    question: "מה מאפיין achalasia?",
    options: [
      "אי-מנוחה של LES ואובדן peristalsis בוושט",
      "hypotonia של LES ו-reflux",
      "stenosis ממאירה בלבד",
      "Barrett metaplasia",
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
      "pneumatic dilation או myotomy (Heller) או POEM",
      "PPI בלבד",
      "אנטיביוטיקה",
      "כימותרפיה",
    ],
    correctIndex: 0,
    explanation:
      "טיפול achalasia: pneumatic dilation, laparoscopic Heller myotomy ± fundoplication, או POEM (per-oral endoscopic myotomy). Botox זמני. PPI לא מטפל ב-achalasia. אנטיביוטיקה וכימותרפיה לא רלוונטיים.",
  },
  {
    id: 22,
    category: "וושט",
    question: "מהו סוג הסרטן השכיח בוושט distal עם Barrett?",
    options: [
      "adenocarcinoma",
      "squamous cell carcinoma",
      "lymphoma",
      "GIST",
    ],
    correctIndex: 0,
    explanation:
      "באזור distal עם Barrett והיסטוריה של GERD שכיח adenocarcinoma. squamous cell carcinoma שכיח יותר בוושט proximal/מזרח אסיה. lymphoma ו-GIST אינם הסוגים השכיחים בוושט.",
  },
  {
    id: 23,
    category: "וושט",
    question: "מהם גורמי הסיכון ל-squamous cell carcinoma של הוושט?",
    options: [
      "עישון, אלכוהול, achalasia, caustic injury, Plummer-Vinson",
      "GERD ו-obesity בלבד",
      "H. pylori בלבד",
      "IBD בלבד",
    ],
    correctIndex: 0,
    explanation:
      "גורמי סיכון ל-esophageal SCC: עישון, אלכוהול, achalasia, caustic stricture, Plummer-Vinson syndrome, tylosis. GERD ו-obesity קשורים יותר ל-adenocarcinoma. H. pylori ו-IBD אינם גורמי סיכון עיקריים ל-SCC וושטי.",
  },
  {
    id: 24,
    category: "וושט",
    question: "מהו Mallory-Weiss tear?",
    options: [
      "קרע ברירית וושטית-קיבתית (GE junction) לאחר הקאות",
      "פצעת עיכול",
      "varices",
      "Barrett",
    ],
    correctIndex: 0,
    explanation:
      "Mallory-Weiss: laceration ב-mucosa של GE junction לאחר הקאות חזקות או retching. מציג hematemesis. שונה מ-Boerhaave (perforation מלאה). לא פצעת עיכול, varices או Barrett.",
  },
  {
    id: 25,
    category: "וושט",
    question: "מה מאפיין esophageal varices?",
    options: [
      "ורידים מורחבים ב-submucosa של הוושט distal בעקבות portal hypertension",
      "גידולים שפירים",
      "stenosis מ-GERD",
      "achalasia",
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
      "octreotide/vasoconstrictors + endoscopic band ligation",
      "PPI בלבד",
      "אנטיביוטיקה ל-H. pylori",
      "כימותרפיה",
    ],
    correctIndex: 0,
    explanation:
      "דימום varices: resuscitation, octreotide (או terlipressin), prophylactic antibiotics, endoscopic band ligation (או sclerotherapy). TIPS במקרים נבחרים. PPI לא מטפל ב-varices. H. pylori וכימותרפיה לא רלוונטיים לדימום חריף.",
  },
  {
    id: 27,
    category: "וושט",
    question: "מהו Boerhaave syndrome?",
    options: [
      "perforation אסופגית מלאה (spontaneous) לאחר הקאה",
      "Mallory-Weiss tear",
      "GERD",
      "achalasia",
    ],
    correctIndex: 0,
    explanation:
      "Boerhaave: rupture מלא של דופן הוושט (בדרך כלל distal, left posterolateral) לאחר הקאה/strain. מציג: chest pain, subcutaneous emphysema, pneumomediastinum, sepsis. חירום כירורגי. שונה מ-Mallory-Weiss (mucosal tear בלבד).",
  },
  {
    id: 28,
    category: "וושט",
    question: "מהו hiatal hernia?",
    options: [
      "הרמת חלק מהקיבה דרך hiatus אסופגי לחזה",
      "hernia inguinal",
      "diverticulum Zenker",
      "stricture מ-caustic",
    ],
    correctIndex: 0,
    explanation:
      "hiatal hernia: herniation של stomach (ועיתוי GE junction) דרך esophageal hiatus לתוך thorax. סוגים: sliding (Type I, שכיח) ו-paraoesophageal (Type II+). קשור ל-GERD. לא inguinal hernia, Zenker או caustic stricture.",
  },

  // פצעת עיכול / גסטריטיס (29-40)
  {
    id: 29,
    category: "פצעת עיכול / גסטריטיס",
    question: "מהו המיקום השכיח ביותר לפצעת עיכול?",
    options: [
      "duodenal bulb (duodenal ulcer)",
      "jejunum",
      "rectum",
      "cecum",
    ],
    correctIndex: 0,
    explanation:
      "פצעות עיכול שכיחות ב-duodenal bulb (הכי שכיח) ו-gastric antrum/body. נדירות ב-jejunum, rectum ו-cecum (אלא אם קשור ל-Zollinger-Ellison או מצבים מיוחדים).",
  },
  {
    id: 30,
    category: "פצעת עיכול / גסטריטיס",
    question: "מהו הקשר בין H. pylori לפצעת עיכול?",
    options: [
      "H. pylori גורם לגסטריטיס כרונית ועלייה בחומצה → סיכון לפצעת",
      "H. pylori מונע פצעות",
      "אין קשר",
      "H. pylori גורם רק ל-CRC",
    ],
    correctIndex: 0,
    explanation:
      "H. pylori: גסטריטיס כרונית, עלייה ב-gastrin ו-HCl (במיוחד antral), פגיעה במנגנוני הגנה → duodenal ו-gastric ulcers. גם קשור ל-gastric cancer ו-MALT lymphoma. לא מונע פצעות ולא קשור ל-CRC ישירות.",
  },
  {
    id: 31,
    category: "פצעת עיכול / גסטריטיס",
    question: "מהו triple therapy ל-H. pylori?",
    options: [
      "PPI + clarithromycin + amoxicillin (או metronidazole) ל-14 יום",
      "PPI בלבד",
      "אנטיביוטיקה בודדת",
      "כימותרפיה",
    ],
    correctIndex: 0,
    explanation:
      "Triple therapy קלאסי: PPI (למשל omeprazole) + clarithromycin + amoxicillin (או metronidazole אם allergy) למשך 14 יום. quadruple therapy (bismuth) כחלופה. PPI בלבד לא מטפל ב-H. pylori. אנטיביוטיקה בודדת לא מספיקה.",
  },
  {
    id: 32,
    category: "פצעת עיכול / גסטריטיס",
    question: "מהו התסמין האופייני ל-duodenal ulcer?",
    options: [
      "כאב epigastric שמוקל לאחר אכילה (pain relief with food)",
      "כאב שמחמיר לאחר אכילה",
      "צהבת",
      "שלשול דמי",
    ],
    correctIndex: 0,
    explanation:
      "duodenal ulcer: כאב epigastric בדרך כלל מוקל באכילה (pain relief with food), מחמיר 2-3 שעות לאחר ארוחה, לעיתים nocturnal pain. gastric ulcer: כאב מחמיר באכילה. צהבת ושלשול דמי לא אופייניים לפצעת פשוטה.",
  },
  {
    id: 33,
    category: "פצעת עיכול / גסטריטיס",
    question: "מהו התסמין האופייני ל-gastric ulcer?",
    options: [
      "כאב epigastric שמחמיר באכילה (pain worsened by food)",
      "כאב שמוקל באכילה",
      "רק כאב לילי",
      "אסימפטומטי תמיד",
    ],
    correctIndex: 0,
    explanation:
      "gastric ulcer: כאב epigastric שמחמיר באכילה (pain worsened by food) בגלל contact עם פצעת. duodenal: מוקל באכילה. gastric ulcer דורשת biopsies לשלילת malignancy.",
  },
  {
    id: 34,
    category: "פצעת עיכול / גסטריטיס",
    question: "מהם גורמי הסיכון לפצעת עיכול (מלבד H. pylori)?",
    options: [
      "NSAIDs, עישון, אלכוהול, stress (ICU), Zollinger-Ellison",
      "PPI שימוש",
      "צמחונות",
      "שתיית מים בלבד",
    ],
    correctIndex: 0,
    explanation:
      "גורמי סיכון לפצעת עיכול: H. pylori, NSAIDs (עיקרי), עישון, אלכוהול, stress ulcers (ICU), Zollinger-Ellison (gastrinoma), family history. PPI מגן מפצעת NSAID. צמחונות ומים אינם גורמי סיכון.",
  },
  {
    id: 35,
    category: "פצעת עיכול / גסטריטיס",
    question: "מהו Zollinger-Ellison syndrome?",
    options: [
      "gastrinoma → היפרגסטרינמיה → פצעות מרובות ו-refractory",
      "חוסר gastrin",
      "achalasia",
      "celiac disease",
    ],
    correctIndex: 0,
    explanation:
      "Zollinger-Ellison: gastrinoma (בדרך כלל pancreas/duodenum) → הפרשת gastrin מוגזמת → hyperacidity → ulcers מרובות, refractory, לעיתים ב-jejunum. קשור ל-MEN1. לא חוסר gastrin, achalasia או celiac.",
  },
  {
    id: 36,
    category: "פצעת עיכול / גסטריטיס",
    question: "מהו acute gastritis?",
    options: [
      "דלקת קיבתית חריפה (למשל NSAIDs, אלכוהול, stress)",
      "דלקת כרונית בלבד",
      "גידול",
      "achalasia",
    ],
    correctIndex: 0,
    explanation:
      "acute gastritis: דלקת חריפה – גורמים: NSAIDs, אלכוהול, stress (ICU), bile reflux, viral. תסמינים: epigastric pain, nausea, bleeding. chronic gastritis: H. pylori, autoimmune. לא גידול או achalasia.",
  },
  {
    id: 37,
    category: "פצעת עיכול / גסטריטיס",
    question: "מהו autoimmune (atrophic) gastritis?",
    options: [
      "אוטואימונית נגד parietal cells → חוסר B12 ו-pernicious anemia",
      "דלקת מ-H. pylori בלבד",
      "רק acute",
      "ללא השפעה על B12",
    ],
    correctIndex: 0,
    explanation:
      "autoimmune gastritis: antibodies נגד parietal cells / intrinsic factor → atrophy, achlorhydria, hypergastrinemia, vitamin B12 deficiency → pernicious anemia. סיכון מוגבר ל-gastric cancer. שונה מ-H. pylori gastritis.",
  },
  {
    id: 38,
    category: "פצעת עיכול / גסטריטיס",
    question: "מהו סיבוך מסוכן של פצעת עיכול?",
    options: [
      "דימום, perforation, obstruction",
      "צהבת בלבד",
      "IBD",
      "celiac",
    ],
    correctIndex: 0,
    explanation:
      "סיבוכי פצעת עיכול: hemorrhage (הכי שכיח), perforation (חירום כירורגי), gastric outlet obstruction (stricture/edema). צהבת, IBD ו-celiac אינם סיבוכים ישירים של פצעת עיכול.",
  },
  {
    id: 39,
    category: "פצעת עיכול / גסטריטיס",
    question: "איך מאבחנים H. pylori?",
    options: [
      "urea breath test, stool antigen, biopsy עם histology/rapid urease",
      "רק דם ל-B12",
      "colonoscopy בלבד",
      "ERCP",
    ],
    correctIndex: 0,
    explanation:
      "אבחון H. pylori: urea breath test (לאחר הפסקת PPI/antibiotics), stool antigen, endoscopic biopsy (histology, rapid urease test, culture). serology פחות שימושי לאחר טיפול. B12, colonoscopy ו-ERCP לא לאבחון H. pylori.",
  },
  {
    id: 40,
    category: "פצעת עיכול / גסטריטיס",
    question: "מהו MALT lymphoma בקיבה?",
    options: [
      "lymphoma של רקמה לימפואידית קשור ל-H. pylori, עשוי להגיב ל-eradication",
      "carcinoma",
      "GIST",
      "פצעת",
    ],
    correctIndex: 0,
    explanation:
      "gastric MALT lymphoma: low-grade B-cell lymphoma קשור ל-H. pylori כרוני. שלבים מוקדמים עשויים להיגמר לאחר eradication של H. pylori. שונה מ-adenocarcinoma, GIST ופצעת.",
  },

  // פיזיולוגיה והורמונים (41-50)
  {
    id: 41,
    category: "פיזיולוגיה והורמונים",
    question: "מה תפקיד gastrin?",
    options: [
      "גירוי הפרשת HCl מתאי parietal וגדילת רירית קיבתית",
      "עיכוב הפרשת HCl",
      "גירוי הפרשת bile",
      "ספיגת גלוקוז",
    ],
    correctIndex: 0,
    explanation:
      "gastrin (מ-G cells באנטרום): מגביר הפרשת HCl (parietal cells), מגביר תנועת קיבה, גדילת mucosa. מופרש בתגובה לאכילה, distension, peptides. somatostatin ו-secretin מעכבים.",
  },
  {
    id: 42,
    category: "פיזיולוגיה והורמונים",
    question: "מה תפקיד secretin?",
    options: [
      "גירוי הפרשת bicarbonate מ-pancreas ו-bile, עיכוב gastrin",
      "גירוי HCl",
      "גירוי גרה",
      "ספיגת שומן",
    ],
    correctIndex: 0,
    explanation:
      "secretin (מ-S cells ב-duodenum): מופרש בתגובה לחומצה ב-duodenum. מגביר bicarbonate מ-pancreas ו-ductal cells כבד, מעכב gastrin ו-HCl. לא מגביר HCl, ghrelin או ספיגת שומן ישירה.",
  },
  {
    id: 43,
    category: "פיזיולוגיה והורמונים",
    question: "מה תפקיד CCK (cholecystokinin)?",
    options: [
      "גירוי הפרשת אנזימים לבלב, התכווצות כיס מרה, ספינcter of Oddi",
      "גירוי HCl",
      "גירוי אינסולין בלבד",
      "פריסטלטיקה וושטית",
    ],
    correctIndex: 0,
    explanation:
      "CCK (מ-I cells): מופרש בתגובה לשומן ו-amino acids. מגביר pancreatic enzyme secretion, gallbladder contraction, relaxation of sphincter of Oddi, מעכב ריקון קיבה. לא HCl, אינסולין בלבד או פריסטלטיקה וושטית.",
  },
  {
    id: 44,
    category: "פיזיולוגיה והורמונים",
    question: "מה תפקיד ghrelin?",
    options: [
      "הורמון רעב מקיבה, מגביר תיאבון",
      "הורמון שובע",
      "הפרשת HCl",
      "ספיגת B12",
    ],
    correctIndex: 0,
    explanation:
      "ghrelin מופרש בעיקר מקיבה (fundus) בזמן צום, מגביר תיאבון ומשחרר GH. leptin ו-GLP-1 קשורים לשובע. לא HCl או B12.",
  },
  {
    id: 45,
    category: "פיזיולוגיה והורמונים",
    question: "מהי peristalsis?",
    options: [
      "גל תנועה מעייתי שמקדם תוכן קדימה",
      "תנועה רק בכיוון הפוך",
      "הפרשת אנזימים",
      "ספיגת מים בלבד",
    ],
    correctIndex: 0,
    explanation:
      "peristalsis: contraction proximal + relaxation distal (migrating motor complex) מקדם bolus קדימה. נשלטת על ידי enteric nervous system (Auerbach, Meissner) ו-modulated by autonomic/vagal. לא תנועה הפוכה בלבד, הפרשה או ספיגה.",
  },
  {
    id: 46,
    category: "פיזיולוגיה והורמונים",
    question: "מהו migrating motor complex (MMC)?",
    options: [
      "מחזורי פעילות בין ארוחות שמנקים מעי (phase III contractions)",
      "פריסטלטיקה רק בזמן אכילה",
      "הפרשת gastrin בלבד",
      "תנועת כבד",
    ],
    correctIndex: 0,
    explanation:
      "MMC: מחזורים של contractile activity בין ארוחות, phase III (powerful contractions) מנקה debris. מופסק באכילה. לא רק בזמן אכילה, לא gastrin בלבד או תנועת כבד.",
  },
  {
    id: 47,
    category: "פיזיולוגיה והורמונים",
    question: "מה תפקיד somatostatin במערכת העיכול?",
    options: [
      "עיכוב gastrin, HCl, pancreatic secretion",
      "גירוי HCl",
      "גירוי תיאבון",
      "ספיגת שומן",
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
      "הפרשת רוק, HCl ואנזימים בתגובה לריח/מראה/טעם אוכל (vagus)",
      "רק ספיגה במעי",
      "רק peristalsis במעי גס",
      "הפרשת bile בלבד",
    ],
    correctIndex: 0,
    explanation:
      "cephalic phase: vagal stimulation → saliva, gastric HCl, pepsinogen לפני בליעה. gastric phase: distension, peptides. intestinal phase: CCK, secretin. לא ספיגה, מעי גס בלבד או bile בלבד.",
  },
  {
    id: 49,
    category: "פיזיולוגיה והורמונים",
    question: "איך מתבצעת ספיגת B12?",
    options: [
      "קשורה ל-intrinsic factor ב-ileum terminal",
      "ב-duodenum בלבד",
      "בקיבה",
      "ב-colon",
    ],
    correctIndex: 0,
    explanation:
      "B12: נספג ב-ileum terminal דרך complex עם intrinsic factor (מ-parietal cells). ליקוי ב-pernicious anemia, resection ileum, Crohn ileal. לא duodenum, קיבה או colon.",
  },
  {
    id: 50,
    category: "פיזיולוגיה והורמונים",
    question: "מהו תפקיד bile salts?",
    options: [
      "אמולסיפיקציה של שומן לספיגה, ספיגה ב-ileum (enterohepatic circulation)",
      "עיכול חלבון",
      "הפרשת HCl",
      "ספיגת גלוקוז",
    ],
    correctIndex: 0,
    explanation:
      "bile salts: אמולסיפיקציה של lipids, formation micelles, ספיגה ב-ileum, enterohepatic circulation (95% מוחזר לכבד). לא עיכול חלבון, HCl או גלוקוז.",
  },

  // כבד / לבלב / מערכת מרה (51-62)
  {
    id: 51,
    category: "כבד / לבלב / מערכת מרה",
    question: "מהם תפקידי הכבד העיקריים?",
    options: [
      "מטבוליזם, detoxification, סינתזת bile, הפקת חלבון (albumin, clotting)",
      "רק עיכול מזון",
      "רק הפרשת אינסולין",
      "רק ספיגה",
    ],
    correctIndex: 0,
    explanation:
      "תפקידי כבד: מטבוליזם (גלוקוז, lipids), detoxification, bile synthesis/secretion, protein synthesis (albumin, clotting factors), storage (glycogen, iron, B12). לא עיכול ישיר, אינסולין (פנקרס) או ספיגה עיקרית.",
  },
  {
    id: 52,
    category: "כבד / לבלב / מערכת מרה",
    question: "מהם גורמי הסיכון ל-cirrhosis?",
    options: [
      "אלכוהול, NAFLD/NASH, viral hepatitis (B,C), hemochromatosis, Wilson",
      "שתיית מים",
      "צמחונות",
      "PPI",
    ],
    correctIndex: 0,
    explanation:
      "גורמי cirrhosis: אלכוהול כרוני, NAFLD/NASH, hepatitis B/C כרוני, hemochromatosis, Wilson disease, autoimmune hepatitis, biliary (PBC, PSC). מים, צמחונות ו-PPI אינם גורמי סיכון.",
  },
  {
    id: 53,
    category: "כבד / לבלב / מערכת מרה",
    question: "מהם סימני portal hypertension?",
    options: [
      "ascites, varices, splenomegaly, caput medusae",
      "צהבת בלבד",
      "כאב RLQ",
      "heartburn",
    ],
    correctIndex: 0,
    explanation:
      "portal hypertension: ascites, esophageal/gastric varices, splenomegaly, caput medusae, hemorrhoids. צהבת יכולה להיות נלווית אך לא סימן ייחודי. RLQ ו-heartburn לא ספציפיים.",
  },
  {
    id: 54,
    category: "כבד / לבלב / מערכת מרה",
    question: "מהו acute pancreatitis – הגורם השכיח ביותר?",
    options: [
      "אבנים בכיס מרה (gallstones) ואלכוהול",
      "H. pylori",
      "GERD",
      "IBD",
    ],
    correctIndex: 0,
    explanation:
      "גורמים שכיחים ל-acute pancreatitis: gallstones (הכי שכיח), אלכוהול, hypertriglyceridemia, ERCP, drugs, trauma. H. pylori, GERD ו-IBD אינם גורמים עיקריים.",
  },
  {
    id: 55,
    category: "כבד / לבלב / מערכת מרה",
    question: "מהם תסמיני acute pancreatitis?",
    options: [
      "כאב epigastric קורן לגב, nausea, vomiting, lipase עולה",
      "heartburn בלבד",
      "שלשול דמי",
      "dysphagia",
    ],
    correctIndex: 0,
    explanation:
      "acute pancreatitis: כאב epigastric חזק קורן לגב, nausea/vomiting, fever, lipase/amylase מוגברים. Cullen/Grey Turner signs בדימום. heartburn, שלשול דמי ו-dysphagia לא אופייניים.",
  },
  {
    id: 56,
    category: "כבד / לבלב / מערכת מרה",
    question: "מהו cholecystitis חריף?",
    options: [
      "דלקת כיס מרה, לרוב obstruction cystic duct מאבן",
      "דלקת כבד",
      "פנאוטיטיס",
      "GERD",
    ],
    correctIndex: 0,
    explanation:
      "acute cholecystitis: inflammation כיס מרה, בדרך כלל stone ב-cystic duct → obstruction. כאב RUQ, Murphy sign, fever, leukocytosis. US: wall thickening, pericholecystic fluid. לא hepatitis, pancreatitis או GERD.",
  },
  {
    id: 57,
    category: "כבד / לבלב / מערכת מרה",
    question: "מהו Charcot triad?",
    options: [
      "חום, צהבת, כאב RUQ ב-cholangitis",
      "חום, כאב חזה, dyspnea",
      "צהבת, ascites, encephalopathy",
      "כאב, vomiting, diarrhea",
    ],
    correctIndex: 0,
    explanation:
      "Charcot triad (acute cholangitis): fever, jaundice, RUQ pain. Reynolds pentad מוסיף hypotension ו-mental status change. לא chest pain, ascites triad או GI nonspecific.",
  },
  {
    id: 58,
    category: "כבד / לבלב / מערכת מרה",
    question: "מהו hepatitis B – מצב כרוני?",
    options: [
      "HBsAg חיובי >6 חודשים, סיכון cirrhosis ו-HCC",
      "HBsAg שלילי תמיד",
      "רק acute ללא כרוניות",
      "מונע HCC לחלוטין",
    ],
    correctIndex: 0,
    explanation:
      "HBV כרוני: HBsAg+ >6 months, עלול להתקדם ל-cirrhosis ו-hepatocellular carcinoma (HCC). טיפול: antivirals. לא HBsAg תמיד שלילי, לא רק acute, לא מונע HCC.",
  },
  {
    id: 59,
    category: "כבד / לבלב / מערכת מרה",
    question: "מהו primary biliary cholangitis (PBC)?",
    options: [
      "אוטואימונית נגד intrahepatic bile ducts, anti-mitochondrial antibodies",
      "viral hepatitis",
      "gallstones בלבד",
      "pancreatitis",
    ],
    correctIndex: 0,
    explanation:
      "PBC: autoimmune destruction של small bile ducts, AMA+, cholestasis, pruritus, fatigue, סיכון cirrhosis. שונה מ-viral hepatitis, gallstones או pancreatitis. PSC קשור ל-IBD.",
  },
  {
    id: 60,
    category: "כבד / לבלב / מערכת מרה",
    question: "מהו hepatocellular carcinoma (HCC)?",
    options: [
      "סרטן כבד עיקרי, קשור ל-cirrhosis ו-HBV/HCV",
      "metastasis מעי בלבד",
      "GIST",
      "lymphoma",
    ],
    correctIndex: 0,
    explanation:
      "HCC: primary liver cancer, גורמים: cirrhosis (כל סיבה), HBV, HCV, aflatoxin, hemochromatosis. סקר עם US + AFP ב-cirrhotics. לא metastasis מעי בלבד, GIST או lymphoma.",
  },
  {
    id: 61,
    category: "כבד / לבלב / מערכת מרה",
    question: "מהו chronic pancreatitis?",
    options: [
      "נזק כרוני ללבלב (אלכוהול שכיח), כאב, malabsorption, סוכרת",
      "דלקת חד-פעמית בלבד",
      "GERD",
      "cholecystitis",
    ],
    correctIndex: 0,
    explanation:
      "chronic pancreatitis: fibrosis, atrophy, אלכוהול שכיח. כאב כרוני, steatorrhea, diabetes (exocrine/endocrine failure). calcifications ב-CT. לא acute בלבד, GERD או cholecystitis.",
  },
  {
    id: 62,
    category: "כבד / לבלב / מערכת מרה",
    question: "מהו hepatic encephalopathy?",
    options: [
      "הפרעה נוירולוגית מצטברת amonia ב-cirrhosis",
      "stroke",
      "migraine",
      "GERD",
    ],
    correctIndex: 0,
    explanation:
      "hepatic encephalopathy: hyperammonemia → neuro dysfunction (confusion, asterixis, coma) ב-liver failure/cirrhosis. טיפול: lactulose, rifaximin. לא stroke, migraine או GERD.",
  },

  // IBD (63-77)
  {
    id: 63,
    category: "IBD",
    question: "מה ההבדל העיקרי בין Crohn ל-Ulcerative Colitis במיקום?",
    options: [
      "Crohn – כל מעי (mouth to anus, skip lesions); UC – רק colon רציף מ-rectum",
      "UC – כל מעי; Crohn – רק rectum",
      "שניהם רק small bowel",
      "שניהם רק stomach",
    ],
    correctIndex: 0,
    explanation:
      "Crohn: כל GI tract, skip lesions, terminal ileum שכיח. UC: continuous inflammation מ-rectum proximally, colon בלבד, ללא small bowel (לרוב). לא UC בכל מעי או שניהם stomach.",
  },
  {
    id: 64,
    category: "IBD",
    question: "מה ההבדל ההיסטולוגי בין Crohn ל-UC?",
    options: [
      "Crohn – transmural, granulomas, skip; UC – רירית/submucosa, crypt abscesses",
      "UC – transmural; Crohn – רק רירית",
      "זהים לחלוטין",
      "Crohn – רק crypt abscesses",
    ],
    correctIndex: 0,
    explanation:
      "Crohn: transmural inflammation, non-caseating granulomas, skip lesions, fistulas. UC: mucosal/submucosal, crypt abscesses, pseudopolyps, no granulomas, continuous. לא הפוך או זהים.",
  },
  {
    id: 65,
    category: "IBD",
    question: "מהם תסמיני UC?",
    options: [
      "bloody diarrhea, urgency, tenesmus, crampy pain",
      "constipation בלבד ללא דם",
      "dysphagia",
      "heartburn",
    ],
    correctIndex: 0,
    explanation:
      "UC תסמינים: bloody diarrhea, urgency, tenesmus, abdominal cramps, weight loss. חומרה לפי extent. constipation ללא דם, dysphagia ו-heartburn לא אופייניים ל-UC.",
  },
  {
    id: 66,
    category: "IBD",
    question: "מהם תסמיני Crohn?",
    options: [
      "כאב בטן, diarrhea, weight loss, fistulas, mass (RLQ)",
      "רק heartburn",
      "רק צהבת",
      "אסימפטומטי תמיד",
    ],
    correctIndex: 0,
    explanation:
      "Crohn: chronic diarrhea (לא תמיד דמי), abdominal pain, weight loss, fever, perianal disease, fistulas, obstruction, RLQ mass (terminal ileum). לא heartburn, צהבת בלבד או תמיד אסימפטומטי.",
  },
  {
    id: 67,
    category: "IBD",
    question: "מהו סיבוך שכיח ב-Crohn ולא ב-UC?",
    options: [
      "fistulas, strictures, abscesses",
      "toxic megacolon בלבד ב-Crohn",
      "רק CRC ללא דלקת",
      "Barrett",
    ],
    correctIndex: 0,
    explanation:
      "Crohn (transmural): fistulas, strictures, abscesses, obstruction. UC: toxic megacolon, severe bleeding. שניהם סיכון CRC (UC יותר עם pancolitis ארוך). Barrett לא קשור.",
  },
  {
    id: 68,
    category: "IBD",
    question: "מהו toxic megacolon?",
    options: [
      "הרחבת colon >6cm עם systemic toxicity ב-UC חמור",
      "הרחבת וושט",
      "גידול שפיר",
      "achalasia",
    ],
    correctIndex: 0,
    explanation:
      "toxic megacolon: colonic dilation >6cm + toxicity (fever, tachycardia, leukocytosis) ב-severe colitis (בעיקר UC). חירום – IV steroids, surgery אם אין שיפור. לא esophagus, גידול שפיר או achalasia.",
  },
  {
    id: 69,
    category: "IBD",
    question: "מהו הטיפול הראשוני ל-UC קל-בינוני?",
    options: [
      "5-ASA (mesalamine) topical או systemic",
      "כימותרפיה",
      "fundoplication",
      "PPI בלבד",
    ],
    correctIndex: 0,
    explanation:
      "UC קל-בינוני: 5-ASA (mesalamine) – enemas ל-proctitis, oral ל-extensive. moderate-severe: corticosteroids, biologics (anti-TNF, vedolizumab). לא chemo, fundoplication או PPI ל-UC.",
  },
  {
    id: 70,
    category: "IBD",
    question: "מהו הטיפול ל-Crohn moderate-severe?",
    options: [
      "corticosteroids, immunomodulators (azathioprine), biologics (infliximab)",
      "PPI בלבד",
      "antibiotics ל-H. pylori בלבד",
      "achalasia dilation",
    ],
    correctIndex: 0,
    explanation:
      "Crohn moderate-severe: steroids induction, maintenance – azathioprine/6-MP, methotrexate, biologics (infliximab, adalimumab, ustekinumab). nutrition, surgery ל-strictures/fistulas. לא PPI, H. pylori alone או dilation.",
  },
  {
    id: 71,
    category: "IBD",
    question: "מה קשור ל-IBD מבחינת עששת?",
    options: [
      "ASCAs ב-Crohn, p-ANCA ב-UC (תמיכה, לא אבחון יחיד)",
      "רק HBsAg",
      "רק troponin",
      "רק PSA",
    ],
    correctIndex: 0,
    explanation:
      "סרולוגיה IBD: ASCA+ ב-Crohn, p-ANCA+ ב-UC – supportive, לא diagnostic alone. אבחון: clinical, endoscopy, histology. HBsAg, troponin, PSA לא ל-IBD.",
  },
  {
    id: 72,
    category: "IBD",
    question: "מהו extraintestinal manifestation של IBD?",
    options: [
      "arthritis, uveitis, erythema nodosum, pyoderma gangrenosum, PSC",
      "רק heartburn",
      "רק appendicitis",
      "Barrett בלבד",
    ],
    correctIndex: 0,
    explanation:
      "extraintestinal IBD: joint (peripheral, axial), eye (uveitis, episcleritis), skin (erythema nodosum, pyoderma gangrenosum), liver (PSC עם UC), osteoporosis. לא heartburn, appendicitis או Barrett.",
  },
  {
    id: 73,
    category: "IBD",
    question: "מהו primary sclerosing cholangitis (PSC) וקשרו ל-IBD?",
    options: [
      "כולסטזיס כרוני, קשור בעיקר ל-UC",
      "viral hepatitis בלבד",
      "GERD",
      "pancreatitis בלבד",
    ],
    correctIndex: 0,
    explanation:
      "PSC: chronic cholestatic liver disease, fibrosis bile ducts, קשור ל-UC (70-80%). סיכון cholangiocarcinoma. MRCP לאבחון. לא viral hepatitis, GERD או pancreatitis בלבד.",
  },
  {
    id: 74,
    category: "IBD",
    question: "מתי מומלץ colonoscopy surveillance ב-UC?",
    options: [
      "pancolitis >8-10 שנים – biopsies לדיספלזיה",
      "ללא IBD כל שנה",
      "רק לפני גיל 20",
      "אף פעם",
    ],
    correctIndex: 0,
    explanation:
      "UC CRC surveillance: pancolitis >8-10 years, primary sclerosing cholangitis – colonoscopy עם random biopsies (dye spray/chromoendoscopy). Crohn colitis גם סיכון. לא ללא IBD, רק <20 או never.",
  },
  {
    id: 75,
    category: "IBD",
    question: "מהו microscopic colitis?",
    options: [
      "שלשול כרוני עם histology אבנורמלית (lymphocytic/collagenous) ו-colonoscopy נראית תקינה",
      "UC חמור",
      "Crohn fistula",
      "GERD",
    ],
    correctIndex: 0,
    explanation:
      "microscopic colitis: chronic watery diarrhea, normal colonoscopy macroscopically, biopsy shows lymphocytic או collagenous colitis. טיפול: budesonide. לא UC severe, Crohn fistula או GERD.",
  },
  {
    id: 76,
    category: "IBD",
    question: "מהו celiac disease לעומת IBD?",
    options: [
      "רגישות לגלוטן, villous atrophy ב-duodenum/jejunum – לא דלקת מעי גס טיפוסית",
      "זהה ל-UC",
      "זהה ל-Crohn",
      "GERD",
    ],
    correctIndex: 0,
    explanation:
      "celiac: gluten sensitivity, autoantibodies (anti-tTG), villous atrophy small bowel, malabsorption. טיפול: gluten-free diet. שונה מ-UC (colon) ו-Crohn (transmural skip). לא GERD.",
  },
  {
    id: 77,
    category: "IBD",
    question: "מהו pouchitis?",
    options: [
      "דלקת לאחר ileal pouch-anal anastomosis (IPAA) ל-UC",
      "דלקת כיס מרה",
      "GERD",
      "achalasia",
    ],
    correctIndex: 0,
    explanation:
      "pouchitis: inflammation של ileal pouch אחרי colectomy + IPAA ל-UC. תסמינים: increased stool frequency, urgency, bleeding. טיפול: antibiotics (cipro/metronidazole). לא cholecystitis, GERD או achalasia.",
  },

  // סרטן מעי גס (78-87)
  {
    id: 78,
    category: "סרטן מעי גס",
    question: "מהו מסלול השכיח ביותר ל-CRC (colorectal cancer)?",
    options: [
      "adenoma-carcinoma sequence (APC, KRAS, p53)",
      "רק מ-UC ללא polyp",
      "רק viral",
      "Barrett",
    ],
    correctIndex: 0,
    explanation:
      "CRC pathway שכיח: adenomatous polyp → carcinoma (chromosomal instability: APC loss, KRAS, p53). microsatellite instability (Lynch). UC dysplasia pathway. לא viral בלבד או Barrett (esophagus).",
  },
  {
    id: 79,
    category: "סרטן מעי גס",
    question: "מהם גורמי הסיכון ל-CRC?",
    options: [
      "גיל, polyp history, IBD, family history/Lynch, diet (אדום בשר), obesity, smoking",
      "צמחונות בלבד כגורם הגנה יחיד",
      "שתיית מים",
      "PPI",
    ],
    correctIndex: 0,
    explanation:
      "גורמי סיכון CRC: age >50, adenomatous polyps, IBD (UC/Crohn colitis), family history, Lynch syndrome (HNPCC), FAP, diet (red/processed meat), obesity, smoking, diabetes. צמחונות מגנה אך לא יחיד. מים ו-PPI לא גורמים.",
  },
  {
    id: 80,
    category: "סרטן מעי גס",
    question: "מהו Lynch syndrome (HNPCC)?",
    options: [
      "גנטי MMR deficiency – CRC מוקדם, endometrial, ovarian",
      "FAP עם אלפי polyps",
      "H. pylori",
      "GERD",
    ],
    correctIndex: 0,
    explanation:
      "Lynch (HNPCC): inherited MMR gene mutations (MLH1, MSH2...) → MSI-high CRC, endometrial, ovarian, gastric. Amsterdam criteria. FAP = APC, thousands polyps. לא H. pylori או GERD.",
  },
  {
    id: 81,
    category: "סרטן מעי גס",
    question: "מהו FAP (familial adenomatous polyposis)?",
    options: [
      "APC mutation – מאות-אלפי adenomatous polyps, CRC כמעט בוודאות ללא colectomy",
      "Lynch",
      "רק polyp בודד",
      "UC",
    ],
    correctIndex: 0,
    explanation:
      "FAP: autosomal dominant APC mutation, hundreds-thousands colonic adenomas, near 100% CRC risk without prophylactic colectomy. extracolonic: duodenal, desmoid. Lynch = MMR. לא polyp בודד או UC.",
  },
  {
    id: 82,
    category: "סרטן מעי גס",
    question: "מהו סקר CRC המומלץ (average risk)?",
    options: [
      "colonoscopy q10y מגיל 45-50, או FIT annual, או alternatives",
      "אף סקר",
      "רק דם ל-B12",
      "upper endoscopy בלבד",
    ],
    correctIndex: 0,
    explanation:
      "CRC screening average risk (45-50+): colonoscopy every 10 years, annual FIT/FOBT, flexible sigmoidoscopy, CT colonography, multi-target stool DNA – per guidelines. לא no screening, B12 או EGD alone.",
  },
  {
    id: 83,
    category: "סרטן מעי גס",
    question: "מהו המיקום השכיח ל-CRC?",
    options: [
      "rectosigmoid ו-rectum",
      "esophagus",
      "duodenum",
      "jejunum",
    ],
    correctIndex: 0,
    explanation:
      "CRC שכיח ב-rectum ו-sigmoid colon. יורד ב-proximal colon בשנים האחרונות במערב. esophagus = esophageal cancer, duodenum/jejunum נדירים ל-primary CRC.",
  },
  {
    id: 84,
    category: "סרטן מעי גס",
    question: "מהם תסמיני CRC?",
    options: [
      "דם בצואה, שינוי bowel habits, weight loss, anemia, obstruction",
      "heartburn",
      "dysphagia בלבד",
      "צהבת בלבד",
    ],
    correctIndex: 0,
    explanation:
      "CRC תסמינים: hematochezia/melena, change in stool caliber/frequency, abdominal pain, weight loss, iron deficiency anemia, obstruction (left-sided). early may be asymptomatic. heartburn, dysphagia alone, jaundice alone לא typical.",
  },
  {
    id: 85,
    category: "סרטן מעי גס",
    question: "מהו CEA ב-CRC?",
    options: [
      "tumor marker למעקב אחרי resection, לא לסקר",
      "אבחון יחיד לסקר",
      "סמן ל-GERD",
      "סמן ל-H. pylori",
    ],
    correctIndex: 0,
    explanation:
      "CEA: elevated ב-CRC, משמש monitoring recurrence post-resection, לא screening (low sensitivity/specificity). לא diagnosis alone, GERD או H. pylori marker.",
  },
  {
    id: 86,
    category: "סרטן מעי גס",
    question: "מהו staging עיקרי ל-CRC?",
    options: [
      "TNM – depth, nodes, metastasis",
      "רק גודל polyp",
      "רק גיל",
      "רק CEA",
    ],
    correctIndex: 0,
    explanation:
      "CRC staging: TNM – T (tumor depth), N (lymph nodes), M (metastasis). Stage I-IV determines prognosis/treatment. polyp size, age, CEA alone לא staging.",
  },
  {
    id: 87,
    category: "סרטן מעי גס",
    question: "לאיזה כלי דם CRC metastasizes הכי שכיח?",
    options: [
      "כבד (portal circulation)",
      "ריאות בלבד ראשון תמיד",
      "מוח בלבד",
      "עור",
    ],
    correctIndex: 0,
    explanation:
      "CRC metastasis שכיח לכבד (portal venous drainage). גם lungs, peritoneum. לא lungs always first, brain alone או skin primary.",
  },

  // אנדוסקופיה (88-95)
  {
    id: 88,
    category: "אנדוסקופיה",
    question: "מהו EGD (esophagogastroduodenoscopy)?",
    options: [
      "אנדוסקופיה של esophagus, stomach, duodenum",
      "אנדוסקופיה של colon בלבד",
      "צילום בטן",
      "MRI",
    ],
    correctIndex: 0,
    explanation:
      "EGD: upper endoscopy – esophagus, stomach, duodenum. לאבחון GERD, ulcers, H. pylori biopsy, varices, Barrett. colonoscopy = lower GI. CT/MRI לא endoscopy.",
  },
  {
    id: 89,
    category: "אנדוסקופיה",
    question: "מהו colonoscopy?",
    options: [
      "אנדוסקופיה של כל ה-colon ל-cecum, polypectomy וביופסיה",
      "אנדוסקופיה עליונה",
      "ERCP",
      "capsule לבלב בלבד",
    ],
    correctIndex: 0,
    explanation:
      "colonoscopy: entire colon to cecum, screening, polypectomy, biopsy IBD/CRC. EGD = upper. ERCP = biliary/pancreatic ducts. capsule endoscopy = small bowel.",
  },
  {
    id: 90,
    category: "אנדוסקופיה",
    question: "מהו ERCP?",
    options: [
      "endoscopic retrograde cholangiopancreatography – דימות וטיפול בדרכי מרה/לבלב",
      "colonoscopy",
      "EGD בלבד",
      "barium swallow",
    ],
    correctIndex: 0,
    explanation:
      "ERCP: endoscope ל-duodenum, cannulation ampulla, contrast ל-bile/pancreatic ducts, stone extraction, stent, sphincterotomy. סיכון post-ERCP pancreatitis. לא colonoscopy, EGD alone או barium.",
  },
  {
    id: 91,
    category: "אנדוסקופיה",
    question: "מתי נדרשת biopsies ב-Barrett esophagus?",
    options: [
      "מיפוי ודגימות לפי Seattle protocol לדיספלזיה",
      "אף פעם",
      "רק ב-colonoscopy",
      "רק ב-CT",
    ],
    correctIndex: 0,
    explanation:
      "Barrett surveillance: Seattle protocol – 4-quadrant biopsies every 1-2cm ל-dysplasia detection. לא never, colonoscopy או CT.",
  },
  {
    id: 92,
    category: "אנדוסקופיה",
    question: "מהו band ligation באנדוסקופיה?",
    options: [
      "טיפול ב-varices וושטיות/גסטריות",
      "טיפול ב-polyp colon",
      "PPI infusion",
      "כימותרפיה",
    ],
    correctIndex: 0,
    explanation:
      "endoscopic variceal band ligation: rubber bands על varices לעצירת דימום/מניעה. polypectomy = snare. PPI IV לא ligation. chemo לא endoscopic hemostasis.",
  },
  {
    id: 93,
    category: "אנדוסקופיה",
    question: "מה הכנה ל-colonoscopy?",
    options: [
      "צום, bowel prep (PEG), הפסקת anticoagulants לפי הנחיה",
      "אכילה כבדה לפני",
      "ללא צום",
      "רק MRI",
    ],
    correctIndex: 0,
    explanation:
      "colonoscopy prep: clear liquids, bowel prep (PEG solution), hold iron/anticoagulants per protocol. heavy meal, no fast, MRI לא prep.",
  },
  {
    id: 94,
    category: "אנדוסקופיה",
    question: "מהו capsule endoscopy?",
    options: [
      "קפסולה עם מצלמה לצילום מעי דק",
      "colonoscopy",
      "EGD",
      "ERCP",
    ],
    correctIndex: 0,
    explanation:
      "capsule endoscopy: wireless camera capsule ל-small bowel (obscure bleeding, Crohn). לא colon, EGD או ERCP.",
  },
  {
    id: 95,
    category: "אנדוסקופיה",
    question: "מהו polypectomy ב-colonoscopy?",
    options: [
      "הסרת polyp (snare) למניעת CRC",
      "הסרת appendix",
      "fundoplication",
      "myotomy",
    ],
    correctIndex: 0,
    explanation:
      "polypectomy: removal adenomatous polyp during colonoscopy – prevents CRC. appendectomy = surgery. fundoplication = GERD surgery. myotomy = achalasia.",
  },

  // שונות (96-100)
  {
    id: 96,
    category: "שונות",
    question: "מהו appendicitis חריף?",
    options: [
      "דלקת appendix – כאב periumbilical → RLQ, McBurney point",
      "דלקת כיס מרה",
      "GERD",
      "UC",
    ],
    correctIndex: 0,
    explanation:
      "acute appendicitis: periumbilical pain → RLQ, anorexia, nausea, fever, McBurney tenderness, Rovsing sign. לא cholecystitis (RUQ), GERD או UC.",
  },
  {
    id: 97,
    category: "שונות",
    question: "מהו diverticulosis?",
    options: [
      "outpouchings של mucosa דרך muscularis ב-colon (לרוב sigmoid)",
      "גידול ממאיר",
      "Barrett",
      "achalasia",
    ],
    correctIndex: 0,
    explanation:
      "diverticulosis: pseudodiverticula (mucosa/submucosa herniation) ב-colon, שכיח sigmoid, לרוב אסימפטומטי. diverticulitis = inflammation. לא cancer, Barrett או achalasia.",
  },
  {
    id: 98,
    category: "שונות",
    question: "מהו irritable bowel syndrome (IBS)?",
    options: [
      "הפרעת מעי פונקציונלית – כאב/נפיחות עם שינוי bowel habits ללא organic disease",
      "IBD",
      "CRC",
      "appendicitis",
    ],
    correctIndex: 0,
    explanation:
      "IBS: functional disorder, Rome criteria – abdominal pain related to defecation, change frequency/form, no structural disease. שונה מ-IBD (inflammation), CRC (mass) ו-appendicitis (acute).",
  },
  {
    id: 99,
    category: "שונות",
    question: "מהו GI bleeding – מקור שכיח ל-upper vs lower?",
    options: [
      "Upper: PUD, varices; Lower: diverticulosis, angiodysplasia, hemorrhoids, CRC",
      "Upper: CRC; Lower: varices בלבד",
      "אין הבדל",
      "רק appendix",
    ],
    correctIndex: 0,
    explanation:
      "Upper GI bleed (proximal to ligament of Treitz): PUD, varices, gastritis, Mallory-Weiss. Lower: diverticulosis, angiodysplasia, hemorrhoids, colitis, CRC. לא CRC upper primarily או varices lower only.",
  },
  {
    id: 100,
    category: "שונות",
    question: "מהו Ogilvie syndrome?",
    options: [
      "pseudo-obstruction של colon (acquired colonic ileus)",
      "achalasia",
      "GERD",
      "H. pylori",
    ],
    correctIndex: 0,
    explanation:
      "Ogilvie syndrome (acute colonic pseudo-obstruction): massive colonic dilation ללא mechanical obstruction, post-op, illness. טיפול: neostigmine, decompression. לא achalasia (esophagus), GERD או H. pylori.",
  },
];
