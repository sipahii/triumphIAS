import React from "react";
import CommanBanner from "../component/CommanBanner";
import AboutUs from "./AboutUs";
import vikash from "../../src/Assets/vikash_ranjan.png";
import triumphias from "../../src/Assets/logo-square.jpg";
import StudentQuotes from "./StudentQuotes";

const About = () => {
  return (
    <div>
      <CommanBanner section="About Us" />
      <AboutUs
        title="Vikash Ranjan"
        subTitle="Educator, Mentor & Author"
        desc='Mr. Vikash Ranjan has emerged as a versatile genius in Teaching and Writing books on Sociology & General Studies. His Sociological Themes and Perspectives are excellent. His teaching aptitude is Simple, Easy and Exam Focused. Under his Expert Guidance many students have achieved success in civil services. In the Civil Service Exam 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, & 2018 his guidance has helped many toppers to reserve their dream space in the final list. He has written and edited good number of Books for Civil Services. To mention a few- "Fundamental of Sociology" (For CSE Mains), "Applied Sociology" (For CSE Mains), "National Issues of Social, Economic and Political Relevance", "Survey of Health, Women and Child Development in India", "Indian Heritage and Culture-Themes & Perspectives".'
        src={vikash}
      />
      <AboutUs
        title="TRIUMPHIAS"
        subTitle="Innovating Knowledge, Inspiring Success"
        desc="We, at Triumph IAS, believe that each Individual Aspirant is unique and requires Individual Guidance and Care. We prepare students keeping in mind his or her strength and weakness. We also cater to the needs of the students who are willing to join different State Civil Services. This intense focus on each individual's strengths and weaknesses is at the core of our GS Mains Modules (GSMM) & GS Prelims Modules (GSPM) as well as Essay and Sociology Optional Courses and has been the single most crucial factor in helping thousands of our students to achieve unprecedented success over the years.
        
        For us, at Triumph IAS, STUDENTS COME FIRST. And, from our experience, we know that CSE preparation is not an end in itself. Students choose CSE as a means to fulfill their career and long term life goals. We are committed to partnering with students to help them make the right Preparatory choices which help them reach their long-term goals. We have people with rich background in the field of CSE test preparation. We offer quality, exam focused education and guidance to enable every deserving individual match aspirations with career goals.
        "
        src={triumphias}
      />
      <StudentQuotes />
    </div>
  );
};

export default About;
