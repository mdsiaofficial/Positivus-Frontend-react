import React from 'react'
import { rightuplimeblack } from '../Global/Imgs'
const CaseCard = ({text, index}) => {
  return (
    <div key={index}>
      <nav className=' bg-pBlack text-pWhite w-[90%] md:w-[350px] h-[220px] p-6 m-6 md:m-3 rounded-3xl'>
        <p>{ text }</p>
          <p className='flex items-center m-2'>Learn More <img src={rightuplimeblack} alt="" className='h-7 ' /></p>
        </nav>
    </div>
  )
}

export default CaseCard