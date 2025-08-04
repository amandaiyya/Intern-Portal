import React from 'react';
import { Squares2X2Icon, ArrowLeftStartOnRectangleIcon, TrophyIcon } from '@heroicons/react/24/outline';
import { useNavigate, NavLink } from 'react-router-dom';

function Sidebar() {
  const navigate = useNavigate();

  return (
    <div className='w-auto xl:w-1/5  bg-gray-950  px-6 py-8 flex flex-col items-center space-y-15'>
      <p className='text-white font-bold text-xl underline underline-offset-5 decoration-red-500 '>Intern Portal</p>
      <div className='w-full flex flex-col items-center'>
            <div className='flex flex-col items-start space-y-4 text-white'>
                <NavLink 
                  to='/dashboard'
                  className={({isActive}) => `w-full flex py-2 px-2 gap-5 rounded-sm cursor-pointer ${
                    isActive ? 'bg-white text-gray-950' : 'hover:bg-white hover:text-gray-950'
                  }`}
                >
                    <div className='w-8'>
                        <Squares2X2Icon />
                    </div>
                    <p className='text-lg'>Dashboard</p>
                </NavLink>
                <NavLink
                  to='/leaderboard'
                  className={({isActive}) => `w-full flex py-2 px-2 gap-5 rounded-sm cursor-pointer ${
                    isActive ? 'bg-white text-gray-950' : 'hover:bg-white hover:text-gray-950'
                  }`}
                >  
                    <div className='w-8'>
                        <TrophyIcon />
                    </div>
                    <p className='text-lg'>Leaderboard</p>
                </NavLink>
            </div>
      </div>
      <div className='w-full mt-auto flex flex-col items-center'>
          <div className='flex flex-col items-start'>
              <div 
                role='button'
                onClick={() => {
                  navigate('/login')
                }}
                className='flex py-2 px-5 gap-3 hover:bg-red-500 rounded-sm cursor-pointer'
              >
                  <div className='w-8'>
                      <ArrowLeftStartOnRectangleIcon className='stroke-white'/>
                  </div>
                  <p className='text-xl font-semibol text-white'>Logout</p>
              </div>
          </div>
      </div>
    </div>
  )
}

export default Sidebar
