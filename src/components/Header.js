import React from 'react'
import { Link } from "@reach/router"
import './Header.css'


const Header = (props) => {
    return(
        <header>
            <div>
                <Link to ='/'>mas<span>.</span></Link>
            </div>
            <div>
            <Link to ='/about'>om</Link>
                <Link to ='/login'>
                    {
                        props.signedIn
                        ? 'profile'
                        : 'login'
                    }
                </Link>
            </div>
        </header>
    )
}

export default Header