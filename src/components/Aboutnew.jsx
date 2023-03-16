import "./Aboutstyles.css";
import { useState } from "react";
import pdf from '../Images/ushiecv.pdf'
import profile from "../Images/profile.png";
import React from 'react'
import { Link } from "react-router-dom";

const Aboutnew = () => {
  const [details, setDetails] = useState("Read more")
 const [click, setClick] = useState(false);
  const handleClick = () => {
    setClick(!click)
    if (!click) {
      setDetails("Show Less")
    }
    else {
      setDetails("Show More")
    }
  };
  return (
    <div className="about">
      <div className="left">
        <h1>Who Am I</h1>
        <p>Mr. Joseph Ushie Ukpen is an indigene of Bedia Obudu. He is a Civil Engineer by training and profession and a graduate from the prestigious Cross River University of Technoogy, During his school days he has served in different capacities during his undergraduate days as president, Nigerian University Engineering Student Association (NUESA) also as the state coordinator of the same association, holding several key position in the state union body wich involves fellowship general secretary CECF, executive member JCCF, chairman commitee of student academics of the faculty, chief chairman organizing commitee of the 2021 NUESA National south-south conference hosted by UNICROSS accomodating over 22 universities across Nigeria.
        <p className={click ? "showmore" : "showless"}>He participated in so many volunteer activities to humbly submit his service, time and resources in the service of te society, these involve WeRise by Initiative to pull out youth from illegal social vices such as cultism, reckless driving, drug abuse and immoral activity, this active campaign covered the auspices of Nigeria university with active presence in CRUTECH and UNICAL. Also a volunteer  in CALABAR GREEN CULTURE, these involves planting of trees, and replacing of fallen trees, and also most recently the sensitizing of the society majorly calabar municipal PVC advocate for permanent voters card registration and social media advocate for active government support for growth development. Some of his education qualifications include B'ENG Civil Engineering and Construction Project Management, skilled in data analytics, leadership organizational structures and administration. </p> <button onClick={handleClick} style={{padding: "10px", background: "yellow", cursor: "pointer"}}>{details}</button></p>
        
        
        
        <div className="links">
        <Link to="/contact" className="btn new" download>Contact</Link>
        <a href={pdf} className="btn new" download>Download C.V</a>
        </div>
        
      </div>
      <div className="right1">
          <img src={profile} alt="profile"/>
      </div>
    </div>
  )
}

export default Aboutnew