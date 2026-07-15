# Digestion Exam Prep

אתר חזרה למבחן במערכת העיכול — 180 שאלות רב-ברירה בעברית עם הסברים מלאים (כולל 30 מקרים קליניים).

## הרצה מקומית

```bash
npm install
npm run dev
```

## בנייה

```bash
npm run build
```

## מקורות

השאלות מבוססות **אך ורק** על תוכן הסיכומים שחולצו מה-PDF:
- `extracted/סיכום עיכול.txt` — תוכן קליני עיקרי
- `extracted/היסטולוגיה עיכול.txt` — היסטולוגיה

ניתן ליישר מחדש את השאלות לסיכום באמצעות `python3 scripts/align-to-source.py` ואז `python3 scripts/merge-questions.py`.
