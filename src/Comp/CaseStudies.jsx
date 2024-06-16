import React, { useState } from 'react'
import { rightuplimeblack } from '../Global/Imgs'
import CaseCard from './CaseCard';
const CaseStudies = () => {

  const studies = {
    s1: {
      id: 1,
      text: "For a local restaurant, we implemented a targeted PPC campaign that resulted in a 50% increase in website traffic and a 25% increase in sales.",
    },
    s2: {
      id: 2,
      text: "For a B2B software company, we developed an SEO strategy that resulted in a first page ranking for key keywords and a 200% increase in organic traffic.",
    },
    s3: {
      id: 3,
      text: "For a national retail chain, we created a social media marketing campaign that increased followers by 25% and generated a 20% increase in online sales.",
    }
  };

  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <section className='m-10 flex flex-col md:flex-row items-center gap-10 w-[70%] justify-center'>
        <h1 className='bg-primary text-3xl w-fit h-fit rounded-lg p-1 font-bold '>Case Studies</h1>
        <p className='text-xl md:w-[50%]'>Explore Real-Life Examples of Our Proven Digital Marketing Success through Our Case Studies:</p>
      </section>
      <div className=" p-2 flex gap-3 flex-col md:flex-row items-center md:bg-pBlack rounded-3xl md:w-[1224px] mx-auto">

        {/* slide */}
        
        {
          Object.keys(studies).map((item, index) => (
            <>
              <CaseCard
                key={index}
                text={studies[item].text}
              />
              <div className={`h-[160px] hidden bg-white w-1 my-auto ${(index >= 0 && index <= 1) ? "md:block" : ""}`}></div>
            </>
          ))
        }

      </div>
    </div>
  )
}

export default CaseStudies