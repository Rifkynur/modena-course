import React from "react";
import { FaEnvelope, FaPhone } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="container py-[50px] flex flex-col gap-4">
      <div className="flex flex-col gap-2 items-start">
        <img src="/Logo.png" alt="logo" />
        <div>
          <ul className="flex flex-col gap-2">
            <li className="flex items-center gap-2">
              <FaEnvelope /> <span>hello@skillbridge.com</span>
            </li>
            <li className="flex items-center gap-2">
              <FaPhone /> <span>+91 91813 23 2309</span>
            </li>
            <li className="flex items-center gap-2">
              <FaLocationDot /> <span>Somewhere in the World</span>
            </li>
          </ul>
        </div>
      </div>
      <div>
        <div className="flex flex-col gap-3">
          <h2 className="font-bold text-lg">Home</h2>
          <ul className="text-[#59595A] text-sm flex flex-col gap-1">
            <li>Benefits</li>
            <li>Our Courses</li>
            <li>Our Testimonials</li>
            <li>Our FAQ</li>
          </ul>
        </div>
      </div>
      <div>
        <h3>Social Profiles</h3>
      </div>
    </div>
  );
};

export default Footer;
