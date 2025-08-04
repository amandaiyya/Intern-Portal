import React, { useEffect, useState } from 'react'
import { Outlet } from 'react-router-dom';
import {
  Navbar,
  Sidebar,
} from '../components';

function Home() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768)
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize);
    }
  },[])

  return (
    <div className='bg-[#eef3f7] w-screen h-screen flex flex-col md:flex-row'>
      {isMobile 
        ? <Navbar /> 
        : <Sidebar />}
      
      <div>
        <div></div>
        <Outlet />
      </div>
    </div>
  )
}

export default Home;
