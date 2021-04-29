


function ProjectFilters({handleTextChange, searchText}) {
  return (
    <>
      <div className="filter">
        <button>All</button>
        <button>Phase 5</button>
        <button>Phase 4</button>
        <button>Phase 3</button>
        <button>Phase 2</button>
        <button>Phase 1</button>
      </div>
      <input 
        onChange={handleTextChange} 
        value={searchText} 
        type="text" 
        placeholder="Search..." 
      />
    </>
  )
}


export default ProjectFilters