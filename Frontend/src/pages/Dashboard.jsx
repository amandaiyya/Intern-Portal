import React, { useState } from 'react'
import { UserCircleIcon, CurrencyRupeeIcon } from '@heroicons/react/24/solid';
import { Button } from '../components';

function Dashboard() {

  return (
    <>
      <div className='flex flex-col md:flex-row justify-center w-full gap-5 p-5'>
        <div className='w-full flex flex-col gap-5'>
          <div className='bg-white roudned-sm p-3 flex items-center gap-5 flex-wrap lg:flex-nowrap shadow-md'>
            <div className='w-15'>
              <UserCircleIcon />
            </div>
            <div>
              <p className='text-2xl font-semibold'>Aman Daiyya</p>
              <p className='text-lg text-red-500 font-medium'>Level one intern</p>
            </div>
          </div>
          <div className='bg-white rounded-sm p-3 flex flex-col shadow-md'>
              <p className='text-lg mb-1'>Referral Code</p>
              <p className='text-2xl font-semibold break-words'>amandaiyya2025</p>
              <Button
              className='mt-5 mb-2 bg-red-500 text-white hover:bg-gray-950 rounded-sm'
              >
                Share
              </Button>
          </div>
        </div>
        <div className='bg-gray-950 text-white w-full rounded-sm px-3 p-4 lg:p-6 space-y-2 shadow-md'>
          <p className='font-bold text-xl md:text-2xl'>Total Donation Raised</p>
          <p className='flex items-center gap-3'>
            <CurrencyRupeeIcon className='w-8 md:w-10'/>
            <span className='font-bold text-3xl md:text-4xl text-lime-400'>25000</span>
          </p>
        </div>
      </div>
      <div className='px-5 pb-5'>
        <div className='bg-white w-full p-4 space-y-2 lg:space-y-4 shadow-md'>
          <p className='text-gray-950 text-xl font-semibold'>Rewards</p>
          <div className='flex items-center gap-3 flex-wrap'>
            <div className='p-2 bg-[#eef3f7] rounded-md flex flex-col justify-center text-center shadow-md'>
              <img src="/merit.svg" alt="icon" className='w-10 lg:w-13'/>
              <p className='text-sm font-medium lg:text-md'>Level 1</p>
            </div>
            <div className='p-2 bg-[#eef3f7] rounded-md flex flex-col justify-center text-center shadow-md'>
              <img src="/trophy.svg" alt="icon" className='w-10 lg:w-13'/>
              <p className='text-sm font-medium lg:text-md'>100</p>
            </div>
            <div className='p-2 bg-[#eef3f7] rounded-md flex flex-col justify-center text-center shadow-md'>
              <img src="/winnermedel.svg" alt="icon" className='w-10 lg:w-13'/>
              <p className='text-sm font-medium lg:text-md'>2000</p>
            </div>
            <div className='p-2 bg-[#eef3f7] rounded-md flex flex-col justify-center text-center shadow-md'>
              <img src="/level2.svg" alt="icon" className='w-10 lg:w-13'/>
              <p className='text-sm font-medium lg:text-md'>level 2</p>
            </div>
          </div>
          <p className='font-medium text-lg'>Unlockables</p>
          <div className='flex flex-col gap-3'>
            <div className='p-2 bg-[#eef3f7] rounded-md flex items-center gap-2 lg:gap-5 shadow-md'>
              <img src="/winner.svg" alt="icon" className='w-10 lg:w-13'/>
              <div className='space-y-1 w-full'>
                <div className='flex items-center justify-between text-sm lg:text-lg font-medium'>
                  <span>50000</span>
                  <span>50%</span>
                </div>
                <div className='bg-gray-300 h-2 rounded-xl'>
                  <div className='bg-red-500 h-2 rounded-xl w-[50%]'></div>
                </div>
                <p className='text-xs lg:text-lg'>Raise donation</p>
              </div>
            </div>
            <div className='p-2 bg-[#eef3f7] rounded-md flex items-center gap-2 lg:gap-5 shadow-md'>
              <img src="/level3.svg" alt="icon" className='w-10 lg:w-13'/>
              <div className='space-y-1 w-full'>
                <div className='flex items-center justify-between text-sm lg:text-lg font-medium'>
                  <span>level 3</span>
                  <span>15%</span>
                </div>
                <div className='bg-gray-300 h-2 rounded-xl'>
                  <div className='bg-red-500 h-2 rounded-xl w-[15%]'></div>
                </div>
                <p className='text-xs lg:text-lg'>Level up your profile</p>
              </div>
            </div>
            <div className='p-2 bg-[#eef3f7] rounded-md flex items-center gap-2 lg:gap-5 shadow-md'>
              <img src="/referred5.svg" alt="icon" className='w-10 lg:w-13'/>
              <div className='space-y-1 w-full'>
                <div className='flex items-center justify-between text-sm lg:text-lg font-medium'>
                  <span>referred 5</span>
                  <span>75%</span>
                </div>
                <div className='bg-gray-300 h-2 rounded-xl'>
                  <div className='bg-red-500 h-2 rounded-xl w-[75%]'></div>
                </div>
                <p className='text-xs lg:text-lg'>refer five people</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Dashboard;
