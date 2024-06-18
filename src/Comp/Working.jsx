import React, { useState } from 'react'
import WorkingCard from '../Cards/WorkingCard'

const Working = () => {
  const works = {
    1: {
      id: `1`,
      title: 'Consultation',
    },
    2: {
      id: `2`,
      title: 'Research and Strategy Development',
    },
    3: {
      id: `3`,
      title: 'Implementation',
    },
    4: {
      id: `4`,
      title: 'Monitoring and Optimization',
    },
    5: {
      id: `5`,
      title: 'Reporting and Communication',
    },
    6: {
      id: `6`,
      title: 'Continual Improvement',
    },
  };

  return (
    <div id="working-process">
      <section className='m-10 flex flex-col md:flex-row items-center gap-10 w-[70%] justify-center'>
        <h1 className='bg-primary text-3xl w-fit h-fit rounded-lg p-1 font-bold '>Our Working Process </h1>
        <p className='text-xl md:w-[40%]'>Step-by-Step Guide to Achieving Your Business Goals:</p>
      </section>

      {
        Object.keys(works).map((item, index) => (
          <WorkingCard key={index} title={works[item].title} number={works[item].id} />

        ))
      }
    </div>
  )
}

export default Working