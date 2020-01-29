import React, {useState, useEffect} from 'react'
import './Project.css'
import firebase from './firebase'
import ProjectTitle from './ProjectTitle'
import './ProjectDetail.css'
import parse from 'html-react-parser'
import Vimeo from '@u-wave/react-vimeo'
import { Link } from '@reach/router'


const ProjectDetail = (props) => {
    const[project, setProject] = useState()
    const[prev, setPrev] = useState()
    const[next, setNext] = useState()
    
    const scroll = () => {
        if(window.pageYOffset === 0){
            window.scrollTo({
                left:0,
                top:document.querySelector('#title-container').offsetHeight,
                behavior: 'smooth'
            })
        }
    }
    useEffect(() => {
        firebase
        .firestore()
        .collection('projects')
        .doc(props.id)
        .onSnapshot(
            snapshop => setProject(snapshop.data())
        )
        window.setTimeout(scroll, 3000)
    }, [props.id])

    useEffect( () => {
        firebase
        .firestore()
        .collection('projects')
        .orderBy('title')
        .get()
        .then( projects => {
            const array = projects.docs.map(doc => doc.id)
            const myPos = array.indexOf(props.id)
            setNext(myPos + 1 === array.length ? array[0] : array[myPos + 1])
            setPrev(myPos === 0 ? array[array.length - 1] : array[myPos - 1])
            window.scrollTo({top:0})
        })
    }, [props.id])

    return(
        <main className='detail'>
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
                                {
                                    project.link &&
                                    <div className="projectLink">- {parse(project.link)}</div>
                                }
                        </div>
                        <div>
                            <h3>Brief</h3>
                                {
                                    project.description &&
                                    <div className='projectDescription'>{project.description}</div>
                                }
                        </div>
                    </div>
                                {
                                    project.video && 
                                    <Vimeo
                                    video={project.video}
                                    width='1024px'
                                  />
                                }
                                {
                                    project.extra && 
                                <div className='projectExtra'>{ parse(project.extra)}</div>
                                }
                                <div className='pager'>
                                    <Link to={'/projects/' + prev}>prev project</Link>
                                    <Link to={'/projects/' + next}>next project</Link>
                                </div>
                </>
                :
                    <h2>Fetching Project, hold on</h2>
                }
        </main>
        
    
    )
}

export default ProjectDetail