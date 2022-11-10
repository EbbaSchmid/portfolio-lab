import { projects } from "../data/projects";
import styles from "./ProjectDetails.module.css";
import findProject from "../utilities/findProject";
import { useParams } from "react-router-dom";
import { useLocation } from "react-router-dom";

const ProjectDetails = () => {
  const params = useParams()
  const location = useLocation()
  let locProj = location.pathname
  locProj = locProj.replace('/projects/', '')
  const project = findProject(locProj)


  return ( 
    <main className={styles.projectDetails}>
    <>
    <h1>{project.title}</h1>
    <p>{project.description}</p>
    <img src={project.image} alt="screenshot"/>


    <a href ={project.repositoryLink}
    ><button>GitHub Link</button></a>

    <a href ={project.deploymentLink}><button>Deployed Link</button></a>
    </>
    </main>
  );
}

export default ProjectDetails;