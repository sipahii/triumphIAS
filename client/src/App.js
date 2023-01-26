import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Home from "./Home";
import About from "./About";
import Admin from "./Admin";
import CoursePage from "./CoursePage";
import AboutCivilServices from "./AboutCivilServices";
import AboutUPSC from "./AboutUPSC";
import BasicGSMaterial from "./BasicGSMaterial";
import Career from "./Career";
import Result from "./Result";
import CurrentAffairsNewsPlus from "./CurrentAffairsNewsPlus";
import EPWYojnaKurushetra from "./EPWYojnaKurushetra";
import EssayFoundationCourse from "./EssayFoundationCourse";
import EssayPlanner from "./EssayPlanner";
import EssayStudyMaterial from "./EssayStudyMaterial";
import EssayTestSeries from "./EssayTestSeries";
import EssayTopics from "./EssayTopics";
import GSPracticeSeries from "./GSPracticeSeries";
import GSPaper_1 from "./GSPaper_1";
import GSPaper_2 from "./GSPaper_2";
import GSPaper_3 from "./GSPaper_3";
import GSPaper_4 from "./GSPaper_4";
import SociologyFoundationTest from "./SociologyFoundationTest";
import SociologyNotes from "./SociologyNotes";
import SociologyOffline from "./SociologyOffline";
import SociologyOnline from "./SociologyOnline";
import SociologyPapper_1 from "./SociologyPaper_1";
import SociologyPapper_2 from "./SociologyPaper_2";
import SociologyPlanner from "./SociologyPlanner";
import SociologyStudyPlusTest from "./SociologyStudyPlusTest";
import SociologyStudyMaterial from "./SociologyStudyMaterial";
import SociologySyllabus from "./SociologySyllabus";
import SociologyTestSeries from "./SociologyTestSeries";
import SuggestBooks from "./SuggestBooks";
import ToppersAnswerSheet from "./ToppersAnswerSheet";
import ImportantArticles from "./ImportantArticles";
import PersonalityTest from "./PersonalityTest";
import CoursesDetails from "./CourceDetails";
import Gallary from "./Gallary";
import Contact from "./Contact";
import Error from "./404_Error";
import RootLayout from "./RootLayout";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/about", element: <About /> },
      { path: "/course-details", element: <CoursesDetails /> },
      { path: "/course-page", element: <CoursePage /> },
      { path: "/about-upsc", element: <AboutUPSC /> },
      { path: "/about-civil-services", element: <AboutCivilServices /> },
      { path: "/download-general-studies-material", element: <BasicGSMaterial /> },
      { path: "/career", element: <Career /> },
      { path: "/download-results", element: <Result /> },
      { path: "/download-current-affair", element: <CurrentAffairsNewsPlus /> },
      { path: "/download-epw-yojana-kurushetra", element: <EPWYojnaKurushetra /> },
      { path: "/course-details-essay-foundation-plus-test-2019", element: <EssayFoundationCourse /> },
      { path: "/essay-planner", element: <EssayPlanner /> },
      { path: "/essay-study-material", element: <EssayStudyMaterial /> },
      { path: "/essay-test-series", element: <EssayTestSeries /> },
      { path: "/essay-exams-topics", element: <EssayTopics /> },
      { path: "/gs-prelims-success-general-series", element: <GSPracticeSeries /> },
      { path: "/gs-paper1", element: <GSPaper_1 /> },
      { path: "/gs-paper2", element: <GSPaper_2 /> },
      { path: "/gs-paper3", element: <GSPaper_3 /> },
      { path: "/gs-paper4", element: <GSPaper_4 /> },
      { path: "/sociology-offline", element: <SociologyOffline /> },
      { path: "/download-sociology-notes", element: <SociologyNotes /> },
      { path: "/sociology-foundation-test", element: <SociologyFoundationTest /> },
      { path: "/sociology-online", element: <SociologyOnline /> },
      { path: "/sociology-paper-1", element: <SociologyPapper_1 /> },
      { path: "/sociology-paper-2", element: <SociologyPapper_2 /> },
      { path: "/sociology-plannar", element: <SociologyPlanner /> },
      { path: "/sociology-test-plus-study", element: <SociologyStudyPlusTest /> },
      { path: "/sociology-study-material", element: <SociologyStudyMaterial /> },
      { path: "/sociology-ias-syllabus", element: <SociologySyllabus /> },
      { path: "/course-details-sociology-freshers-test", element: <SociologyTestSeries /> },
      { path: "/best-sociology-books-ias-optional-preparation-india", element: <SuggestBooks /> },
      { path: "/download-toppers-answer-sheet", element: <ToppersAnswerSheet /> },
      { path: "/download-important-articles", element: <ImportantArticles /> },
      { path: "/personality-test", element: <PersonalityTest /> },
      { path: "/gallery", element: <Gallary /> },
      { path: "/*", element: <Error /> },
      { path: "/home", element: <Home /> },
      { path: "/contact-us", element: <Contact /> },
    ],
  },
  {
    path: "/admin",
    element: <Admin />,
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={routes} />
      <BrowserRouter>
        <div className="App">
          <ToastContainer position="top-left" />
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
