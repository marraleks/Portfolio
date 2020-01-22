import React, {useState, useEffect} from 'react'
import './Project.css'
import firebase from './firebase'
import ProjectTitle from './ProjectTitle'



const ProjectDetail = (props) => {
    const[project, setProject] = useState()
    useEffect(() => {
        firebase
        .firestore()
        .collection('projects')
        .doc(props.id)
        .onSnapshot(
            snapshop => setProject(snapshop.data())
        )
    }, [props.id])

    return(
        <main>
            {
                project 
                ?
                <>
                    <ProjectTitle title={project.title} className='project-detail' />
                    {
                        project.year &&
                        <div>{project.year}</div>
                    }
                </>
                :
                    <h2>Fetching Project, hold on</h2>
                }
        </main>
    
    )
}

export default ProjectDetail