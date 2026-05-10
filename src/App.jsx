import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import HomePage from "./pages/HomePage";
import AddProjectPage from "./pages/AddProjectPage";
import ProjectDetailPage from "./pages/ProjectDetailPage";
import initialProjects from "./data/initialProjects";

/*
  Main App component:
  - Holds global project state
  - Handles adding new projects
  - Controls routing for SPA navigation
*/

function App() {
  // Central state for all projects (shared across pages)
  const [projects, setProjects] = useState(initialProjects);

  // Adds a new project to the existing list
  const addProject = (project) => {
    setProjects([...projects, project]);
  };

  return (
    <BrowserRouter>
      <Routes>
        {/* Landing page showing all projects */}
        <Route path="/" element={<HomePage projects={projects} />} />

        {/* Form page to add new projects */}
        <Route
          path="/add"
          element={<AddProjectPage addProject={addProject} />}
        />

        {/* Dynamic route for project details */}
        <Route
          path="/project/:id"
          element={<ProjectDetailPage projects={projects} />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;