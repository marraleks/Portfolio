import React from 'react'
import firebase from './firebase'
import Project from './Project'
import './Projects.css'
import { IoIosAddCircle } from "react-icons/io"
import { navigate } from '@reach/router'
import ClipLoader from "react-spinners/ClipLoader"
import Masonry from 'react-masonry-css'

const Projects = (props) => {
   
    const addProject = () => {
        firebase.firestore().collection('projects').add(
            {
                title:'Projecttitle',
                timestap: firebase.firestore.FieldValue.serverTimestamp()
            }
        )
        .then( doc  => navigate(process.env.PUBLIC_URL + '/edit/' + doc.id) )
    }

    return(
        <main>
            
            
            
            {
                props.signedIn &&
                <div className='add'>
                    <IoIosAddCircle className='edit-icons' onClick={addProject}/>
                </div>
            }
            <h2 className='animated slideInRight'>Projects<span>.</span></h2>
            {
                    props.projects.length > 0
                    ?
            <Masonry
                    breakpointCols={{
                        default: 2,
                        700: 1,
                      }}
                    className="my-masonry-grid"
                    columnClassName="my-masonry-grid_column">
                {
                    props.projects.map(
                        (project, index) => {
                        if( (index + 1 === props.projects.length) && (props.projects.length % 2 !== 0) ){
                            // eslint-disable-next-line
                            return
                        }
                        return <Project 
                                comingsoon={
                                    ((index + 1 === props.projects.length) && (props.projects.length % 2 === 0)) ?true:false} 
                                    key={project.id} data={project.data()} id={project.id} signedIn={props.signedIn} />
                        }
                    )
                }
            </Masonry>
            :
            <ClipLoader/>
            }
        </main>
    )
}


export default Projects