import React from 'react'
import { Link, useLocation } from 'react-router-dom'

const Navbar = () => {

  const location = useLocation();

  const isRootRouteHome = location.pathname === '/';

  const isRootRouteProjects = location.pathname === '/all-projects';

  const isRootRouteTimeline = location.pathname === '/timeline';


  function smoothScrollTo(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  }

  return (
    <>


      <header>
        <nav className='p-10 flex  justify-between'>
          <Link to='/' className="flex-none rounded-xl text-xl inline-block font-semibold focus:outline-none "  >
            <h1>Om <span className='opacity-60'>M Nandurkar</span> </h1>
          </Link>

          {isRootRouteHome && (
            <div className='hidden mt-2 md:block md:ps-12 '>
              <ul className='flex -ms-32 gap-5'>
                <li>
                  <Link onClick={() => smoothScrollTo('about')} className='font-oswald ' >About</Link>
                </li>
                <li>
                  <Link onClick={() => smoothScrollTo('contact')} className='font-oswald ' >Contact</Link>
                </li>
                <li>
                  <Link onClick={() => smoothScrollTo('Experience')} className='font-oswald ' >Experience</Link>
                </li>
                <li>
                  <Link to='/all-projects' className='font-oswald ' >All Projects</Link>
                </li>
              </ul>
            </div>

          )}



          <div className='flex max-lg:flex-col-reverse  md:space-x-5'>

            {
              isRootRouteProjects && (
                <div className='p-2 text-slate-100 max-lg:my-4  opacity-75 hover:opacity-100 text-xs uppercase font-bold  font-rale active:scale-90 cursor-pointer  rounded-md border'>
                  <Link to='/timeline'>
                    Timeline
                  </Link>
                </div>
              )
            }

            {
              isRootRouteTimeline && (
                <div className='p-2 text-slate-100 max-lg:my-4  opacity-75 hover:opacity-100 text-xs uppercase font-bold  font-rale active:scale-90 cursor-pointer  rounded-md border'>
                  <Link to='/all-projects'>
                    Projects
                  </Link>
                </div>
              )
            }

            <a href='https://drive.google.com/file/d/1-ee3ilUBnDORaGhk-VJi6N-68vaRCt90/view?usp=sharing' target='_black'>
              <h2 className='p-2 bg-slate-100 flex justify-center items-center  opacity-75 hover:opacity-100 text-xs uppercase  text-black font-bold  font-rale active:scale-90 cursor-pointer  rounded-md border'>
                Resume
              </h2>
            </a>
            {/* <a href='https://drive.google.com/file/d/1bh8vXwP7kQGtycHlwlQIneSkYD9XyNI5/view?usp=sharing' target='_black'>
              <h2 className='p-2 bg-slate-100 flex justify-center items-center  opacity-75 hover:opacity-100 text-xs uppercase  text-black font-bold  font-rale active:scale-90 cursor-pointer  rounded-md border'>
                Resume
              </h2>
            </a> */}

          </div>

        </nav>
      </header>

    </>
  )
}

export default Navbar