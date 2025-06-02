import React from "react";
import Hero from "@/components/page/aboutUs/Hero";
import AchievementAndGoal from "@/components/page/aboutUs/AchievementAndGoal";
import Cta from "@/components/page/aboutUs/Cta";

const page = () => {
  return (
    <div className="container min-h-screen">
      <Hero />
      <AchievementAndGoal />
      <Cta />
    </div>
  );
};

export default page;
