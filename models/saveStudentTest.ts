export default function saveStudentTest(
  db,
  testType: String,
  questions,
  studentAnswers
) {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const date = new Date();
  const dateFormat =
    months[date.getMonth()] +
    "_" +
    date.getDate() +
    "_" +
    date.getFullYear() +
    ":" +
    date.getHours() +
    ":" +
    date.getMinutes() +
    ":" +
    date.getSeconds();
  const createTable =
    "CREATE TABLE IF NOT EXISTS " +
    testType +
    " (supplementaryMaterial TEXT NOT NULL, title TEXT NOT NULL, question TEXT NOT NULL, answerOne TEXT NOT NULL, answerTwo TEXT NOT NULL, answerThree TEXT NOT NULL, answerFour TEXT NOT NULL, answerFive TEXT NOT NULL, correctAnswer TEXT NOT NULL, Unit NUMERIC, studentAnswer TEXT);";
  db.exec(createTable);

  for (let i = 0; i < questions.length; i++) {
    const element = questions[i];
    for (const key in element) {
        let data = element[key];
        if(typeof element[key] == "string") {
            let newString = "";
            for (let c of data) {
              newString += c + (c === "\"" ? "\"" : "");
            }
            data = newString
        }
        console.log(element[key])
        const formattedRequest = "INSERT INTO " + testType  + "(" + key + ") VALUES " + "('" + data + "')" + ";";
        db.exec(formattedRequest)
    }
  }
}
