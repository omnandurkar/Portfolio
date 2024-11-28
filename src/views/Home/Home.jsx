import React, { useEffect, useLayoutEffect, useRef, useState } from 'react';
import MarqueeSec from '../../components/MarqueeSec/MarqueeSec';
import Navbar from '../../components/Navbar/Navbar';
import Profile from '../../components/Profile/Profile';
import Skills from '../../components/Skills/Skills';
import Work from '../../components/Work/Work';
import Footer from '../../components/Footer/Footer';
import DeviceDetector from '../DeviceDetector/DeviceDetector';
import Aos from 'aos';
import 'aos/dist/aos.css';
import Experience from '../../components/Experience/Experience';
import gsap from 'gsap';

const Home = () => {

  const [showContent, setShowContent] = useState(false);
  const comp = useRef(null);
  const introRef = useRef(null); 


  useEffect(() => {
    Aos.init({ duration: 1000, delay: 300 });
  }, []);


  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const t1 = gsap.timeline();

   
      t1.from(introRef.current, {
        y: "-100%",
        scale: 1,
        duration: 1.5,
        ease: "power3.out",
        backgroundColor: "#000000",
      })
        .to(introRef.current, {
          duration: 1.3,
          ease: "power3.inOut",
          backgroundColor: "white", 
        })
        .from(
          [introRef.current.querySelector("#title-1"), introRef.current.querySelector("#title-2"), introRef.current.querySelector("#title-3"), introRef.current.querySelector("#title-4")],
          {
            opacity: 0,
            y: "+=30",
            stagger: 0.5,
          })
        .to(
          [introRef.current.querySelector("#title-1"), introRef.current.querySelector("#title-2"), introRef.current.querySelector("#title-3"), introRef.current.querySelector("#title-4")],
          {
            opacity: 0,
            y: "-=30",
            stagger: 0.5,
          })
        .to(introRef.current, {
          y: "-100%",
          duration: 0.9,
          onComplete: () => setShowContent(true), 
        });
    }, introRef);

  
    return () => ctx.revert();
  }, []);

  return (
    <div ref={comp}>

 
      <section
        id="intro-slider"
        ref={introRef} 
        className={`h-screen p-10 bg-black font-oswald font-extrabold space-y-10 text-black absolute top-0 left-0 font-spaceGrotesk z-[90] w-full flex flex-col justify-center items-center tracking-tight ${showContent ? 'hidden' : ''}`}
      >
        <h1 className="text-2xl  md:text-5xl z-40" id="title-1">
          WELCOME
        </h1>
        <h1 className="text-lg  md:text-3xl uppercase" id="title-2">
          TO MY
        </h1>
        <h1 className="text-5xl md:text-9xl uppercase text-blue-75" id="title-3">
           PORTFOLIO</h1>
        
      </section>

      {/* Conditional rendering of content after animation */}
      {showContent && (
        <>
          <Navbar />
          <MarqueeSec />
          <Profile />
          <Skills />
          <Experience />
          <Work />
          <Footer />
          <DeviceDetector />
        </>
      )}

    </div>
  );
};

export default Home;
