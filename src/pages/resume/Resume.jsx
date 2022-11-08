import { Link } from "react-router-dom"
import styles from "./Resume.module.css"


const Resume = () => {
  return ( 
    <main className={styles.resume}>
    <>
    <h1>Resume</h1>
    <Link to="./files/.pdf">
    </Link>
    <p>My work and experience</p>
    <a href="./files/.pdf" download="Resume">Click here</a>


    <a href="./files/.pdf" download="Resume">
    <img src="https://i.imgur.com/BT3MrST.png" alt="Resume"></img></a>


    </>
    </main>
  );
}

export default Resume;