"use client";
import React from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

type OurCoursesCardProps = {
  id?: string;
  img: string;
  times: string;
  levels: string;
  teacher: string;
  title: string;
  description: string;
};

const OurCoursesCard = ({
  description,
  img,
  levels,
  teacher,
  times,
  title,
}: OurCoursesCardProps) => {
  const router = useRouter();
  const handleToCourses = () => {
    router.push("/courses");
  };
  return (
    <div className="p-6 rounded-lg bg-white flex flex-col gap-6 justify-between">
      <div className="rounded-lg h-[172px] md:h-[200px] lg:h-[300px] bg-slate-400">
        <img
          src={img}
          alt="img"
          className="w-full h-full object-cover rounded-lg"
        />
      </div>
      <div className="">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
          <div className="flex gap-2">
            <Badge variant={"outline"} className="bg-white">
              {times}
            </Badge>
            <Badge variant={"outline"} className="bg-white">
              {levels}
            </Badge>
          </div>
          <h4 className="font-medium my-4 md:my-0 ">By {teacher}</h4>
        </div>
        <h2 className="mb-3 text-lg font-semibold md:text-xl md:mt-6 lg:text-2xl">
          {title}
        </h2>
        <p className="text-sm md:text-base text-gray-600 lg:text-lg">
          {description}
        </p>
      </div>

      <Button
        className="bg-slate-200 text-black font-medium hover:bg-slate-400 md:text-lg "
        onClick={handleToCourses}
      >
        Get it Now
      </Button>
    </div>
  );
};

export default OurCoursesCard;
