import React from 'react'
import styles from "./Resume.module.css"


const Resume = () => {
  return ( 
    <main className={styles.resume}>
    <>
    <h1>Resume</h1>
    <p>My work and experience here:</p>
    <a href="https://drive.google.com/file/d/1Y5tOhiB5dMIRCYz_ZGPcwhgb-VR_73jI/view?usp=sharing" download="Resume">Click here</a>

    </>
    </main>
  );
}

export default Resume;