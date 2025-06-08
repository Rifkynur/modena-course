import React from "react";
import { Badge } from "@/components/ui/badge";
import { CiClock2 } from "react-icons/ci";

type step = {
  id?: number;
  title: string;
  desc: string;
  time: string;
};
type CoursesStepCardProps = {
  id: string;
  title: string;
  steps: step[];
};

const CoursesStepCard = ({ id, steps, title }: CoursesStepCardProps) => {
  return (
    <div className="rounded-lg bg-white p-7 flex flex-col gap-7 lg:gap-10">
      <h1 className="text-5xl font-bold text-end lg:text-6xl">{id}</h1>
      <h2 className="text-lg font-semibold lg:text-xl">{title}</h2>
      <div className="flex flex-col gap-4">
        {steps.map((data) => {
          return (
            <div
              className="p-5 rounded-lg border flex flex-col gap-6 items-start lg:flex-row lg:items-center lg:justify-between"
              key={data.id}
            >
              <div>
                <p className="font-medium">{data.title}</p>
                <p className="text-gray-500 text-sm">{data.desc}</p>
              </div>
              <Badge className="">
                <CiClock2 className="me-1" /> {data.time}
              </Badge>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CoursesStepCard;
