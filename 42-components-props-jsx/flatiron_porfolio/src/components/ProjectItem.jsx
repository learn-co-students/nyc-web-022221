// import React from 'react'

function ProjectItem({name, image, about, link}) {
  // console.log(props)
  // const {name, about} = props

  return  (
    <div>
      <h1>{name}</h1>
      <p>{about}</p>
      <a href={link}>LINK</a>
      <img src={image} alt={name} />
    </div>
  )
}


export default ProjectItem
