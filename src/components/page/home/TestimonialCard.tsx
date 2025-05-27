import React from 'react'
import { Button } from '@/components/ui/button'

type TestimonialCardProps = {
   id?:string,
    img:string,
    name:string,
    testi : string
}
const TestimonialCard = ({id,img,name,testi}:TestimonialCardProps) => {
  return (
    <div className='rounded-lg bg-white pt-7 lg:pt-14'>
        <div className='border-b-2 px-7 pb-7 lg:px-14 lg:pb-14'>
            <p className='text-slate-800 lg:text-lg'>{testi}</p>
        </div>
        <div className='py-7 px-7 flex items-center justify-between rounded-b-lg bg-gray-50 lg:py-8 lg:px-8'>
            <div className='flex items-center gap-2'>
            <div className='size-[50px] lg:size-16'>
                <img src={img} alt="person" className='object-cover size-full' />
            </div>
            <h3 className='font-bold lg:text-lg'>{name}</h3>
            </div>
            <Button className='bg-slate-200 text-black font-medium hover:bg-slate-400 lg:text-lg'>Read Full Story</Button>
        </div>
    </div>
  )
}

export default TestimonialCard