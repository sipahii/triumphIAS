import React from "react";
import CommanBanner from "../component/CommanBanner";
import CommanHeading from "../component/CommanHeading";
import Container from "../component/Container";
import Item from "../component/Item";
import CourseCrousel from "../CourceDetails/CourseCrousel";
import Styles from "../CourceDetails/index.module.scss"
// import Image from "../Assets/graphic.jpg";

const SociologyPlanner = () => {
  const para1 = <p>Something new, in terms of the <strong>knowledge base</strong> or <strong>linkages</strong> or <strong>diagrams etc.</strong></p>
  const para2 = <p><strong>Conceptual understanding – </strong>of the subject is most important. Give a smart interpretation to the concepts and relate it with mundane example for long term memory.</p>
  const para3 = <p><strong>Facts and observations –</strong> After conceptual understanding, the second step is memorizing the important facts. For example – some important theoretical aspects are to be memorized to attempt any question related to the spatial analysis of the matter.</p>
  const para4 = <p><strong>Manipulating the facts and theories:</strong> Facts and Theories should be used according to the requirement of the question.</p>
  const para5 = <p><strong>Something New –</strong> New diagrams, new ideas, original ideas, new content, latest studies, inter linkages etc. must be provided. However, one has to be cautious that a balance is maintained and the ideas are not too radical. Also it should be well integrated with the answer.</p>
  const para6 = <p><strong>Sensitivity towards society:</strong> Give <strong>examples</strong> from society.</p>
  const para7 = <p><strong>Writing skill does not mean a decorative language, </strong> having extra-ordinary vocabulary. <strong>It means that the ideas should be well expressed in a lucid manner. Simple but a speaking Language is the demand</strong> i.e. the answer sheet should speak out everything for itself with requisite words, depends on the nature of the subject matter. There should be no ambiguity in the answers.</p>
  const para8 = <p><strong>Writing Skill comes through practice.</strong> Writing skill is also based on your knowledge treasure and conceptual understanding. This only can give flow and lucidity to your answers. The conceptual understanding will make you answer well organized and well integrated.</p>
  const para9 = <p>Thus, writing skill and content both should complement and supplement each other. Writing skill has its base in content and content needs writing skill to be well expressed. <strong>There are few rules for Effective Presentation (Principles) of Answers. These are:</strong></p>
  const para10 = <p><strong>Underline the Key words </strong>and the <strong>latest studies</strong> that you have incorporated in your answer</p>
  const para11 = <p><strong>Highlight the Theories, Sociological studies, Facts, Thinkers name </strong>and approaches in the field, etc. if you have quoted them in you answer.</p>
  const para12 = <p>Make some <strong>lucid diagrams</strong> to make your presentation effective. But remember that the diagrams need to be well integrated with the answer. You can do this by simply incorporating a statement like<strong> – this can be diagrammatically represented as follows.</strong> The diagrams must be explained.</p>
  const para13 = <p><strong>Each topic has some key words</strong> and the examiner expects you to write them.</p>
  const para14 = <p>Another, crucial factor which many of us tend to overlook is <strong>the selection of the first question.</strong> Remember. “FIRST IMPRESSION IS THE LAST IMPRESSION”, hence your first answer should be your best answer, i.e. one in which you have command and also have SOMETHING NEW to give – in the form of linkages, social relevance, diagrams, etc.</p>
  const para15 = <p>Last, but not the least, <strong>just before examinations give your precious three to four hours to those things which are the dynamic aspects of your preparation.</strong> This includes the latest SOCIAL ISSUES, STUDIES, and Theories etc. Even glancing over these things at the last moment makes them alive and fresh in your memory (provided you have read them earlier) and they can be reproduced more authentically in the examination. This will definitely make the Difference. <br />These are the few ways for fetching good marks in SOCIOLOGY. These are not merely to be memorized and retold to others, these need to be applied in writing answers. So the thrust should be on writing answer and evolve and getting them evaluated. The more you practice the better answers you would be able to write.
    Now, I come to the reading list. But remember. <strong>“It is not wide reading but useful reading that tends to excellence”</strong>.</p>
  const para16 = <p>Read the basic (NCERT) books first, rather than going for guide books journals and foreign authors etc.What is required as first step is the mastering of the <strong>BASICS</strong> of the subject. So, first step requiresmastering NCERT BOOKS.</p>
  const para17 = <p>While reading focus has to be on <strong>CONCEPTUAL UNDERSTANDING</strong> rather than simply memorizing the STUDIES AND VIEWS. The Facts are easier to memorize if the concepts are clear.</p>
  const para18 = <p>Make your <strong>flashcard or one register</strong> in which all <strong>STUDIES AND VIEWS</strong> are intact and you can revise them anytime. Rather than simply collecting new information everyday, focus should be on revising what you have read so far. Only when that is memorized thoroughly move on the new.</p>
  const para19 = <p><strong>Even when you are reading the new material, keep in touch to the older study material as well.</strong> This is very important, else during the examination, you will remember that you have read something like this but “what was it exactly” might not come to your mind except a faint image. This has to be checked. The ultimate success depends on not ‘what all you have read’ but ‘how much you retain’. How far you have practiced by making maps & diagrams as well organizing the matter is very crucial and should not be neglected at all.</p>
  const para20 = <p><strong>Analyse the previous years UPSC question papers</strong> thoroughly and <strong>try to chalk out the areas of the question.</strong> Also write down answers of these questions topic wise and identify the mistakes, which you commit while writing these questions. Do not overlook them and do not lie to yourself that “it was a careless mistake”. Even if it was a careless mistake like overlooking the word “not” in the question, be cautious that you should not repeat it in the examination hall. Also analyze your mistake thoroughly whether it was due to lack conceptual understanding or it was forgetting the studies. Master your weakness after analyzing them.</p>
  return (
    <>
      <CommanBanner section="THE RIGHT APPRAOCH TO SOCIOLOGY OPTIONAL PREPARATION" />
      <div className={Styles.courcesPage}>
        <Container>
          <div className={Styles.courcesPage__rowflex}>
            <div className={Styles.courcesPage__rowflex__couresDetails}>
              <div className={Styles.courcesPage__rowflex__couresDetails__inner}>
                <h2>THE RIGHT APPRAOCH TO SOCIOLOGY OPTIONAL PREPARATION</h2>
                <p>
                  &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; Civil Services MAINS examination – has undergone tremendous changes in terms of SYLLABUS Pattern as well as QUESTION pattern. It was believed that with the change in Main examination pattern GENERAL STUDIES will gain importance as it consists of 1000 marks out of 1750. But the MAINS SCORE of Successful Candidates tells us different story. If we analyse their Mains MARKS-SHEET we find that it is the Marks of the OPTIONAL PAPER that helped them finding a place in the final list. Hence, we can say that choosing a right optional is crucial to get good marks in Main examination.
                  <br />
                  <br />  <strong></strong>
                  &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; Choosing OPTIONAL subjects in Civil Services Examination is one of the most debated topics among the beginner IAS aspirants. Students believe that certain Optional subjects are more scoring than others, more performing than other subjects in past Few years, help more in General Studies than other subjects etc. But choosing Optional Papers should not be based on these subjective aspects. Rather it should be based on some objective criterion<strong> Nature, Scope and Size of the Syllabus, Uniformity and stability in Question Pattern, Relevance of the Syllabic content in day today life in Society, availability of study material and guidance etc. </strong> Remember, approach of UPSC is different from your academic studies, before choosing the optional you need to do a careful analysis of SYLLABUS, PREVIOUS YEARS PAPERS, REQUIREMENTS of SUBJECTS (Ideal, visionary, Numerical, Conceptual Theoretical), COMFORT LEVEL with the subject and PAST TRENDS should be done. A wrong decision may prove to be disastrous hence you should be careful while choosing your Optional. The basis for the selection of any optional subject could be :
                </p>
                <Item para="Specifically defined and comparatively small syllabus," />
                <Item para="Interesting and short subject," />
                <Item para="Uniformity and stability in Question Pattern," />
                <Item para="Relevance of the Syllabic" />
                <Item para="Scoring nature of the subject" />
                <Item para="Easy availability of study material" />
                <Item para="Availability of experienced guide." />
                <p> &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;<strong> The syllabus</strong>of Sociology is<strong>relatively short</strong>as well as  <strong>well defined.</strong>The  <strong>Study Material</strong>is easily aviaibale and <strong>copmact</strong>in nature being  <strong>a popular and scoring optional subject</strong> has got easy availability of <strong>experienced guides. The scientific and logical nature of the subject</strong> helps to prepare the subject for main examination within comparatively less time. Three months preparation is sufficient to cover the whole syllabus with proper understanding and well knit writing skill. This helps the candidates for the preparation of Essay and General Studies papers with “extra time”. Thus the Sociology is a popular and successful optional subject for the main examination.</p>
                <p>&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;  <strong>IN THE CHANGED SCENARIO</strong>  of Civil Services Examination <strong>SOCIOLOGY </strong> has emerged as most suitable subject that is attached in all the four papers of General Studies. Out of the total topics mentioned in general studies syllabus, at least one- third is covered under sociology. It is, of course, more scoring. The portion Indian Society is very much related to the day to day observation. So the study of Sociology as an optional subject is very much helpful for the Social Issues portion of General Studies in the Preliminary and Main examination as well.
                </p>

                <p>&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;<strong>The study of Indian Society, specifically the units of Population Dynamics, Challenges of Social Transformation, Visions of Social Change in India, Rural and Agrarian transformation in India, Industrialization and Urbanization in India, Politics and Society, Impact of colonial rule on Indian society, Tribal communities in India, Religion and Society etc</strong> help the candidates to prepare the <strong>ESSAY PAPER</strong> with better understanding of problems and solution aspects with practical approach with difference.Of course, the practical understanding gives them an edge in <strong>INTERVIEW</strong> Was well, which makes the space sure in the success list. One of the most important aspect of Sociology is that it has got relevance is the in interview (Personality Test). The conceptual nature of the subject helps the candidates accommodating and retaining the facts easily.</p>
                <p>&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;Similarly <strong>the syllabus of main examination has got only 13 UNITS in two papers</strong> The <strong>strategic preparation</strong> of the subject required is <strong>60-70%</strong> of the syllabus prepared for writing the answers in the examination. The strategic preparations with the proper and experienced guidance make the candidates preparation comparatively effective and easy.</p>

                <p>&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;The experienced guidance helps the candidate’s analytical approach to prepare properly in right direction. These help the candidates to score more in less consumption of time and ensures the WONDER SPACE in the final success list. As it has been well said: <strong>“Winners do not do different things rather they do things differently”</strong></p>
                <p>&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;       Last but not the least and most importantly, the study of Sociology makes you and your performance more <strong>SYSTEMATIC, PRACTICAL, ORGANISED, RELEVANT AND WELL ARTICULATED,</strong> and every walk of your life. As the study Sociology is related to those phenomenon which are commonly reflected in our lives. So the study of Sociology brings the <strong>“difference differently in you which is the REAL WIN”.</strong> Your selection is just the by product of your serious efforts with the Sociology.</p>


                {/* <img src={Image} alt="image" /> */}


                <CommanHeading
                  heading="SCIENTIFIC APPRAOCH TO SOCIOLOGY"
                />
                <CommanHeading
                  heading="At the Elementary Level…."
                />
                <Item para={para16} />
                <Item para={para17} />
                <Item para={para18} />
                <Item para={para19} />
                <Item para={para20} />
                <Item para="Last but not the least, discuss with your friend. Discussion helps a lot provided it is honest discussion with the motive to help the other and in turn getting help. Else it can be disastrous as well." />
                <p>These are broadly some tips, which shall help you in the <strong>BASIC PREPARATION.</strong> However, what matters most is the mental calmness and cool, which you maintain in the examination hall. Do not panic if you do not know any question. Apply your mind. Though not always, but <strong>most of the times the question can be rightly solved if one maintains cool and analyses it logically.</strong></p>
                <br />


                <CommanHeading
                  heading="At the Advance Level…….."
                />
                <p>I would like to reiterate what I have said earlier also– <strong>“Winners do not do different things, they do things differently’. </strong> The funda is putting you in the shoes of examiner. A little understanding of the psychology of the examiner, this can be done by putting yourself in the examiner’s place. What you would like in any answer sheet? <strong>Clarity of thought, lucidity, good content, well expressed language.</strong> In short, good Communication Skill (Written Communication) so that the answer script could speak itself.</p>
                <p><strong>The reason why I began with writing skill is that it is the most important in the preparation for the Mains Examination.</strong>  There are many intelligent students, well versed with knowledge about their subject matter and yet they do not score in the Main Examination. Why? Of course, luck and destiny is there, but another reason is <strong>faulty writing skill.</strong> Thus Civil Services Examination requires a two-pronged strategy to hit the target <strong>Content and Writing Skill.</strong> Now I will take up both these components in detail.
                </p>
                <CommanHeading
                  heading="CONTENT :"
                />
                <Item para="Conceptual (Theoretical) understanding- clarity of thought.Factual –Observational Understanding." />
                <Item para="Factual –Observational Understanding." />
                <Item para="Manipulating the facts and observation and theories- power of assimilation." />
                <Item para={para1} />
                <Item para="Sensitivity towards society- interpersonal skill etc." />
                <Item para={para2} />
                <Item para={para3} />
                <Item para={para4} />
                <Item para={para5} />
                <Item para={para6} />

                <CommanHeading
                  heading="WRITING SKILLS :"
                />
                <Item para="Be short and precise and effective." />
                <Item para="Writing should be legible and neat." />
                <Item para="Grammatical errors must not be committed." />
                <Item para="Simple and expressive language" />
                <Item para="Neat diagrams, whenever it is required to give precision to your answer." />
                <Item para={para7} />
                <Item para={para8} />
                <Item para={para9} />
                <Item para={para10} />
                <Item para={para11} />
                <Item para={para12} />
                <Item para={para13} />
                <Item para={para14} />
                <Item para="Try to integrate the statement of the question, somewhere in you answer. Either begin with it or end with it. This makes your answer FOCUSSED and well knit." />
                <Item para={para15} />


                <CommanHeading
                  heading="USEFUL READINGS FOR SOCIOLOGY:"
                />
                <Item para="NCERT BOOKS" />
                <Item para="FUNDAMENTALS OF SOCIOLOGY {golden peacock publication}" />
                <Item para="APPLIED SOCIOLOGY {golden peacock publication}" />
                <Item para="IGNOU study material." />
                <Item para="SOCIOLOGY (HARLAMBOS)" />
                <Item para="INDIAN SOCIAL SYSTEM-RAM AHUJA" />
                <Item para="MODERNIZATION OF INDIAN TRADITION-YOGENDRA SINGH" />
                <Item para="SOCIALCHANGE IN INDIA-M.N. SRINIWAS" />
                <Item para="SOCIAL BACKGROUND OF INDIAN NATIONALISM-A.R. DESAI" />
                <Item para="INDIA AFTER INDEPENDENCE: Bipin Chandra or INDIA AFTER GANDHI : Ram Chandra Guha" />




              </div>

            </div>
            {/* <div className={Styles.courcesPage__rowflex__sidebar}>
              <CourcePrice />
              <PaymentDetails />
              <AskQuestion />
              <ApplyNow />
            </div> */}
          </div>
          <div className={Styles.courcesPage__rowflex__couresDetails__crousalArea}>
            <h3>Related Courses</h3>
          </div>
          <CourseCrousel />
        </Container>
      </div >
    </>
  );
};

export default SociologyPlanner;
