import React from 'react'
import { Link } from "react-router-dom"
import styles from "./Resume.module.css"


const Resume = () => {
  return ( 
    <main className={styles.resume}>
    <>
    <h1>Resume</h1>
    <Link to="./files/EbbaS-CV.docx.pdf">
    </Link>
    <p>My work and experience</p>
    <a href="./files/EbbaS-CV.docx.pdf" download="Resume">Click here</a>

    </>
    </main>
  );
}

export default Resume;