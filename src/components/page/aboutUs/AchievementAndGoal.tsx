import React from "react";
import AboutCard from "./AboutCard";
import { achievementAndGoal } from "@/app/data/about-us";

const AchievementAndGoal = () => {
  return (
    <div className="py-10 md:py-14">
      <div className="flex flex-col gap-4 md:gap-8 lg:gap-[100px]">
        {achievementAndGoal.map((data) => {
          return (
            <AboutCard
              key={data.id}
              cards={data.card}
              desc={data.desc}
              title={data.title}
              id={data.id}
            />
          );
        })}
      </div>
    </div>
  );
};

export default AchievementAndGoal;
