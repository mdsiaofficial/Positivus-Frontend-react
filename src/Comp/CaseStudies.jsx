import React, { useState } from 'react'
import { rightuplimeblack } from '../Global/Imgs'
import CaseCard from '../Cards/CaseCard';
import './CaseStudies.css';
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from 'swiper/react'
import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules'

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
    <div id="case-studies">
      <section className='mx-16 md:mb-10 flex flex-col md:flex-row items-center gap-10 w-[70%] justify-center'>
        <h1 className='bg-primary text-3xl w-fit h-fit rounded-lg p-1 font-bold '>Case Studies</h1>
        <p className='text-xl md:w-[50%]'>Explore Real-Life Examples of Our Proven Digital Marketing Success through Our Case Studies:</p>
      </section>
      <div className=" p-2 hidden md:flex gap-3 flex-col md:flex-row items-center md:bg-pBlack rounded-3xl w-[100%] md:w-[1224px] mx-auto">

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
      <div>
        {/* slide */}

        <div className='md:hidden'>
          <div className="container-v">
          
            <Swiper
              effect={`coverflow`}
              grabCursor={true}
              centeredSlides={true}
              loop={true}
              slidesPerView={"auto"}
              coverflowEffect={{
                rotate: 0,
                stretch: 0,
                depth: 100,
                modifier: 2.5,
              }}
              modules={[EffectCoverflow, Pagination, Navigation]}
              pagination={{
                el: "",
                clickable: true,
              }}
              navigation={{
                nextEl: ".swiper-button-next-v",
                prevEl: ".swiper-button-prev-v",
                clickable: true,
              }}
              className="swiper_container-v"

            >

              {
                Object.keys(studies).map((item, index) => (
                  <>
                    <SwiperSlide>
                      <CaseCard
                        key={index}
                        text={studies[item].text}
                      />
                      <div className={`h-[160px] hidden bg-white w-1 my-auto ${(index >= 0 && index <= 1) ? "md:block" : ""}`}></div>
                    </SwiperSlide>
                  </>
                ))
              }





              {/* <div className="slider-controler">

                <div className="swiper-button-prev slider-arrow">
                  <ion-icon name="arrow-back-outline"></ion-icon>
                </div>

                <div className="swiper-button-next slider-arrow">
                  <ion-icon name="arrow-forward-outline"></ion-icon>
                </div>
                <div className="swiper-pagination"></div>

              </div> */}

            </Swiper>
          </div>
        </div >


      </div>
    </div>
  )
}

export default CaseStudies