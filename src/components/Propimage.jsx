import "./Propimagestyles.css";

import React from 'react'

const Propimage = (props) => {
  return (
    <div className="prop-image">
        <div className="heading">
            <h1>{props.h1}</h1>
            <p>{props.p}</p>

        </div>
    </div>
  )
}

export default Propimage