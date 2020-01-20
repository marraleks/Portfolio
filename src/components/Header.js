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
                    <a href='http://www.dr.dk'><IoLogoLinkedin/></a>
                    <a href='http://www.dr.dk'><IoLogoGithub/></a>
            </div>
        </header>
    )
}

export default Header