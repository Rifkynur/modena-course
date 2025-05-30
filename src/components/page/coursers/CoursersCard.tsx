import React from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

type step = {
  id?: number;
  number: string;
  desc: string;
};

type img = {
  id?: number;
  src: string;
};

type CoursesProps = {
  id?: number;
  title: string;
  teacher: string;
  desc: string;
  imgs: img[];
  time: string;
  level: string;
  steps: step[];
};

const CoursersCard = ({
  id,
  title,
  desc,
  imgs,
  level,
  steps,
  time,
  teacher,
}: CoursesProps) => {
  return (
    <div className="p-6 bg-white rounded-lg flex flex-col gap-4 md:gap-7">
      <div className="flex flex-col items-start gap-5 md:flex-row md:items-end md:justify-between">
        <div>
          <h2 className="font-semibold text-lg md:text-xl md:mb-3 lg:text-2xl">
            {title}
          </h2>
          <p className="text-[#59595A] text-sm lg:text-lg max-w-[1000px]">
            {desc}
          </p>
        </div>
        <Button className="bg-gray-50 border text-black font-medium hover:bg-slate-200 lg:text-lg">
          View Course
        </Button>
      </div>
      <div className="flex items-center gap-2 justify-center">
        {imgs.map((data) => (
          <img
            key={data.id}
            src={data.src}
            alt="img course"
            className="w-[30%] h-[100px] object-cover rounded-lg md:h-[200px] lg:h-[326px]"
          />
        ))}
      </div>
      <div className="flex flex-col gap-2 md:flex-row md:justify-between ">
        <div className="flex items-center gap-2">
          <Badge className="bg-white text-[#59595A] lg:text-lg">{time}</Badge>
          <Badge className="bg-white text-[#59595A] lg:text-lg">{level}</Badge>
        </div>
        <p className="text-sm font-semibold lg:text-xl">By {teacher}</p>
      </div>
      <div className="lg:mt-10">
        <div className="p-3 border border-[#E4E4E7] rounded-t-lg lg:px-[30px] lg:py-6">
          <h2 className="text-lg font-semibold lg:text-xl">Curriculum</h2>
        </div>
        <div className="p-3 border border-[#E4E4E7] rounded-b-lg flex flex-col md:flex-row md:justify-between">
          {steps.map((data) => {
            return (
              <div className="p-5 lg:p-8" key={data.id}>
                <h3 className="font-extrabold text-3xl lg:text-5xl">
                  {data.number}
                </h3>
                <p className="text-sm lg:text-lg lg:mt-5 max-w-[200px]">
                  {data.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default CoursersCard;
