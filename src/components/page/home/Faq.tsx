import React from "react";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { FaArrowRightLong } from "react-icons/fa6";
import { faq } from "@/app/data/home";

const Faq = () => {
  return (
    <section className="py-8 flex flex-col gap-4 items-start bg-white rounded-lg p-6 md:py-10 lg:py-20 md:justify-between lg:p-16 lg:flex-row ">
      <div className="flex flex-col gap-4 items-start max-w-[420px]">
        <div className="flex flex-col gap-2 lg:gap-4">
          <h2 className="font-bold text-3xl lg:text-5xl">
            Frequently Asked Questions
          </h2>
          <p className="text-sm max-w-[833px] md:text-base md:max-w-[500px] lg:text-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
            eius inventore eligendi suscipit optio maxime debitis tempore
            officiis sequi earum!
          </p>
        </div>
        <Button className="bg-white text-black hover:bg-slate-100 md:text-lg">
          See All FAQ&apos;s
        </Button>
      </div>
      <div className="mt-10 p-4 flex flex-col gap-4 md:gap-8 w-full md:flex-1 md:max-w-[800px] md:p-8">
        {faq.map((data) => {
          return (
            <Accordion type="single" collapsible key={data.id}>
              <AccordionItem value="item-1">
                <AccordionTrigger className="md:text-xl">
                  {data.title}
                </AccordionTrigger>
                <AccordionContent className="md:text-xl">
                  <p>{data.description}</p>
                  <div className="flex mt-3 items-center bg-gray-100 p-3 justify-between md:mt-8">
                    <p className="text-start">
                      Enrollment Process for Different Courses
                    </p>
                    <div className="size-fit p-2 bg-white rounded-full cursor-pointer">
                      <FaArrowRightLong />
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          );
        })}
      </div>
    </section>
  );
};

export default Faq;
