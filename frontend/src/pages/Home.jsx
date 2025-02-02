import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div style={styles.homeContainer}>
      <div style={styles.homeContent}>
        <h1 style={styles.heading}>🔥 Welcome to the Quiz App 🔥</h1>
        <p style={styles.description}>
          Test your knowledge and challenge yourself with exciting quizzes!
        </p>
        <Link to="/quiz">
          <button style={styles.startButton}>Start Quiz 🚀</button>
        </Link>
      </div>
    </div>
  );
};

// Inline CSS styles
const styles = {
  homeContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    background: "linear-gradient(to right, #6a11cb, #2575fc)",
    textAlign: "center",
  },
  homeContent: {
    background: "rgba(255, 255, 255, 0.2)",
    padding: "40px",
    borderRadius: "12px",
    boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.2)",
    backdropFilter: "blur(10px)",
    color: "white",
    animation: "fadeIn 1.5s ease-in-out",
  },
  heading: {
    fontSize: "2.5rem",
    marginBottom: "10px",
  },
  description: {
    fontSize: "1.2rem",
    marginBottom: "20px",
  },
  startButton: {
    background: "#ffcc00",
    color: "#333",
    padding: "12px 24px",
    fontSize: "1.2rem",
    fontWeight: "bold",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    transition: "all 0.3s ease-in-out",
  },
};

// Animation (must be in a CSS file, as keyframes don't work in inline styles)
const styleTag = document.createElement("style");
styleTag.innerHTML = `
  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(-20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;
document.head.appendChild(styleTag);

export default Home;
