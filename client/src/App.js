import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Home from "./Home";
import About from "./About";
import CoursesDetails from "./CourceDetails";
import CoursePage from "./CoursePage"
import Contact from "./Contact";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <ToastContainer position="top-left" />
        <Routes>
          <Route path="/course-details" element={<CoursesDetails />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/course-page" element={<CoursePage />} />
          <Route path="/contact" element={<Contact />} />

        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
