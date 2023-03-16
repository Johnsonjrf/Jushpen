import React from 'react'
import Footer from '../components/Footer';
import Propimage from '../components/Propimage';
import Form from '../components/Form';

import Navbar from '../components/Navbar';
const Contact = () => {
  return (
    <div>
      <Navbar />
      <Propimage h1="CONTACT" p="Lets have a chat"/>
      <Form />
      <Footer />
    </div>
  )
}

export default Contact