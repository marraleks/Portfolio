import React, {useState, useEffect} from 'react'
import './Project.css'
import firebase from './firebase'
import ProjectTitle from './ProjectTitle'
import './ProjectDetail.css'


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


    let image 
    if(project){
        image = {
            backgroundImage: "url("+ project.defaultImage +")",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
        }
    }

    return(
        <main>
            {
                project 
                ?
                <>
                    <ProjectTitle title={project.title} className='project-detail' />
                    <div className='projectContainer'>
                        <div>
                            <h3>Info</h3>
                                {
                                    project.byline &&
                                    <div className='projectByline'>- {project.byline}</div>
                                }
                                {    project.tech &&
                                    <div className='projectTech'>- {project.tech}</div>
                                }
                                {
                                    project.year &&
                                    <div className="projectYear">- {project.year}</div>
                                }
                        </div>
                        <div>
                                {
                                    project.description &&
                                    <div className='projectDescription'>{project.description}</div>
                                }
                        </div>
                    </div>
                                {
                                    project.defaultImage && 
                                    <div style={image} className='projectImage'></div>
                                }
                                {/* <embed src="https://marraleks.github.io/skahr/"></embed>                         */}
                </>
                :
                    <h2>Fetching Project, hold on</h2>
                }
        </main>
        
    
    )
}

export default ProjectDetail