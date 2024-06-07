import React from 'react'

const Footer = () => {

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    // <div className='h-screen justify-center flex flex-col'>
    <div className=' h-[70vh] flex flex-col justify-between py-4 '>

      <div className='flex flex-col justify-center items-center space-y-8 font-rale'>
      <h1 className='md:text-8xl text-5xl font-oswald text-center leading-snug tracking-tighter'>INTERESTED IN <br /> WORKING TOGETHER <span className='inline-block animate-bounce'>?</span></h1>

        <h2 className='text-center text-sm'>Drop me an email: <br />
          <a href="mailto:nandurkarom172@gmail.com" target='_blank'>
            <span className='md:text-2xl text-lg text-center hover:underline cursor-pointer hover:animate-pulse animate-infinite'> nandurkarom172@gmail.com </span>
          </a>
        </h2>
      </div>

      <div className=" grid md:grid-cols-7 grid-cols-3 md:space-y-0 space-y-10 justify-items-center mt-10 ">
        <div className="flex md:col-span-2 col-span-3  justify-center items-center">

          <h2 className='text-start font-rale text-md font-semibold text-gray-400  '>
            <span className='opacity-80'>
            Built with : 
            </span>

            <span className=' mx-1 opacity-100 text-white'> 
               ReactJs | Tailwind | GSAP
            </span>

            <br />
          </h2>

        </div>

        <div className="flex md:flex-row flex-col md:space-x-5 space-x-0 space-y-4 md:space-y-0  col-span-3">

          <a href='https://www.linkedin.com/in/om-nandurkar17/' className='hover:-translate-y-2 hover:scale-110 duration-300 ease-in-out ' target='_blank'>
            <h2 className='rounded-full border h-fit text-sm  text-white px-4 py-[2px] hover:bg-white hover:text-black font-oswald duration-200 hover:animate-wiggle  animate-infinite '>LINKEDIN</h2>
          </a>

          <a href='https://github.com/omnandurkar' className='hover:-translate-y-2 hover:scale-110 duration-300 ease-in-out ' target='_blank'>
            <h2 className='rounded-full border h-fit text-sm  text-white px-4 py-[2px] hover:bg-white hover:text-black font-oswald duration-200 hover:animate-wiggle  animate-infinite'>GITHUB</h2>
          </a>

          <a href='https://peerlist.io/omnandurkar/' className='hover:-translate-y-2 hover:scale-110 duration-300 ease-in-out ' target='_blank'>
            <h2 className='rounded-full border h-fit text-sm  text-white px-4 py-[2px] hover:bg-white hover:text-black font-oswald duration-200 hover:animate-wiggle  animate-infinite  '>PEERLIST</h2>
          </a>

          <a href='https://wa.me/+919766426214' className='hover:-translate-y-2 hover:scale-110 duration-300 ease-in-out  ' target='_blank'>
            <h2 className='rounded-full border h-fit text-sm  text-white px-4 py-[2px] hover:bg-white font-oswald hover:text-black duration-200 hover:animate-wiggle  animate-infinite'>WHATSAPP</h2>
          </a>

        </div>
        <button onClick={scrollToTop} className="flex md:col-span-2 col-span-3">

          <h3 className='font-rale text-md font-semibold  opacity-70'>Back to Top</h3>

        </button>

      </div>


    </div>
    // </div>
  )
}

export default Footer