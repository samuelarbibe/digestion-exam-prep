#!/usr/bin/env python3
import json
import random
from pathlib import Path

BASE = Path(__file__).resolve().parent.parent / "src" / "data"

MANUAL = {
    116: [
        'ספיגת מים ואלקטרוליטים, הפרשת mucus, יצירת צואה, סינתזת ויטמינים (K, B) ע"י microbiota',
        "עיכול חלבונים וספיגת amino acids – תפקיד עיקרי כמו ב-jejunum",
        "הפרשת bile ו-pancreatic enzymes; ניטרול חומצה קיבתית – כמו ב-duodenum",
        "ספיגת B12 עם intrinsic factor; enterohepatic circulation של bile acids",
    ],
    119: [
        "duodenum: ערבוב enzymatic וניטרול חומצה; jejunum: ספיגה עיקרית; ileum: bile acids, B12, Peyer's patches",
        "duodenum: ספיגת B12 ו-Peyer's patches; jejunum: Brunner glands; ileum: עיכול חלבונים ראשוני",
        "כל חלקי המעי הדק: ספיגת מים ואלקטרוליטים בלבד – ללא הבדל אנטומי או פונקציונלי",
        "jejunum: ניטרול חומצה ו-Brunner glands; duodenum: ספיגה עיקרית; ileum: ללא תפקיד מיוחד",
    ],
    120: [
        "portal vein ~75% (nutrient-rich) + hepatic artery ~25% (oxygen-rich)",
        "hepatic artery בלבד מספקת ~100% מזרימת הדם לכבד – portal vein לא משמעותית",
        "portal vein בלבד – ללא תרומת עורק כבדי לספקת חמצן",
        "IVC ישירות ל-lobules – ללא portal vein או hepatic artery",
    ],
    121: [
        "~95% מ-bile acids נספגים ב-terminal ileum, חוזרים ב-portal vein לכבד לשימוש חוזר",
        "כל bile acids מופרשים בצואה – אין מחזור enterohepatic; נדרשת סינתזה מלאה מחדש",
        "ספיגה פסיבית של bile acids ב-duodenum; אובדן ב-ileum אינו משמעותי קלינית",
        "ייצור bile acids ב-gallbladder בלבד; כבד אינו מסנטז acid de novo",
    ],
    122: [
        "ויראלי, אלכוהול, אוטואימונית, תרופות, cholestasis, NAFLD/NASH",
        "H. pylori כגורם יחיד ושכיח ל-hepatitis כרונית בכל הגילאים",
        "אלכוהול בלבד – שאר הגורמים נדירים ולא נבחנים בקליניקה",
        "GERD ו-IBS כגורמי דלקת כבדית כרונית עיקריים",
    ],
    123: [
        "עייפות, anorexia, אי נוחות RUQ, pruritus, jaundice; fulminant: coagulopathy ו-encephalopathy",
        "heartburn, regurgitation ו-dysphagia לנוזלים – תסמינים מובילים של hepatitis",
        "שלשול דמי, urgency, tenesmus ו-bloating כסימנים גסטרואינטסטינליים מובילים",
        "כאב RUQ, Murphy sign ו-leukocytosis – תמונה קלאסית של viral hepatitis",
    ],
    125: [
        "alcohol, NAFLD/NASH, HBV/HCV, מחלות דרכי מרה, hemochromatosis, Wilson",
        "אלכוהול כרוני בלבד – ללא תרומה של NASH, וירוסים או מחלות cholestatic",
        "HBV/HCV בלבד – ללא אלכוהול, NAFLD או מחלות מטבוליות של נחושת/ברזל",
        "GERD כרוני, achalasia ו-IBS כגורמי שחמת עיקריים במבוגרים",
    ],
    129: [
        "organ failure (renal, respiratory/ARDS), SIRS, ascites/pleural effusion; Cullen sign, Grey Turner sign",
        "כאב אפיגסטרי קל המוקל בשכיבה, ללא SIRS, necrosis או אי-ספיקת איברים",
        "melena, hematemesis ו-esophageal varices כסיבוכים הדומיננטיים ב-pancreatitis חריפה",
        "pruritus cholestatic, dark urine ו-Kayser-Fleischer rings כסימנים עיקריים",
    ],
    131: [
        "epigastric pain מוחמר 15–30 דק' אחרי אכילה, steatorrhea, חוסר ADEK, diabetes mellitus מאוחר",
        "heartburn ו-regurgitation בלבד – ללא steatorrhea או סוכרת פנקריאטית",
        "bloody diarrhea, urgency, continuous colitis ו-pseudopolyps כסימנים מובילים",
        "dysphagia לנוזלים, regurgitation ו-megaesophagus ב-barium swallow",
    ],
    136: [
        "IV corticosteroids יום 1; הערכה ימים 3–5; rescue anti-TNF או colectomy אם אין תגובה",
        "PPI ו-5-ASA per os בלבד בשחרור ביתי מיידי ללא מעקב או סטרואידים IV",
        "אנטיביוטיקה בו-פרופרצין כטיפול יחיד ללא IV corticosteroids או biologics",
        "colectomy מיידית בכל מטופל מאושפז ללא ניסיון טיפול רפואי או rescue therapy",
    ],
    140: [
        "ימין: לרוב אסימפטומטי, iron deficiency anemia; שמאל: שינוי bowel habits, hematochezia, narrowing",
        "אין הבדל קליני – כל הגידולים מציגים hematochezia גלוי ו-obstruction מוקדם",
        "ימין: תמיד hematochezia גלוי; שמאל: תמיד אנמיה מחוסר ברזל בלבד ללא שינוי בצואה",
        "ימין: obstruction מוקדם; שמאל: לרוב אסימפטומטי עם anemia occult בלבד",
    ],
    141: [
        "anemia, dysphagia, upper GI bleeding, epigastric pain, weight loss, chronic vomiting",
        "סקר CRC ב-average risk ללא תסמינים – אינדיקציה עיקרית ל-EGD",
        "צהבת cholestatic בלבד ללא תסמינים עליונים – אינדיקציה ל-EGD",
        "כאב RUQ ו-Murphy sign – אינדיקציה עיקרית ל-EGD",
    ],
    143: [
        "ERCP: אבחון וטיפול (invasive, סיכון pancreatitis); MRCP: הדמיה לא פולשנית ללא טיפול",
        "זהים לחלוטין – שניהם לא פולשניים וללא סיכון post-procedure",
        "MRCP פולשני עם סיכון post-ERCP pancreatitis; ERCP הוא MRI בלבד",
        "ERCP: MRI של ducts ללא endoscope; MRCP: endoscopy טיפולית עם sphincterotomy",
    ],
    144: [
        "אנדוסקופיה + ultrasound – staging גידולים, אבנים, FNA/FNB; רגיש ל-pancreas ו-bile ducts",
        "אנדוסקופיה של הוושט בלבד – ללא יכולת הדמיה של לבלב, כבד או lymph nodes",
        "בדיקת דם ל-amylase/lipase – חלופה ל-EUS ב-staging של pancreatic cancer",
        "סקר CRC חלופי ל-colonoscopy/FIT – ללא יכולת FNA או T/N staging",
    ],
    149: [
        "α: glucagon; β: insulin; δ: somatostatin; PP: pancreatic polypeptide; ε: ghrelin",
        "כל תאי ה-islets מפרישים insulin – אין הפרדה תאית או תפקידים שונים",
        "רק glucagon מ-α cells – ללא תאי β, δ או PP בלבלב האנושי",
        "רק amylase, lipase ו-proteases – תפקיד endocrine בלבד ללא acinar cells",
    ],
    150: [
        "חלבון מנויטרופילים – מדד דלקת מעי; מבדיל IBD מ-IBS; מעקב תגובה לטיפול",
        "בדיקת נשיפה/צואה לאבחון H. pylori – מדד דלקת מעי ב-IBD",
        "סקר CRC חלופי ל-colonoscopy – מבוסס על calprotectin בלבד",
        "מדד תפקיד כבד (ALT/AST/bilirubin) – משמש להבחנה בין UC ל-Crohn",
    ],
}


