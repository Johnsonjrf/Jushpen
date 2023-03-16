import React from 'react';
// import { NavLink } from 'react-router-dom';
import "./Projectpropstyles.css";

const Projectprops = (props) => {
  return (
    
        <div className="project-card">
            <div className="prop-img">
              <div className="sub-propimg">
                <img src={props.imgsrc} alt="card details"/>
              </div>
              <div className="card-text">
                <h2 className="project-title">{props.title}</h2>
              </div>
              
            </div>
            
            <div className="pro-details">
              <p>{props.text}</p>
              <div className="pro-btn">
                <a href={props.view} className="btn">View</a>
                <a href={props.view} className="btn">Source</a>
              </div>
            </div>
        </div>
    
        
    
  )
}

export default Projectprops