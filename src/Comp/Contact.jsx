import React from 'react'
import { contact } from '../Global/Imgs'

const Contact = () => {
  return (
    <div>

      <section>
        <section className='mx-16 md:mb-10 flex flex-col md:flex-row items-center gap-10 w-[70%] justify-center'>
          <h1 className='bg-primary text-3xl w-fit h-fit rounded-lg p-1 font-bold '>Contact Us</h1>
          <p className='text-xl md:w-[50%]'>Connect with Us: Let's Discuss Your Digital Marketing Needs:</p>
        </section>

        <section className='bg-pWhite rounded-3xl p-6 m-10 md:p-20 flex items-center justify-center md:justify-between'>
          <form action="" className='flex flex-col gap-4 md:w-[50%]'>
            <div className='flex gap-2'>

              <input type="radio" name="" id="" /> <label htmlFor="hi">Say Hi</label>
              <input type="radio" name="" id="" /> <label htmlFor="">Get a Quote</label>
            </div>

            <div className="flex flex-col gap-4">
              <div className='flex flex-col gap-2'>
                <label htmlFor="name">Name</label>
                <input type="text" name="name" id="" className='px-4 py-3 rounded-xl border border-pBlack' placeholder='Name' required />
              </div>

              <div className='flex flex-col gap-2'>
                <label htmlFor="email">Email</label>
                <input type="text" name="Email" id="" className='px-4 py-3 rounded-xl border border-pBlack' placeholder='Email' required/>
              </div>

              <div className='flex flex-col gap-2'>
                <label htmlFor="message">Message</label>
                <textarea type="text" name="Message" id="" className='px-4 py-3 rounded-xl border border-pBlack' placeholder='Message' rows="5" required/>
              </div>

              <button className='bg-pBlack text-pWhite rounded-lg md:w-fit p-3 mt-5 order-4 md:order-3'>Send Message</button>
            </div>
          </form>

          <div className='hidden md:flex absolute -right-[5rem]'>
            <img src={contact} alt="" />
          </div>
        </section>
      </section>
    </div>
  )
}

export default Contact