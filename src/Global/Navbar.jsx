import React from 'react'
import { logo1 } from './Imgs'
import { Link } from 'react-router-dom'
import { BsMenuButton } from 'react-icons/bs'

const Navbar = () => {
  return (
    <div className=''>

      {/* nav menu desktop */}
      <section className='hidden md:flex justify-around items-center my-5'>
        {/* logo */}
        <section className=''>
          <img src={logo1} alt="" />
        </section>
        <ul className='flex flex-row items-center gap-[40px]'>
          <li>About Us</li>
          <li>Services</li>
          <li>Use Cases</li>
          <li>Pricing</li>
          <li>Blog</li>
          <li className='border-2 rounded-lg border-black px-[35px] py-[20px]'>Request a Quote</li>
        </ul>
      </section>

      {/* nav menu mobile */}
      <section className='flex flex-row md:hidden items-center justify-around my-4'>
        {/* logo */}
        <section className=''>
          <img src={logo1} alt="" />
        </section>
        {/* menu */}
        <section>
          <BsMenuButton className='text-4xl' />
          {/* <ul className='flex absolute flex-col gap-[40px] text-center bg-slate-600 rounded-2xl text-white right-0 top-16 p-7'>
            <li>About Us</li>
            <li>Services</li>
            <li>Use Cases</li>
            <li>Pricing</li>
            <li>Blog</li>
            <li className='border-2 rounded-lg border-black px-[35px] py-[20px]'>Request a Quote</li>
          </ul> */}

        </section>
      </section>


    </div>
  )
}

export default Navbar