import React from 'react'
import CommanBanner from '../component/CommanBanner'
import Container from '../component/Container'
import Footer from '../Footer'
import Header from '../Header'
import Navigation from '../Navigation'
import CommonInfoLi from './CommonInfo1'
import FollowUs from './followUs'
import Styles from "./index.module.scss"
const contact = () => {
    return (
        <>
            <Header />
            <Navigation />
            <CommanBanner section="Contact " />
            <div className={Styles.contact}>
                <Container>
                    <div className={Styles.contact__page}>
                        <div className={Styles.contact__page__wrap}>
                            <div className={Styles.contact__page__wrap__info1}>
                                <ul className={Styles.contact__page__wrap__info1__ul}>
                                    <CommonInfoLi
                                        icon="fa-solid fa-phone"
                                        name="Phone"
                                        para="+61 3 8376 6284"
                                    />
                                    <CommonInfoLi
                                        icon="fa-solid fa-location-dot"
                                        name="Address"
                                        para="PO Box 1212, California, US."
                                    /><CommonInfoLi
                                        icon="fa fa-envelope-o"
                                        name="E-Mail"
                                        para="academics@gmail.com"
                                    />
                                    <FollowUs name="Follow Us" />
                                </ul>
                            </div>
                            <div className={Styles.contact__page__wrap__info2}>
                                <h2>contact page With Us</h2>
                                <div className={Styles.contact__page__wrap__info2__formSection}>
                                    <form>
                                        <div className={Styles.contact__page__wrap__info2__formSection__name}>
                                            <input type="text" placeholder="Name*" />
                                        </div>
                                        <div className={Styles.contact__page__wrap__info2__formSection__name}>
                                            <input type="text" placeholder="Email*" />
                                        </div>
                                        <div className={Styles.contact__page__wrap__info2__formSection__textArea}>
                                            <textarea>Messege*</textarea>
                                        </div>
                                    </form>
                                </div>
                                <div className={Styles.contact__page__wrap__info2__Btn}>
                                    <button>Send Message</button>
                                </div>
                            </div>

                        </div>
                    </div>
                </Container>
            </div>
            <Footer />


        </>
    )
}

export default contact
