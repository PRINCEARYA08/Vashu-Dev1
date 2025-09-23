import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Navbar from './components/Navbar/Navbar.jsx'
import Saidbar from './components/Saidbar/Saidbar.jsx'
import Dashboard from './pages/Dashboard/Dashboard.jsx'
import './App.css'
import Icon_menu from './pages/Icon_menu.jsx'
import Widgets from './pages/Widgets.jsx'
import Avatars from './components/Avatars/Avatars.jsx'
import Footer from './components/Footer/Footer.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom' 
function App() {
  
  const router = createBrowserRouter([
    {
        path: "/",
        element: <Dashboard/>
    },
    {
        path: "/icon_menu",
        element: <Icon_menu/>
    },
    // {
    //     path: "/avatars",
    //     element: <Avatars/>
    // },
    {
        path: "/widgets",
        element: <Widgets/>
    }
])
  

  return (
    <>
     <Navbar/>
     <Saidbar/>
      <RouterProvider router={router}/> 
      <div>
        
        {/* <Navbar/> */}
        {/* <Saidbar/> */}
        {/* <Dashboard/> */}
        {/* <Icon_menu/> */}
        {/* <Avatars/> */}
        {/* <Widgets/> */}
        {/* <Footer/> */}
        {/* <Forms/> */}
      </div>
    </>
  )
}

export default App;
