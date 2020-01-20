import React, {useState, useEffect} from 'react';
import { Router } from "@reach/router"
import './App.css';
import firebase from './components/firebase'
import Projects from './components/Projects'
import Header from './components/Header'
import Login from './components/Login'
import Edit from './components/Edit'

const App = () => {

  const [signedIn, setSignedIn] = useState(false)

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
      <Router>
        <Projects signedIn={signedIn} path='/'/>
        <Login signedIn={signedIn} setSignedIn={setSignedIn} path='/login'/>
        <Edit path='/edit/:id'/>
      </Router>
    </div>
  )
}


export default App;
