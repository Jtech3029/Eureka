import { useState } from "react"
import LangTest from "./aplang/LangTest";

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
            props.questions.map((data, index) => {
                return data.correctAnswer == studentAnswers[index] ? "Correct" : "Incorrect"
            })
        }
        </>
    )
}