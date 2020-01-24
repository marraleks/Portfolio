import React, {useState} from 'react'
import { Link } from "@reach/router"
import './Header.css'
import { IoLogoLinkedin } from "react-icons/io";
import { IoLogoGithub } from "react-icons/io";
import { IoMdMail } from "react-icons/io";
import { FiMenu } from "react-icons/fi";
import { MdOpenInNew } from "react-icons/md";




const Header = (props) => {
    const [show, setShow] = useState(false)

    const isPartiallyActive = ({
        isPartiallyCurrent
    }) => {
        return isPartiallyCurrent
        ? { className:'active' }
        : null
    }

    return(
        <div className='header-containter'>
            <FiMenu className='burger' color='white' size='32' onClick={ () => setShow(!show) }/>
            <header className={show ? 'visible' : ''} onClick={() => setShow(false)}>
                <div>
                    <Link getProps={isPartiallyActive} to ='/projects'>mas<span>.</span></Link>
                </div>
                <div>
                    <p>Find me on:</p>
                        <div>
                        <a href='https://www.linkedin.com/in/marius-aleksander-sletten-92aa3716a/' target="_blank" rel="noopener noreferrer"><IoLogoLinkedin size='24'/> <MdOpenInNew className='none' size='12'/></a>
                        <a href='https://github.com/marraleks' target="_blank" rel="noopener noreferrer"><IoLogoGithub size='24'/> <MdOpenInNew className='none' size='12'/></a>
                        <a href="mailto:marraleks@hotmail.com" target="_top"><IoMdMail size='24'/><MdOpenInNew className='none' size='12'/></a>
                        </div>
                </div>
            </header>
        </div>
    )
}

export default Header