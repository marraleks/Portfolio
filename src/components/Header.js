import React from 'react'
import { Link } from "@reach/router"
import './Header.css'

const Header = () => {

    const isPartiallyActive = ({
        isPartiallyCurrent
    }) => {
        return isPartiallyCurrent
        ? { className:'active' }
        : null
    }

    return(
        <div className='header-containter'>
            <header >
                <div>
                    <Link getProps={isPartiallyActive} to={process.env.PUBLIC_URL + '/projects'}>mas<span>.</span></Link>
                </div>
                <div className='links'>
                        <div>
                        <Link  getProps={isPartiallyActive} to={process.env.PUBLIC_URL + '/projects'}>work<span>.</span></Link>
                        <Link getProps={isPartiallyActive} to={process.env.PUBLIC_URL + '/about'}>about<span>.</span></Link>
                        </div>
                </div>
            </header>
        </div>
    )
}

export default Header