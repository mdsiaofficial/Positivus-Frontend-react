import React, { useState } from 'react';
import { logo1 } from './Imgs';
import { BsMenuButton } from 'react-icons/bs';
import { CgClose } from 'react-icons/cg';

const Navbar = () => {
  const [menu, setMenu] = useState(false);

  return (
    <div className=''>
      {/* nav menu desktop */}
      <section className='hidden md:flex justify-between items-center my-5'>
        {/* logo */}
        <section className=''>
        <a href="#"><img src={logo1} alt="" /></a>
        </section>
        <ul className='flex flex-row items-center gap-[40px]'>
          <li><a href="#services">Services</a></li>
          <li><a href="#case-studies">Case Studies</a></li>
          <li><a href="#working-process">Working Process</a></li>
          <li><a href="#teams">Teams</a></li>
          <li><a href="#testimonials">Testimonials</a></li>
          <li><a href="#contact-us">Contact Us</a></li>
          <li className='border-2 rounded-lg border-black px-[35px] py-[20px]'><a href="#request-quote">Request a Quote</a></li>
        </ul>
      </section>

      {/* nav menu mobile */}
      <section className='flex flex-row md:hidden items-center justify-between mx-10 my-4 transition-all'>
        {/* logo */}
        <section className=''>
          <img src={logo1} alt="" className='h-10' />
        </section>
        {/* menu */}
        <section className='transition-all'>
          <button onClick={() => setMenu(!menu)}>
            {menu ? <CgClose className='text-4xl' /> : <BsMenuButton className='text-4xl' />}
          </button>
          {menu && (
            <ul className='flex absolute flex-col gap-[40px] text-center bg-slate-600 rounded-2xl text-white right-0 top-0 p-4'>
              <button onClick={() => setMenu(!menu)}>
                <CgClose className='text-4xl' />
              </button>
              <li><a href="#services">Services</a></li>
              <li><a href="#case-studies">Case Studies</a></li>
              <li><a href="#working-process">Working Process</a></li>
              <li><a href="#teams">Teams</a></li>
              <li><a href="#testimonials">Testimonials</a></li>
              <li><a href="#contact-us">Contact Us</a></li>
              <li className='border-2 rounded-lg border-white px-[35px] py-[20px]'><a href="#request-quote">Request a Quote</a></li>
            </ul>
          )}
        </section>
      </section>

      {/* Add id attributes to each component */}
      {/* <div id="services">Services component</div>
      <div id="case-studies">Case Studies component</div>
      <div id="working-process">Working Process component</div>
      <div id="teams">Teams component</div>
      <div id="testimonials">Testimonials component</div>
      <div id="contact-us">Contact Us component</div>
      <div id="request-quote">Request a Quote component</div> */}
    </div>
  );
};

export default Navbar;