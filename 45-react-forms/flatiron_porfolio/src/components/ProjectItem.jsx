
import React, { useState } from "react";

function ProjectItem({ project }) {
  const [claps, setClaps] = useState(0);
  const { image, name, about, link, phase } = project;

  function handleClapClick() {
    setClaps(claps + 1);
  }

  // js land!
  return (
    <li className="card">
      {/* jsx land! */}
      <div className="image">
        <img src={image} alt={name} />
        <button onClick={handleClapClick} className="claps">
          👏{claps}
        </button>
      </div>

      <div className="details">
        <h4>{name}</h4>
        {about && <p>{about}</p>}
        {link ? (
          <p>
            <a href={link}>Link</a>
          </p>
        ) : null}
      </div>

      <div className="extra">
        <span className="badge blue">Phase {phase}</span>
      </div>
    </li>
  );
}

export default ProjectItem;
