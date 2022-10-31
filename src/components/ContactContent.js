import React from 'react'
import '../styles/ContactContent.css'
import { FaFacebook, FaLinkedin, FaMailBulk, FaTwitter } from 'react-icons/fa'

<link href="https://netdna.bootstrapcdn.com/font-awesome/4.0.1/css/font-awesome.css" rel="stylesheet"></link>


const ContactContent = () => {
  return (
    <div className='contact-contents'>
      <h1 className='contact-heading'>Click on these icons</h1>
      <div className='contact-container' >
        <a href="https://www.linkedin.com/in/jitu9289/" className='fa  bounce'><FaLinkedin size={220} style={{ color: "#fff", marginRight: "1rem", marginTop: "0.4rem" }} /></a>

        <a href="mailto:jitender.chauhan9289@gmail.com" className='fa  bounce'><FaMailBulk size={220} style={{ color: "#fff", marginRight: "1rem", marginTop: "0.4rem" }} /></a>

        <a href="https://www.facebook.com/profile.php?id=100062654085422" className='fa  bounce'><FaFacebook size={220} style={{ color: "#fff", marginRight: "1rem", marginTop: "0.4rem" }} /></a>

        <a href="https://twitter.com/jitu9289" className='fa  bounce'><FaTwitter size={220} style={{ color: "#fff", marginRight: "1rem", marginTop: "0.4rem" }} /></a>
      </div>
    </div>
  )
}

export default ContactContent
