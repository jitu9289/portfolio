import '../styles/AboutContent.css'
import IntroImg from '../uploads/IntroImg.jpg'
import pro1 from '../uploads/pro1.jpg'
// import {Link} from 'react-router-dom'

import React from 'react'

const AboutContent = () => {
  return (
    <div className='about'>
        <div className='left'>
            <h1>About Me</h1>
            <p>I'm an 1.5+ experienced software engineer, currently working in TCS. I am constantly seeks out innovative solutions to everyday problems. I am an technology enthusiast who loves working on front-end and back-end technologies.</p>
            <a href="https://drive.google.com/drive/folders/1c1Rn0LcZdkorhDZ3pP8f4pw5b4KZ0jR1?usp=sharing">
                <button className='btn'>
                    Resume
                </button>
            </a>
        </div>
        <div className='right'>
            <div className='img-container'>
                <div className='img-top'>
                    <img src={IntroImg} className='img' alt='true'>
                    </img>
                </div>
                <div className='img-bottom'>
                    <img src={pro1} className='img' alt='true'>
                    </img>
                </div>
            </div>
        </div>
      
    </div>
  )
}

export default AboutContent
