/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import imgLogo from './Logo.png'
import "./Logo.css"


export default function Logo() {
  return (
    <div className='logo'>
      <img className='imgLogo' src={imgLogo} />
    </div>
  )
}
