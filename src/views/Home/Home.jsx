import React from 'react'
import MarqueeSec from '../../components/MarqueeSec/MarqueeSec'
import Navbar from '../../components/Navbar/Navbar'
import Profile from '../../components/Profile/Profile'
import Skills from '../../components/Skills/Skills'
import Work from '../../components/Work/Work'
import Footer from '../../components/Footer/Footer'

const Home = () => {

  //  useEffect(() => {

  //   const scroll = new LocomotiveScroll({
  //     el: document.querySelector('[data-scroll-container]'),
  //     smooth: true,
  //     lerp: 0.05,
  //     // lerp : 0.95,

  //   });

  //   document.querySelector("#scroll-to-top").addEventListener("click", () => {

  //     scroll.scrollTo(0)
  //   })


  // }, [])


  return (

    <>
      <Navbar />

      <MarqueeSec />



      <Profile />

 

      <Skills />

      <Work />

      <Footer />


    </>
  )
}

export default Home