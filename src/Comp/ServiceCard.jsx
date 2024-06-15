import React from 'react'
import { rightuplimeblack, services1 } from "../Global/Imgs"
const ServiceCard = ({title, img, icon, bg}) => {

  return (
    <div>
      <section className={`flex p-10 gap-3 rounded-2xl border-black border-2 border-b-[8px] bg-${bg} w-fit m-5`}>
        <div className='flex flex-col justify-around'>
          <h1 className={`bg-primary w-fit p-1 rounded-lg`}>{title}</h1>
          <nav className='flex gap-2 items-center'>
            <img src={icon} alt="" className='' />
            <p>Learn More</p>
          </nav>
        </div>
        <img src={img} alt="" className='w-[170px] md:w-auto'/>
      </section>
    </div >
  )
}

export default ServiceCard