import { useState } from "react"
import QuestionNavbar from "../QuestionNavbar"

interface langTest {
    title: String,
    supplement: String,
    question: String,
    answers: String[],
    correctAnswer: String
}


export default function LangTest(props: langTest) {
    const [position, setPosition] = useState(0);
    return (
        <>
            <QuestionNavbar position={setPosition} questionLength={props.answers.length}/>
        </>
    )
}