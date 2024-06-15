import React, { useState } from 'react'
import { logo1 } from './Imgs'
import { BsMenuButton } from 'react-icons/bs'
import { CgClose } from 'react-icons/cg'
const Navbar = () => {

  const [menu, setMenu] = useState(false);
  
  return (
    <div className=''>

      {/* nav menu desktop */}
      <section className='hidden md:flex justify-between items-center my-5'>
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
      <section className='flex flex-row md:hidden items-center justify-around my-4 transition-all'>
        {/* logo */}
        <section className=''>
          <img src={logo1} alt="" />
        </section>
        {/* menu */}
        <section>
          <button onClick={() => setMenu(!menu)}>
            {menu ? <CgClose className='text-4xl' /> : <BsMenuButton className='text-4xl' />}
          </button>
          {menu && (
            <ul className='flex absolute flex-col gap-[40px] text-center bg-slate-600 rounded-2xl text-white right-0 top-0 p-4'>
              <button onClick={() => setMenu(!menu)}>
                <CgClose className='text-4xl' />
              </button>
              <li>About Us</li>
              <li>Services</li>
              <li>Use Cases</li>
              <li>Pricing</li>
              <li>Blog</li>
              <li className='border-2 rounded-lg border-black px-[35px] py-[20px]'>Request a Quote</li>
            </ul>
          )}
        </section>
      </section>


    </div>
  )
}

export default Navbar