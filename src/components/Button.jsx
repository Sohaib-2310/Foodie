import React from 'react'

const Button = (props) => {
    return (
        <>
            <button className='bg-[#ffbe33] text-white rounded-[45px] px-[30px] py-[8px] cursor-pointer duration-[0.3s] hover:bg-[#e69c00]'>{props.title}</button>
        </>
    )
}

export default Button
