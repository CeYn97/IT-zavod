import { useState, useEffect } from "react";
import "./App.css";
import Button from "./components/button";
import ProgressBadge from "./components/progress-badge";
import { data } from "./data/questions";
import reactIcon from "./assets/react.svg";

function App() {
  const [questions, setQuestions] = useState(data);
  const [questionIx, setQuestionIx] = useState(0);
  const [knowQuestions, setKnowQuestions] = useState(0);
  const [unknowQuestions, setUnknowQuestions] = useState(0);
  const [skippedQuestions, setSkippedQuestions] = useState(0);
  const [totalQuestions /*, setTotalQuestions */] = useState(data.length);

  useEffect(() => {
    for (const question of Object.values(questions)) {
      if (question.selected === "know") {
        setKnowQuestions((prev) => prev + 1);
      } else if (question.selected === "unknow") {
        setUnknowQuestions((prev) => prev + 1);
      } else if (question.selected === "skipped") {
        setSkippedQuestions((prev) => prev + 1);
      }
    }
  }, [questions, questionIx]);

  const onProgressButtonClick = (operation: "plus" | "minus") => {
    setQuestionIx((current) =>
      operation === "plus" ? current + 1 : current - 1
    );
  };

  const onMainButtonClick = (type: "know" | "unknow") => {
    setQuestions((questions) => {
      const questionsCopy = { ...questions };
      questionsCopy[questionIx].selected = type;
      return questionsCopy;
    });
    onProgressButtonClick("plus");
  };

  return (
    <div>
      <header className="header">
        <section className="progress">
          <progress className="progress-bar" value="0.5"></progress>
          {questionIx >= 1 && (
            <Button
              type="progress"
              onClick={() => onProgressButtonClick("minus")}
              text="&lt;"
            />
          )}
          <span className="progress-text">
            {questionIx + 1} / {totalQuestions}
          </span>
          {questionIx < totalQuestions - 1 && (
            <Button
              type="progress"
              onClick={() => onProgressButtonClick("plus")}
              text="&gt;"
            />
          )}
        </section>
        <section className="badges">
          <ProgressBadge icon={reactIcon} label="Knew" value={knowQuestions} />
          <ProgressBadge
            icon={reactIcon}
            label="Learnt"
            value={unknowQuestions}
          />
          <ProgressBadge
            icon={reactIcon}
            label="Skipped"
            value={skippedQuestions}
          />
        </section>
      </header>
      <main className="main">
        <section className="question">{questions[questionIx].question}</section>
        <section className="question">{questions[questionIx].answer}</section>
        <section className="main-buttons">
          <Button
            type="main"
            onClick={() => onMainButtonClick("know")}
            text="I know"
            classNames={
              questions[questionIx].selected === "know"
                ? ["button-selected"]
                : []
            }
          />
          <Button
            type="main"
            onClick={() => onMainButtonClick("unknow")}
            text="I don't know"
            classNames={
              questions[questionIx].selected === "unknow"
                ? ["button-selected"]
                : []
            }
          />
          <Button
            type="main"
            onClick={() => onProgressButtonClick("plus")}
            text="Skip"
          />
        </section>
      </main>
    </div>
  );
}

export default App;
