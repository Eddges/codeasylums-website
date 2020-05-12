import React from 'react'
// import from './navbar.module.css'
import './navbar.css'
import Logo from '../../assets/CodeAsylums.png'
import LogoWhite from '../../assets/logoWhite.png'

class Navbar extends React.Component {

    render() {

        return(
            <nav className="Navbar">
                <div className="imageDiv">
                    <img src={LogoWhite} alt="Logo" />
                </div>
                <div className="imageDiv1">
                    <img src={Logo} alt="Logo" />
                </div>
    
                <ul>
                    <li><a>HOME</a></li>
                    <li className="onlineCourses"><a>ONLINE COURSES</a></li>
                    <li><a>OFFLINE COURSES</a></li>
                    <li><a>CULTURES</a></li>
                    <li><a>MENTORS</a></li>
                    <li><a>ALUMNI</a></li>
                </ul>
    
                <div className="btnDiv">
                    <button className="btnApply">Apply</button>
                    <button className="btnHire">Hire Engineers</button>
                </div>
            </nav>
        )
    }
 
}

export default Navbar