import { useParams } from "react-router-dom";

function ProjectDetailPage({ projects }) {
  const { id } = useParams();

  const project = projects.find((p) => p.id == id);

  if (!project) return <h2>Project not found</h2>;

  return (
    <div>
      <h1>{project.title}</h1>
      <p>{project.description}</p>
    </div>
  );
}

export default ProjectDetailPage;