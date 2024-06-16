import React, { useState } from 'react'
import WorkingCard from './WorkingCard'

const Working = () => {
  
  return (
    <div>
      <section className='m-10 flex flex-col md:flex-row items-center gap-10 w-[70%] justify-center'>
        <h1 className='bg-primary text-3xl w-fit h-fit rounded-lg p-1 font-bold '>Our Working Process </h1>
        <p className='text-xl md:w-[40%]'>Step-by-Step Guide to Achieving Your Business Goals:</p>
      </section>

      <WorkingCard/>
    </div>
  )
}

export default Working