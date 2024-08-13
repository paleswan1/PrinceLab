import React from 'react'
import Feature1 from "../assets/feature-1.png"
import Feature2 from "../assets/feature-2.jpg"
import Feature3 from "../assets/feature-3.png"


const Features = () => {
  return (
    <div className='max-w-screen-2xl mx-auto px-8 py-16'>
        <div className="grid grid-cols-2 gap-8">
            <div className="">
                <img src={Feature1} alt="feature-1" className='w-full h-full object-cover rounded-xl' />
            </div>
            <div className="text-8xl font-bold leading-snug">
                Features <br /><span className='text-orange-500'>Ought </span>to <br />Partake
            </div>
            <div className="">
                <img src={Feature2} alt="feature-2" className='w-full h-full object-cover rounded-xl' />
            </div>
            <div className="">
                <img src={Feature3} alt="feature-3" className='w-full h-full object-cover rounded-xl' />
            </div>
        </div>
    </div>
  )
}

export default Features