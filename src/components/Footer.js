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
                    <p>heloo my adress</p>
                    <p>new delhi 110059</p>
                </div>
            </div>
            <div className="phone">
                <h4> <FaPhone size={20} style={{color:"#fff", marginRight:"1rem"}}/>7065141890</h4>
            </div>
            <div className="Mail">
                <h4> <FaMailBulk size={20} style={{color:"#fff", marginRight:"1rem"}}/>cjitender79@gmail.com</h4>
            </div>
        </div>
        <div className="right">
            <h4>About Me</h4>
            <p>czskhaflkjabwd cbwawfblwkjEJQ/LJEN h.kifhwqo;hr3iol2.knq fwiuqhefilu2hqoilw. 2 liugwileugfliu    ewhro;   ligliwuegfliub.kfwh
            </p>
            <div className="social">
             <FaFacebook size={25} style={{color:"#fff", marginRight:"1rem"}}/>
             <FaLinkedin size={25} style={{color:"#fff", marginRight:"1rem"}}/>
             <FaGithub size={25} style={{color:"#fff", marginRight:"1rem"}}/>
            </div>
        </div>

      </div>
    </div>
  )
}

export default Footer
