import React from 'react'
// import from './navbar.module.css'
import './navbar.css'
import Logo from '../../assets/CodeAsylums.png'
import LogoWhite from '../../assets/logoWhite.png'
import {NavLink} from 'react-router-dom'
// import ModalButton from '../ModalButton/ModalButton'

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
                    <li><a href="/">HOME</a></li>
                    <li className="onlineCourses"><a href="#courses">ONLINE COURSES</a></li>
                    {/* <li className="onlineCourses"><NavLink to="/fullstack">ONLINE COURSES</NavLink></li> */}
                    {/* <li><a>OFFLINE COURSES</a></li> */}
                    <li><a>CULTURES</a></li>
                    <li><a>MENTORS</a></li>
                    <li><a>ALUMNI</a></li>
                </ul>
    
                <div className="btnDiv">
                    <button className="btnApply">Apply</button>
                    {/* <ModalButton/> */}
                    <button className="btnHire">Hire Engineers</button>
                </div>
            </nav>
        )
    }
 
}

export default Navbar