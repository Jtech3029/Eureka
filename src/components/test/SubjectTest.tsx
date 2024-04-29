import { useState } from "react"
import LangTest from "./aplang/LangTest";
import TestOverview from "./TestOverview";

export default function Subject(props) {
    const [studentAnswers, setStudentAnswers] = useState();
    const [testEnded, setTestEnded] = useState(false);
    return (
        <>
        {
            !testEnded &&
            <LangTest questions={props.questions} studentAnswers={setStudentAnswers} endTest={setTestEnded} />
        }
        {
            testEnded &&
            <TestOverview header={"AP Lang Practice Test"} questions={props.questions} studentAnswers={studentAnswers}></TestOverview>
        }
        </>
    )
}