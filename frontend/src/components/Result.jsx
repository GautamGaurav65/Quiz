const Result = ({ score, total }) => {
    return (
      <div className="result-container">
        <h1>Quiz Completed!</h1>
        <h2>Your Score: {score} / {total}</h2>
        <a href="/">Try Again</a>
      </div>
    );
  };
  
  export default Result;