import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Home from "./Home";
import About from "./About";
import CoursesDetails from "./Home/CourceDetails";
import CoursePage from "./CoursePage"

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <ToastContainer position="top-left" />
        <Routes>
          <Route path="/CourseDetails" element={<CoursesDetails />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/CoursePage" element={<CoursePage />} />s
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
