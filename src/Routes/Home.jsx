import React from 'react'
import Footer from '../components/Footer';
import Heroimage from '../components/Heroimage';
import Heroproject from '../components/Heroproject';
import Navbar from '../components/Navbar';

const Home = () => {
  return (
    <div>
        <Navbar />
        <Heroimage />
        <Heroproject />
        <Footer />
    </div>
  )
}

export default Home