import { useCallback, useMemo, useState } from "react";
import { categories, questions, type Question } from "./data/questions";
import "./App.css";

type Mode = "menu" | "quiz";

function shuffle<T>(arr: T[]): T[] {
  const copy = [...arr];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

function QuizScreen({
  pool,
  onExit,
}: {
  pool: Question[];
  onExit: () => void;
}) {
  const [index, setIndex] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [revealed, setRevealed] = useState(false);
  const [score, setScore] = useState(0);
  const [answered, setAnswered] = useState(0);

  const q = pool[index];
  const displayed = useMemo(() => {
    const opts = [...q.options];
    const correct = opts[q.correctIndex];
    const shuffled = shuffle(opts);
    return {
      options: shuffled,
      correctIndex: shuffled.indexOf(correct),
    };
  }, [q]);
  const done = index >= pool.length;
  const progress = pool.length ? ((index + (revealed ? 1 : 0)) / pool.length) * 100 : 0;

  const pick = (i: number) => {
    if (revealed) return;
    setSelected(i);
    setRevealed(true);
    setAnswered((a) => a + 1);
    if (i === displayed.correctIndex) setScore((s) => s + 1);
  };

  const next = () => {
    if (index + 1 >= pool.length) {
      setIndex(pool.length);
      return;
    }
    setIndex((i) => i + 1);
    setSelected(null);
    setRevealed(false);
  };

  if (done) {
    const pct = pool.length ? Math.round((score / pool.length) * 100) : 0;
    return (
      <div className="screen results">
        <div className="results-card">
          <span className="results-emoji" aria-hidden>
            {pct >= 80 ? "🎉" : pct >= 60 ? "💪" : "📚"}
          </span>
          <h2>סיימת!</h2>
          <p className="results-score">
            {score} / {pool.length}
          </p>
          <p className="results-pct">{pct}% הצלחה</p>
          <div className="btn-row">
            <button type="button" className="btn primary" onClick={onExit}>
              חזרה לתפריט
            </button>
          </div>
          <p className="copyright">כל הזכויות שמורות לשמוליק</p>
        </div>
      </div>
    );
  }

  return (
    <div className="screen quiz">
      <header className="quiz-header">
        <button type="button" className="btn ghost" onClick={onExit}>
          ← יציאה
        </button>
        <div className="quiz-meta">
          <span className="badge">{q.category}</span>
          <span className="counter">
            {index + 1} / {pool.length}
          </span>
        </div>
        <div className="progress-track">
          <div className="progress-fill" style={{ width: `${progress}%` }} />
        </div>
      </header>

      <article className="question-card">
        <h2 className={`question-text${q.category === "מקרה קליני" ? " clinical" : ""}`}>{q.question}</h2>
        <ul className="options" role="listbox" aria-label="אפשרויות תשובה">
          {displayed.options.map((opt, i) => {
            let cls = "option";
            if (revealed) {
              if (i === displayed.correctIndex) cls += " correct";
              else if (i === selected) cls += " wrong";
              else cls += " dim";
            } else if (selected === i) cls += " selected";

            return (
              <li key={i}>
                <button
                  type="button"
                  className={cls}
                  onClick={() => pick(i)}
                  disabled={revealed}
                  role="option"
                  aria-selected={selected === i}
                >
                  <span className="option-letter">
                    {String.fromCharCode(1488 + i)}
                  </span>
                  <span className="option-label">{opt}</span>
                </button>
              </li>
            );
          })}
        </ul>

        {revealed && (
          <div
            className={`explanation ${selected === displayed.correctIndex ? "ok" : "miss"}`}
          >
            <h3>
              {selected === displayed.correctIndex ? "✓ נכון!" : "✗ תשובה נכונה מסומנת"}
            </h3>
            <p>{q.explanation}</p>
          </div>
        )}

        {revealed && (
          <div className="quiz-footer">
            <span className="live-score">
              נכון: {score} / {answered}
            </span>
            <button type="button" className="btn primary" onClick={next}>
              {index + 1 >= pool.length ? "סיום" : "השאלה הבאה →"}
            </button>
          </div>
        )}
      </article>
      <p className="copyright quiz-copyright">כל הזכויות שמורות לשמוליק</p>
    </div>
  );
}

export default function App() {
  const [mode, setMode] = useState<Mode>("menu");
  const [pool, setPool] = useState<Question[]>([]);

  const start = useCallback((shuffleQ: boolean, category: string | null) => {
    let list = category
      ? questions.filter((q) => q.category === category)
      : [...questions];
    if (shuffleQ) list = shuffle(list);
    setPool(list);
    setMode("quiz");
  }, []);

  const byCategory = useMemo(() => {
    const map = new Map<string, number>();
    for (const c of categories) map.set(c, 0);
    for (const q of questions) {
      map.set(q.category, (map.get(q.category) ?? 0) + 1);
    }
    return map;
  }, []);

  if (mode === "quiz") {
    return <QuizScreen pool={pool} onExit={() => setMode("menu")} />;
  }

  return (
    <div className="app">
      <div className="bg-gradient" aria-hidden />
      <main className="home">
        <header className="hero">
          <p className="eyebrow">חזרה למבחן</p>
          <h1>מערכת העיכול</h1>
          <p className="subtitle">
            {questions.length} שאלות איכותיות עם הסברים מלאים — היסטולוגיה,
            פתופיזיולוגיה, קליניקה, טיפול ומקרים קליניים
          </p>
        </header>

        <section className="actions">
          <button
            type="button"
            className="action-card featured"
            onClick={() => start(true, null)}
          >
            <span className="action-icon">🎯</span>
            <div>
              <h3>תרגול מעורב</h3>
              <p>כל {questions.length} השאלות בסדר אקראי</p>
            </div>
          </button>
          <button
            type="button"
            className="action-card"
            onClick={() => start(true, "מקרה קליני")}
          >
            <span className="action-icon">🩺</span>
            <div>
              <h3>מקרים קליניים</h3>
              <p>אבחנה ובדיקות — סיפורי מטופלים אמיתיים</p>
            </div>
          </button>
          <button
            type="button"
            className="action-card"
            onClick={() => start(false, null)}
          >
            <span className="action-icon">📋</span>
            <div>
              <h3>לפי סדר</h3>
              <p>מעבר שיטתי על כל החומר</p>
            </div>
          </button>
        </section>

        <section className="categories">
          <h2>תרגול לפי נושא</h2>
          <div className="category-grid">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                className="category-chip"
                onClick={() => start(true, cat)}
              >
                <span className="cat-name">{cat}</span>
                <span className="cat-count">{byCategory.get(cat) ?? 0}</span>
              </button>
            ))}
          </div>
        </section>

        <footer className="home-footer">
          <p>
            בחר תשובה כדי לראות הסבר מלא — כולל רשימות גורמי סיכון, קליניקה,
            טיפול ומאפיינים היסטולוגיים
          </p>
          <p className="copyright">כל הזכויות שמורות לשמוליק</p>
        </footer>
      </main>
    </div>
  );
}
