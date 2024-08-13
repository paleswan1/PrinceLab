import React from 'react'

const Navbar = () => {
  return (
    <nav className="bg-gray-500 py-3 h-[8vh]">
      <div className="max-w-screen-2xl mx-auto px-4 flex justify-center">
        <ul className="flex space-x-10 py-auto">
          <li className="text-white hover:text-gray-300 cursor-pointer">Home</li>
          <li className="text-white hover:text-gray-300 cursor-pointer">Features</li>
          <li className="text-white hover:text-gray-300 cursor-pointer">Download</li>
          <li className="text-white hover:text-gray-300 cursor-pointer">Career</li>
          <li className="text-white hover:text-gray-300 cursor-pointer">Pricing</li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
