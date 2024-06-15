import React from 'react'
import { rightuplimeblack, services1 } from "../Global/Imgs"
const ServiceCard = ({title, img, icon, bg}) => {

  return (
    <div>
      <section className={`flex p-10 gap-3 rounded-2xl border-black border-2 border-b-[8px] bg-${bg} w-[380px] md:w-[550px] h-[230px] md:h-[280px] m-5`}>
        <div className='flex flex-col justify-around'>
          <h1 className={`bg-primary w-fit p-1 rounded-lg`}>{title}</h1>
          <nav className='flex gap-2 items-center'>
            <img src={icon} alt="" className='w-6 md:w-auto' />
            <p className={`text-${bg==='pWhite' || bg==='primary'? 'black' : 'pWhite'  } text-sm md:text-lg`}>Learn More</p>
          </nav>
        </div>
        <img src={img} alt="" className='w-[170px]  md:w-[210px]'/>
      </section>
    </div >
  )
}

export default ServiceCard