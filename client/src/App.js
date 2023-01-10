import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Home from "./Home";
import About from "./About";
import CoursesDetails from "./Home/CourceDetails";
import CoursePage from "./CoursePage"
import CommanBanner from "./component/CommanBanner";
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <ToastContainer position="top-left" />
        <Routes>
          <Route path="/courseDetails" element={<CoursesDetails/>} />
          <Route path="/Home" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/CoursePage" element={<CoursePage />} />
          <Route path="/CommanBanner" element={<CommanBanner />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
