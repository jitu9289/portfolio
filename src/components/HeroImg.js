import React from 'react'
import '../styles/HeroImg.css'
import IntroImg from '../uploads/IntroImg.jpg'
import {Link} from 'react-router-dom'

const HeroImg = () => {
  return (
    <div className='hero'>
        <div className='mask'>
            <img className='intro-img' src={IntroImg} alt="Intro_image"></img>
        </div>
        <div className='content'>
            <p>
              Hi im Software Engineer
              <h1>Full Stack Developer</h1>
            </p>
        <div>
            <Link to='Project' className='btn'>Projects</Link>
            <Link to='Contact' className='btn btn-light'>Contact</Link>
        </div>
        </div>
    </div>
  )
}

export default HeroImg
