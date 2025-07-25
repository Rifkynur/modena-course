"use client";
import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { HiMenuAlt3 } from "react-icons/hi";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { usePathname } from "next/navigation";
import { FaArrowRight } from "react-icons/fa6";

const Navbar = () => {
  const [navbarIsOpen, setNavbarIsOpen] = useState(false);
  const pathname = usePathname();
  const navRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setNavbarIsOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);
  return (
    <div className="container mx-auto py-6">
      <div className="w-full flex items-center justify-center gap-2 mb-4 text-sm text-white font-medium bg-orange-400 rounded-lg py-2 lg:py-3">
        <p>Free Courses 🌟 Sale Ends Soon, Get It Now</p>
        <FaArrowRight className="" />
      </div>
      <nav className="relative flex items-center justify-between" ref={navRef}>
        <div>
          <div>
            <img src="/Logo.png" alt="logo" />
          </div>
        </div>
        <HiMenuAlt3
          className="size-8 md:hidden"
          onClick={() => setNavbarIsOpen(true)}
        />
        <ul
          className={`font-semibold fixed z-[100] ${
            navbarIsOpen ? "left-0" : "left-[-100%]"
          } bg-slate-50 h-screen top-0 bottom-0 w-[150px] shadow-md flex flex-col items-center pt-8 gap-6 duration-300 transition-all md:static md:bg-transparent md:h-fit md:flex-row md:w-fit md:shadow-none md:text-lg md:justify-center`}
        >
          <li className="w-full px-4 md:hidden">
            <IoIosCloseCircleOutline
              className="ms-auto size-6"
              onClick={() => setNavbarIsOpen(false)}
            />
          </li>
          <li>
            <Link
              href={"/"}
              className={`${pathname == "/" ? "text-orange-400" : ""}`}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href={"/courses"}
              className={`${pathname == "/courses" ? "text-orange-400" : ""}`}
            >
              Courses
            </Link>
          </li>
          <li>
            <Link
              href={"/about-us"}
              className={`${pathname == "/about-us" ? "text-orange-400" : ""}`}
            >
              About Us
            </Link>
          </li>
          <li>
            <Link
              href={"/pricing"}
              className={`${pathname == "/pricing" ? "text-orange-400" : ""}`}
            >
              Pricing
            </Link>
          </li>
          <li>
            <Link href={"/"}>Contact</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
