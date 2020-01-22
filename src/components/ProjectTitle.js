import React from 'react'
import './Subproject.css'


    const ProjectTitle = props => {
        return(
            <div className='subContainer'>
                <h1>{props.title}<span>.</span></h1>
            </div>
        )
    }

export default ProjectTitle