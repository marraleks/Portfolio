import React from 'react'
import { Link } from "@reach/router"
import './Header.css'
import { IoLogoLinkedin } from "react-icons/io";
import { IoLogoGithub } from "react-icons/io";




const Header = (props) => {
    return(
        <header>
            <div>
                <Link to ='/'>mas<span>.</span></Link>
            </div>
            <div>
                <p>Find me on:</p>
                    <a href='https://www.linkedin.com/in/marius-aleksander-sletten-92aa3716a/' target="_blank" rel="noopener noreferrer"><IoLogoLinkedin/></a>
                    <a href='https://github.com/marraleks' target="_blank" rel="noopener noreferrer"><IoLogoGithub/></a>
            </div>
        </header>
    )
}

export default Header