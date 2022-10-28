import React from "react";
import { Link } from 'react-router-dom'


const Contact = () => {
  return ( 
    <>
    <h1>Contact</h1>
    <h2>Reach out if you'd like to work with me!</h2>
    <Link to="JustEbba@gmail.com">Email</Link>
    <Link to="https://github.com/EbbaSchmid">GitHub</Link>
    <Link to="https://www.linkedin.com/in/ebba-s/">LinkedIn</Link>

    </>
  );
}

export default Contact;