interface langQuestion {
    title: String,
    supplement: String,
    question: String,
    answers: String[],
    correctAnswer: String
}


export default function LangQuestion(props: langQuestion) {
    return (
        <div>
            <div>
            {props.supplement}

            </div>
            <div>
            {props.question}

            </div>
        </div>
    )
}