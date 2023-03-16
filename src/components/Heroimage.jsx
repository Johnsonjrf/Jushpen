import "./Heroimagestyles.css";
import React from 'react';
// import BG from "../Images/Background.jpg";
import BG1 from "../Images/civil-image.jpg";
import { Link } from "react-router-dom";
import profile from "../Images/profile.png";

const Heroimage = () => {
  return (
    <div  className="hero">
        <div className="mask">
            <img src={BG1} className="bg" alt="background"></img>
        </div>
        <div className="content">
          <div className="content-left">
            <img class="profile" src={profile} alt="profile" />
          </div>
          <div className="content-right">
            <div className="sub-right">
              <p>HI, I'M UKPEN USHIE</p>
                <h1>Structural Engineer</h1>
                <div>
                    <Link to="/project" className="btn">PROJECTS</Link>
                    <Link to="/contact" className="btn btn-light">CONTACT</Link>
                </div>
            </div>
            
          </div>
            
        </div>
    </div>
  )
}

export default Heroimage