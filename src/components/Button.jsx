import React from 'react'

const Button = ({btnTxt, className}) => {
  return (
    <button className={`py-3.5 px-7 rounded-[100px] bg-[#FF7628] ${className}`}>{btnTxt}</button>
  )
}

export default Button