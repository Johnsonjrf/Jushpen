import React from 'react'
import Footer from '../components/Footer';
import Aboutnew from '../components/Aboutnew';
import Navbar from '../components/Navbar';
import Propimage from '../components/Propimage';
const About = () => {
  return (
    <div>
      <Navbar />
      <Propimage h1="About" p="I'm a friendly Structural Engineer" />
      <Aboutnew />
      <Footer />
    </div>
  )
}

export default About