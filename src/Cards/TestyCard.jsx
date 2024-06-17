import React from 'react'
import { testimonial } from '../Global/Imgs'
import './TestyCard.css';
const TestyCard = ({ index, name }) => {
  return (
    <div key={index}>
      <nav className=' bg-pBlack text-pWhite w-[90%] md:w-[450px] h-[100%] p-6 m-6 md:m-3 rounded-3xl'>
        <div className='message-box w-[350px] h-[100%] p-6 m-1 md:m-3 rounded-3xl flex justify-self-center'>
          We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence.
        </div>

        <div className='mt-10 ml-16'>
          <h1 className='text-primary'>{name}</h1>
          <p>Marketing Director at XYZ Corp</p>
        </div>
      </nav>
    </div>
  )
}

export default TestyCard