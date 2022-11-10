import React from 'react'
// import { projects } from "../data/projects";


const ProjectsList = () => {
  return ( 
    <>
    <div className="project-container">

    <img src="./images/guess.jpg" alt="projectscreenshot"/>
    <a href="https://github.com/EbbaSchmid/Guess-The-Tool-Game.git"> Github </a>
    <a href="https://ebba-guess-the-tool.netlify.app/"> Deployed </a>
				

    <img src="./images/advice1.jpg" alt="projectscreenshot"/> 
    <a href="https://github.com/EbbaSchmid/construction-advice.git"> Github </a>
    <a href="https://construction-advice-tracker.fly.dev"> Deployed </a>

    </div>
    
</>
  );
}

export default ProjectsList;