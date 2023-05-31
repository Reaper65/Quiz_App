import { useContext, useEffect, useState } from "react";
import { quiz } from "../data/questions";
import QuizContext from "../context/quiz-context";

function QuizPage() {
  const { quizState, setQuizState, timer, setTimer, answers, setAnswers } =
    useContext(QuizContext);

  // const [questions] = quiz;
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const questionCount = quiz.length;
  const { question, choices } = quiz[currentQuestion];

  useEffect(() => {
    //reduces time by 1 s

    //updates timer
    const interval =
      timer > 0 && setInterval(() => setTimer((prev) => prev - 1), 1000);
    //ends quiz when time runs out
    if (timer === 0) {
      setQuizState("finish");
    }
    //useEffect cleanup function to clear timer before next run
    return () => clearInterval(interval);
  }, [timer, quizState, setTimer, setQuizState]);

  const nextQuestionhandler = () => {
    setCurrentQuestion((prev) => prev + 1);
  };

  const prevQuestionhandler = () => {
    setCurrentQuestion((prev) => prev - 1);
  };

  const finishQuizHandler = () => {
    setQuizState("finish");
  };

  const answerHandler = (option, questionNo) => {
    const existingAnswerIndex = answers.findIndex(
      (answer) => questionNo === answer.question
    );
    const existingAnswer = answers[existingAnswerIndex]; //storing existing answer to existingAnswer
    let updatedAnswers;

    if (existingAnswer) {
      let updatedAnswer = {
        ...existingAnswer,
        question: questionNo,
        choice: option,
      };
      updatedAnswers = [...answers];
      updatedAnswers[existingAnswerIndex] = updatedAnswer; // assigning updated answer
    } else {
      updatedAnswers = answers.concat({ question: questionNo, choice: option }); // if item doesnt exist, concatanating to array of items
    }
    setAnswers(updatedAnswers);
  };

  return (
    <div>
      <h1>Quiz</h1>
      <h1>Time Remaining {timer}</h1>
      <h2>{question}</h2>
      <ul>
        {choices.map((choice, index) => (
          <div key={index}>
            {index + 1}:
            <button onClick={() => answerHandler(index, currentQuestion)}>
              {choice}
            </button>
            <br></br>
          </div>
        ))}
      </ul>
      {currentQuestion + 1 === questionCount ? null : (
        <button onClick={nextQuestionhandler}>Next</button>
      )}
      {currentQuestion + 1 === questionCount ? (
        <button onClick={finishQuizHandler}>Finish</button>
      ) : null}
      {currentQuestion === 0 ? null : (
        <button onClick={prevQuestionhandler}>Previous</button>
      )}
    </div>
  );
}

export default QuizPage;
