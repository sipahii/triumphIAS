import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Home from "./Home";
import About from "./About";
import CoursePage from "./CoursePage";
import AboutCivilServices from "./AboutCivilServices";
import AboutUPSC from "./AboutUPSC";
import BasicGSMaterial from "./BasicGSMaterial";
import Career from "./Career";
import Result from "./Result";
import CurrentAffairsNewsPlus from "./CurrentAffairsNewsPlus";
import EPWYojnaKurushetra from "./EPWYojnaKurushetra";
import EssayBrouchure from "./EssayBrouchure";
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
import SociologyBrouchure from "./SociologyBrouchure";
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
import UnionBudget_2022_23 from "./UnionBudget_2022_23";
import InterimBudget_2019_20 from "./InterimBudget_2019-20";
import ImportantArticles from "./ImportantArticles";
import PersonalityTest from "./PersonalityTest";
import Header from "./Header";
import Navigation from "./Navigation";
import Footer from "./Footer";
import CoursesDetails from "./Home/CourceDetails";
import CoursePage from "./CoursePage";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <ToastContainer position="top-left" />
        <Header />
        <Navigation />

        <Routes>
          <Route path="/course-details" element={<CoursesDetails />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/course-page" element={<CoursePage />} />
          <Route path="/about-upsc" element={<AboutUPSC />} />
          <Route path="/about-civil-services" element={<AboutCivilServices />} />
          <Route path="/general-studies-material" element={<BasicGSMaterial />} />
          <Route path="/career" element={<Career />} />
          <Route path="/results" element={<Result />} />
          <Route path="/current-affair" element={<CurrentAffairsNewsPlus />} />
          <Route path="/epw-yojana-kurushetra" element={<EPWYojnaKurushetra />} />
          <Route path="/essay-brouchure.pdf" element={<EssayBrouchure />} />
          <Route path="/course-details-essay-foundation-plus-test-2019" element={<EssayFoundationCourse />} />
          <Route path="/essay-planner" element={<EssayPlanner />} />
          <Route path="/essay-study-material" element={<EssayStudyMaterial />} />
          <Route path="/essay-test-series" element={<EssayTestSeries />} />
          <Route path="/essay-exams-topics" element={<EssayTopics />} />
          <Route path="/prelims-success-general-series" element={<GSPracticeSeries />} />
          <Route path="/gs-paper1" element={<GSPaper_1 />} />
          <Route path="/gs-paper2" element={<GSPaper_2 />} />
          <Route path="/gs-paper3" element={<GSPaper_3 />} />
          <Route path="/gs-paper4" element={<GSPaper_4 />} />
          <Route path="/sociology-brouchure.pdf" element={<SociologyBrouchure />} />
          <Route path="/sociology-offline" element={<SociologyOffline />} />
          <Route path="/sociology-notes" element={<SociologyNotes />} />
          <Route path="/sociology-foundation-test" element={<SociologyFoundationTest />} />
          <Route path="/sociology-online" element={<SociologyOnline />} />
          <Route path="/sociology-paper-1" element={<SociologyPapper_1 />} />
          <Route path="/sociology-paper-2" element={<SociologyPapper_2 />} />
          <Route path="/sociology-plannar" element={<SociologyPlanner />} />
          <Route path="/sociology-test-plus-study" element={<SociologyStudyPlusTest />} />
          <Route path="/sociology-study-material" element={<SociologyStudyMaterial />} />
          <Route path="/sociology-ias-syllabus" element={<SociologySyllabus />} />
          <Route path="/course-details-sociology-freshers-test" element={<SociologyTestSeries />} />
          <Route path="/best-sociology-books-ias-optional-preparation-india" element={<SuggestBooks />} />
          <Route path="/toppers-answer-sheet" element={<ToppersAnswerSheet />} />
          <Route path="/union-budget-2022-23" element={<UnionBudget_2022_23 />} />
          <Route path="/interim-budget-2019-20.pdf" element={<InterimBudget_2019_20 />} />
          <Route path="/important-articles" element={<ImportantArticles />} />
          <Route path="/personality-test" element={<PersonalityTest />} />
          <Route path="/CoursePage" element={<CoursePage />} />s
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
