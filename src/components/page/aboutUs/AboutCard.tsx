import React from "react";
import { IconType } from "react-icons";

type card = {
  id?: number;
  title: string;
  desc: string;
  icon: IconType;
};
type AboutCardProps = {
  id?: number;
  title: string;
  desc: string;
  cards: card[];
};

const AboutCard = ({ id, title, desc, cards }: AboutCardProps) => {
  return (
    <div>
      <div className="mb-12">
        <h2 className="text-2xl font-medium lg:text-3xl">{title}</h2>
        <p className="text-sm text-gray-700 mt-2 lg:text-base">{desc}</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-8">
        {cards.map((data) => {
          const Icon = data.icon;

          return (
            <div
              key={data.id}
              className="p-7 rounded-lg bg-white flex flex-col gap-6"
            >
              <div className="p-3 rounded-md size-fit bg-orange-100 lg:p-4">
                <Icon className="size-7 text-orange-400 lg:size-[34px]" />
              </div>
              <div>
                <h4 className="text-lg font-medium lg:text-2xl">
                  {data.title}
                </h4>
                <p className="text-gray-700 text-sm mt-2 lg:text-lg lg:mt-3">
                  {data.desc}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AboutCard;
