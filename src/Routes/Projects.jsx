import React from 'react'
import Footer from '../components/Footer';
import Heroproject from '../components/Heroproject';


import Navbar from '../components/Navbar';
import Propimage from '../components/Propimage';


const Projects = () => {
  return (
    <div>
      <Navbar />
      <Propimage h1="PROJECT" p="some of my most recent works"/>
      <Heroproject />
      <Footer />
    </div>
  )
}

export default Projects