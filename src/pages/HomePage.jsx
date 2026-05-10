import { useState } from "react";
import ProjectList from "../components/ProjectList";
import SearchBar from "../components/SearchBar";

/*
  HomePage:
  - Displays all projects
  - Handles search filtering logic
*/

function HomePage({ projects }) {
  const [search, setSearch] = useState("");

  // Filters projects based on search input
  const filteredProjects = projects.filter((project) =>
    project.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <h1>My Projects</h1>

      {/* Search input controls filtering */}
      <SearchBar search={search} setSearch={setSearch} />

      {/* Displays filtered results */}
      <ProjectList projects={filteredProjects} />
    </div>
  );
}

export default HomePage;