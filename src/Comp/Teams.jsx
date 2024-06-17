import React, { useState } from 'react'
import TeamCard from '../Cards/TeamCard'
import { team1, team2, team3 } from '../Global/Imgs';
const Teams = () => {

  const fullTeam = [
    {
      name: "Abu Taher Saikat",
      position: "Full Stack Developer",
      details: "5+ years of experience in digital marketing. Expertise in SEO, PPC, and content strategy",
      img: team1,
    },

    {
      name: "Asif Alom Rony",
      position: "Full Stack Developer",
      details: "5+ years of experience in digital marketing. Expertise in SEO, PPC, and content strategy",
      img: team2,
    },

    {
      name: "Eida Ami Nije Vai",
      position: "Full Stack Developer",
      details: "5+ years of experience in digital marketing. Expertise in SEO, PPC, and content strategy",
      img: team1,
    },

  ];

  const fullTeam2 = [
    {
      name: "Rahul Roy Nipon",
      position: "Full Stack Developer",
      details: "5+ years of experience in digital marketing. Expertise in SEO, PPC, and content strategy",
      img: team3,
    },

    {
      name: "Abu Taher Saikat",
      position: "Full Stack Developer",
      details: "5+ years of experience in digital marketing. Expertise in SEO, PPC, and content strategy",
      img: team1,
    },

    {
      name: "Asif Alom Rony",
      position: "Full Stack Developer",
      details: "5+ years of experience in digital marketing. Expertise in SEO, PPC, and content strategy",
      img: team2,
    },

    

    {
      name: "Eida Ami Nije Vai",
      position: "Full Stack Developer",
      details: "5+ years of experience in digital marketing. Expertise in SEO, PPC, and content strategy",
      img: team1,
    },
  ]
  const [showFull, setShowFull] = useState(false);
  const handleShow = () => {
    setShowFull(!showFull);

  }
  return (
    <div>

      <section className='m-10 flex flex-col md:flex-row items-center gap-10 w-[70%] justify-center'>
        <h1 className='bg-primary text-3xl w-fit h-fit rounded-lg p-1 font-bold '>Team</h1>
        <p className='text-xl md:w-[40%]'>Meet the skilled and experienced team behind our successful digital marketing strategies:</p>
      </section>

      <section className='md:w-[90%] mx-auto'>

        <div className='flex flex-col md:flex-row flex-wrap justify-between items-center'>
          {
            fullTeam.map((item, index) => (
              <TeamCard key={index} emp={item} />
            ))

          }

        </div>

        <div className={`${showFull ? "flex" : "hidden" }  flex-col md:flex-row flex-wrap justify-between items-center`}>
          {
            fullTeam2.map((item, index) => (
              <TeamCard key={index} emp={item} />
            ))

          }

        </div>


      </section>
      <button onClick={handleShow} className='w-fit text-white m-5 bg-pBlack rounded-xl p-2 md:p-3'><p>{ showFull ? "See Less" : "See Full Team" }</p></button>
    </div>
  )
}

export default Teams
