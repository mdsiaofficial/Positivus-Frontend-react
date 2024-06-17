import React from 'react'
import { team1, team2, team3, ld2 } from "../Global/Imgs";

const TeamCard = ({emp}) => {
  let temp = emp;
  
  // {
  //   name: "Rahul Roy Nipon",
  //   position: "Full Stack Developer",
  //   details: "5+ years of experience in digital marketing. Expertise in SEO, PPC, and content strategy",
  //   img: team1,
  // };

  return (
    <div>
      <section className={`flex flex-col p-10 gap-3 rounded-2xl border-black border-2 border-b-[8px] bg-pWhite w-[380px] m-5`}>
        <div className='flex justify-around'>
          <img src={temp.img} alt="" className='h-20'/>
          <nav className='flex flex-col justify-end'>
            <h3>{ temp.name }</h3>
            <p> {temp.position} </p>
          </nav>
          <img src={ld2} alt="" className='h-6' />
        </div>

        <div className="w-[100%] h-1 bg-black"></div>
        <div className='mt-3'>

          <p>{ temp.details }</p>
        </div>
      </section>
    </div >
  )
}

export default TeamCard