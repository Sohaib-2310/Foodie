import React from 'react'
import './Navbar.css'
import { FaUser, FaSearch } from "react-icons/fa";
import { PiShoppingCartSimpleFill } from "react-icons/pi";

const Navbar = () => {
  return (
    <>
      <nav className="flex justify-between items-center mx-12 w-auto border border-amber-600">
        <div className="logo">Foodie</div>

        <div className="menu-items flex">
          <ul className="flex items-center">
            <li><a href="#">Home</a></li>
            <li><a href="#">Menu</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Book Table</a></li>
          </ul>

          <ul className="flex items-center">
            <li><a href="#"><FaUser /></a></li>
            <li><a href="#"><PiShoppingCartSimpleFill /></a></li>
            <li><a href="#"><FaSearch /></a></li>
            <li><button>Order Online</button></li>
          </ul>
        </div>
      </nav>
    </>
  )
}

export default Navbar

