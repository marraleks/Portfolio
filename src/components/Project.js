import React from 'react'
import './Project.css'
import { MdDelete } from "react-icons/md"
import { FaCode } from "react-icons/fa"
import firebase from './firebase'
import { Link } from '@reach/router'
import parse from 'html-react-parser';



const Project = (props) => {
    const deleteProject = () => {
        if(window.confirm('Sure?')){
            firebase.firestore()
            .collection('projects')
            .doc(props.id)
            .delete()
            .then(console.log('Document was deleted'))
            .catch(error => console.log(error))
        }
    }

const styles = {
    backgroundImage: "url("+ props.data.defaultImage +")",
    backgroundSize: 'cover',
    backgroundPosition: 'center',
}

    return(
        <div className='project' style={styles}>
            
            <h1>{props.data.title}</h1>
            <div>
                {
                props.data.description &&
                parse(props.data.description)
                }
            </div>
                {
               props.data.color && <p>Farge: {props.data.color}</p>
                }
            {
                props.signedIn &&
                <div className="admin-icons"> 
                    <Link to={'/edit/' + props.id}>
                        <FaCode className='edit-icons'/>
                    </Link>
                    <MdDelete onClick={deleteProject} className='edit-icons'/>
                </div>
            }
        </div>
    )
}

export default Project