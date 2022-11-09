import ProjectPreview from "./ProjectPreview";
import { projects } from "../data/projects";

const ProjectsLists = (props) => {
  return (
    <div className="project-container">
    <p className="projectmainfont"></p>
    <ProjectPreview projects={projects}/>
    </div>
  );
}

export {ProjectsLists}