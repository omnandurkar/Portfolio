import React from 'react'
import { Link, useLocation } from 'react-router-dom'

const Navbar = () => {

  const location = useLocation();

  const isRootRoute = location.pathname === '/';

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

          {isRootRoute && (
            <div className='hidden mt-2 md:block'>
              <ul className='flex -ms-32 gap-5'>
                <li>
                  <Link onClick={() => smoothScrollTo('about')} className='font-oswald ' >About</Link>
                </li>
                <li>
                  <Link onClick={() => smoothScrollTo('contact')} className='font-oswald ' >Contact</Link>
                </li>
                <li>
                  <Link to='/all-projects' className='font-oswald ' >All Projects</Link>
                </li>
              </ul>
            </div>

          )}



          <a href='https://drive.google.com/file/d/13c049p0rHmRTWH_BSrOAUta5o70aKYQS/view?usp=sharing' target='_black'>
            <h2 className='p-2 bg-slate-100 mt-2 opacity-75 hover:opacity-100 text-xs uppercase  text-black font-bold  font-rale active:scale-90 cursor-pointer  rounded-md border'>
              Resume
            </h2>
          </a>
        </nav>
      </header>

    </>
  )
}

export default Navbar