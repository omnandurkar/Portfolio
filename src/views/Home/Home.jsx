import React, { useEffect } from 'react'
import MarqueeSec from '../../components/MarqueeSec/MarqueeSec'
import Navbar from '../../components/Navbar/Navbar'
import Profile from '../../components/Profile/Profile'
import Skills from '../../components/Skills/Skills'
import Work from '../../components/Work/Work'
import Footer from '../../components/Footer/Footer'
import DeviceDetector from '../DeviceDetector/DeviceDetector'
import Aos from 'aos';
import 'aos/dist/aos.css'

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

  useEffect(()=>{
    Aos.init({duration : 1000, delay : 300});
})


  return (

    <>
      <Navbar />

      <MarqueeSec />



      <Profile />

 

      <Skills />

      <Work />

      <Footer />

      <DeviceDetector/>


    </>
  )
}

export default Home