import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import QuestionOverview from "./QuestionOverview";

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

export default function TestOverview() {
  const [questions, setQuestions] = useState<Question[]>();
  const [score, setScore] = useState<number>();
  const [selectedQuestion, setSelectedQuestion] = useState(-1);
  const { testid } = useParams();

  const navigate = useNavigate();
  //include incorrect test questions, rough estimate of what score you recieve, unit question is relateed to, explanation to the reasoning of the question
  useEffect(() => {
    const getStudentTest = async () => {
      const test = await window.api.getStudentTest(testid);
      setQuestions(test);
      let scoreCounter = 0;
      for (let index = 0; index < test.length; index++) {
        if (test[index].correctAnswer == test.studentAnswer) {
          scoreCounter++;
        }
      }
      const scorePercentage = scoreCounter / test.length;
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
      setScore(score);
    };
    getStudentTest();
  }, []);
  return (
    <>
      <div className="cursor-pointer" onClick={() => navigate("/")}>
        Back
      </div>
      {questions && (
        <div>
          {selectedQuestion == -1 && (
            <div className="flex">
              <div>
                {questions.map((data, index) => {
                  return (
                    <div>
                      <div className="cursor-pointer" onClick={() => setSelectedQuestion(index)}>
                        Question {index + 1}:{" "}
                        {data.correctAnswer == data.studentAnswer
                          ? "Correct"
                          : "Incorrect"}
                      </div>
                    </div>
                  );
                })}
              </div>
              <div>Predicted Score: {score}</div>
            </div>
          )}
          {
            selectedQuestion != -1 && 
            <QuestionOverview question={questions[selectedQuestion]} return={() => setSelectedQuestion(-1)}/>
          }
        </div>
      )}
    </>
  );
}
