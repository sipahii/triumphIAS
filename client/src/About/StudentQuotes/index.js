import React from "react";
import styles from "./index.module.scss";
import user from "../../Assets/userimage.jpg";
import QuotesArea from "./QuotesArea";
const StudentQuotes = () => {
  return (

    <div className={styles.studentQuotes}>
      <h1 className={styles.studentQuotes__title}>What Our Students Say</h1>
      <div className={styles.studentQuotes__area}>
        <QuotesArea
          name="Andrew Head"
          occupation="Graduate"
          quotes="Pellentesque tellus arcu, laoreet volutpavenenatis molestPellentesque
          commodo lorem lectus pretium vehicula."
          user={user}
        />
      </div>
    </div>

  );
};

export default StudentQuotes;
