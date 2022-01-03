import React from "react";
import CourseSlider from "../CourseSlider/CourseSlider";
import PopularCourse from "../PopularCourse/PopularCourse";

const Home = () => {
  return <div>
    <h1>Home</h1>
    <PopularCourse/>
    <CourseSlider/>
  </div>;
};

export default Home;
