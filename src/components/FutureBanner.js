import React from 'react'
import OriginalBg from "../assets/original.jpg"

const FutureBanner = () => {
  return (
    <div className='w-screen h-[40vh] relative'>
        <img 
          src={OriginalBg} 
          alt="original-bg" 
          className='w-full h-full object-cover opacity-60' 
        />
        <div className="absolute inset-0 flex py-10 justify-center">
          <h1 className="text-6xl font-bold">Building the future</h1>
        </div>
    </div>
  )
}

export default FutureBanner
