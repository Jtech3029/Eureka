export default function saveStudentTest(
  db: any,
  testType: String,
  questions: any,
  studentAnswers: String[]
) {

  const createTable =
    "CREATE TABLE " +
    testType +
        " (supplementaryMaterial TEXT, title TEXT, question TEXT, answerOne TEXT, answerTwo TEXT , answerThree TEXT , answerFour TEXT , answerFive TEXT , correctAnswer TEXT , unit NUMERIC, studentAnswer TEXT);";
    db.exec(createTable);

  for (let i = 0; i < questions.length; i++) {
    const element = questions[i];
    const formattedRequest = "INSERT INTO " + testType  + "(supplementaryMaterial, title, question, answerOne, answerTwo, answerThree, answerFour, answerFive, correctAnswer, unit, studentAnswer) VALUES " + "('" + element.supplementaryMaterial + "', '" + element.title + "', '" + element.question + "'"  + ", '" + element.answerOne + "'" + ", '" + element.answerTwo + "'" + ", '" + element.answerThree + "'" + ", '" + element.answerFour + "'" + ", '" + element.answerFive + "'" + ", '" + element.correctAnswer + "'" + ", '" + element.Unit + "'" + ", '" + studentAnswers[i] + "'" + ")" + ";";
    db.exec(formattedRequest)
  }
}
