'use client'
import React,{useState} from 'react'
import Link from 'next/link'
import { HiMenuAlt3 } from "react-icons/hi";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { usePathname } from 'next/navigation';
import { FaArrowRight } from "react-icons/fa6";

const Navbar = () => {
  const [navbarIsOpen,setNavbarIsOpen] = useState(false)
  const pathname = usePathname()
  return (
    <div className='container mx-auto py-6'>
      <div className='w-full flex items-center justify-center gap-2 mb-4 text-sm text-white font-medium bg-orange-400 rounded-lg py-2'>
        <p>Free Courses 🌟 Sale Ends Soon, Get It Now</p> 
        <FaArrowRight className=''/>
      </div>
    <nav className='relative flex items-center justify-between'>
        <div>
            <div><img src="/Logo.png" alt="logo" /></div>
        </div>
        <HiMenuAlt3 className='size-8 md:hidden' onClick={()=>setNavbarIsOpen(true)}/>
        <ul className={`font-semibold fixed ${navbarIsOpen ? 'left-0' : 'left-[-100%]'} bg-slate-50 h-screen top-0 bottom-0 w-[150px] shadow-md flex flex-col items-center pt-8 gap-6 duration-300 transition-all md:static md:bg-transparent md:h-fit md:flex-row md:w-fit md:shadow-none md:text-lg`}>
            <li className='w-full px-4 md:hidden' >
            <IoIosCloseCircleOutline className='ms-auto size-6' onClick={()=>setNavbarIsOpen(false)}/>
            </li>
            <li>
                <Link href={'/'} className={`${pathname == '/' ? "text-orange-400" :""}`}>Home</Link>
            </li>
              <li>
                <Link href={'/'}>Courses</Link>
            </li>
              <li>
                <Link href={'/'}>About us</Link>
            </li>
              <li>
                <Link href={'/'}>Pricing</Link>
            </li>
              <li>
                <Link href={'/'}>Contact</Link>
            </li>
        </ul>
    </nav>
    </div>
  )
}

export default Navbar