def shuffle_question(q: dict) -> None:
    opts = q["options"][:]
    correct = opts[q["correctIndex"]]
    random.seed(q["id"] * 7919 + 42)
    random.shuffle(opts)
    q["options"] = opts
    q["correctIndex"] = opts.index(correct)


def main() -> None:
    files = [
        "improved-1-50.json",
        "improved-51-100.json",
        "improved-101-150.json",
        "clinical-vignettes.json",
    ]
    all_q = []

    for fname in files:
        path = BASE / fname
        batch = json.loads(path.read_text(encoding="utf-8"))
        for q in batch:
            if q["id"] in MANUAL:
                opts = MANUAL[q["id"]]
                correct = opts[0]
                q["options"] = opts
                q["correctIndex"] = 0
                shuffle_question(q)
        path.write_text(json.dumps(batch, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")
        all_q.extend(batch)

    all_q.sort(key=lambda x: x["id"])
    assert len(all_q) == 180

    for q in all_q:
        if q["id"] not in MANUAL:
            shuffle_question(q)

    ci = {i: 0 for i in range(4)}
    longest = bias30 = 0
    for q in all_q:
        ci[q["correctIndex"]] += 1
        lens = [len(o) for o in q["options"]]
        cl = lens[q["correctIndex"]]
        ol = max(lens[i] for i in range(4) if i != q["correctIndex"])
        if cl == max(lens):
            longest += 1
        if cl > ol + 30:
            bias30 += 1

    print("correctIndex:", ci)
    print("correct longest:", longest)
    print("correct >30 longer:", bias30)

    def ts(s: str) -> str:
        return json.dumps(s, ensure_ascii=False)

    lines = [
        """export interface Question {
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
"""
    ]
    for q in all_q:
        opts = ",\n      ".join(ts(o) for o in q["options"])
        lines.append(
            f"""  {{
    id: {q['id']},
    category: {ts(q['category'])},
    question: {ts(q['question'])},
    options: [
      {opts},
    ],
    correctIndex: {q['correctIndex']},
    explanation:
      {ts(q['explanation'])},
  }},"""
        )
    lines.append("];\n")
    (BASE / "questions.ts").write_text("\n".join(lines), encoding="utf-8")
    print("wrote questions.ts")


if __name__ == "__main__":
    main()
