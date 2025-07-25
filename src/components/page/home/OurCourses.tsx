import React from 'react'
import { Button } from '@/components/ui/button'
import OurCoursesCard from './OurCoursesCard'
import { ourCourses } from '@/app/data/home'

const OurCourses = () => {
  return (
    <section className='py-8 md:py-10 lg:py-20'>
         <div className='flex flex-col gap-4 items-start md:flex-row md:items-end md:justify-between'>
                <div className='flex flex-col gap-2 lg:gap-4'>
                    <h2 className='font-bold text-3xl lg:text-5xl'>Our Courses</h2>
                    <p className='text-sm max-w-[833px] md:text-base lg:text-lg'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum eius inventore eligendi suscipit optio maxime debitis tempore officiis sequi earum!</p>
                </div>
                <Button className='bg-white text-black hover:bg-slate-100 md:text-lg'>View All</Button>
            </div>
            <div className='mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
              {ourCourses.map((data) => (
                <OurCoursesCard key={data.id} description={data.description} img={data.img} levels={data.levels} teacher={data.teacher} times={data.times} title={data.title} />
              ))}
            </div>
    </section>
  )
}

export default OurCourses