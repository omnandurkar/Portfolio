import React from 'react'
import MarqueeSec from '../../components/MarqueeSec/MarqueeSec'
import Navbar from '../../components/Navbar/Navbar'
import Profile from '../../components/Profile/Profile'
import Skills from '../../components/Skills/Skills'
import Work from '../../components/Work/Work'
import Footer from '../../components/Footer/Footer'

const Home = () => {
  return (

    <>
      <Navbar />

      <MarqueeSec />

      {/* <div className="px-20"> */}

      <Profile />

      {/* </div> */}

      <Skills />

      <Work />

      <Footer />


    </>
  )
}

export default Home