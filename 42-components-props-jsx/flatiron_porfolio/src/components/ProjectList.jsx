// import React from 'react'

import ProjectItem from "./ProjectItem";
import projects from "../data.js";

function ProjectList() {
  // const projectItems = projects.map(project => {
  //   return (
  //   <ProjectItem 
  //     name={project.name} 
  //     about={project.about} 
  //     image={project.image} 
  //     phase={project.phase} 
  //     link={project.link} 

  //     />
  //   )
  // })

  // const projectItems = projects.map(project => {
  //   return (
  //   <ProjectItem project={project} />
  //   )
  // })

  const projectItems = projects.map(project => {
    return (
    <ProjectItem key={project.id} {...project} />
    )
  })


  console.log(projects)
  return (
    <div>
     {projectItems}
    </div>
  ) 
}


export default ProjectList
