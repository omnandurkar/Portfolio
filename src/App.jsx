import { useState } from 'react'
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Home from './views/Home/Home.jsx'
import AllProjects from './views/AllProjects/AllProjects.jsx';
// import Exp from './components/Experience/Exp.jsx';
import NotFound from './views/NotFound/NotFound.jsx';
import ProjectTimeline from './views/ProjectTimeline/ProjectTimeline.jsx';

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />
    },
    {
      path: "/all-projects",
      element: <AllProjects />
    },
    {
      path: "/timeline",
      element: <ProjectTimeline />
    },
    {
      path: "*",
      element: <NotFound />
    }
  ])

  return (
    <>

      <RouterProvider router={router} />

    </>
  )
}

export default App
