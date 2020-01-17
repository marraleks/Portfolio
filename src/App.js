import React, {useState, useEffect} from 'react';
import { Router } from "@reach/router"
import './App.css';
import firebase from './components/firebase'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Header from './components/Header'
import About from './components/About'
import Login from './components/Login'

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
        <Contact path='/contact'/>
        <About path='/about'/>
        <Login signedIn={signedIn} setSignedIn={setSignedIn} path='/login'/>
      </Router>
    </div>
  )
}


export default App;
