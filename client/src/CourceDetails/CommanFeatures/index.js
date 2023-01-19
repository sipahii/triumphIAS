import React from 'react'
import Item from "../../CourceDetails/Item"
import Styles from "./index.module.scss"

const FeaturesArea = (props) => {
    return (
        <div className={Styles.features}>
            <h3>{props.heading}</h3>
            <ul>
                <Item para="Daily 2 hours Classes. At the End of the Lecture Assignment related to the Topic is given based on Previous Year Question." />
                <Item para="Daily After Attending the Online Lec. do Telephonic Doubt discussion with Vikash Sir." />
                <Item para="Duration of the Class is Four months but Your Direct Contact with Sir and Mentorship of Vikash Sir will remain till your Final Success." />
                <Item para="Classn begins with Basics & Equal Focus on Fundamentals & #Applied #Sociology along with Coverage of CURRENT Sociology. APPLIED UNDERSTANDING OF SYLLABUS help you retain the Concepts and Theories." />
                <Item para="Previous Years Questions are well Integrated in Foundation Course itself." />
                <Item para="15 Quick Revision & CONTEMPORARY/ CURRENT ISSUES UPDATION CLASS After Your Prelims Test. In this class We do INTELLIGENT GUESSWORK for CSE Mains of that Particular Year. (Exclusively for Triumph IAS Students)" />
            </ul>
        </div>
    )
}

export default FeaturesArea