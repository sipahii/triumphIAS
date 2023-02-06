import React, { useState } from "react";
import Container from "../component/Container";
import CommonButton from "../Registation/CommonButto";
import RegistationForm from "../Registation/registrationForm";
import RegistrationHeading from "../Registation/registrationHedding";
import BankDetail from "./BankDetail";
import StatusHeadding from "./formStatusHeadding";
import Styles from "./index.module.scss";
import NextPageCommonHedding from "./nextPageCommonHedding";
import ReadableInput from "./ReadOnlyInput";

const NextRegistrationPage = () => {
  const [paymentData, setPaymentData] = useState({});
  const [formData, setFormData] = useState({
    bank: "",
    branch: "",
    transactionID: "",
    paymentReceipt: "",
  });

  const onChangehandler = (event) => {
    let fieldName = event.target.getAttribute("id");
    let fieldValue = event.target.value;

    let newFormData = { ...formData };

    newFormData[fieldName] = fieldValue;

    setFormData(newFormData);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    let newData = {
      bank: formData.bank,
      branch: formData.branch,
      transactionID: formData.transactionID,
      paymentReceipt: formData.paymentReceipt,
    };
    console.log(newData);
    setPaymentData(newData);
  };

  return (
    <>
      <Container>
        <StatusHeadding message="User Registration Succesfull, Please Complete Payment" />
        <RegistrationHeading hedding="REGISTRATION PAYMENT" />
        <div className={Styles.paymentSection}>
          <div className={Styles.paymentSection__paymentArea}>
            <ReadableInput lable="Course Detail*" value="SOCIOLOGY FOUNDATION WITH ANSWER WRITING " />
            <ReadableInput value="OFFLINE Classroom Program " />
            <ReadableInput value="Course Fee : 51500 " />
          </div>
          <div className={Styles.paymentSection__paymentArea}>
            <NextPageCommonHedding hedding="Pay Online - ICICI EasyPay" />
            <p>
              After Payment is Complete send the Payment onfirmation detail or E-Receipt through <span>whatsapp OR SMS to 7840888102</span> get the payemet receipt
            </p>
            <button>Click Here To Pay Now</button>
            <NextPageCommonHedding hedding="Deposit in Branch / Online Transfer (Net banking,NEFT,IMPS,RTGS)" />
            <BankDetail name="Bank Name" detail=" : ICICI" />
            <BankDetail name="A/c Name" detail=" : TRIUMPH EDUCATION AND PUBLISHING PVT. LTD." />
            <BankDetail name="A/c No." detail=" : 401705000081" />
            <BankDetail name="A/c Type" detail=" : CURRENT ACCOUNT" />
            <BankDetail name="Branch" detail=" : EAST PATEL NAGAR, DELHI-110008" />
            <BankDetail name="IFSC Code" detail=" : ICIC0004017" />
          </div>
        </div>
        <div className={Styles.paymentform}>
          <div className={Styles.paymentform__formArea}>
            <h5>Make Payment Vie Any Payemet Mode & Enter Transaction-ID Once Payemet is Done*</h5>
            <form onSubmit={submitHandler}>
              <p>Select Payment Mode</p>
              <div className={Styles.paymentform__formArea__paymentmode}>
                <input type="radio" id="bank" name="radioButton" onChange={onChangehandler}></input>
                <label htmlFor="bank">ICICI EasyPay</label>
                <input type="radio" id="branch" name="radioButton" onChange={onChangehandler}></input>
                <label htmlFor="branch">Deposit in Branch/Online Transfer</label>
              </div>
              <RegistationForm inputType="text" placeholder="Enter Transaction ID" id="transactionID" onChange={onChangehandler} />
              <p>Attached Payemet Receipt (Image/PDF)</p>
              <RegistationForm inputType="file" id="paymentReceipt" onChange={onChangehandler} />
              <CommonButton buttonText="SUBMIT" />
            </form>
          </div>
        </div>
      </Container>
    </>
  );
};
export default NextRegistrationPage;
