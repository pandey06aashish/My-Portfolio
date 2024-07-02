import React from 'react'
import './Hero.css'
import profile_img from '../../assets/profile.png'

const Hero = () => {
  return (
    <div className='hero'>
        <img src={profile_img} alt="" />
        <h1> <span>I’m Aashish Pandey,</span>Pursuing a Bachelor of Computer Applications (BCA).</h1>
        <p> I specialize in Full Stack Web Development using the MERN stack. I thrive on building dynamic and responsive web applications that deliver an exceptional user experience.</p>
         <div className="hero-action">
            <div className="hero-connect">Connect with me</div>
            <div className='hero-resume'>My Resume</div>
         </div>
    </div>
  )
}

export default Hero