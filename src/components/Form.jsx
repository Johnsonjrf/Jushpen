import "./Formstyles.css";
import ReCAPTCHA from "react-google-recaptcha";
import React from 'react';

const Form = () => {
  const Submit = (e) => {
    const formElements = document.querySelector("form");
    console.log("submitted");

    // https://script.google.com/macros/s/AKfycbwqLelAqUVTR5onJQqzw_7h6_tpYULovXjUyymBTVKW6NtETSI-CcOd4m1jiSRhqmTWNQ/exec

    const formData = new FormData(formElements);
    fetch("https://script.google.com/macros/s/AKfycbwn9oLUqB0QNGT8foagdJKjHXM2YxkF9raIv8zkG4Afvg0SOrOGP2NZZJuU5qlyVEFT/exec", 
    {method: "POST",
     body: formData
  }
    
    ).then((res) => res.json()).then((data) => {
      console.log(data)
    }).catch((error) => console.log(error))

    e.preventDefault()
  }

  const onChange = () => {

  }
  return (
    <div style={{color: "white"}}>
        <form className="form" onSubmit={(e) => Submit(e)}>
            <label>Name</label>
            <input type="text" name="Name"/>
            <label>Email</label>
            <input type="email" name="Email"/>
            <label>Subject</label>
            <input type="text" name="Subject"/>
            <label>Message</label>
            <textarea rows="6" placeholder="Type youe message here" name="Message"/>
            <ReCAPTCHA
    sitekey="6Le1oAYlAAAAACMLhYodsRR8fqBBSaX0t9MPRVh-"
    onChange={onChange}
  />
            <button type="submit" className="btn" onClick={(e) => Submit(e)}>Submit</button>
        </form>
    </div>
  )

  // 6LfuHOAkAAAAAHVAHxtSOkTNhdj72Dla1hQrhMAx
}

export default Form