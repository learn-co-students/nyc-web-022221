import React, { useState } from "react";
import ProjectFilters from "./ProjectFilters";
import ProjectItem from "./ProjectItem";

// the text entered in the input

function ProjectList({ projects }) {
  const [searchText, setSearchText] = useState("");


  const filteredProjects = projects.filter((project) => {
  
    return project.name.toLowerCase().includes(searchText.toLowerCase());
  });
  console.log(filteredProjects);

  // [{},{}] => [<ProjectItem />, <ProjectItem />]
  const projectItems = filteredProjects.map((project) => {
    return <ProjectItem key={project.id} project={project} />;
  });

  function handleTextChange(event) {
    setSearchText(event.target.value);
  }

  return (
    <section>
      <h2>Projects</h2>

      <ProjectFilters handleTextChange={handleTextChange} searchText={searchText}/>

      <ul className="cards">{projectItems}</ul>
    </section>
  );
}

export default ProjectList;