import React from "react";
import { NavLink } from "react-router-dom"

function Header({
  title,
  logo = "//",
  isDarkMode,
  onDarkModeClick,
}) {
 

  return (
    <header>
      <h1>
        <span className="logo">{logo}</span>
        {title}
      </h1>
      <nav>

        <NavLink className="button" to="/projects">
          All Projects
        </NavLink>
        <NavLink className="button" to="/new-project">
          Add Project
        </NavLink>

        <button onClick={onDarkModeClick}>
          {isDarkMode ? (
            <span role="img" label="sun">
              ☀️
            </span>
          ) : (
            <span role="img" label="moon">
              🌙
            </span>
          )}
        </button>
      </nav>
    </header>
  );
}

export default Header;
