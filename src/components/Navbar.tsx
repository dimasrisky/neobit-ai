import React, { useState } from 'react'
import { LogoDark } from '../assets/Assets'
import { Link } from 'react-router-dom'

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="w-[90%] fixed top-0 left-0 right-0 z-50 backdrop-blur-lg border-b border-primary-white border-opacity-40 mx-auto xl:w-[1180px]">
      <div className="w-full mx-auto py-[7px]">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-2">
            <LogoDark />
            <span className="font-semibold text-white">NeoBot.ai</span>
          </Link>
          <div className='gap-[45px] items-center hidden lg:flex'>
            <Link to="/" className="text-[16px] text-white transition-colors">Home</Link>
            <Link to="/about" className="text-[16px] text-white transition-colors">About</Link>
            <Link to="/features" className="text-[16px] text-white transition-colors">Features</Link>
          </div>
          <Link to={'/conversation'} className="px-[27px] py-[8px] text-sm font-medium text-primary-black bg-primary-white rounded-full hidden lg:flex hover:shadow-lg hover:shadow-primary-white/10 hover:scale-105 transition-all duration-300">Get Started</Link>
          
          <button
            onClick={() => setIsOpen((prev: any) => !prev)} className="lg:hidden p-2 outline-none rounded-md text-gray-400 hover:text-white hover:bg-gray-700"aria-expanded={isOpen}aria-label="Toggle menu">
            <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div onClick={() => setIsOpen((prev: boolean) => !prev)} className={`${isOpen ? 'opacity-100 translate-x-0' : 'translate-x-full opacity-0'} py-6 lg:hidden fixed top-16 right-0 w-64 bg-primary-black shadow-lg rounded-2xl shadow-primary-white/10 transition-all duration-300 ease-in-out`}>
        <div className="px-4 flex flex-col space-y-5">
            <Link to="/"className="px-3 py-2 text-base hover:bg-gray-700 text-white rounded-md transition-colors">Home</Link>
            <Link to="/about" className="px-3 py-2 text-base hover:bg-gray-700 text-white rounded-md transition-colors">About</Link>
            <Link to="/features" className="px-3 py-2 text-base hover:bg-gray-700 text-white rounded-md transition-colors">Features</Link>
            <button className="w-[80%] mx-auto py-2 text-base font-medium text-primary-black bg-primary-white rounded-full hover:shadow-lg hover:shadow-primary-white/10 hover:scale-105">Get Started</button>
        </div>
      </div>
    </nav>
  )
}

export default Navbar