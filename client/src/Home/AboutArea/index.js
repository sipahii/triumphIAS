import React from "react";
import Container from "../../component/Container";
import CommonContact from "../../../src/component/CommonContact"
import Styles from './index.module.scss'
const AboutArea = () => {
    return (
        <section className={Styles.aboutArea}>
            <Container>
                <div className={Styles.aboutArea__heading}>
                    <h1>Welcome To Academics</h1>
                    <p>Tmply dummy text of the printing and typesetting industry. Lorem Ipsum has been theindustry's standard dummy text ever since the 1500s, when an unknown printer took.
                    </p>
                </div>
                <div className={Styles.aboutArea__heading__servicewrapper}>
                    <CommonContact
                        icons="fa-solid fa-graduation-cap"
                        about="Scholarship Facility"
                        />

                    <CommonContact
                        icons="fa-solid fa-user"
                        about="Skilled Lecturers"
                        />
                    <CommonContact
                        icons="fa fa-book" aria-hidden="true"
                        about="Book Library & Store"
                        />
                </div>
            </Container>
        </section>
    )
}
export default AboutArea