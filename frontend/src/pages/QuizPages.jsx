import { useState, useEffect } from "react";
import { fetchQuizzes } from "../api/quizApi";
import Quiz from "../components/Quiz";
import { useNavigate } from "react-router-dom";

const QuizPage = () => {
  const [questions, setQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(15); // Timer for each question
  const navigate = useNavigate();

  useEffect(() => {
    const getQuizzes = async () => {
      const data = await fetchQuizzes();
      setQuestions(data);
    };
    getQuizzes();
  }, []);

  useEffect(() => {
    if (timeLeft === 0) {
      handleNextQuestion();
    }
    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(timer);
  }, [timeLeft]);

  const handleAnswer = (answer) => {
    if (answer === questions[currentQuestion]?.correctAnswer) {
      setScore(score + 10);
    }
    handleNextQuestion();
  };

  const handleNextQuestion = () => {
    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
      setTimeLeft(15); // Reset timer for next question
    } else {
      navigate(`/result?score=${score}`);
    }
  };

  return (
    <div style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      height: "100vh",
      backgroundColor: "#f5f5f5",
      fontFamily: "Arial, sans-serif"
    }}>
      {questions.length > 0 ? (
        <div style={{
          background: "white",
          padding: "20px",
          borderRadius: "10px",
          boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
          textAlign: "center",
          width: "400px"
        }}>
          <div style={{
            height: "5px",
            backgroundColor: "#4caf50",
            marginBottom: "15px",
            width: `${((currentQuestion + 1) / questions.length) * 100}%`
          }}></div>
          <p style={{ fontSize: "18px", fontWeight: "bold", color: "red" }}>Time Left: {timeLeft}s</p>
          <Quiz
            question={questions[currentQuestion].question}
            options={questions[currentQuestion].options}
            correctAnswer={questions[currentQuestion].correctAnswer}
            onAnswer={handleAnswer}
          />
          <p style={{ marginTop: "15px", fontSize: "20px", fontWeight: "bold", color: "#333" }}>Score: {score}</p>
        </div>
      ) : (
        <p style={{ fontSize: "20px", fontWeight: "bold", color: "#666" }}>Loading...</p>
      )}
    </div>
  );
};

export default QuizPage;