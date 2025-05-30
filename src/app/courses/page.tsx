import React from "react";
import Hero from "@/components/page/coursers/Hero";
import Courses from "@/components/page/coursers/Courses";

const page = () => {
  return (
    <div className="container min-h-screen">
      <Hero />
      <Courses />
    </div>
  );
};

export default page;
