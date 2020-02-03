import React, {useState, useEffect, useRef} from 'react'
import './Project.css'
import firebase from './firebase'
import './ProjectDetail.css'
import parse from 'html-react-parser'
import { Link } from '@reach/router'


const ProjectDetail = (props) => {
    const[project, setProject] = useState()
    const[prev, setPrev] = useState()
    const[next, setNext] = useState()
    const video = useRef()

    
    useEffect(() => {
        firebase
        .firestore()
        .collection('projects')
        .doc(props.id)
        .onSnapshot(
            snapshop => setProject(snapshop.data())
        )
    }, [props.id])

    useEffect( () => {
        firebase
        .firestore()
        .collection('projects')
        .orderBy('order')
        .get()
        .then( projects => {
            const array = projects.docs.map(doc => doc.id)
            const myPos = array.indexOf(props.id)
            setNext(myPos + 1 === array.length ? array[0] : array[myPos + 1])
            setPrev(myPos === 0 ? array[array.length - 1] : array[myPos - 1])
            window.scrollTo({top:0})
        })
    }, [props.id])



    let styles = {}
    if(project){
        styles = {
            parallax:{
                backgroundImage: 'url(' + project.defaultImage + ')',
                height:'100vh',
                width:'100vw',
                backgroundAttachment:'fixed',
                backgroundSize: 'cover',
                backgroundPosition: 'center center',
                backgroundRepeat:'no-repeat',
                display: 'hidden',
                backgroundColor:'#2B2A29',
            },
        }
    } 

    let mobile = {}
    if(project){
    mobile = {
        backgroundImage: 'url(' + project.defaultImage + ')',
        height:'30vh',
        width:'100vw',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
    }
}

    return(
        <main className='detail'>
            {
                project 
                ?
                <>
                        <div className='parallax' style={styles.parallax}>
                            <div className='parallax-overlay'>
                                <h1>{project.title}<span>.</span></h1>
                            </div>  
                        </div> 
                        <div className='mobileIntro' style={mobile}>
                            <div className='overlayIntro'>
                                <h1>{project.title}<span>.</span></h1>
                            </div> 
                        </div>
                    
                    <div className='projectContainer'>
                        <div>
                            <h3>Info</h3>
                        
                                {
                                    project.byline &&
                                    <div className='projectByline'><b>Type:</b> {project.byline}</div>
                                }
                                {    project.tech &&
                                    <div className='projectTech'><b>Tech:</b> {project.tech}</div>
                                }
                                {
                                    project.year &&
                                    <div className="projectYear"><b>Date:</b> {project.year}</div>
                                }
                                {
                                    project.link &&
                                    <div className="projectLink">{parse(project.link)}</div>
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
                                    project.htmlvideo && 
                                    <div className='project-video'>
                                        <video ref={video} poster={project.htmlvideoposter} loop controls>
                                            <source src={project.htmlvideo} type="video/mp4" />
                                        </video>
                                            
                                    </div>
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