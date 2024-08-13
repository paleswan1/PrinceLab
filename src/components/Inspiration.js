import React from 'react'
import NatureBackground from "../assets/nature.jpg"

const Inspiration = () => {
  return (
    <div className='max-w-screen-2xl mx-auto px-8 py-16 relative  h-screen'>
      <img 
        src={NatureBackground} 
        alt="nature-background" 
        className='w-full h-full object-cover rounded-xl'
      />
      <div className="absolute inset-0 flex items-start py-28 justify-center">
        <div className="bg-white bg-opacity-50 p-8 rounded-lg text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Every inspiration from nature</h1>
          <p className="text-gray-700 mb-6">Get started using our services with a 30-day free trial</p>
          <button className="bg-black text-white px-6 py-2 rounded-lg">Try it now</button>
        </div>
      </div>
    </div>
  )
}

export default Inspiration
