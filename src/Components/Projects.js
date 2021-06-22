import React from 'react'
import './css/project.css'
import Card from './Card'


const Projects = ({ projects }) => {


        return(
        <>   
        <ul className='project-Container'> 
        {projects.map((x) => 
          <li  key={x.id}>
          <Card x={x} />
          </li>
        )}
        </ul>
    
        
        </>)

}

export default Projects;