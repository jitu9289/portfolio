import "../styles/Footer.css"
import React from 'react'
import {FaFacebook, FaGithub, FaHome,FaLinkedin,FaMailBulk,FaPhone} from 'react-icons/fa'

const Footer = () => {

  return (
    <div className="footer">
      <div className="footer-container">
        <div className="left">
            <div className="location">
                <FaHome  size={22} style={{color:"#fff", marginRight:"1rem",marginTop:"0.4rem"}} />
                <div>
                    <p>Uttam Nagar </p>
                    <p>New Delhi 110059</p>
                </div>
            </div>
            <div className="phone">
                <h4> <FaPhone size={20} style={{color:"#fff", marginRight:"1rem"}}/>+917065141890</h4>
            </div>
            <div className="Mail">
               <a href="mailto:Jitender.Chauhan9289@gmail.com"><h4> <FaMailBulk size={20} style={{color:"#fff", marginRight:"1rem"}}/>Jitender.Chauhan9289@gmail.com</h4> </a> 
            </div>
        </div>
        <div className="right">
            <h4>About Me</h4>
            <p> I am an software engineering professional have a BTech from Maharaja Agrasen Institute Of Technology (MAIT Delhi).</p>
            <div className="social">
             <a href="https://www.facebook.com/profile.php?id=100062654085422"><FaFacebook size={25} style={{color:"#fff", marginRight:"1rem"}}/></a>
             <a href="https://www.linkedin.com/in/jitu9289/"><FaLinkedin size={25} style={{color:"#fff", marginRight:"1rem"}}/></a>
             <a href="https://github.com/jitu9289"><FaGithub size={25} style={{color:"#fff", marginRight:"1rem"}}/></a>
            </div>
        </div>

      </div>
    </div>
  )
}

export default Footer
