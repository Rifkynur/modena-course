import React from "react";
import {
  FaEnvelope,
  FaPhone,
  FaFacebook,
  FaTwitter,
  FaLinkedin,
} from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="container py-[50px]">
      <div className=" flex flex-col gap-6 md:flex-row md:justify-between pb-8">
        <div className="flex flex-col gap-7 items-start lg:gap-10">
          <img src="/Logo.png" alt="logo" className="lg:size-[54px]" />
          <div>
            <ul className="flex flex-col gap-2 md:gap-[14px] lg:gap-5">
              <li className="flex items-center gap-2">
                <FaEnvelope className="lg:size-6" />{" "}
                <span className="lg:text-lg">hello@skillbridge.com</span>
              </li>
              <li className="flex items-center gap-2">
                <FaPhone className="lg:size-6" />{" "}
                <span className="lg:text-lg">+91 91813 23 2309</span>
              </li>
              <li className="flex items-center gap-2">
                <FaLocationDot className="lg:size-6" />{" "}
                <span className="lg:text-lg">Somewhere in the World</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex items-start gap-7 lg:gap-24">
          <div className="flex flex-col gap-3">
            <h2 className="font-semibold text-lg lg:text-xl">Home</h2>
            <ul className="text-[#59595A] text-sm flex flex-col gap-1 md:text-base md:gap-2">
              <li>Benefits</li>
              <li>Our Courses</li>
              <li>Our Testimonials</li>
              <li>Our FAQ</li>
            </ul>
          </div>
          <div className="flex flex-col gap-3">
            <h2 className="font-semibold text-lg lg:text-xl">About Us</h2>
            <ul className="text-[#59595A] text-sm flex flex-col gap-1 md:text-base md:gap-2">
              <li>Company</li>
              <li>Achievements</li>
              <li>Our Goals</li>
            </ul>
          </div>
        </div>
        <div>
          <h3 className="text-lg font-semibold">Social Profiles</h3>
          <div className="flex items-center gap-2 mt-3 md:gap-3 lg:mt-4">
            <div className="size-fit p-3 rounded-lg bg-gray-200">
              <FaFacebook className="size-5 text-slate-700 lg:size-6" />
            </div>
            <div className="size-fit p-3 rounded-lg bg-gray-200">
              <FaTwitter className="size-5 text-slate-700 lg:size-6" />
            </div>
            <div className="size-fit p-3 rounded-lg bg-gray-200">
              <FaLinkedin className="size-5 text-slate-700 lg:size-6" />
            </div>
          </div>
        </div>
      </div>
      <div className=" border-t border-gray-400 pt-6">
        <p className="text-center text-[#59595A] text-sm lg:text-lg">
          © 2023 Skillbridge. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
