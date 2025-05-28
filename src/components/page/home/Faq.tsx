import React from 'react'
import { Button } from '@/components/ui/button'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"


const Faq = () => {
  return (
    <section className='py-8 md:py-10 lg:py-20'>
         <div className='flex flex-col gap-4 items-start md:flex-row md:items-end md:justify-between'>
                <div className='flex flex-col gap-2 lg:gap-4'>
                    <h2 className='font-bold text-3xl lg:text-5xl'>Frequently Asked Questions</h2>
                    <p className='text-sm max-w-[833px] md:text-base lg:text-lg'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum eius inventore eligendi suscipit optio maxime debitis tempore officiis sequi earum!</p>
                </div>
                <Button className='bg-white text-black hover:bg-slate-100 md:text-lg'>See All FAQ&apos;s</Button>
            </div>
            <div className='mt-10 grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-8'>
            <Accordion type="single" collapsible >
              <AccordionItem value="item-1" >
                <AccordionTrigger >
                  Can I enroll in multiple courses at once? 
                </AccordionTrigger>
                <AccordionContent>
                  Yes. It adheres to the WAI-ARIA design pattern.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
            </div>
    </section>
  )
}

export default Faq