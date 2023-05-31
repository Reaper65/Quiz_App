import React, { useContext, useState } from "react";
import QuizContext from "../context/quiz-context";
import { quiz } from "../data/questions";
function ResultPage() {
  const [showScore, setShowScore] = useState(false);
  const { quizState, setQuizState, answers, score, setScore } =
    useContext(QuizContext);
  //Show Result
  const restartQuizHandler = () => {
    setQuizState("");
    console.log(quizState);
  };

  const calculateScoreHandler = () => {
    answers.map((answer) => {
      if (
        quiz[answer.question].correctAnswer ===
        quiz[answer.question].choices[answer.choice]
      ) {
        console.log("correct Answer");
        setScore((prev) => prev + 1);
      }
    });
    setShowScore(true);
  };
  return (
    <>
      <h1>
        Reveal Score <button onClick={calculateScoreHandler}></button>
      </h1>
      {showScore && score}
      <button onClick={restartQuizHandler}>Try Again</button>
      <ul>
        {answers.map((answer, index) => (
          <li key={index}>
            <div>"Question No:" {answer.question}</div>
            <div>"Answer No:" {answer.choice}</div>
          </li>
        ))}
      </ul>
    </>
  );
}

export default ResultPage;
