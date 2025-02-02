import { useLocation } from "react-router-dom";
import Result from "../components/Result";

const ResultPage = () => {
  const location = useLocation();
  const score = new URLSearchParams(location.search).get("score");

  return <Result score={score} total={100} />;
};

export default ResultPage;