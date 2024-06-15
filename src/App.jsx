import { Route, Router, Routes } from "react-router-dom"
import Navbar from "./Global/Navbar"
import Footer from "./Global/Footer"
import Header from "./Comp/Header"
import Sponsor from "./Comp/Sponsor"
import Services from "./Comp/Services"
import ServiceCard from "./Comp/ServiceCard"
import Proposal from "./Comp/Proposal"


function App() {


  return (
    <>

      <Navbar />
      <Header />
      <Sponsor />
      <Services />
      <Proposal />
      
      <Footer />


    </>
  )
}

export default App
