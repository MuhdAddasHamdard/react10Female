import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import About from "./components/About/About";
import Form from "./components/Form";
import Counter from "./components/Counter";
// import New from "./components/New";
// import NewForm from "./components/NewForm";
function App() {
  return (
    <Router>
      <div>
        <Header />

        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/counter" element={<Counter />} />
          <Route path="/form" element={<Form />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
