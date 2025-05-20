import React from 'react'
import './Navbar.css'
import { FaUser, FaSearch } from "react-icons/fa";
import { PiShoppingCartSimpleFill } from "react-icons/pi";
import { IoMenu } from "react-icons/io5";
import Button from './Button'

const Navbar = () => {
  return (
    <>
      <nav className="flex justify-between items-center text-white px-11 py-5 w-auto">
        <div className="logo cursor-pointer">Foodie</div>

        <div className="menu-items hidden gap-35 lg:flex">
          <ul className="flex items-center uppercase gap-[40px]">
            <li><a href="#" className='text-[#ffbe33] '>Home</a></li>
            <li><a href="#" className='duration-[0.3s] hover:text-[#ffbe33]'>Menu</a></li>
            <li><a href="#" className='duration-[0.3s] hover:text-[#ffbe33]'>About</a></li>
            <li><a href="#" className='duration-[0.3s] hover:text-[#ffbe33]'>Book Table</a></li>
          </ul>

          <ul className="flex items-center gap-[15px]">
            <li><a href="#" className='duration-[0.3s] hover:text-[#ffbe33] text-[16px]'><FaUser /></a></li>
            <li><a href="#" className='duration-[0.3s] hover:text-[#ffbe33] text-[16px]'><PiShoppingCartSimpleFill /></a></li>
            <li><a href="#" className='duration-[0.3s] hover:text-[#ffbe33] text-[16px]'><FaSearch /></a></li>
            <li>< Button title="Order Online" /></li>
          </ul>
        </div>

        <div className="menu-bar block lg:hidden"><a href="#" className='text-[50px]'><IoMenu /></a></div>
      </nav>
    </>
  )
}

export default Navbar

