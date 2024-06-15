import React from 'react'
import { ld, logo1, x, fb, logo2 } from './Imgs'

const Footer = () => {
  return (
    <div>
      <div className="flex flex-col p-10 bg-[black] rounded-t-[10px] md:rounded-t-[30px] text-white">

        <section className='flex flex-col md:flex-row justify-between items-center m-5'>
          {/* logo */}
          <section className=''>
            <img src={logo2} alt="" />
          </section>
          <ul className='flex flex-col md:flex-row m-10 md:m-0 items-center gap-[20px] md:gap-[40px]'>
            <li>About Us</li>
            <li>Services</li>
            <li>Use Cases</li>
            <li>Pricing</li>
            <li>Blog</li>
          </ul>
          <nav className='flex gap-5'>
            <img src={fb} alt="" />
            <img src={ld} alt="" />
            <img src={x} alt="" />
          </nav>
        </section>

        {/* footer content */}
        <section className='flex flex-col md:flex-row justify-center items-center  md:justify-between '>

          <div className="flex flex-col gap-6 m-5 text-center md:text-left md:w-[33%]">
            <h1 className="bg-lime-500 text-black inline-block">
              Contact Us:
            </h1>
            <h1>Email: info@positivus.com</h1>
            <h1>Phone: 44444444444</h1>
            <h1>Address: 763 Rajashon, Savar, Dhaka</h1>
          </div>

          <div className=" bg-[#292A32] rounded-3xl m-5 p-8 gap-10 flex flex-col md:flex-row  justify-center items-center md:w-[66%]">
            <input type="text" placeholder='Email' className='px-6 py-3 bg-transparent outline-none border rounded-2xl' />
            <button className='px-6 py-3 bg-lime-500 outline-none border rounded-2xl text-black'>Subscribe to news</button>
          </div>

        </section>

        {/* bottom */}
        <section>
          <div className="w-full h-1 bg-[#a0a0a0]"></div>

          <div className="flex flex-col gap-6 text-center md:flex-row pt-5">
            <p>2022 All Rights Reserved</p>
            <p>Privacy Policy</p>
          </div>
        </section>

        
      </div>
    </div>
  )
}

export default Footer