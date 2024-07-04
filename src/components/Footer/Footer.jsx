import React from 'react'
import './Footer.css'
import logo_footer from '../../assets/logo.png'
import user_img from '../../assets/user_img.svg'


const Footer = () => {
  return (
    <div className='footer'>
        <div className="footer-top">
            <div className="footer-top-left">
               <img src={logo_footer} alt="" />
               <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fuga quia pariatur harum impedit recusandae vel ut quam nisi neque, consequatur suscipit </p>
            </div>
            <div className="footer-top-right">
                <div className="footer-email-input">
                    <img src={user_img} alt="" />
                    <input type='email' placeholder='Enter Your Email'/>
                </div>
                <div className="footer-subscride">Subscribe</div>
            </div>
        </div>
        <hr/>
        <div className="footer-bottom">
            <p className="footer-bottom-left">@ 2023 Aashish Pandey.All rights reserved</p>
            <div className="footer-bottom-right">
                <p>Term of Services</p>
                <p>PriVacy Policy</p>
                <p>Connect With Me</p>
            </div>
        </div>
    </div>
  )
}

export default Footer