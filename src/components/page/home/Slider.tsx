'use client'
import {useEffect} from 'react'
import InfiniteMarquee from 'vanilla-infinite-marquee';
import { slider } from '@/app/data/home';
import Marquee from "react-fast-marquee";

const Slider = () => { 
  const sliders = [...slider,...slider]
  return (
    <div className='bg-white p-3 rounded-lg shadow-lg lg:p-5'>
    <Marquee pauseOnHover={true} gradient={true} gradientColor='white' >
      <div className='flex items-center gap-12' >
       {sliders.map((data,index)=>{
         return <div key={index} className='h-[34px]' >
          <img src={data.img} alt="logo" className='objexct' />
        </div>
       })}
       </div>
    </Marquee>
    </div>
  )
}

export default Slider