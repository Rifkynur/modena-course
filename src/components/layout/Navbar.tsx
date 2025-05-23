'use client'
import React,{useState} from 'react'
import Link from 'next/link'
import { IoMdMenu } from "react-icons/io";

const Navbar = () => {
  return (
    <div className='container mx-auto py-6'>
    <nav className='relative flex items-center justify-between'>
        <div>
            <div><img src="/Logo.png" alt="logo" /></div>
        </div>
        <IoMdMenu className='size-8'/>
        <ul className='font-semibold fixed bg-slate-50 h-screen top-0 bottom-0 left-0 w-[150px] shadow-md flex flex-col items-center pt-8 gap-6'>
            <li>
                <Link href={'/'}>Home</Link>
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