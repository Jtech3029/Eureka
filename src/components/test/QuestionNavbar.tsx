type CallbackFunction = (data: number) => void;

interface QuestionNavbar {
  position: number;
  changePosition: CallbackFunction;
  questionLength: number;
  endTest: () => void;
}

export default function QuestionNavbar(props: QuestionNavbar) {
  //initialize an array to iterate through to create every question button
  const questionArr = [];
  for (let i = 0; i < props.questionLength; i++) {
    //fill the array
    questionArr[i] = i + 1;
  }

  return (
    <>
      {questionArr.map((value) => {
        return (
          <div
          //highlights the selected question
            className={props.position == value - 1 ? "bg-indigo-500" : ""}
            onClick={(e: React.MouseEvent) =>
              props.changePosition(parseInt(e.currentTarget.innerHTML) - 1)
            }
          >
            {value}
          </div>
        );
      })}
      <button onClick={props.endTest}>
        End Test
      </button>
    </>
  );
}
