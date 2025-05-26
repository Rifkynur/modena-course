import React from 'react'
import { Button } from '@/components/ui/button'

const TestimonialCard = () => {
  return (
    <div className='rounded-lg bg-white py-7'>
        <div className='border-b-2 px-7 pb-7'>
            <p className='text-slate-800'>The web design course provided a solid foundation for me. The instructors were knowledgeable and supportive, and the interactive learning environment was engaging. I highly recommend it!</p>
        </div>
        <div className='pt-7 px-7 flex items-center justify-between'>
            <div className='flex items-center gap-2'>
            <div className='size-[50px]'>
                <img src="/testimonial/Image.png" alt="person" className='object-cover size-full' />
            </div>
            <h3>Sarah L</h3>
            </div>
            <Button className='bg-slate-200 text-black font-medium hover:bg-slate-400'>Read Full Story</Button>
        </div>
    </div>
  )
}

export default TestimonialCard