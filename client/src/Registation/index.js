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
import ScrollToTop from "../component/ScrollToTop";
import UploadField from "../widget/UploadField";

const Registration = (props) => {
  const { course, price, onlineOffline } = props;
  const [userdata, setUserdata] = useState({});
  const [idImages, setIdImages] = useState();
  const [genderErr, setGenderErr] = useState(false);
  const [userImages, setUserImages] = useState();
  const [userImgErr, setUserImgErr] = useState();
  const [idImgErr, setIdImgErr] = useState();
  const [disabled, setDisabled] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    DOB: "",
    FatherName: "",
    Phone: "",
    FatherMobileNumber: "",
    courseName: "",
    price: "",
    ONLINE_OFFLINE: "",
    Street: "",
    City: "",
    State: "",
    PinCode: "",
    gender: "",
    additionalInfo: "",
  });

  const onChangeHandler = (event) => {
    console.log(event);
    let fieldName = event.target.getAttribute("id");
    let fieldValue = event.target.value;

    const newFormData = { ...formData };

    newFormData[fieldName] = fieldValue;

    const isNotEmpty = newFormData.name !== "" && newFormData.email.includes("@") && newFormData.DOB !== "" && newFormData.FatherName !== "" && newFormData.Phone.length === 10 && newFormData.FatherMobileNumber.length === 10 && newFormData.Street !== "" && newFormData.City !== "" && newFormData.State !== "" && newFormData.PinCode.length === 6 && newFormData.gender !== "" && idImages !== undefined && userImages !== undefined;
    debugger;
    setFormData(newFormData);
    setDisabled(isNotEmpty);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    setUserImgErr(userImages === undefined ? Styles.err : "");
    setIdImgErr(idImages === undefined ? Styles.err : "");
    setGenderErr(formData.gender === "");

    let newData = {
      name: formData.name,
      email: formData.email,
      DOB: formData.DOB,
      price: price,
      FatherName: formData.FatherName,
      Phone: formData.Phone,
      FatherMobileNumber: formData.FatherMobileNumber,
      courseName: course,
      ONLINE_OFFLINE: onlineOffline,
      Street: formData.Street,
      City: formData.City,
      State: formData.State,
      PinCode: formData.PinCode,
      gender: formData.gender,
      userImg: userImages,
      idImg: idImages,
      additionalInfo: formData.additionalInfo,
    };
    // debugger;
    setUserdata(newData);
  };

  const onUserImgHandler = (e) => {
    let image = URL.createObjectURL(e.target.files[0]);
    setUserImages(image);
  };

  const onIdImgHandler = (e) => {
    let image = URL.createObjectURL(e.target.files[0]);
    setIdImages(image);
  };

  return (
    <>
      <ScrollToTop />
      <CommanBanner section="Registration" />
      <Container>
        <RegistrationHeading hedding="FIRST FILL ADMISSION FORM THEN PROCEED NEXT" />
        <RegistrationTittle titlleHead="Course Details" />
        <form onSubmit={submitHandler}>
          <div className={Styles.registrationSection}>
            <div className={Styles.registrationSection__regitrationFormArea}>
              <RegistationForm value={course} disabled="disabled" id="courseName" labelText="Course Name" inputType="text" onChange={onChangeHandler} />
            </div>
            <div className={Styles.registrationSection__regitrationFormArea}>
              <RegistationForm value={price} disabled="disabled" id="price" labelText="Course Price" inputType="text" onChange={onChangeHandler} />
            </div>
            <div className={Styles.registrationSection__regitrationFormArea}>
              <RegistationForm value={onlineOffline} disabled="disabled" id="ONLINE_OFFLINE" labelText="ONLINE/OFFLINE" inputType="text" onChange={onChangeHandler} />
            </div>
          </div>
          <RegistrationTittle titlleHead="Registration Details" />
          <div className={Styles.registrationSection}>
            <div className={Styles.registrationSection__regitrationFormArea}>
              <RegistationForm errClass={userdata.name === "" ? Styles.err : ""} id="name" labelText="Name" inputType="text" onChange={onChangeHandler} errorMessage={userdata.name === "" ? "message" : ""} />
              <RegistationForm errClass={userdata.email === "" ? Styles.err : ""} id="email" labelText="Email-ID" inputType="email" onChange={onChangeHandler} />
              <RegistationForm errClass={userdata.FatherName === "" ? Styles.err : ""} id="FatherName" labelText="Father Name" inputType="text" onChange={onChangeHandler} />
              <RadioButton formData={formData} genderErr={genderErr} id="gender" errClass={userdata.gender === "" ? Styles.err : ""} onChange={onChangeHandler} />
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
              <UploadField id="userImg" errClass={userImgErr} labelText="Image (Max-size: 300kb)jpeg" onChange={onUserImgHandler} />
            </div>
            <div className={Styles.registrationSection__regitrationFormArea}>
              <UploadField id="idImg" errClass={idImgErr} labelText="ID Card (Aadhar Card / VoteroId / Passport) (Max-size: 300kb) jpeg" onChange={onIdImgHandler} />
            </div>
          </div>
          <RegistrationTittle titlleHead="Additional Information Details" />
          <TextArea onChange={onChangeHandler} lable="Additional Information" labelText="Additional Information" />
          <CommonButton disabled={!disabled ? "disabled" : ""} onClick={submitHandler} buttonText="Next" />
        </form>
      </Container>
    </>
  );
};
export default Registration;
