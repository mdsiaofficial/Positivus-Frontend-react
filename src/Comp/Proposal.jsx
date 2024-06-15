import React from 'react'
import { proposal1, rightupblackwhite, rightuplimeblack, rightuplimewhite, services1 } from "../Global/Imgs"
const Proposal = () => {
  return (
    <div>
      <nav className='flex justify-center'>
        <section className={`flex flex-col md:flex-row md:justify-center py-10  px-10 md:px-24  rounded-2xl border-black border-2 border-b-[8px] bg-pWhite w-[380px] md:w-[1224px] md:h-[350px] m-5`}>


          <div className='flex flex-col gap-5  justify-around items-center md:items-start '>

            <h1 className={`bg-primary w-fit md:text-2xl p-1 rounded-xl`}>Let's make things happen</h1>
            <p className={`text-black md:w-[60%]`}>Contact us today to learn more about how our digital marketing services can help your business grow and succeed online.</p>

            <nav className='flex gap-2 w-fit bg-pBlack rounded-xl p-2 md:p-3 items-center'>
              <img src={rightupblackwhite} alt="" className='' />
              <p className={`text-white`}>Get your free Proposal</p>
            </nav>
          </div>


          <img src={proposal1} alt="" className='w-[170px] hidden absolute top-[1890px] right-[410px] md:block  md:w-[430px] md:h-[440px]' />
        </section>
      </nav >
    </div>
  )
}

export default Proposal