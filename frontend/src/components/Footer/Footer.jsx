import React from 'react'
import { BsInstagram } from 'react-icons/bs'
import { FaFacebook } from 'react-icons/fa'
import { BsTwitterX } from 'react-icons/bs'
import './Footer.css'

const Footer = () => {
  return (
    <div>
      <div className="footer">
        <div className="footer_content">
          <div className="footer_name">
            <h2>Shopwave</h2>
          </div>
          <div className="footer_socials">
          <FaFacebook className='footer_icon'/>
          <BsInstagram className='footer_icon'/>
          <BsTwitterX className='footer_icon'/>
        </div>
        </div>
        <div className="copy">
        <p>Copyright © Shopwave 2024. All rights reserved</p>
      </div>
      </div>
     
    </div>
  )
}

export default Footer