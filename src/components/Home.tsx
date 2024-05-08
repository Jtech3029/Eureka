import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col">
      <button onClick={() => navigate("/test")}>AP Lang</button>
      <button onClick={() => navigate("/student-tests")}>Previous Tests</button>
    </div>
  );
}
