import React from "react";
import { Button } from "@/components/ui/button";
import { ourPrice } from "@/app/data/home";
import OurPricingCard from "../home/OurPricingCard";

const Price = () => {
  return (
    <section className="py-8 md:py-10 lg:py-20">
      <div className="flex flex-col gap-4 items-start md:flex-row md:items-end md:justify-between">
        <div className="flex flex-col gap-2 lg:gap-4">
          <h2 className="font-bold text-3xl lg:text-5xl">Our Pricing</h2>
          <p className="text-sm max-w-[833px] md:text-base lg:text-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
            eius inventore eligendi suscipit optio maxime debitis tempore
            officiis sequi earum!
          </p>
        </div>
      </div>
      <div className="mt-10 bg-white shadow-md p-5 w-full rounded-lg grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-8">
        {ourPrice.map((data) => (
          <OurPricingCard
            key={data.id}
            features={data.features}
            plan={data.plan}
            price={data.price}
          />
        ))}
      </div>
    </section>
  );
};

export default Price;
