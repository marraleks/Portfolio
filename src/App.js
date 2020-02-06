import React, {useState, useEffect} from 'react';
import { Router, } from "@reach/router"
import './App.css';
import firebase from './components/firebase'
import Projects from './components/Projects'
import Header from './components/Header'
import Login from './components/Login'
import Edit from './components/Edit'
import About from './components/About'
import ProjectDetail from './components/ProjectDetail'



const App = () => {

  const [signedIn, setSignedIn] = useState(false)
  const [projects, setProjects] = useState([])

    useEffect(() => {
        firebase
        .firestore()
        .collection('projects')
        .orderBy('order', 'asc')
        .onSnapshot(
            snapshop => setProjects(snapshop.docs)
        )
    }, [])

  useEffect(() => {
    firebase.auth().onAuthStateChanged(
      user => {
        if(user){
          setSignedIn(true)
        }else{
          setSignedIn(false)
        }
      }
    )
  })

  return(
    <div>
      <Header signedIn={signedIn}/>
      <Router basepath={process.env.PUBLIC_URL} >
          <Projects projects={projects} default path='/projects' signedIn={signedIn}/>
          <Login signedIn={signedIn} setSignedIn={setSignedIn} path='/login'/>
          <Edit path='/edit/:id'/>
          <ProjectDetail path='/projects/:id'/>
          <About path={'/about'}/>
   
      </Router>
    </div>
  )
}


export default App;
