import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Navbar from './components/Navbar/Navbar.jsx';
import Saidbar from './components/Saidbar/Saidbar.jsx';
import Footer from './components/Footer/Footer.jsx';
import Dashboard from './pages/Dashboard/Dashboard.jsx';
import Icon_menu from './pages/Icon_menu.jsx';
import Widgets from './pages/Widgets.jsx';
import Avatars from './components/Avatars/Avatars.jsx';
import Sidebar_style_2 from './pages/Sidebar_style_2.jsx';
import Forms from './components/Forms/Forms.jsx';
import Panels from "./components/Panels.jsx";
import Simple_line_icon from "./components/Simple_line_icons.jsx";
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Saidbar />
      <div className="main-content">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/icon_menu" element={<Icon_menu />} />
          <Route path="/avatars" element={<Avatars />} />
          <Route path="/widgets" element={<Widgets />} />
          <Route path="/sidebar_style_2" element={<Sidebar_style_2 />} />
          <Route path="/forms" element={<Forms />} />
          <Route path="/panels" element={<Panels />} />
        </Routes>
      </div>
      {/* <Forms/> */}
      {/* <Sidebar_style_2/> */}
      {/* <Footer /> */}
      {/* <Panels/> */}
      
      
    </BrowserRouter>
  );
}

export default App;
