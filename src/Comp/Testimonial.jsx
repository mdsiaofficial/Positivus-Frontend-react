import React from 'react'
import './Testimonial.css';
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from 'swiper/react'
import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules'
import TestyCard from '../Cards/TestyCard';

const Testimonial = () => {
  const names = [
    "Abu Taher Saikat",
    "Eita Ami Nije Vai",
    "Arekta Jani Na",
    "Rahul Roy Nipon",
    "Asif Alom Rony",
    "Risikesh Roy",
    "Abu Taher Saikat",
    "Eita Ami Nije Vai",
    "Arekta Jani Na",
    "Rahul Roy Nipon",
    "Asif Alom Rony",
    "Risikesh Roy",
  ]
  return (
    <div>
      <section className='m-16 flex flex-col md:flex-row items-center gap-10 w-[70%] justify-center'>
        <h1 className='bg-primary text-3xl w-fit h-fit rounded-lg p-1 font-bold '>Case Studies</h1>
        <p className='text-xl md:w-[50%]'>Explore Real-Life Examples of Our Proven Digital Marketing Success through Our Case Studies:</p>
      </section>
      {/* <div className=" p-2 hidden md:flex gap-3 flex-col md:flex-row items-center md:bg-pBlack rounded-3xl w-[100%] md:w-[1224px] mx-auto">

        
      </div> */}
      <div>
        {/* slide */}

        <div className=''>
          <div className="container-r">

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
                nextEl: ".swiper-button-next-r",
                prevEl: ".swiper-button-prev-r",
                clickable: true,
              }}
              className="swiper_container-r"

            >

              {
                names.map((name, index) => (
                  <>
                    <SwiperSlide>
                      <TestyCard
                        key={index}
                        name={name}
                      />
                    </SwiperSlide>
                  </>
                ))
              }


              {/* <div className="slider-controler-r">

                <div className="swiper-button-prev-r slider-arrow-r">
                  <ion-icon name="arrow-back-outline-r"></ion-icon>
                </div>

                <div className="swiper-button-next-r slider-arrow-r">
                  <ion-icon name="arrow-forward-outline-r"></ion-icon>
                </div>
                <div className="swiper-pagination-r"></div>

              </div> */}
            </Swiper>
          </div>
        </div >


      </div>
    </div>
  )
}

export default Testimonial