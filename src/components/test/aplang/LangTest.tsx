import { useEffect, useState } from "react";
import QuestionNavbar from "../QuestionNavbar";
import LangQuestion from "./LangQuestion";

interface langTest {
  questions: String[];
}

export default function LangTest(props: langTest) {
  const [position, setPosition] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(
    props.questions[position]
  );

  useEffect(() => {
    setCurrentQuestion(props.questions[position]);
  });
  return (
    <>
      <QuestionNavbar
        position={setPosition}
        questionLength={props.questions.length}
      />
      {
        //do this or it breaks (most likely has to do with the questions not being loaded when the page renders so react craps out)
        currentQuestion && (
          <LangQuestion
            title={currentQuestion.title}
            supplement={currentQuestion.supplementaryMaterial}
            question={currentQuestion.question}
            answer={[currentQuestion.answerOne, currentQuestion.answerTwo, currentQuestion.answerThree]}
          ></LangQuestion>
        )
      }
    </>
  );
}
