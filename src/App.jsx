import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Navbar from './components/Navbar/Navbar.jsx'
import Saidbar from './components/Saidbar/Saidbar.jsx'
import Dashboard from './pages/Dashboard/Dashboard.jsx'
import './App.css'
import Icon_menu from './pages/Icon_menu.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        {/* <Navbar/> */}
        {/* <Saidbar/> */}
        <Dashboard/>
        <Icon_menu/>
      </div>
    </>
  )
}

export default App;
