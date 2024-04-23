interface langQuestion {
    title: String,
    supplement: String,
    question: String,
    answers: String[],
    correctAnswer: String
}


export default function LangQuestion(props: langQuestion) {
    return (
        <>
            {props.question}
        </>
    )
}