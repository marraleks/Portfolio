import React from 'react'
import './Project.css'
import { MdDelete } from "react-icons/md"
import { FaCode } from "react-icons/fa"
import firebase from './firebase'
import { Link } from '@reach/router'



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
        <div className='project'>
            <div className='child' style={styles}>
                <div className='overlay'></div>
            </div>
            <div className="afterHover">
                <h1>{props.data.title}</h1>
                <p>&mdash; view &mdash;</p>
            </div>
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