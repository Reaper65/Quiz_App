import React, { useContext } from "react";

import QuizContext from "../context/quiz-context";
import QuizPage from "./QuizPage";
import ResultPage from "./ResultPage";

function AssessmentLandingPage() {
  const {
    quizState,
    setQuizState,
    defaultTimer,
    setTimer,
    setScore,
    setAnswers,
  } = useContext(QuizContext);

  const startQuizHandler = () => {
    setQuizState("start");
    setTimer(defaultTimer);
    setScore(0);
    setAnswers([]);
  };
  return (
    <>
      {quizState === "" ? (
        <button onClick={startQuizHandler}>Start Quiz</button>
      ) : null}
      {quizState === "start" ? <QuizPage /> : null}
      {quizState === "finish" ? <ResultPage /> : null}
    </>
  );
}

export default AssessmentLandingPage;
