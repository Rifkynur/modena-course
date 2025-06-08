import React from "react";

const Hero = () => {
  return (
    <div className="flex flex-col gap-4 md:gap-4 py-8 md:py-10 lg:py-20">
      <h1 className="text-slate-700 font-semibold text-3xl md:w-[400px] lg:w-[700px] lg:text-5xl">
        Our Pricings
      </h1>
      <p className="text-[#59595A] text-sm md:max-w-[350px] lg:max-w-[800px] lg:text-lg">
        Welcome to SkillBridge's Pricing Plan page, where we offer two
        comprehensive options to cater to your needs: Free and Pro. We believe
        in providing flexible and affordable pricing options for our services.
        Whether you're an individual looking to enhance your skills or a
        business seeking professional development solutions, we have a plan that
        suits you. Explore our pricing options below and choose the one that
        best fits your requirements.
      </p>
    </div>
  );
};

export default Hero;
