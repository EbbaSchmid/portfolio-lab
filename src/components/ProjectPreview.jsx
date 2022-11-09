import styles from "./ProjectPreview.module.css"
import { Link } from "react-router-dom";

  const ProjectPreview = (props) => {
    return ( 
      <div className="project-container">
      <p className="projectfont"> {projects[0].title}</p>
      <p>{projects[0].description}</p>
      <img src="./images/guess.jpg"></img>
      <a href="https://github.com/EbbaSchmid/Guess-The-Tool-Game" className="buttonlink2"> Github </a>
      <a href="https://ebba-guess-the-tool.netlify.app/" className="buttonlink3"> Deployed </a>

      <p className="projectfont">{projects[1].title}</p>
      <p>{projects[1].description}</p>
      <img src="./images/advice1.jpg"></img>
      <a href="https://github.com/EbbaSchmid/construction-advice" className="buttonlink2"> Github </a>
      <a href="https://construction-advice-tracker.fly.dev/advices" className="buttonlink3"> Deployed </a>

      </div>
  );
}
export {ProjectPreview}