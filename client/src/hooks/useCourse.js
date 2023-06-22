import { useState } from "react";
// import { useNavigate } from "react-router-dom";

const useCourse = (corPrice, type) => {
  // const navigate = useNavigate();
  const [coursePrice, setCoursePrice] = useState(corPrice);
  const [enroll, setEnroll] = useState(false);
  const [courseName, setCourseName] = useState();
  const [courseType, setCourseType] = useState(type);
  const onRegistrationHandler = (course, price) => {
    setEnroll(true);
    // navigate("/registration");
    setCourseName(course);
    setCoursePrice(price);
  };
  const onCourseHandler = (price, courseType) => {
    setCoursePrice(price);
    setCourseType(courseType);
  };

  return {
    onRegistrationHandler,
    onCourseHandler,
    courseName,
    coursePrice,
    enroll,
    courseType,
  };
};

export default useCourse;
