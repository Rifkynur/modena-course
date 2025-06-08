import React from "react";
import CoursesStepCard from "./CoursesStepCard";
import { coursesStep } from "@/app/data/courses";

const CoursesStep = () => {
  return (
    <div className="py-8 md:py-10 lg:py-20 grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-8">
      {coursesStep.map((data) => (
        <CoursesStepCard
          id={data.id}
          steps={data.steps}
          title={data.title}
          key={data.id}
        />
      ))}
    </div>
  );
};

export default CoursesStep;
