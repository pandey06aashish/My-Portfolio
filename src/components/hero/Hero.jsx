import React from 'react'
import './Hero.css'
import profile_img from '../../assets/profile.png'
import AnchorLink from 'react-anchor-link-smooth-scroll'

const Hero = () => {
  return (
    <div id='home' className='hero'>
        <img src={profile_img} alt="" />
        <h1> <span>I’m Aashish Pandey,</span>Pursuing a Bachelor of Computer Applications (BCA).</h1>
        <p> I specialize in Full Stack Web Development using the MERN stack. I thrive on building dynamic and responsive web applications that deliver an exceptional user experience.</p>
         <div className="hero-action">
            <div className="hero-connect"><AnchorLink className='anchor-link' offset={50} href="#contact">Connect with me</AnchorLink></div>
            <div className='hero-resume'>My Resume</div>
         </div>
    </div>
  )
}

export default Hero