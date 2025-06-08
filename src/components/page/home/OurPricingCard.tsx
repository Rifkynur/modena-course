import React from "react";
import { Button } from "@/components/ui/button";
import { FaCheck, FaTimes } from "react-icons/fa";

type features = {
  id: number;
  available: boolean;
  detailFeature: string;
};
type OurPricingCardProps = {
  id?: number;
  plan: string;
  price: string;
  features: features[];
};

const OurPricingCard = ({ features, plan, price, id }: OurPricingCardProps) => {
  return (
    <div className="bg-[#F7F7F8] px-5 py-7 rounded-lg flex flex-col gap-7">
      <div className="bg-orange-100 p-3 rounded-md">
        <p className="text-center font-medium md:text-lg ">{plan}</p>
      </div>
      <h2 className="text-center text-5xl font-bold md:text-6xl lg:text-[80px]">
        ${price}
        <span className="text-sm font-medium md:text-base">/month</span>
      </h2>
      <div className="p-5 rouned-md bg-white rounded-md lg:p-6">
        <h4 className="text-center text-lg font-medium">Available Features</h4>
        {features.map((data, index) =>
          data.available ? (
            <div
              key={index}
              className="flex items-start gap-2 mt-5 p-3 rounded-md border border-gray-200 lg:items-center"
            >
              <div className="bg-red-100 w-fit p-2 rounded-md">
                <FaCheck />
              </div>
              <p className="text-sm text-slate-500 lg:text-lg">
                {data.detailFeature}
              </p>
            </div>
          ) : (
            <div
              className="flex items-start gap-2 mt-5 p-3 rounded-md border border-gray-200 lg:items-center"
              key={data.id}
            >
              <div className="w-fit p-2 rounded-md border">
                <FaTimes />
              </div>
              <p className="text-sm text-slate-500 lg:text-lg">
                {data.detailFeature}
              </p>
            </div>
          )
        )}
      </div>
      <Button className="bg-orange-400 hover:bg-orange-500 lg:text-lg">
        Get Started
      </Button>
    </div>
  );
};

export default OurPricingCard;
