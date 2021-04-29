import React, { useState } from "react";
import ProjectItem from "./ProjectItem";

// the text entered in the input

function ProjectList({ projects }) {
  const [searchText, setSearchText] = useState("");
  console.log(searchText);

  // map over the array of project objects => return an array of ProjectItem components

  // assembly line!
  // [{}, {}, {}, {}] => [{}, {}]
  const filteredProjects = projects.filter((project) => {
    // return true or false
    // if the search text matches some data about the project, return true
    // .startWith
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

      <div className="filter">
        <button>All</button>
        <button>Phase 5</button>
        <button>Phase 4</button>
        <button>Phase 3</button>
        <button>Phase 2</button>
        <button>Phase 1</button>
      </div>
      <input onChange={handleTextChange} type="text" placeholder="Search..." />

      <ul className="cards">{projectItems}</ul>
    </section>
  );
}

export default ProjectList;