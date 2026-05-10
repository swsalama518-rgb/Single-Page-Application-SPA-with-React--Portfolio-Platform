import { Link } from "react-router-dom";

function ProjectCard({ project }) {
  return (
    <div>
      <h3>{project.title}</h3>
      <p>{project.description}</p>

      <Link to={`/project/${project.id}`}>
        View Details
      </Link>
    </div>
  );
}

export default ProjectCard;