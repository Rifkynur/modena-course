import React from "react";

const Hero = () => {
  return (
    <>
      <div className="flex flex-col gap-4 md:flex-row md:gap-4 md:justify-between py-8 md:py-10 lg:py-20">
        <h1 className="text-slate-700 font-semibold text-3xl md:w-[400px] lg:w-[700px] lg:text-5xl">
          UI/UX Design Course
        </h1>
        <p className="text-[#59595A] text-sm md:max-w-[350px] lg:max-w-[600px] lg:text-lg">
          Welcome to our UI/UX Design course! This comprehensive program will
          equip you with the knowledge and skills to create exceptional user
          interfaces (UI) and enhance user experiences (UX). Dive into the world
          of design thinking, wireframing, prototyping, and usability testing.
          Below is an overview of the curriculum
        </p>
      </div>
      <div>
        <img src="/detailCourses/container.png" alt="" />
      </div>
    </>
  );
};

export default Hero;
