import React from "react";
import { Button } from "@/components/ui/button";
const Cta = () => {
  return (
    <div className="p-7 my-12 bg-white rounded-lg flex flex-col gap-10 items-start md:flex-row md:items-center md:justify-between lg:p-14 lg:my-16">
      <div className="max-w-[757px]">
        <h2 className="font-semibold text-3xl mb-2 lg:text-4xl lg:mb-4">
          <span className="text-orange-400">Together</span>, let's shape the
          future of digital innovation
        </h2>
        <p className="text-sm text-gray-700 lg:text-base">
          Join us on this exciting learning journey and unlock your potential in
          design and development.
        </p>
      </div>
      <Button className="bg-orange-400 hover:bg-orange-500">Join Now</Button>
    </div>
  );
};

export default Cta;
