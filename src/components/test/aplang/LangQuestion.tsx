interface langQuestion {
  title: String;
  supplement: String;
  question: String;
  answers: String[];
  correctAnswer: String;
  position: number
  choseAnswer: (position: number,answer: String) => void
}

export default function LangQuestion(props: langQuestion) {
  return (
    <div className="flex">
      <div>{props.supplement}</div>
      <div>
        <div>{props.question}</div>
        <div>
          {props.answers.map((data) => {
            return <div className="hover:bg-fuchsia-600 active:bg-fuchsia-600" onClick={() => props.choseAnswer(props.position, data)}>{data}</div>;
          })}
        </div>
      </div>
    </div>
  );
}
