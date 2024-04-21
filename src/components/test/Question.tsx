interface question {
    question: String,
    answers: String[],
    correctAnswer: String
}


export default function Question(props: question) {
    return (
        <>
            {props.question}
        </>
    )
}