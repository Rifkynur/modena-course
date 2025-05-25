import React from 'react'
import { GoArrowUpRight } from "react-icons/go";

type BenefitsCardProps = {
        id:string,
        title:string,
        description:string
}

const BenefitsCard = ({description,id,title}:BenefitsCardProps) => {
  return (
    <div className='w-full rounded-lg bg-white p-7 flex flex-col gap-8 justify-between'>
        <h2 className='text-end text-[50px] font-bold md:text-6xl lg:text-[80px]'>{id}</h2>
        <div className='flex flex-col gap-3'>
          <h3 className='font-semibold text-xl lg:text-2xl'>{title}</h3>
          <p className='text-sm md:text-base lg:text-lg'>{description}</p>
        </div>
        <div className='p-3 rounded-lg bg-[#F1F1F3] w-fit ms-auto cursor-pointer group transition-all duration-300 hover:bg-orange-400'>
        <GoArrowUpRight className='text-orange-400 size-7 group-hover:text-white lg:size-[34px]'/>
        </div>
    </div>
  )
}

export default BenefitsCard