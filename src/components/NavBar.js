import { Link } from "react-router-dom"
import styles from "./NavBar.module.css"
import React from 'react'

function NavBar() {
    return (
        <nav>
            <article className={styles.navBar}>
                <Link id="name" to='/'>Ebba S</Link>
            <ul>
                <li>
                    <Link to='/about'>About</Link>
                </li>

                <li>
                    <Link to='/contact'>Contact</Link>
                </li>
                <li>
                    <Link to='/'>Home</Link>
                </li>
                <li>
                    <Link to='/projects'>Projects</Link>
                </li>
                <li>
                    <Link to='/resume'>Resume</Link>
                </li>
            </ul>
            </article>      
        </nav>
    
    )
}

export default NavBar