import React from "react";

const Hero = () => {
  return (
    <div className="flex flex-col gap-4 md:flex-row md:gap-4 md:justify-between py-8 md:py-10 lg:py-20">
      <h1 className="text-slate-700 font-semibold text-3xl md:w-[400px] lg:w-[700px] lg:text-5xl">
        Online Courses on Design and Development
      </h1>
      <p className="text-[#59595A] text-sm md:max-w-[350px] lg:max-w-[600px] lg:text-lg">
        Welcome to our online course page, where you can enhance your skills in
        design and development. Choose from our carefully curated selection of
        10 courses designed to provide you with comprehensive knowledge and
        practical experience. Explore the courses below and find the perfect fit
        for your learning journey.
      </p>
    </div>
  );
};

export default Hero;
