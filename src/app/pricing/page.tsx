import React from "react";
import Hero from "@/components/page/pricing/Hero";
import Price from "@/components/page/pricing/Price";
import Faq from "@/components/page/home/Faq";

const page = () => {
  return (
    <div className="min-h-screen container">
      <Hero />
      <Price />
      <Faq />
    </div>
  );
};

export default page;
