import { Route, Router, Routes } from "react-router-dom"
import Navbar from "./Global/Navbar"
import Footer from "./Global/Footer"


function App() {
  

  return (
    <>
      {/* <Router>
        <div className="bg-slate-900">
          <Navbar />
          <main>
            <Routes>
              <Route path='/' element={<Home />}></Route>
              <Route path='/pricing' element={<Pricing />}></Route>
              <Route path='/contact' element={<Contact />}></Route>
              <Route path='/blog' element={<Blog />}></Route>
              <Route path='/readblog' element={<ReadBlog />}></Route>
              <Route path='/debugger' element={<Debugger />}></Route>
            </Routes>
          </main>
          <Footer />
        </div>
      </Router> */}
      <Navbar />
      <Footer />
      
    </>
  )
}

export default App
