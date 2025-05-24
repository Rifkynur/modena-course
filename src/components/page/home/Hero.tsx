import React from 'react'
import { Button } from '@/components/ui/button'

const Hero = () => {
  return (
    <div className='flex flex-col items-center justify-center py-12 gap-4 md:py-16 lg:gap-5'>
        <div className='bg-white p-4 rounded-lg flex items-center gap-3 relative lg:px-5'>
          <img src="/AbstractLine.png" alt="line" className='absolute top-[-25px] left-[-20px]' />
            <img src="/IconContainer.png" alt="icon" className='size-12'/>
            <h1 className='font-semibold text-base md:text-4xl lg:text-5xl'><span className='text-orange-400'>Unlock</span> Your Creative Potential</h1>
        </div>
        <div className='text-center'>
            <h2 className='font-medium text-2xl md:text-3xl lg:text-4xl'>with Online Design and Development Courses.</h2>
            <p className='text-sm mt-2 md:text-base lg:text-lg'>Learn from Industry Experts and Enhance Your Skills.</p>
        </div>
        <div className='flex items-center gap-2 mt-5 md:mt-10'>
          <Button className='bg-orange-400 hover:bg-orange-600 md:px-5 md:text-xl'>Explore Courses</Button>
          <Button className='bg-white text-black hover:bg-orange-400 hover:text-white md:text-xl'>View Pricing</Button>
        </div>
    </div>
  )
}

export default Hero