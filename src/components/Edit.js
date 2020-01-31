import React, { useState,useEffect } from 'react'
import firebase from './firebase'
import './Edit.css'
import FileUploader from "react-firebase-file-uploader";

const Edit = (props) => {

    const [project, setProject] = useState({})
    const [status, setStatus] = useState('')

    useEffect( () => {
        firebase.firestore().collection('projects').doc(props.id)
        .onSnapshot( snapshot => 
            setProject(snapshot.data() )
        )
    }, [props.id] )

    const saveProject = (e) => {
        setStatus('Updating project, please hold')
        e.preventDefault()
        firebase.firestore().collection('projects').doc(props.id)
            .update(project)
            .then(() => setStatus('project updated'))
            .catch(error => console.log(error.message))
    }

    const updateValue =
        e => {
        e.persist()
        setProject( 
            existingProject => ({
            ...existingProject,
            [e.target.name]: e.target.value
        }))
    }
    
    const uploadStart = () => {
        setStatus('Uploading image, please hold')
    }
    const uploadError = (error) => {
        setStatus(error)
    }
    const handleProgress = (precentage) => {
        console.log(precentage)
    }
    const uploadSuccess = filename => {
        firebase
            .storage()
            .ref('images')
            .child(filename)
            .getDownloadURL()
            .then(
                url => setProject( existingProject => ( {
                    ...existingProject, 
                    defaultImage: url
                } ))
            )
            setStatus('image uploaded')
    }

    return(
        <main className='edit'>
            <h1>Edit project: {project.title}</h1>
            <form onSubmit={saveProject}>
                <input input='text' onChange={updateValue} name='title' value={project.title}/>
                <input input='text' onChange={updateValue} name='byline' placeholder='Very short description' value={project.byline}/>
                <input input='text' onChange={updateValue} name='tech' placeholder='Techs used' value={project.tech}/>
                <input input='text' onChange={updateValue} name='year' placeholder='Month and year' value={project.year}/>
                <input input='text' onChange={updateValue} name='link' placeholder='link' value={project.link}/>
                <textarea onChange={updateValue} name='description' placeholder='Description of the project' value={project.description}/>
                <textarea input='text' onChange={updateValue} name='extra' placeholder='html elements' value={project.extra}/>
                
                {
                    project.defaultImage &&
                    <img src={project.defaultImage} alt='default'/>
                }
                <label>
                <div className='button'>{project.defaultImage ? 'replace' : 'upload'}</div>
                    <FileUploader
                        hidden
                        accept="image/*"
                        storageRef={firebase.storage().ref('images')}
                        onUploadStart={uploadStart}
                        onUploadError={uploadError}
                        onUploadSuccess={uploadSuccess}
                        onProgress={handleProgress}
                    />
                </label>
                <button type='submit'>save</button>
            </form>
            <p>{status}</p>
        </main>
    )
}

export default Edit