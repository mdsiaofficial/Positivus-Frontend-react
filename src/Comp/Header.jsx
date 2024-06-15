import React from 'react'
import header1 from '../assets/img/header1.png'
const Header = () => {
  return (
    <div>

      <div className="flex flex-col md:flex-row mx-10 my-3 md:justify-center md:items-center">
        <nav className='flex flex-col md:gap-5'>
          <h1 className="text-4xl md:text-6xl order-1 font-bold ">Navigating the digital landscape for success!</h1>
          <p className="text-lg order-3 md:order-2 ">Our digital marketing agency helps businesses grow and succeed online through a range of services including SEO, PPC, social media marketing, and content creation.</p>
          <button className='bg-pBlack text-pWhite rounded-lg w-fit p-3 mt-5 order-4 md:order-3'>Book a consultation</button>

          <img src={header1} alt="" className='order-2 md:hidden p-3 md:w-[600px] md:h-[515px]'/>
        </nav>
        <img src={header1} alt="" className='hidden md:block p-3 md:w-[600px] md:h-[515px]'/>
      </div>
    </div>
  )
}

export default Header