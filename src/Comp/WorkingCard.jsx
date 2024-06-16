import React from 'react'
import { BiPlus } from 'react-icons/bi'
import { plus } from '../Global/Imgs';

const WorkingCard = () => {
  return (
    <div>
      <div className=''>
        <section className={`flex justify-between items-center p-6 md:px-16 gap-3 rounded-2xl border-black border-2 border-b-[8px] bg-white w-[380px] md:w-[1224px] m-5 mx-auto `}>


          <div className='flex gap-4 text-2xl md:text-4xl font-bold items-center'>

            <h1 className='text-6xl'>01</h1>
            <h1>Consultation</h1>

          </div>
          
          <button>
            <img src={plus} alt="" className='h-[3rem] w-[3rem] md:h-16 md:w-16 ' />
          </button>
        </section>
      </div >

    </div>
  )
}

export default WorkingCard