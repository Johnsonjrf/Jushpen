import "./Heroprojectstyles.css";
// import img from "../Images/civil-image4.jpg";
// import { NavLink } from "react-router-dom";
import Projectprops from "./Projectprops";
import ProjectData from "./Projectdata";


import React from 'react';

const Heroproject = (props) => {
  
  return (
    <div className="heroproject">
        <h1 className="project-heading">Projects</h1>
        <div className="project-container">
            { ProjectData.map((value, index) => {
              return(
                <Projectprops 
                key={index}
                imgsrc={value.imgsrc}
                title={value.title}
                view={value.view}
                text={value.text}/>
              )
            })}
        </div>
    </div>
  )
}

export default Heroproject