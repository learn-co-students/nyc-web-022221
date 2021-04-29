import React, { useState } from "react";

function Header({ handleClick, isDarkMode, title, logo }) {
  
  const toggleDarkMode = () => {
    handleClick()
  }

  return (
    <header>
      <h1>
        <span className="logo">{logo}</span>
        {title}
      </h1>
      <button onClick={toggleDarkMode}>
        {isDarkMode ? "Dark" : "Light"} Mode
      </button>
    </header>
  );
}

export default Header;

/*
- locate the place where the event is happening
- addEventListener using the event type 
- use a callback to provide the code we want to run
const button = document.querySelector("#button")
button.addEventListener("click", console.log("click"))
.querySelector, .textContent, .remove, dataset
React State
1. import { useState } from "react"
2. call useState and pass in an initial value
3. use state to determine what the component displays
4. call setState when you need to update state
Initial Render - ReactDOM.render(<App>)
- build all the initial JSX by call all our components once
setState
- re-render that component + any child components with some new state
  // const state = useState(false);
  // const isDarkMode = state[0];
  // const setIsDarkMode = state[1];
function useState(initialValue) {
  let state = initialValue
  function setState(newState) {
    state = initialValue
    reRender()
  }
  return [state, setState]
}
*/
