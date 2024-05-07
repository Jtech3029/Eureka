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

export default function QuestionOverview(props: TestOverviewProps) {
 
  return (
    <>

    </>
  );
}
