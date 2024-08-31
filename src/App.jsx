import { useState } from 'react'
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Home from './views/Home/Home.jsx'
import AllProjects from './views/AllProjects/AllProjects.jsx';

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />
    },
    {
      path: "/all-projects",
      element: <AllProjects/>
    }
  ])

  return (
    <>

      <RouterProvider router={router} />

    </>
  )
}

export default App
