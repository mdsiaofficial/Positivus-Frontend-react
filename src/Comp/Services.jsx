import React from 'react'
import ServiceCard from './ServiceCard'
import { rightupblackwhite, rightuplimeblack, services1, services2, services3, services4, services5, services6 } from '../Global/Imgs'

const Services = () => {

  const services = {
    "seo": {
      title: "Search Engine Optimization",
      img: { services1 },
      icon: { rightuplimeblack },
      bg: "pWhite",
    },
    "ppc": {
      title: "Pay Per Click Advertising",
      img: { services2 },
      icon: { rightuplimeblack },
      bg: "primary",
    },
    "smm": {
      title: "Social Media Marketing",
      img: { services3 },
      icon: { rightupblackwhite },
      bg: "pBlack",
    },
    "em": {
      title: "Email Marketing",
      img: { services4 },
      icon: { rightuplimeblack },
      bg: "pWhite",
    },
    "cc": {
      title: "Content Creation",
      img: { services5 },
      icon: { rightuplimeblack },
      bg: "primary",
    },
    "aat": {
      title: "Analytics and Tracking",
      img: { services6 },
      icon: { rightupblackwhite },
      bg: "pBlack",
    },

  }
  return (
    <div>

      {/* {Object.keys(services).map((item, index) => (
        <ServiceCard
          key={index}
          title={services[item].title}
          img={services[item].img}
          icon={services[item].icon}
          bg={services[item].bg}
        />
      ))} */}

      <ServiceCard
        title={`Title`}
        img={services1}
        icon={rightupblackwhite}
        bg={`primary`}
      />

    </div>
  )
}

export default Services;