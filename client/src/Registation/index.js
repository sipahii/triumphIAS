import React, { useState } from "react";
import Styles from "./index.module.scss";
import CommanBanner from "../component/CommanBanner";
import RegistationForm from "./registrationForm";
import Container from "../component/Container";
import RegistrationTittle from "./registrationFormTittle";
import RegistrationHeading from "./registrationHedding";
import TextArea from "./TextArea";
import RadioButton from "./radioButton";
import CommonButton from "./CommonButto";

const Registration = (props) => {
  const [userdata, setUserdata] = useState({});
  const [disabled, setDisabled] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    DOB: "",
    FatherName: "",
    Phone: "",
    FatherMobileNumber: "",
    courseName: "",
    ONLINE_OFFLINE: "",
    Street: "",
    City: "",
    State: "",
    PinCode: "",
    gender: "",
  });

  const onChangeHandler = (event) => {
    let fieldName = event.target.getAttribute("id");
    let fieldValue = event.target.value;

    const newFormData = { ...formData };

    newFormData[fieldName] = fieldValue;
    const isNotEmpty = newFormData.name !== "" && newFormData.email.includes("@") && newFormData.DOB !== "" && newFormData.FatherName !== "" && newFormData.Phone.length === 10 && newFormData.FatherMobileNumber.length === 10 && newFormData.courseName !== "" && newFormData.ONLINE_OFFLINE !== "" && newFormData.Street !== "" && newFormData.City !== "" && newFormData.State !== "" && newFormData.PinCode.length === 6 && newFormData.gender !== "";
    setFormData(newFormData);
    setDisabled(isNotEmpty);
  };

  const submitHandler = () => {
    let newData = {
      name: formData.name,
      email: formData.email,
      DOB: formData.DOB,
      FatherName: formData.FatherName,
      Phone: formData.Phone,
      FatherMobileNumber: formData.FatherMobileNumber,
      courseName: formData.courseName,
      ONLINE_OFFLINE: formData.ONLINE_OFFLINE,
      Street: formData.Street,
      City: formData.City,
      State: formData.State,
      PinCode: formData.PinCode,
      gender: formData.gender,
    };

    setUserdata(newData);
  };

  return (
    <>
      <CommanBanner section="Registration" />
      <Container>
        <RegistrationHeading />
        <RegistrationTittle titlleHead="Course Details" />
        <form>
          <div className={Styles.registrationSection}>
            <div className={Styles.registrationSection__regitrationFormArea}>
              <RegistationForm value={props.course} disabled="disabled" errClass={userdata.courseName === "" ? Styles.err : ""} id="courseName" labelText="Course Name" inputType="text" onChange={onChangeHandler} />
            </div>
            <div className={Styles.registrationSection__regitrationFormArea}>
              <RegistationForm errClass={userdata.ONLINE_OFFLINE === "" ? Styles.err : ""} id="ONLINE_OFFLINE" labelText="ONLINE/OFFLINE" inputType="text" onChange={onChangeHandler} />
            </div>
          </div>
          <RegistrationTittle titlleHead="Registration Details" />
          <div className={Styles.registrationSection}>
            <div className={Styles.registrationSection__regitrationFormArea}>
              <RegistationForm errClass={userdata.name === "" ? Styles.err : ""} id="name" labelText="Name" inputType="text" onChange={onChangeHandler} errorMessage={userdata.name == "" ? "message" : ""} />
              <RegistationForm errClass={userdata.email === "" ? Styles.err : ""} id="email" labelText="Email-ID" inputType="email" onChange={onChangeHandler} />
              <RegistationForm errClass={userdata.FatherName === "" ? Styles.err : ""} id="FatherName" labelText="Father Name" inputType="text" onChange={onChangeHandler} />
              <RadioButton id="gender" errClass={userdata.gender === "" ? Styles.err : ""} onChange={onChangeHandler} />
            </div>
            <div className={Styles.registrationSection__regitrationFormArea}>
              <RegistationForm errClass={userdata.Phone === "" ? Styles.err : ""} id="Phone" labelText="Phone" inputType="number" onChange={onChangeHandler} />
              <RegistationForm errClass={userdata.DOB === "" ? Styles.err : ""} id="DOB" labelText="DOB" inputType="date" onChange={onChangeHandler} />
              <RegistationForm errClass={userdata.FatherMobileNumber === "" ? Styles.err : ""} id="FatherMobileNumber" labelText="Father Mobile Number" inputType="number" onChange={onChangeHandler} />
            </div>
          </div>
          <RegistrationTittle titlleHead="Address Details" />
          <div className={Styles.registrationSection}>
            <div className={Styles.registrationSection__regitrationFormArea}>
              <RegistationForm errClass={userdata.Street === "" ? Styles.err : ""} id="Street" labelText="Street" inputType="text" onChange={onChangeHandler} />
              <RegistationForm errClass={userdata.City === "" ? Styles.err : ""} id="City" labelText="City" inputType="text" onChange={onChangeHandler} />
            </div>
            <div className={Styles.registrationSection__regitrationFormArea}>
              <RegistationForm errClass={userdata.State === "" ? Styles.err : ""} id="State" labelText="State" inputType="text" onChange={onChangeHandler} />
              <RegistationForm errClass={userdata.PinCode === "" ? Styles.err : ""} id="PinCode" labelText="Pin Code" inputType="text" onChange={onChangeHandler} />
            </div>
          </div>
          <RegistrationTittle titlleHead="Upload Documents" />
          <div className={Styles.registrationSection}>
            <div className={Styles.registrationSection__regitrationFormArea}>
              <RegistationForm id="Image (Max-size: 300kb)jpeg " labelText="Image (Max-size: 300kb)jpeg" inputType="file" />
            </div>
            <div className={Styles.registrationSection__regitrationFormArea}>
              <RegistationForm id="ID Card (Aadhar Card / VoteroId / Passport) (Max-size: 300kb) jpeg " labelText="ID Card (Aadhar Card / VoteroId / Passport) (Max-size: 300kb) jpeg" inputType="file" />
            </div>
          </div>
          <RegistrationTittle titlleHead="Additional Information Details" />
          <TextArea lable="Additional Information" labelText="Additional Information" />
          <CommonButton onClick={submitHandler} buttonText="Next" />
        </form>
      </Container>
    </>
  );
};
export default Registration;
