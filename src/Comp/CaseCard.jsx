import React from 'react'
import { rightuplimeblack } from '../Global/Imgs'
const CaseCard = ({text, index}) => {
  return (
    <div>
      <nav className=' bg-pBlack text-pWhite w-[350px] h-[220px] p-6 m-3 rounded-3xl'>
        <p>{ text }</p>
          <p className='flex items-center m-2'>Learn More <img src={rightuplimeblack} alt="" className='h-7 ' /></p>
        </nav>
    </div>
  )
}

export default CaseCard