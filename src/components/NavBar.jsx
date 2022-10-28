import { Link } from "react-router-dom"

function NavBar() {
    return (
    <nav>
            <Link to='/ '>
                Ebba S - Home Page
            </Link>

        <div id="navLinks">    
            <Link to='/about' >
                About
            </Link>
            
            <Link to='/contact'>
                Contact
            </Link>
            
            <Link to='/projects'>
                Projects
            </Link>

            <Link to='/resume'>
                Resume
            </Link>
        </div>
    </nav>
)
}

export default NavBar