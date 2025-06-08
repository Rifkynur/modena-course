import React from "react";

const Hero = () => {
  return (
    <div className="flex flex-col gap-4 md:gap-4 py-8 md:py-10 lg:py-20">
      <h1 className="text-slate-700 font-semibold text-3xl md:w-[400px] lg:w-[700px] lg:text-5xl">
        About Modena Course
      </h1>
      <p className="text-[#59595A] text-sm md:max-w-[350px] lg:max-w-[800px] lg:text-lg">
        Welcome to our platform, where we are passionate about empowering
        individuals to master the world of design and development. We offer a
        wide range of online courses designed to equip learners with the skills
        and knowledge needed to succeed in the ever-evolving digital landscape.
      </p>
    </div>
  );
};

export default Hero;
