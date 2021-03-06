import React from 'react'
import './Project.css'
import { MdDelete } from "react-icons/md"
import { FaCode } from "react-icons/fa"
import firebase from './firebase'
import { Link, navigate } from '@reach/router'



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
        backgroundColor: '#2B2A29',
        backgroundRepeat: 'no-repeat',
    }

    return(
       
        <div className={props.comingsoon ? 'spec project':'project'}>
            <div className="afterHover" onClick={ () => !props.comingsoon && navigate(process.env.PUBLIC_URL + '/projects/' + props.id)}> 
                <h1>{props.data.title}</h1>
                <p>&mdash; view &mdash;</p>
            </div>
            <div className='child' style={styles}>
                    <div className='overlay' onClick={ () => !props.comingsoon && navigate(process.env.PUBLIC_URL + '/projects/' + props.id)}></div>
            </div>
            {
                props.signedIn &&
                <div className="admin-icons"> 
                    <Link to={process.env.PUBLIC_URL + '/edit/' + props.id}>
                        <FaCode className='edit-icons'/>
                    </Link>
                    <MdDelete onClick={deleteProject} className='edit-icons'/>
                </div>
            }
        </div>
    
    )
}

export default Project