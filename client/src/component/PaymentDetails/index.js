import React from "react";
import CommonTitle from "../CommonTitle";
import Styles from "./index.module.scss"
import Image from "../../../src/Assets/qr-code.jpeg"

const CourseReview = () => {
    return (
        <div className={Styles.courcesPage}>
            <div className={Styles.courcesPage__inner}>
                <CommonTitle head="For Admission Deposit Your Fee in the Account Given" />
                <div className={Styles.courcesPage__inner__review}>
                    <p>Account Name - <span>TRIUMPH EDUCATION & PUBLISHING PVT. LTD.</span></p>
                    <p>Bank Name-<span>ICICI BANK</span></p>
                    <p>Current Account No.-<span>401705000081</span></p>
                    <p>IFSC Code:<span>ICIC0004017</span></p>
                    <p>Branch-<span> East Patel Nagar Branch</span></p>
                    <p>After Payment send the confirmation details through</p>
                    <p><span> whatsApp OR SMS to 7840888102 </span>get the payment receipt.</p>

                    <div className={Styles.courcesPage__inner__review__barcode}>
                        <h5>ACCEPT PAYMENT THROUGH QR CODE</h5>

                        <img src={Image} alt="barcode" />
                        <h4>Terms and Conditions</h4>
                        <p><span>1.</span> Fees once paid are not returnable/refundable or transferrable.</p>
                        <p><span>2.</span> Study material given to students is a proprietary material. It should not be shared or copied or circulated, disclose, reproduce, duplicate and distribute in any form. Strict action will be taken against violation. In case a student is found involved in any violation of copyrights of Triumph IAS material, the admission will be cancelled.</p>
                        <p><span>3.</span> Study material will be issued only once. Students are advised to keep them safe. No duplicate or copy of the material will be issued.</p>
                        <p><span>4.</span> The right to cancelled, the admission any student for indiscipline or violation of terms and conditions rests with the management.</p>
                        <p><span>5.</span> Students shall submit his/her recent passport size photograph & one ID Proof at the time of admission.</p>
                        <p><span>6.</span> By taking enrollment, the student submits to the above said terms and conditions.</p>
                    </div>
                </div>
            </div>
        </div>

    )
}
export default CourseReview