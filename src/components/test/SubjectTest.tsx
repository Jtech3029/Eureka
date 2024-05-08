import { useEffect, useState } from "react";
import LangTest from "./aplang/LangTest";


export default function Subject() {
  const [_studentAnswers, setStudentAnswers] = useState<String[]>([]);
  const [_testEnded, setTestEnded] = useState(false);

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
        <LangTest
          questions={questions}
          studentAnswers={setStudentAnswers}
          endTest={setTestEnded}
        />
    </>
  );
}
