import React, {useState} from "react";
import Header from "./Header";
import ProjectForm from "./ProjectForm";
import ProjectList from "./ProjectList";

// TODO: replace this with a fetch request (eventually)
// import projects from "../data/projects";

function App() {
  const [projects, setProjects] = useState([])
  const [isDarkMode, setIsDarkMode] = useState(false);

   function handleClick() {
    setIsDarkMode(!isDarkMode);
  }

  const fetchProjects = () => {
    fetch("http://localhost:4000/projects")
    .then(res => res.json())
    .then(data => {
      setProjects(data) 
    })
  }


  return (
    <div className={isDarkMode ? "App" : "App light"}>
      <Header 
        title="Flatiron Projects" 
        logo="//" 
        isDarkMode={isDarkMode}
        handleClick={handleClick}
        />
      <ProjectForm />
      <button onClick={fetchProjects} >Fetch Projects</button>
      <ProjectList projects={projects} />
    </div>
  );
}

export default App;