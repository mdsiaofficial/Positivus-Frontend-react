import React from 'react'
import ServiceCard from './ServiceCard'
import { rightupblackwhite, rightuplimeblack, services1, services2, services3, services4, services5, services6 } from '../Global/Imgs'

const Services = () => {

  const services = {
    "seo": {
      title: "Search Engine Optimization",
      img: services1,
      icon: rightuplimeblack,
      bg: "pWhite",
    },
    "ppc": {
      title: "Pay Per Click Advertising",
      img: services2,
      icon: rightuplimeblack ,
      bg: "primary",
    },
    "smm": {
      title: "Social Media Marketing",
      img: services3,
      icon: rightupblackwhite,
      bg: "pBlack",
    },
    "em": {
      title: "Email Marketing",
      img: services4,
      icon: rightuplimeblack,
      bg: "pWhite",
    },
    "cc": {
      title: "Content Creation",
      img: services5,
      icon: rightuplimeblack,
      bg: "primary",
    },
    "aat": {
      title: "Analytics and Tracking",
      img: services6,
      icon: rightupblackwhite,
      bg: "pBlack",
    },

  }
  return (
    <div className="my-20">
      <section className='m-10 flex items-center gap-10'>
        <h1 className='bg-primary text-3xl w-fit h-fit rounded-lg p-1 font-bold '>Services</h1>
        <p className='text-xl'>At our digital marketing agency, we offer a range of services to help businesses grow and succeed online. These services include:</p>
      </section>
      <div className='flex flex-wrap justify-center'>
      
      {Object.keys(services).map((item, index) => (
        <ServiceCard
          key={index}
          title={services[item].title}
          img={services[item].img}
          icon={services[item].icon}
          bg={services[item].bg}
        />
      ))}

    </div>
    </div>
  )
}

export default Services;