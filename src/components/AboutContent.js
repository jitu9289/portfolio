import '../styles/AboutContent.css'
import IntroImg from '../uploads/IntroImg.jpg'
import pro1 from '../uploads/pro1.jpg'
import {Link} from 'react-router-dom'

import React from 'react'

const AboutContent = () => {
  return (
    <div className='about'>
        <div className='left'>
            <h1>About Me</h1>
            <p>dajdjaGDIUGDB,jHVDGLIUQBD,HvLDGWLIGDW</p>
            <Link to ="/contact">
                <button className='btn'>
                    Contact
                </button>
            </Link>
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
