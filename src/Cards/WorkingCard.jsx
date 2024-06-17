import React, { useState } from 'react'
import { BiPlus } from 'react-icons/bi'
import { minus, plus } from '../Global/Imgs';

const WorkingCard = ({index, title, number}) => {
  const proshow = document.querySelector("pro-show");
  const [show, setShow] = useState(false);

  const handleShowButton = () => {
    setShow(!show);

  }



  return (
    <div key={index}>
      <div className=''>
        <div className={`flex flex-col items-center p-6 md:px-16 gap-3 rounded-2xl border-black border-2 border-b-[8px] ${show ? " bg-primary" : "bg-pWhite" }  w-[380px] md:w-[1224px] mx-auto m-5 `}>

          <section className={`flex justify-between items-center w-[320px] md:w-[1090px] mx-auto`}>


            <div className='flex gap-4 items-center w-[90%]'>

              <h1 className=' text-xl md:text-6xl '>0{ number }</h1>
              <h1 className=' text-base md:text-4xl'>{ title }</h1>
            </div>

            <button onClick={ handleShowButton } className='w-[10%]'>
              <img src={`${show ? minus : plus}`} alt="" className='h-[2rem] w-[2rem] md:h-16 md:w-16 ' />
            </button>
            

          </section>
          <section className={`pro-show mt-3 ${show ? "" : "hidden" }`}>
            <div className=" w-[100%] h-1 bg-black"></div>

            <p className='mt-5'>During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.</p>
          </section>

        </div>

      </div >

    </div>
  )
}

export default WorkingCard