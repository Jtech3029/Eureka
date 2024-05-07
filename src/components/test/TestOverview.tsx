import { useNavigate } from "react-router-dom";

interface TestOverviewProps {
  questions: Question[];
  studentAnswers: String[];
  header: String;
}

interface Question {
  title: String;
  supplementaryMaterial: String;
  question: String;
  answerOne: String;
  answerTwo: String;
  answerThree: String;
  answerFour: String;
  answerFive: String;
  correctAnswer: String;
}

export default function TestOverview() {
  // let scoreCounter = 0;
  // for (let index = 0; index < props.questions.length; index++) {
  //   if (props.questions[index].correctAnswer == props.studentAnswers[index]) {
  //     scoreCounter++;
  //   }
  // }
  // const scorePercentage = scoreCounter / props.questions.length;
  // let score =
  //   scorePercentage >= 0.75
  //     ? 5
  //     : scorePercentage >= 0.65
  //     ? 4
  //     : scorePercentage >= 0.53
  //     ? 3
  //     : scorePercentage >= 0.36
  //     ? 2
  //     : 1;

  const navigate = useNavigate();
  //include incorrect test questions, rough estimate of what score you recieve, unit question is relateed to, explanation to the reasoning of the question
  return (
    <>
    </>
  );
}
