import { useEffect, useState } from "react";
import QuestionNavbar from "../QuestionNavbar";
import LangQuestion from "./LangQuestion";

interface langTest {
  questions: Question[],
  studentAnswers: (answers: String[] ) => void,
  endTest: (end: boolean) => null;
}

interface Question {
  title: String,
  supplementaryMaterial: String,
  question: String,
  answerOne: String,
  answerTwo: String,
  answerThree: String,
  answerFour: String,
  answerFive: String,
  correctAnswer: String
}

export default function LangTest(props: langTest) {
  const [position, setPosition] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(
    props.questions[position]
  );
  const [answeredQuestion, setAnsweredQuestion] = useState<String[]>([]);

  function handleAnswer(position: number, answer: String) {
    const arr: String[] = [...answeredQuestion];
    arr[position] = answer;
    setAnsweredQuestion(arr);
  }

  useEffect(() => {
    setCurrentQuestion(props.questions[position]);
    console.log(answeredQuestion)
  });

  //Timer function
  const [minutes, setMinutes] = useState(60);
  const [seconds, setSeconds] = useState(0);
  useEffect(() => {
    let myInterval = setInterval(() => {
      if (seconds > 0) {
        setSeconds(seconds - 1);
      }
      if (seconds === 0) {
        if (minutes === 0) {
          clearInterval(myInterval);
        } else {
          setMinutes(minutes - 1);
          setSeconds(59);
        }
      }
    }, 1000);
    return () => {
      clearInterval(myInterval);
    };
  });

  const endTest = () => props.endTest(true);

  return (
    <>
      <h1>
        {minutes}:{seconds < 10 ? `0${seconds}` : seconds}
      </h1>

      <QuestionNavbar
        changePosition={setPosition}
        questionLength={props.questions.length}
        position={position}
        endTest={endTest}
      />
      {
        //do this or it breaks (most likely has to do with the questions not being loaded when the page renders so react craps out)
        currentQuestion && (
          <LangQuestion
            title={currentQuestion.title}
            supplement={currentQuestion.supplementaryMaterial}
            question={currentQuestion.question}
            answers={[
              currentQuestion.answerOne,
              currentQuestion.answerTwo,
              currentQuestion.answerThree,
              currentQuestion.answerFour,
              currentQuestion.answerFive,
            ]}
            choseAnswer={handleAnswer}
            position={position}
            correctAnswer={currentQuestion.correctAnswer}
          ></LangQuestion>
        )
      }
    </>
  );
}
