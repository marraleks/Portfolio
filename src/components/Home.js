import React from 'react'
import { navigate } from '@reach/router'
import Div100vh from 'react-div-100vh'
import './Home.css'


const Home = () => {
    return(
        <Div100vh style={{maxHeiht: '70vh'}}>
            <div className='intro'>
                <h1 className='animated slideInUp'>Marius Aleksander<br/>Sletten<span className="red">.</span></h1>
                <h1 className='animated slideInUp'>I am a UX designer<br/>who loves<br/>Front-end<br/>development<span className="white">.</span></h1>
            </div>
                <div className='mywork ' onClick={() => navigate(process.env.PUBLIC_URL + '/projects')}>
                    <h5 className='animated slideInRight'>my work<span>.</span></h5>  
                </div>
        </Div100vh>
    )
}

export default Home