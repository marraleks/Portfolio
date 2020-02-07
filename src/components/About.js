import React from 'react'
import './About.css'

const About = () => {
    return(
        <main>
            <div className='AboutContainer '>
            <div className='about animated slideInUp'>
                <h3 >About me</h3>
                <h4 >Marius Aleksander Sletten</h4>
                <div >
                <p >I'm a UX/UI designer who is extra passionate about Front-end development. It may sound boring to many, but to me there is something special about it. I can sit down for hours forgetting the time just because I want to solve the next problem.</p>
            </div>
            </div>
            <div className='contact animated slideInUp'>
                <h3>Contact me</h3>
                <a href="mailto:marraleks@hotmail.com">marraleks@hotmail.com</a>
                <p>+47 97 17 97 98</p>
                <h3>Find me on</h3>
                    <a href='https://www.linkedin.com/in/marius-aleksander-sletten-92aa3716a/' target="_blank" rel="noopener noreferrer">linkedin</a>
                    <a href='https://github.com/marraleks' target="_blank" rel="noopener noreferrer">github</a>
            </div>
            </div>
        </main>
    )
}

export default About