import React from 'react'
import { proposal1, rightupblackwhite, rightuplimeblack, rightuplimewhite, services1 } from "../Global/Imgs"
const Proposal = () => {
  return (
    <div>
      <nav className=' relative flex justify-center my-10'>
        <section className={` flex flex-col md:flex-row py-10  px-10 md:px-16  rounded-2xl border-black border-2 border-b-[8px] bg-pWhite w-[380px] md:w-[1224px] md:h-[350px] m-5`}>


          <div className='flex flex-col gap-5  justify-around items-center md:items-start '>

            <h1 className={`bg-primary w-fit md:text-2xl p-1 rounded-xl`}>Let's make things happen</h1>
            <p className={`text-black md:w-[60%]`}>Contact us today to learn more about how our digital marketing services can help your business grow and succeed online.</p>

            <nav className='flex gap-2 w-fit bg-pBlack rounded-xl p-2 md:p-3 items-center'>
              <img src={rightupblackwhite} alt="" className='' />
              <p className={`text-white`}>Get your free Proposal</p>
            </nav>
          </div>

          
          <img src={proposal1} alt="" className='hidden md:block h-[400px] absolute right-[10rem] bottom-0' />
        </section>
      </nav >
    </div>
  )
}

export default Proposal