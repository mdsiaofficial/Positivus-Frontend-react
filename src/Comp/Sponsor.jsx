import React from 'react'
import { amazon, dribble, hubspot, netflix, notion, zoom } from '../Global/Imgs'

const Sponsor = () => {
  return (
    <div>
      <div className="flex flex-wrap gap-10 justify-around my-10">
        <img src={amazon} alt="" />
        <img src={dribble} alt="" />
        <img src={hubspot} alt="" />
        <img src={notion} alt="" />
        <img src={netflix} alt="" />
        <img src={zoom} alt="" />
      </div>
    </div>
  )
}

export default Sponsor