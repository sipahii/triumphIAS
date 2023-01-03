import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Home from "./Home";
import About from "./About";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <ToastContainer position="top-left" />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/" element={<About />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
