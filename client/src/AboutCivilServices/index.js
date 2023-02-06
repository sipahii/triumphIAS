import React from "react";
import Styles from "./index.module.scss"
import Image from "../Assets/graphic.jpg";
import CommanBanner from "../component/CommanBanner";
import Container from "../component/Container";
import CommanHeading from "../component/CommanHeading";
import Item from "../component/Item";
import CourseCrousel from "../CourceDetails/CourseCrousel";

const AboutCivilServices = () => {
  return (
    <>
      <CommanBanner section="ABOUT CIVIL SERVICES" />
      <div className={Styles.courcesPage}>
        <Container>
          <div className={Styles.courcesPage__rowflex}>
            <div className={Styles.courcesPage__rowflex__couresDetails}>
              <div className={Styles.courcesPage__rowflex__couresDetails__inner}>
                <h2>ABOUT CIVIL SERVICES</h2>
                <img src={Image} alt="image" />
                <h3>ABOUT CIVIL SERVICES</h3>
                <p>&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Various Civil Servants of the Government of India, including the Indian Administrative Service (IAS), Indian Foreign Service (IFS), Indian Police Service (IPS) among others are recruited through the Civil Services Examination (CSE), which is a nationwide competitive examination in India conducted by the Union Public Service Commission. Civil Services constitute all non-military departments of the government machinery, which run Government Administration. The Central and the State Civil Servants ensure that the constitutional guarantees and entitlements are brought within the reach of every citizen. The creation of such services provides safeguards for national unity and ensures uniformity of the administrative system throughout the country to maintain common administrative standards. Candidates selected for these services are appointed to different state cadres and as and when required they also move to Central Government jobs on deputation.<br />Civil Services in India rank very high as a career option among young students. The power and social status along with job security that a civil servant enjoys is unimaginable in any other profession. The Civil Services also provide great scope for a person with zeal and desire to bring qualitative changes in the functioning of the Government and even opportunities which could improve the lives of millions of Indians.<br />The services encompass all one can aspire for: prestige, job security, salary package, opportunity of foreign tour, job satisfaction, etc. There is diversity of work too – a wide variety of work is associated with civil services, like maintenance of law and order, developmental work, disaster management, representing India on international forum, administration, upliftment and empowerment of marginalised sections of society etc<br />Civil servants in one way decide the fate of the nation as the implementation of all developmental and other government policy rest with them. If we talk of prestige and respect this is the most prestigious and respectful job of India as it is a job which provides an opportunity to satisfy personal ambition as well as contribute in social welfare. The selection as civil servant is, however, rigorous and only about one thousand candidates are selected out of 9 -10 lakh aspirants every year</p>

                <CommanHeading
                  heading="Process Of Examination"
                />
                <p>The Civil Services Examination is based on the British Raj – era Imperial Civil Service tests. The Civil Services Examination is considered to be one of the most difficult and competitive examinations in India. On average, 900,000 to 1,000,000 candidates apply every year and the number of candidates appearing to sit the preliminary examination is approximately 450,000. The Civil Services examination consists of the following three stages:<br />Stage I: Preliminary examination – A qualifying test advertised in Feb-March and held in June-July each year. Results are published in mid-August.<br />Stage II: Main examination – Held in October every year. Results are usually published in the second week of March.
                  Stage III: Personality Test (interview) – held in March to May each year. Final results are usually announced in May. (The training program for the selected candidates usually commences the following September.)</p>
                <h4>Eligibility For The Examination Is As Follows:</h4>
                <CommanHeading
                  heading="1. Nationality"
                />
                <Item para="For the Indian Administrative Service and the Indian Police Service, the candidate must be a citizen India." />
                <Item para="For other services, the candidate must be one of the following:" />
                <Item para="A citizen of Indi" />
                <Item para="A citizen of Nepal or a subject of Bhutan" />
                <Item para="A person of Indian origin who has migrated from Pakistan, Myanmar, Sri Lanka, Kenya, Uganda, Tanzania, Zambia, Malawi, Zaire, Ethiopia or Vietnam with the intention of permanently settling in India" />

                <CommanHeading
                  heading="2. Education"
                />
                <Item para="All candidates must have as a minimum one of the following educational qualifications:" />
                <Item para="A degree from a Central, State or a Deemed university" />
                <Item para="A degree received through correspondence or distance education" />
                <Item para="A degree from an open university" />
                <Item para="A qualification recognized by the Government of India as being equivalent to one of the above" />
                <Item para="The following candidates are also eligible, but must submit proof of their eligibility from a competent authority at their institute/university at the time of the main examination, failing which they will not be allowed to attend the exam." />
                <Item para="Candidates who have appeared in an examination, the passing of which would render them educationally qualified enough to satisfy one of the above points" />
                <Item para="Candidates who have passed the final exam of the MBBS degree but have not yet completed an internship." />
                <Item para="Candidates who have passed the final exam of ICAI, ICSI and ICWAI." />
                <Item para="A degree from a private university." />
                <Item para="A degree from any foreign university recognized by the Association of Indian Universities." />

                <CommanHeading
                  heading="3. Age"
                />
                <Item para="The candidate must have attained the age of 21 years and must not have attained the age of 32 years (for the General category candidate) on August 1 of the year of examination. Prescribed age limits vary with respect to caste reservations." />
                <Item para="For Other Backward Castes (OBC) the upper age limit is 35" />
                <Item para="The upper age limit is relaxed for certain candidates who are backward with respect to other factors and physically handicapped (PH) people." />

                <CommanHeading
                  heading="Numbers Of Attempts"
                />
                <Item para="General category candidates = 6." />
                <Item para="OBC category candidates = 7." />
                <Item para="SC/ST candidates = unlimited attempts till 37 years of age" />
                <Item para="Appearing to attempt one of the papers in the preliminary examination is counted as an attempt, including disqualification/ cancellation of candidature. However, applying to sit the exam but failing to attend is not counted as an attempt." />

                <CommanHeading
                  heading="Vacancies And Selection"
                />
                <Item para="Generally the number of vacancies varies every year. The number of candidates that pass the preliminary examination is generally 11 or 12 times the number of vacancies, and the number of candidates selected for the final interview is twice the number of vacancies." />
                <Item para="As per existing policies, reservation for SC/ST/OBC is applied to each level of the selection process." />

                <CommanHeading
                  heading="List Of Services"
                />
                <Item para="All India Services (Group A)" />
                <Item para="Indian Administrative Service (IAS)Indian Police Service (IPS)" />
                <Item para="Indian Police Service (IPS)" />
                <Item para="Indian Foreign Service (IFoS)" />
                <Item para="Central Services (Group A)" />
                <Item para="Indian Audit and Accounts Service (IA&AS)" />
                <Item para="Indian Civil Accounts Service (ICAS)" />
                <Item para="Indian Corporate Law Service (ICLS)" />
                <Item para="Indian Defence Accounts Service (IDAS)" />
                <Item para="Indian Defence Estates Service (IDES)" />
                <Item para="Indian Foreign Service (IFS)" />
                <Item para="Indian Information Service (IIS)" />
                <Item para="Indian Ordnance Factories Service (IOFS)" />
                <Item para="Indian Post & Telecommunication Accounts and Finance Service (IP&TAFS)" />
                <Item para="Indian Postal Service (IPoS)" />
                <Item para="Indian Railway Accounts Service (IRAS)" />
                <Item para="Indian Railway Personnel Service (IRPS)" />
                <Item para="Indian Railway Traffic Service (IRTS)" />
                <Item para="Indian Revenue Service (IRS-IT)Indian Revenue Service (IRS-C&CE)Indian Trade Service (ITrS)" />
                <Item para="Indian Revenue Service (IRS-C&CE)Indian Trade Service (ITrS)" />
                <Item para="Indian Trade Service (ITrS)" />
                <Item para="Railway Protection Force (RPF)" />
                <Item para="Central Services (Group B)" />
                <Item para="Armed Forces Headquarters Civil Service (AFHCS)" />
                <Item para="Delhi, Andaman and Nicobar Islands Civil Service (DANICS)" />
                <Item para="Delhi, Andaman and Nicobar Islands Police Service (DANIPS)" />
                <Item para="Pondicherry Civil Service" />
                <Item para="Pondicherry Police Service" />

                <CommanHeading
                  heading="Preliminary Test Stage"
                />
                <p>The pattern of the Preliminary examination up to 2010 was based on the recommendations of the Kothari Commission (1979). It included two examinations, one on general studies worth 150 marks, and the second on one of 23 optional subjects worth 300 marks. Until 2011, when it was revamped, the preliminary pattern was sustained with only minor changes once every ten to fifteen years.
                  <br />From 2011 onwards, the preliminary examination, now popularly known as the Civil Services Aptitude Test (CSAT)(officially it is still called General Studies Paper-1 and Paper-2), intends to focus on analytical abilities and understanding rather than the ability to memorize. The new pattern includes two papers of two hours duration and 200 marks each. Both papers have multiple choice objective type questions only.They are as under:<br />Paper I tests the candidate’s knowledge on current events, history of India and Indian national movement, Indian and world geography, Indian polity Panchayti Raj system and governance, economic and social development, environmental ecology, biodiversity, climate change and general science ,Art and culture.
                  Paper II tests the candidates’ skills in comprehension, interpersonal skills, communication, logical reasoning, analytical ability, decision making, problem solving, basic numeracy, data interpretation, English language comprehension skills and mental ability.<br />In May 2015, the Government of India announced that Paper II of the preliminary examination will be qualifying in nature i.e. it wouldn’t be graded for eligibility in Mains Examination & a candidate needs to secure at least 33% marks in order to be eligible for graded on basis of Marks of Paper I of Preliminary Examination.</p>

                <CommanHeading
                  heading="Mains Stage"
                />
                <p>The Civil Services Mains Examination consists of a written examination and an interview.<br />The written examination consists of nine papers, two qualifying and seven ranking in nature. The range of questions may vary. Candidates who pass qualifying papers are ranked according to marks and a selected number of candidates are called for interview or a personality test at the Commission’s discretion
                  According to the new marks allocations in Civil Service Examination 2013 there are some changes made in the examination according to the suggestion of the Prof. S. Nigavekar Committee. However, after some controversy, the qualifying papers for Indian languages and English were restored to the examination.
                </p>

                <CommanHeading
                  heading="Civil Services New Mains Format"
                />
                <Item para="Paper" />
                <Item para="Subject" />
                <Item para="Marks" />
                <Item para="Paper A. (One of the Indian languages listed below, to be selected by the candidate (from the languages listed in the Eighth Schedule to the Constitution of India) (Qualifying). 300" />
                <Item para="" />
                <Item para="Paper B. English (Qualifying). 300" />
                <Item para="Paper I. Essay 250" />
                <Item para="Paper II. General Studies I (Indian heritage and culture, history and geography of the world and society). 250" />
                <Item para="Paper III. General Studies II (Governance, constitution, polity, social justice and international relations). 250" />
                <Item para="Paper IV. General Studies III (Technology, economic development, bio-diversity, environment, security and disaster management). 250" />
                <Item para="Paper V. General Studies IV(ethics, integrity and aptitude). 250" />
                <Item para="Papers VI, VII. Two papers on subjects to be selected by the candidate from the list of optional subjects below (250 marks for each paper). 500" />
                <Item para="Sub Total (Written Test) 1750" />
                <Item para="Personality Test (Interview) 275" />
                <Item para="Total Marks 2025" />
                <Item para="List of Languages" />
                <Item para="The examination is offered in the following languages, with the name of the script in brackets:Assamese (Assamese)" />
                <Item para="Bengali (Bengali)" />
                <Item para="Bodo (Devanagari)" />
                <Item para="Dogri (Devanagari)" />
                <Item para="English (English)" />
                <Item para="Gujarati (Gujarati)" />
                <Item para="Hindi (Devanagari)" />
                <Item para="Kannada (Kannada)" />
                <Item para="Kashmiri (Persian)" />
                <Item para="Konkani (Devanagari)" />
                <Item para="Maithili (Devanagari)" />
                <Item para="Malayalam (Malayalam)" />
                <Item para="Manipuri (Bengali)" />
                <Item para="Marathi (Devanagari)" />
                <Item para="Nepali (Devanagari)" />
                <Item para="Oriya (Oriya)" />
                <Item para="Punjabi (Gurumukhi)" />
                <Item para="Sanskrit (Devanagari)" />
                <Item para="Santhali (Devanagri or Ol Chiki)" />
                <Item para="Sindhi (Devanagari or Arabic)Tamil (Tamil)" />
                <Item para="Tamil (Tamil)" />
                <Item para="Telugu (Telugu)" />
                <Item para="Urdu (Persian)" />
                <Item para="Optional subjects" />
                <Item para="The subjects available for Papers VI and VII are:" />
                <Item para="Agriculture" />
                <Item para="Animal Husbandry and Veterinary Science" />
                <Item para="Anthropology" />
                <Item para="Botany" />
                <Item para="Chemistry" />
                <Item para="Civil Engineering" />
                <Item para="Commerce and Accountancy" />
                <Item para="Economics" />
                <Item para="Electrical Engineering" />
                <Item para="Geography" />
                <Item para="Geology" />
                <Item para="History" />
                <Item para="Law" />
                <Item para="Literature of any one of the non-English languages listed above" />
                <Item para="Management" />
                <Item para="Mathematics" />
                <Item para="Mechanical Engineering" />
                <Item para="Medical Science" />
                <Item para="Philosophy" />
                <Item para="Physics" />
                <Item para="Political Science and International Relations" />
                <Item para="Psychology" />
                <Item para="Public Administration" />
                <Item para="Sociology" />
                <Item para="Statistics" />
                <Item para="Zoology" /><br />
                <p>Note: Sociology is one of the most sought after optional subjects in Mains examination as it has overlapping content with other subjects like Current Affairs, History, Polity. The standards of Optional papers is of Graduate level. Paper I is theoretical but Paper II is often dominated by Current Affairs and Application based questions</p>

                <CommanHeading
                  heading="Interview"
                />
                <p>Officially called the “Personality Test”, the objective of the interview is to assess the personal suitability of the candidate for a career in public service by a board of competent and unbiased observers. The test is intended to evaluate the mental calibre of a candidate. In broad terms, this is really an assessment of not only a candidate’s intellectual qualities, but also social traits and interest in current affairs. Some of the qualities to be judged are mental alertness, critical powers of assimilation, clear and logical exposition, balance of judgement, variety and depth of interest, ability for social cohesion and leadership, and intellectual and moral integrity.<br />The technique of the interview is not that of a strict cross-examination, but of a natural, though directed and purposive conversation that is intended to reveal the mental qualities of the candidate.
                  The interview is not intended to be a test either of the specialised or general knowledge of the candidate, which has been already tested through written papers. Candidates are expected to have taken an intelligent interest not only in their special subjects of academic study, but also in the events which are happening around them both within and outside their own state or country as well as in modern currents of thought and in new discoveries which should rouse the curiosity of all well-educated youth.</p>
              </div>

            </div>
          </div>
          <div className={Styles.courcesPage__rowflex__couresDetails__crousalArea}>
            <h3>Related Courses</h3>
          </div>
          <CourseCrousel />
        </Container>
      </div>
    </>
  );
};

export default AboutCivilServices;
