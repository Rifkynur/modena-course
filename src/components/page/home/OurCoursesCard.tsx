import React from 'react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'

const OurCoursesCard = () => {
  return (
    <div className='p-6 rounded-lg bg-white'>
        {/* <div><img src="" alt="" /></div> */}
        <div>
            <Badge variant={'outline'} className='bg-white'>4 Weeks</Badge>
            <Badge variant={'outline'} className='bg-white'>Beginner</Badge>
        </div>
        <h4>by John Smith</h4>
        <h2>Web Design </h2>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias odio dolorum saepe ad adipisci unde sapiente optio nemo possimus expedita!</p>
        <Button className='bg-slate-200 text-black'>Get it Now</Button>
    </div>
  )
}

export default OurCoursesCard