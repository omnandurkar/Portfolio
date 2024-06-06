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

        <div className='flex flex-col justify-center items-center space-y-8'>
          <h1 className='md:text-8xl text-5xl  font-oswald text-center leading-snug tracking-tighter '>INTERESTED IN <br /> WORKING TOGETHER?</h1>
          <h2 className='text-center text-sm'>Drop me an email: <br />
            <span className='md:text-2xl text-lg text-center hover:underline cursor-pointer'> nandurkarom172@gmail.com </span>

          </h2>
        </div>

        <div className=" grid md:grid-cols-7 grid-cols-3 md:space-y-0 space-y-10 justify-items-center mt-10 ">
          <div className="flex md:col-span-2 col-span-3  justify-center items-center">

            <h2 className='text-center'>
              Designed by: Om Nandurkar <br />
              Built with: WordPress & Elementor
            </h2>
          </div>
          <div className="flex md:flex-row flex-col md:space-x-5 space-x-0 space-y-4 md:space-y-0  col-span-3">
            <h2 className='rounded-full border h-fit text-sm  text-white px-4 py-[2px]'>LINKEDIN</h2>
            <h2 className='rounded-full border h-fit text-sm  text-white px-4 py-[2px]'>LINKEDIN</h2>
            <h2 className='rounded-full border h-fit text-sm  text-white px-4 py-[2px]'>LINKEDIN</h2>
            <h2 className='rounded-full border h-fit text-sm  text-white px-4 py-[2px]'>LINKEDIN</h2>


          </div>
          <button onClick={scrollToTop}  className="flex md:col-span-2 col-span-3">

            <h3>Back To Top</h3>

          </button>

        </div>


      </div>
    // </div>
  )
}

export default Footer