import React, {useState, useEffect} from 'react'
import firebase from './firebase'
import Project from './Project'
import './Projects.css'
import { IoIosAddCircle } from "react-icons/io"
import { navigate } from '@reach/router'
import ClipLoader from "react-spinners/ClipLoader"

const Projects = (props) => {
    const [projects, setProjects] = useState([])

    const addProject = () => {
        firebase.firestore().collection('projects').add(
            {
                title:'0 New project',
                timestap: firebase.firestore.FieldValue.serverTimestamp()
            }
        )
        .then( doc  => navigate('/edit/' + doc.id) )
    }
    useEffect(() => {
        firebase
        .firestore()
        .collection('projects')
        .orderBy('title')
        .onSnapshot(
            snapshop => setProjects(snapshop.docs)
        )
    }, [])

    return(
        <main>
            <div className='intro'>
                <h1>Marius Aleksander<br/>Sletten<span>.</span></h1>
                <h1>I am a UX designer<br/>who loves<br/>Front-end<br/>development<span>.</span></h1>
                <h5>scroll</h5>
            </div>
            {
                props.signedIn &&
                <div className='add'>
                    <IoIosAddCircle className='edit-icons' onClick={addProject}/>
                </div>
            }
                
            <h2>My work<span>.</span></h2>
            {
                    projects.length > 0
                    ?
            <div className='projectsContainer'>
                {
                    projects.map(
                    project => <Project key={project.id} data={project.data()} id={project.id} signedIn={props.signedIn} />
                    )
                }
            </div>
            :
            <ClipLoader/>
            }
        </main>
    )
}


export default Projects