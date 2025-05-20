import React from 'react'
import './LandingPg.css'
import Navbar from '../../components/Navbar'
import Button from '../../components/Button'
import { FaCircle } from "react-icons/fa";

const LandingPg = () => {
  return (
    <>
      <div className="hero h-[107vh]">
        <div className="hero-container">
          < Navbar />

          <div className="hero-slider text-white ml-11 mt-9 w-[45%]">
            <h1>Fast Food Restaurant</h1>
            <p className='text-[14px] pt-2'>Doloremque, itaque aperiam facilis rerum, commodi, temporibus sapiente ad mollitia
              laborum quam quisquam esse error unde. Tempora ex doloremque, labore, sunt repellat
              dolore, iste magni quos nihil ducimus libero ipsam.
            </p>
            <div className="btn pt-6">< Button title="Order Now" /></div>
          </div>

          <div className="slider-btn flex items-center gap-1.5 text-white text-[13px] ml-11 mt-39">
            <span className='text-[#ffbe33] text-[20px]'><FaCircle /></span>
            <span><FaCircle /></span>
            <span><FaCircle /></span>
          </div>
        </div>
      </div>
    </>
  )
}

export default LandingPg
