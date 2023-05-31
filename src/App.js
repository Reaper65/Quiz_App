import { RouterProvider } from "react-router-dom";
import { useState } from "react";

import router from "./Router/router";
import QuizContext from "./context/quiz-context";

function App() {
  const defaultTimer = 10;
  const [quizState, setQuizState] = useState("");
  const [score, setScore] = useState(0);
  const [timer, setTimer] = useState(defaultTimer);
  const [answers, setAnswers] = useState([]);
  return (
    <QuizContext.Provider
      value={{
        defaultTimer,
        quizState,
        setQuizState,
        score,
        setScore,
        timer,
        setTimer,
        answers,
        setAnswers,
      }}
    >
      <RouterProvider router={router} />
    </QuizContext.Provider>
  );
}

export default App;
