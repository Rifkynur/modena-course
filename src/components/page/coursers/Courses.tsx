import React from "react";
import CoursersCard from "./CoursersCard";
import { courses } from "@/app/data/courses";

const Courses = () => {
  return (
    <div className="py-8 md:py-10 lg:py-20">
      <div className="flex flex-col gap-5 md:gap-10">
        {courses.map((data) => (
          <CoursersCard
            key={data.id}
            desc={data.desc}
            imgs={data.img}
            level={data.level}
            teacher={data.teacher}
            steps={data.steps}
            time={data.time}
            title={data.title}
          />
        ))}
      </div>
    </div>
  );
};

export default Courses;
