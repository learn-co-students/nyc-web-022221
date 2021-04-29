import React, {useState} from "react";

function ProjectForm({addProject}) {
  const [name, setName] = useState('')
  const [about, setAbout] = useState('')
  const [phase, setPhase] = useState('1')
  const [link, setLink] = useState('')
  const [image, setImage] = useState('')

  const handleSubmit = (e) => {
    // preventDefault
    e.preventDefault()
    // post fetch 

    const formData = {
      name,
      about,
      link,
      image,
      phase: parseInt(phase),
      claps: 0
    }


    fetch("http://localhost:4000/projects", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(formData)
    })
    .then(res => res.json())
    .then(project => {
      addProject(project)
    })
    // body of the request - build object from state
    // mainpulate dom with response

  }



  return (
    <section>
      <form className="form" onSubmit={handleSubmit}>
        <h3>Add New Project</h3>
        <label htmlFor="name">Name</label>
        <input 
          type="text" 
          id="name" 
          name="name" 
          value={name} 
          onChange={(e) => setName(e.target.value)}
        />

        <label htmlFor="about">About</label>
        <textarea 
          id="about" 
          name="name" 
          value={about} 
          onChange={(e) => setAbout(e.target.value)}
         />

        <label htmlFor="phase">Phase</label>
        <select
          name="phase"
          id="phase"
          value={phase}
          onChange={(e) => setPhase(e.target.value)}
        >
          <option value="1">Phase 1</option>
          <option value="2">Phase 2</option>
          <option value="3">Phase 3</option>
          <option value="4">Phase 4</option>
          <option value="5">Phase 5</option>
        </select>

        <label htmlFor="link">Project Homepage</label>
        <input
          type="text"
          id="link"
          name="link"
          value={link}
          onChange={(e) => setLink(e.target.value)}
        />

        <label htmlFor="image">Screenshot</label>
        <input
          type="text"
          id="image"
          name="image"
          value={image}
          onChange={(e) => setImage(e.target.value)}
        />

        <button type="submit">Add Project</button>
      </form>
    </section>
  );
}

export default ProjectForm;