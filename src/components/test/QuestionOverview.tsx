interface TestOverviewProps {
  question: Question,
  return: () => void
}

interface Question {
  title: String;
  supplementaryMaterial: String;
  question: String;
  answerOne: String;
  answerTwo: String;
  answerThree: String;
  answerFour: String;
  answerFive: String;
  correctAnswer: String;
  studentAnswer: String;
  Unit: Number;
}

export default function QuestionOverview(props: TestOverviewProps) {
  let formattedSupplement = "";
  let index = 0;
  let counter = 0;
  while (index != -1) {
    let newIndex = props.question.supplementaryMaterial.indexOf("\n", index + 1);
    counter++;
    if (counter % 5 == 0) {
      formattedSupplement +=
        "\n[" + counter + "]" + props.question.supplementaryMaterial.slice(index + 1, newIndex);
      index = newIndex;
      continue;
    }
    formattedSupplement += props.question.supplementaryMaterial.slice(index, newIndex);
    index = newIndex;
  }
 const answers = [props.question.answerOne, props.question.answerTwo, props.question.answerThree, props.question.answerFour, props.question.answerFive]
  return (
    <div className="flex">
      <div className="cursor-pointer" onClick={props.return}>
        return
      </div>
      <div>
        <h2 className="font-bold">{props.question.title}</h2>
        <div className="w-max-content text-sm overflow-y-auto h-screen">
          {formattedSupplement}
        </div>
      </div>
      <div>
        <h2 className="font-bold">{props.question.question}</h2>
        <div>
        {answers.map((data) => {
          let highlight = "";
          if(data == props.question.studentAnswer) {
            if(props.question.studentAnswer == props.question.correctAnswer) {
              highlight = "bg-green-500 text-white"
            }
            else {
              highlight = "bg-red-500 text-white"
            }
          }
          if(data == props.question.correctAnswer) {
            highlight = "bg-green-500 text-white"
          }
            return (
              <div className={highlight}>
                {data}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
