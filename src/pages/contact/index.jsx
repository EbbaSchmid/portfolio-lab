import React from "react";
import { Link } from 'react-router-dom'


const Contact = () => {
  return ( 
    <>
    <h1>Contact</h1>

    <Link to="JustEbba@gmail.com">Email</Link>
    <br></br>
    <Link to="https://github.com/EbbaSchmid">GitHub</Link>
    <br></br>
    <Link to="https://www.linkedin.com/in/ebba-s/">LinkedIn</Link>

    </>
  );
}

export default Contact;