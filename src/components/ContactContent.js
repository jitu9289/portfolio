import React from 'react'
import '../styles/ContactContent.css'
// import { Link } from 'react-router-dom'
import { FaFacebook,FaLinkedin,FaMailBulk,FaTwitter} from 'react-icons/fa'

<link href="https://netdna.bootstrapcdn.com/font-awesome/4.0.1/css/font-awesome.css" rel="stylesheet"></link>

const handleClickLinkedln =()=>{
    return window.open("https://www.linkedin.com/in/jitu9289/");
}

const handleClickFaMailBulk =()=>{
    return window.open("https://www.linkedin.com/in/jitu9289/");
}
const handleClickFaTwitter =()=>{
    return window.open("https://www.linkedin.com/in/jitu9289/");
}

const handleClickFaFacebook =()=>{
    return window.open("https://www.linkedin.com/in/jitu9289/");
}


const ContactContent = () => {
  return (
    <div className='contact-contents'>
      <h1 className='contact-heading'>Click on these icons</h1>
      <div className='contact-container' >
        <div className='fa  bounce'><FaLinkedin  size={220} style={{color:"#fff", marginRight:"1rem",marginTop:"0.4rem"}} onClick={handleClickLinkedln} /></div>

        <div className='fa  bounce'><FaMailBulk  size={220} style={{color:"#fff", marginRight:"1rem",marginTop:"0.4rem"}} onClick={handleClickFaMailBulk} /></div>


        <div className='fa  bounce'><FaFacebook size={220} style={{color:"#fff", marginRight:"1rem",marginTop:"0.4rem"}} onClick={handleClickFaFacebook} /></div>
        
        <div className='fa  bounce'><FaTwitter  size={220} style={{color:"#fff", marginRight:"1rem",marginTop:"0.4rem"}} onClick={handleClickFaTwitter}  /></div>
        
      </div>

    </div>
  )
}

export default ContactContent
