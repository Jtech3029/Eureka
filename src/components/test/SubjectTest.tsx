import { useEffect, useState } from "react";
import LangTest from "./aplang/LangTest";
import TestOverview from "./TestOverview";


export default function Subject() {
  const [studentAnswers, setStudentAnswers] = useState<String[]>([]);
  const [testEnded, setTestEnded] = useState(false);

  const [questions, setQuestions] = useState([]);
  useEffect(() => {
    async function hello() {
      const fellow = await window.api.onUpdate();
      setQuestions(fellow);
    }
    hello();
  }, []);

  return (
    <>
      {!testEnded && (
        <LangTest
          questions={questions}
          studentAnswers={setStudentAnswers}
          endTest={setTestEnded}
        />
      )}
      {testEnded && (
        <TestOverview
          header={"AP Lang Practice Test"}
          questions={questions}
          studentAnswers={studentAnswers}
        ></TestOverview>
      )}
    </>
  );
}
