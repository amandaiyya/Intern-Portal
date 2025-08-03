import React, { useState } from 'react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';
import { Squares2X2Icon, ArrowLeftStartOnRectangleIcon, TrophyIcon } from '@heroicons/react/24/outline';
import { useNavigate } from 'react-router-dom';

function Navbar() {
  const navigate = useNavigate();

  const [openMenu, setOpenMenu] = useState(false);

  return (
    <div className='bg-gray-950 w-full p-4 flex items-center justify-between'>
      <p className='text-white font-semibold underline underline-offset-5 decoration-red-500'>Intern Portal</p>
      <div
        role='button'
        onClick={() => setOpenMenu(prev => !prev)}
        className='w-8'
      >
        <Bars3Icon className='cursor-pointer fill-white'/>
      </div>

      {openMenu && <div className='bg-white w-full h-full absolute top-0 left-0 flex flex-col items-center p-4 space-y-10'>
        <div className='w-full flex items-center justify-between'>
            <p className='text-gray-950 font-semibold underline underline-offset-5 decoration-red-500'>Intern Portal</p>
            <div
                role='button'
                onClick={() => setOpenMenu(prev => !prev)}
                className='w-8'
            >
                <XMarkIcon className='cursor-pointer fill-gray-950 hover:fill-red-500'/>
            </div>
        </div>
        <div className='w-full flex flex-col items-center'>
            <div className='flex flex-col items-start space-y-5'>
                <div 
                  role='button'
                  onClick={() => {
                    navigate('/dashboard')
                    setOpenMenu(false)
                  }}
                  className='w-full flex py-2 px-5 gap-5 hover:bg-gray-950 hover:text-white rounded-sm cursor-pointer'
                >
                    <div className='w-8'>
                        <Squares2X2Icon />
                    </div>
                    <p className='text-xl font-semibol'>Dashboard</p>
                </div>
                <div
                  role='button'
                  onClick={() => {
                    navigate('/leaderboard')
                    setOpenMenu(false)
                  }}
                  className='flex py-2 px-5 gap-5 hover:bg-gray-950 hover:text-white rounded-sm cursor-pointer'>
                    <div className='w-8'>
                        <TrophyIcon />
                    </div>
                    <p className='text-xl font-semibol'>Leaderboard</p>
                </div>
            </div>
        </div>
        <div className='w-full mt-auto flex flex-col items-center'>
            <div className='flex flex-col items-start'>
                <div 
                  role='button'
                  onClick={() => {
                    navigate('/login')
                    setOpenMenu(false)
                  }}
                  className='flex py-2 px-5 gap-3 hover:bg-red-500 hover:text-white rounded-sm cursor-pointer'
                >
                    <div className='w-8'>
                        <ArrowLeftStartOnRectangleIcon />
                    </div>
                    <p className='text-xl font-semibol'>Logout</p>
                </div>
            </div>
        </div>
      </div>}
    </div>
  )
}

export default Navbar
