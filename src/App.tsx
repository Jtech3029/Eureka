import Subject from "./components/test/SubjectTest";
import "./styles/App.css";
import { HashRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";

declare global {
  interface Window {
    api: any;
  }
}

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/test" element={<Subject />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
