import React from 'react'
import styles from "./ProjectsList.module.css"
// import { projects } from "../data/projects";


const ProjectsList = () => {
  return ( 
    <>
    <div className="project-container">

    <img id="guess" src="./images/guess.jpg" alt="projectscreenshot"/>
    <br></br>
    <a href="https://github.com/EbbaSchmid/Guess-The-Tool-Game.git"> Github </a>
    <br></br>
    <a href="https://ebba-guess-the-tool.netlify.app/"> Deployed </a>
		
    <br></br>

    <img src="./images/advice1.jpg" alt="projectscreenshot"/> 
    <br></br>
    <a href="https://github.com/EbbaSchmid/construction-advice.git"> Github </a>
    <br></br>
    <a href="https://construction-advice-tracker.fly.dev"> Deployed </a>

    </div>
    
</>
  );
}

export default ProjectsList;