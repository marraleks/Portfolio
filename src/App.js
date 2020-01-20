import React, {useState, useEffect} from 'react';
import { Router } from "@reach/router"
import './App.css';
import firebase from './components/firebase'
import Projects from './components/Projects'
import Header from './components/Header'
import Login from './components/Login'
import Edit from './components/Edit'
import Apputvikling from './components/Apputvikling'
import BasicFrontEnd from './components/BasicFrontEnd'


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
        <Apputvikling path='/prosjekt/JnaOYdbRJVCdG3thG7WL'/>
        <BasicFrontEnd path='/prosjekt/DLvrUVdVtvGeeTkknwXe'/>
      </Router>
    </div>
  )
}


export default App;
