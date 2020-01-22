import React, {useState} from 'react'
import { Link } from "@reach/router"
import './Header.css'
import { IoLogoLinkedin } from "react-icons/io";
import { IoLogoGithub } from "react-icons/io";
import { FiMenu } from "react-icons/fi";




const Header = (props) => {
    const [show, setShow] = useState(false)
    return(
        <div className='header-containter'>
            <FiMenu className='burger' color='white' size='32' onClick={ () => setShow(!show) }/>
            <header className={show ? 'visible' : ''} onClick={() => setShow(false)}>
                <div>
                    <Link to ='/projects'>mas<span>.</span></Link>
                </div>
                <div>
                    <p>Find me on:</p>
                        <div>
                        <a href='https://www.linkedin.com/in/marius-aleksander-sletten-92aa3716a/' target="_blank" rel="noopener noreferrer"><IoLogoLinkedin/></a>
                        <a href='https://github.com/marraleks' target="_blank" rel="noopener noreferrer"><IoLogoGithub/></a>
                        </div>
                </div>
            </header>
        </div>
    )
}

export default Header