import React from 'react'

type BenefitsCardProps = {
        id:string,
        title:string,
        description:string
}

const BenefitsCard = ({description,id,title}:BenefitsCardProps) => {
  return (
    <div className='w-full rounded-lg bg-white p-7'>
        <h2 className='text-end text-[50px] font-bold'>01</h2>
        <h3>Judul</h3>
        <p>description</p>
        <div></div>
    </div>
  )
}

export default BenefitsCard