interface langQuestion {
  title: String;
  supplement: String;
  question: String;
  answers: String[];
  correctAnswer: String;
  position: number;
  currentAnswer: String;
  choseAnswer: (position: number, answer: String) => void;
}

export default function LangQuestion(props: langQuestion) {
  let formattedSupplement = "";
  let index = 0;
  let counter = 0;
  while (index != -1) {
    let newIndex = props.supplement.indexOf("\n", index + 1);
    counter++;
    if (counter % 5 == 0) {
      formattedSupplement +=
        "\n[" + counter + "]" + props.supplement.slice(index + 1, newIndex);
      index = newIndex;
      continue;
    }
    formattedSupplement += props.supplement.slice(index, newIndex);
    index = newIndex;
  }

  return (
    <div className="flex">
      <div>
        <h2 className="font-bold">{props.title}</h2>
        <div className="w-max-content text-sm overflow-y-auto h-screen">
          {formattedSupplement}
        </div>
      </div>
      <div>
        <h2 className="font-bold">{props.question}</h2>
        <div>
          {props.answers.map((data) => {
            return (
              <div
                className={
                  (props.currentAnswer == data ? "bg-slate-200 " : "") +
                  "hover:bg-slate-300 " +
                  "cursor-pointer"
                }
                onClick={() => props.choseAnswer(props.position, data)}
              >
                {data}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
