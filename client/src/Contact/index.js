import React from 'react'
import CommanBanner from '../component/CommanBanner'
import Container from '../component/Container'
import CommonInfoLi from './CommonInfo1'
import FollowUs from './followUs'
import Styles from "./index.module.scss"
const contact = () => {
    const numbers = <p>7678628820 (R.Dawar),<br /> 7840888102 (R. Bisht),<br />7303203981 (Bhawna)</p>
    return (
        <>
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
                                        icon="fa fa-whatsapp"
                                        name="Whatsapp"
                                        para={numbers}
                                    />
                                    <CommonInfoLi
                                        icon="fa-solid fa-location-dot"
                                        name="Address"
                                        para="23-B,3rd Floor,Pusa Road,
                                        Metro Pillor No. 114Above Suri Lab,Old Rajender Nagar,New Delhi-110060."
                                    />
                                    <CommonInfoLi
                                        icon="fa fa-envelope-o"
                                        name="E-Mail"
                                        para="info@triumphias.com"
                                    />


                                    <FollowUs name="Follow Us" />
                                </ul>
                            </div>
                            <div className={Styles.contact__page__wrap__info2}>
                                <h2>contact With Us</h2>
                                <div className={Styles.contact__page__wrap__info2__formSection}>
                                    <form style={Styles.contact__page__wrap__info2__formSection__fill}>
                                        <div className={Styles.contact__page__wrap__info2__formSection__fill__name}>
                                            <input type="text" placeholder="Name*" />
                                        </div>
                                        <div className={Styles.contact__page__wrap__info2__formSection__fill__name}>
                                            <input type="text" placeholder="Email*" />
                                        </div>
                                        <div className={Styles.contact__page__wrap__info2__formSection__fill__textArea}>
                                            <textarea placeholder='Message*'></textarea>
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


        </>
    )
}

export default contact
