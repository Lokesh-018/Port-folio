import React from 'react'
import './Hero.css'
import profile_img from '../../assets/profile_img.svg'
import AnchorLink from 'react-anchor-link-smooth-scroll'


const Hero = () => {
  return (
    <div id='Home' className='hero'>
      <img src={profile_img} alt="" />
      <h1><span>I'm Loknath Sahu,</span> frontend developer based in India.</h1>
      <p>I am a frontend developer, content creator and freelancer from Odisha, India </p>
      <div className="hero-action">
        <div className="hero-connect"><AnchorLink className='anchor-link' offset={50} href='#Contact'>Connect With Me</AnchorLink></div>
        <div className="hero-resume">My Resume</div>
      </div>
    </div>
  )
}

export default Hero
