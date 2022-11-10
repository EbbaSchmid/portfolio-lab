import React from 'react'
import { Link } from "react-router-dom"
import styles from "./Contact.module.css"


const Contact = () => {
  return ( 
    <div class="about flexbox-item-2">
    <main className={styles.contact}>
    <>
    <h1>Contact</h1>

    <Link to="JustEbba@gmail.com">Email</Link>
    <br></br>
    <Link to="https://github.com/EbbaSchmid">GitHub</Link>
    <br></br>
    <Link to="https://www.linkedin.com/in/ebba-s/">LinkedIn</Link>

    </>
    </main>
    </div>
  );
}

export default Contact;