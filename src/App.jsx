import { useState } from 'react'
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Home from './views/Home/Home.jsx'
import AllProjects from './views/AllProjects/AllProjects.jsx';
import Exp from './components/Experience/Exp.jsx';

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
      path: "experience",
      element: <Exp />
    }
  ])

  return (
    <>

      <RouterProvider router={router} />

    </>
  )
}

export default App
