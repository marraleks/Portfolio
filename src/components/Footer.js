import React from 'react'
import './Footer.css'
import { IoMdMail } from "react-icons/io";
import { IoLogoLinkedin } from "react-icons/io";
import { IoLogoGithub } from "react-icons/io";

const Footer = () => {
    return(
        <footer>
            <div>
                <a href='https://www.linkedin.com/in/marius-aleksander-sletten-92aa3716a/' target="_blank" rel="noopener noreferrer"><IoLogoLinkedin size='24'/></a>
                <a href='https://github.com/marraleks' target="_blank" rel="noopener noreferrer"><IoLogoGithub size='24'/></a>
                <a href="mailto:marraleks@hotmail.com" target="_top"><IoMdMail size='24'/></a>
            </div>
        </footer>
    )
}

export default Footer