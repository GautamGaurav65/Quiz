import { useState } from "react";

const Quiz = ({ question, options, correctAnswer, onAnswer }) => {
  return (
    <div className="quiz-container">
      <h2>{question}</h2>
      {options.map((option, index) => (
        <button key={index} onClick={() => onAnswer(option)}>
          {option}
        </button>
      ))}
    </div>
  );
};

export default Quiz;