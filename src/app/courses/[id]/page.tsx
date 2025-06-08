import React from "react";
import Hero from "@/components/page/coursers/detailCourses/Hero";
import CoursesStep from "@/components/page/coursers/detailCourses/CoursesStep";

const page = () => {
  return (
    <div className="container min-h-screen">
      <Hero />
      <CoursesStep />
    </div>
  );
};

export default page;
