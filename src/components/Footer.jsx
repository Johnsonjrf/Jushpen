import "./Footerstyles.css";
import React, { useState } from 'react'
import {FaHome, FaWhatsapp, FaPhone, FaMailBulk, FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";
import {AiOutlineMail} from "react-icons/ai";

const Footer = () => {
    const [hover, setHover] = useState(false);

    const handleHover = () => {
        setHover(!hover)
    }
    const hoverAgain = () => {
        setHover(hover)
    }
  return (
    <div className="footer">
        <div className="footer-container">
            <div className="left">
                <div className="location">
                    
                    <FaHome size={30} style={{ color: "white", marginRight: "2rem", cursor: "pointer", hover: {color: "yellow"}}} className="homeicon"/>
                    <div>
                        <p>Behind Noble Academy, Off Bukuru Express. Jos</p>
                        <p>Nigeria</p>
                    </div>
                </div>
                <div className="phone">
                    <h4><FaPhone size={20} style={{ color: "white", marginRight: "2rem"}}/>
                    +2348000000000</h4>
                
                </div>
                <div className="email">
                    <h4><FaMailBulk size={20} style={{ color: "white", marginRight: "2rem"}}/>
                    Ukpenushejoseph@gmail.com</h4>
                
                </div>
            </div>
            <div className="right">
                <h4>About The Company</h4>
                <p>This is me Ukpen Ushie Joseph, CEO & Founder of Joshpen Engineering Consults. It's all about safe and econonomical structures</p>
                <div className="social">
                <a href="https://www.facebook.com/ukpen.ushie" className={hover ? "test" : " "} onMouseEnter={handleHover} onMouseLeave={hoverAgain}><FaFacebook size={30}  style={{ color: "white", marginRight: "1rem",}}/></a>
                <a href="https://twitter.com/ukpenushie05?t=d76velEkKljCGTj_MMuDKw&s=09" className="test"><FaTwitter  size={30} style={{ color: "white", marginRight: "1rem"}}/></a>
                <a href="https://www.linkedin.com/in/ukpen-ushie-a47b6824a"><FaLinkedin size={30} style={{ color: "white", marginRight: "1rem"}}/></a>
                
                <a href='https://api.whatsapp.com/send?phone=08087570988'><FaWhatsapp size={30} style={{ color: "white", marginRight: "1rem"}}/></a>
                <a href='mailto:ukpenushie05@gmail.com'><span className="changecolor">
                <AiOutlineMail  size={30} style={{ color: "white", marginRight: "1rem"}}/>
                        </span></a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer