export default function TestOverview(props) {
  let scoreCounter = 0;
  for (let index = 0; index < props.questions.length; index++) {
    if (props.questions[index].correctAnswer == props.studentAnswers[index]) {
      scoreCounter++;
    }
  }
  const scorePercentage = scoreCounter / props.questions.length;
  let score =
    scorePercentage >= 0.75
      ? 5
      : scorePercentage >= 0.65
      ? 4
      : scorePercentage >= 0.53
      ? 3
      : scorePercentage >= 0.36
      ? 2
      : 1;
  //include incorrect test questions, rough estimate of what score you recieve, unit question is relateed to, explanation to the reasoning of the question
  return (
    <>
      <h1>{props.header}</h1>
      <div>
        <div></div>
        <div>{score}</div>
      </div>
    </>
  );
}
