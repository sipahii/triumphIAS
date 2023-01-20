import React from "react";
import styles from "./index.module.scss";
import user from "../../Assets/userimage.jpg";
import QuotesArea from "./QuotesArea";
const StudentQuotes = () => {
  return (
    <div className={styles.studentQuotes}>
      <h1 className={styles.studentQuotes__title}>What Our Students Say</h1>
      <div className={styles.studentQuotes__area}>
        <QuotesArea name="KRANTI VARUN REDDY" occupation="IAS-2018" quotes="I joined Essay Test Series at Triumph IAS and learned the right Approach to write a good Essay.With the continous process of Essay writing followed by Evaluation and Discussions by Vikash Sir, I improved my Essay writing and boost my score. I am highly thankful to Vikash Sir for all his guidance and support for not only Essay but also for GS Mains answer writing .Thanks a lot Sir." user={user} />
        <QuotesArea name="G.R RAGHAVENDRA" occupation="IPS-2018" quotes="I express my sincere gratitude to Vikash Sir who has been a great Mentor throughout my Preparation. His versatile approach towards both Essay and Sociology helped me immensely to get success in CSE. I am highly grateful to you sir for mentoring me to write a good answers in Essay, Sociology and GS as well." user={user} />
      </div>
    </div>
  );
};

export default StudentQuotes;
