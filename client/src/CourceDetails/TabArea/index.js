import React, { useState } from "react";
import Styles from './index.module.scss'
import Image1 from "../../Assets/one.jpg";
import Image2 from "../../Assets/img2.jpg";
import CommonTitle from "../CommonTitle";
import CommonReview from "../CommonReview";
import CommonLactures from "../CommmanLacturers";
import FeaturesArea from "../CommanFeatures";
import Item from "../Item";

const TabArea = () => {
    const [show, setShow] = useState("Features");
    const [active, setActive] = useState("Features");
    const menuChangeHandler = (name) => {
        setShow(name);
        setActive(name);
    };
    return (
        <>
            <div className={Styles.courcesPage}>
                <div className={Styles.courcesPage__tabArea}>
                    <div className={Styles.courcesPage__tabArea__wrap}>
                        <ul className={Styles.courcesPage__tabArea__wrap__tabNav}>
                            <li
                                className={`${Styles.list} ${active === "Features" ? Styles.active : ""
                                    }`}
                                onClick={() => menuChangeHandler("Features")}
                            >
                                Features{" "}
                            </li>
                            <li
                                className={`${Styles.list} ${active === "Lecturers" ? Styles.active : ""
                                    }`}
                                onClick={() => menuChangeHandler("Lecturers")}
                            >
                                Lecturers
                            </li>
                            <li
                                className={`${Styles.list} ${active === "Reviews" ? Styles.active : ""
                                    }`}
                                onClick={() => menuChangeHandler("Reviews")}
                            >
                                Reviews
                            </li>
                        </ul>
                    </div>
                </div>
                <div className={Styles.courcesPage__tabContant}>
                    {show === "Features" && (
                        <div className={Styles.courcesPage__tabContant__item1}>
                            <ul className={Styles.courcesPage__tabContant__item1__courceFeatures}>
                                <li>Start: 01 January, 2017</li>
                                <li>Total Classes : 100</li>
                                <li>Class: Sunday - Monday</li>
                                <li>Total Credits: 150</li>
                                <li>Course Duration: 3 Month</li>
                                <li>Seats Available: 200</li>
                                <li>Lecturer: 03</li>
                                <li>Class Time: 10 am - 11.00 am</li>
                            </ul>
                            <FeaturesArea
                                heading="Course Features"
                            />
                            <Item para="Daily 2 hours Classes. At the End of the Lecture Assignment related to the Topic is given based on Previous Year Question." />
                            <Item para="Daily After Attending the Online Lec. do Telephonic Doubt discussion with Vikash Sir." />
                            <Item para="Duration of the Class is Four months but Your Direct Contact with Sir and Mentorship of Vikash Sir will remain till your Final Success." />
                            <Item para="Classn begins with Basics & Equal Focus on Fundamentals & #Applied #Sociology along with Coverage of CURRENT Sociology. APPLIED UNDERSTANDING OF SYLLABUS help you retain the Concepts and Theories" />
                            <Item para="Previous Years Questions are well Integrated in Foundation Course itself." />
                            <Item para="15 Quick Revision & CONTEMPORARY/ CURRENT ISSUES UPDATION CLASS After Your Prelims Test. In this class We do INTELLIGENT GUESSWORK for CSE Mains of that Particular Year. (Exclusively for Triumph IAS Students)" />

                            <FeaturesArea
                                heading="STUDY MATERIAL / NOTES :"
                            />
                            <Item para="PRINTED BOOKLETS For Each Topic which is Concise, Well Updated, & Exam Oriented." />
                            <Item para="MINUTES REVISION CARDS (5-MRC) for Regular Revision of the the Concepts & Theories." />

                            <FeaturesArea
                                heading="PRACTICE WORKBOOK FOR TEST:-"
                            />
                            <Item para="Students Will get 2 PRACTICE WORKBOOK consisting of 10 Set of UPSC Based MockTest Papers." />

                            <FeaturesArea
                                heading="PERSONAL MENTORSHIP :"
                            />
                            <Item para="Get PERSONAL MENTORSHIP of Vikash Sir for GENERAL STUDIES STRATEGY, ESSAY & PERSONALIT-YDEVELOPMENT for Civil Services...till Your Final Success." />
                            <Item para="Regular One-on-One Interaction & Individual Councelling for Stress Management and Refinement of Strategy for Exam by Vikash Ranjan Sir." />


                            <FeaturesArea
                                heading="SPECIALIST GUIDANCE OF VIKASH RANJAN SIR"
                            />
                            <Item para="Vikash Ranjan Sir is the Specialist teacher of Sociology with vast experience in Teaching and Writing Books of Sociology. His Scientific, Systematic, Applied & Exam Focussed Approach has helped many students to get selected in the Civil Services. Students will LEARN SOCIOLOGY & PRACTICE ANSWER-WRITING under the Personal Guidance of the Well-Experienced Teacher -Vikash Ranjan Sir" />
                            <Item para="At the End of the Class.." />
                            <Item para="Students will have complete Conceptual Understanding of Each and Every Topic of the Syllabus." />
                            <Item para="Students will be able to attempt any of the questions, be Direct or Applied, ensuring 300+ Marks in Sociology." />
                            <Item para="With Rigorous Answer Writing Practice in the regular Sociology Classes, Students will have no further need to hunt for other institutes for Answer Writing." />


                            <FeaturesArea
                                heading="CLASSROOMS INTERACTION & PARTICIPATORY DISCUSSION:"
                            />
                            <Item para="Vikash Sir will deliver lectures on respective Topics to develop clarity in Concepts, Theories & Social Facts. There will be Explanation & DISCUSSION on SYLLABUS Topics in the Class." />
                            <Item para="Students will be provided with Study Materials related to each and every topic in advance for discussion in the Class. During class, STUDENTS CAN ASK QUESTIONS to clear their doubt. We motivate students to think over Relevant Questions in the classroom." />


                            <FeaturesArea
                                heading="PREPARATORY-STUDY SUPPORT"
                            />
                            <Item para="Study support from Triumph IAS & Personal Mentorship of Vikash Sir will be provided to Students till final Selection. The students can consult Vikash Ranjan Sir even after completion of their course .The Students can seek an appointment at the institute or Contact via Phone & Whatsapp #8586861046." />
                            <Item para="Vikash Sir provides Special Guidance Session for “Essay & Mains General Study” too." />

                            <FeaturesArea
                                heading="ONLINE SUPPORT SYSTEM (OSS)"
                            />
                            <Item para="Get access to BLOG, an Online Forum for Value Addition Study Material, Journals and Articles relevant to Sociology on www.triumphias.com" />
                            <Item para="Ask preparation related queries directly to the Mentor via mail vikashranjan@triumphias.com or WhatsApp 8586861046" />
                            <Item para="Access to Recorded Classes for Revision (If Needed) " />


                            <FeaturesArea
                                heading="STRATEGIC CLASSROOM PREPARATION"
                            />
                            <Item para="Interactive & Applied teaching with “Exam Focussed” Approach which inculcate Sociological Sense and Competency." />
                            <Item para="Beginning with Basics, Equal Focus on Fundamentals & Applied Sociology." />
                            <Item para="Daily Assignments for Answer Writing Competency." />
                            <Item para="Four Months of Classroom Sessions, Theoretical Discussion, and Concept Building & Answer writing with focus on Learning & Application." />
                            <Item para="Regular Personal Doubt Clearance and Feedback Sessions by Vikash Ranjan Sir." />
                            <Item para="Special Guidance Session for Essay & General Studies content management." />
                            <Item para="Focus on Previous year question of UPSC & State PCS in class discussion.Focus on contemporary Trends in Sociology." />
                            <Item para="Focus on contemporary Trends in Sociology." />


                            <FeaturesArea
                                heading="ALL INDIA SOCIOLOGY TEST SERIES (Mains):"
                            />
                            <Item para="All Classroom Students will be entitled for our All India Sociology Test Series (Mains) at Concessional Fee." />
                            <Item para="Every Test will be followed by Elaborate Discussion Session." />


                            <FeaturesArea
                                heading="COMPREHENSIVE STUDY MATERIAL"
                            />
                            <Item para="Printed Booklets of Concise, Well Researched, Exam Ready Study Material for Every Unit of the Syllabus." />
                            <Item para="Booklet on Contemporary Society & Sociology Extract from Journals & All leading Newspapers." />

                            <FeaturesArea
                                heading="Why Sociology OPTIONAL in CSE Mains?"
                            />
                            <Item para="IN COMPARISON TO OTHER HUMANITIES SUBJECTS like Geography, Public Administration, Political Science etc., SOCIOLOGY has been SAFE & SECURE optional because of SHORTEST SYLLABUS & LIMITED NUMBER OF THINKERS & THEORIES (Only six thinkers & six major theoretical strands). Subject like Geography, Public Administration, Political Science etc. are specialist in nature with big syllabic content." />
                            <Item para="History, Geography, Political Science, Pub. Admin. etc. HELPS in a particular paper of GENERAL STUDIES. For example History helps in G.S. Paper-I, Political Science and Pub. Admin. helps in Paper-II, Economics helps in Paper-III, Philosophy and Psychology helps in Paper-IV. SOCIOLOGY is the only optional which empowers you for all the Papers of G.S. with small but variable syllabic content and understanding of static and dynamic & concepts and facts." />
                            <Item para="Also Topics in Sociology Syllabus is Relevant to Day Today Life. For Example Family, Marriage, Kinship, Religion, Education, Agriculture etc." />
                            <Item para="Sociology is the Best performing optional, also because of higher Predictability In Question Pattern. Seventy percent of the questions repeated from previous year questions." />
                            <Item para="Relatively Short Syllabus, Predictability in Question Pattern, Makes SOCIOLOGY the most suitable subject for Students with science (Engineering and Medicine) and Commerce Background." />
                            <Item para="Every Year there are atleast two to three ESSAYS are related with Sociology Syllabus. Sociology Empowers aspirants for Interview too." />

                            <FeaturesArea
                                heading="Why Vikash Ranjan's Classes for Sociology ?"
                            />
                            <Item para="In past few years, the NATURE OF QUESTIONS in Sociology has become MORE CONTEMPORARY AND CURRENT ORIENTED. Now there is a shift from bookish academic approach to ANALYTICAL and APPLIED one. Questions in the last four Years Paper demand in-depth understanding of basics and interlinking it with current happenings and analytical, applied Explanations." />
                            <Item para="Proper guidance and assistance is required to learn the skill of interlinking current happenings with the conventional topics. VIKASH RANJAN SIR at TRIUMPH IAS guides students according to the Recent Trends of UPSC. He begins the Civil Services Optional Subject with basics keeping in mind the understanding level of students, who have no academic background with the subject. Once the students are well conversant with the terms and terminologies and basics of the subject, they move forward." />
                            <Item para="While dealing with each topic of Sociology, he not only interlinks it with CONTEMPORARY & CURRENT ISSUE but also teaches you how to intertwine both the optional papers (Paper I and II)." />
                            <Item para="Extracted from different text books, website, journals, etc. Vikash Ranjan's STUDY MATERIAL is the best for SOCIOLOGY OPTIONAL PAPERS. The study material not only saves students' precious time which they spent in searching for books but also provides updated reports, recent structural-institutional changes and developments reported in newspapers and journals, which are useful to answer unconventional questions and helps in scoring good marks in Main examination. This saves students' time and helps in revising the same study material ten times rather than going for ten books once." />
                            <Item para="At Triumph IAS, with Applied classes and the best study material ,Regular Assignments and Class Tests are also conducted to assess candidates' writing skills and understanding of the subject. Based on students' performance, individual feedback is provided to improve their writing skills." />

                            <FeaturesArea
                                heading="Procedure for Online Class:"
                            />
                            <Item para="Account for online classes will be activated within 36 hours of Enrollment." />
                            <Item para="Enrolled students will be provided a Login id and a Password to access their Account on the website." />
                            <Item para="Class Videos will be Uploaded for the enrolled students in their account within 24hrs after the conduct of offline class." />
                            <Item para="Class Videos will be available in Students account for next 6 month from subscription date." />
                            <Item para="In Case of Sharing of Account Id and Password with friends and peers, Students Account will be disabled forever." />
                            <Item para="For One on One Doubt Clearance, Students will have to call or Whatsapp on 8586861046 to Vikash Ranjan Sir with Name, Admission Reference number and Batch." />
                            <Item para="In Case of any issue related to Course Content/Material Dispatch/Test/Assignment Call: 7840888102 or Email:info@triumphias.com" />
                            <Item para="In Case of any technical inconvenience Email: info@triumphias.com" />
                        </div>
                    )}
                    {show === "Lecturers" && (
                        <div className={Styles.courcesPage__tabContant__item2}>
                            <CommonLactures
                                image={Image1}
                                name=" Kazi Fahim"
                                profession="Senior UI Designer"
                                day="Wed Day"
                                time="9 am - 11 am"
                            />
                            <CommonLactures
                                image={Image2}
                                name=" Kazi Fahim"
                                profession="Senior UI Designer"
                                day="Sun Day"
                                time="08 pm-10 pm"
                            />
                            <CommonLactures
                                image={Image1}
                                name=" Kazi Fahim"
                                profession="Senior UI Designer"
                                day="Mon Day"
                                time="04 pm-11 pm"
                            />
                        </div>
                    )}
                    {show === "Reviews" && (
                        <div className={Styles.courcesPage__tabContant__item3}>
                            <div className={Styles.courcesPage__tabContant__item3__review}>
                                <CommonTitle head="Student Reviews" />
                                <CommonReview img={Image2} name="Greg Christman" />
                                <CommonReview img={Image2} name="Greg Christman" />
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </>

    )

}
export default TabArea