import ProjectForm from "../components/ProjectForm";

function AddProjectPage({ addProject }) {
  return (
    <div>
      <h1>Add Project</h1>
      <ProjectForm addProject={addProject} />
    </div>
  );
}

export default AddProjectPage;