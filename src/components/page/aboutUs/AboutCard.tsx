import React from "react";
import { FaCrown } from "react-icons/fa";

const AboutCard = () => {
  return (
    <div>
      <div className="mb-12">
        <h2 className="text-2xl font-medium">Achievements</h2>
        <p className="text-sm text-gray-700 mt-2">
          Our commitment to excellence has led us to achieve significant
          milestones along our journey. Here are some of our notable
          achievements
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div className="p-7 rounded-lg bg-white flex flex-col gap-6">
          <div className="p-3 rounded-md size-fit bg-orange-100">
            <FaCrown className="size-7 text-orange-400" />
          </div>
          <div>
            <h4 className="text-lg font-medium">Trusted by Thousands</h4>
            <p className="text-gray-700 text-sm mt-2">
              We have successfully served thousands of students, helping them
              unlock their potential and achieve their career goals.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutCard;
