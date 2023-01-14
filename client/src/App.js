import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Home from "./Home";
import About from "./About";
import CoursePage from "./CoursePage";
import Gallary from "./Gallary";
// import Feature from "./Feature";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <ToastContainer position="top-left" />
        <Routes>
          <Route path="/CourseDetails" element={<CoursesDetails />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/CoursePage" element={<CoursePage />} />
          <Route path="/GallaryPage" element={<Gallary />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
