import React from 'react'
// import from './navbar.module.css'
import './navbar.css'
import Logo from '../../assets/CodeAsylums.png'
import LogoWhite from '../../assets/logoWhite.png'
import {NavLink} from 'react-router-dom'
import BGClick from '../BGClick/BGClick'
// import ModalButton from '../ModalButton/ModalButton'
import closeBtn from '../../assets/close.svg'
import Modalpop from '../Modal/Modal'


class Navbar extends React.Component {

    render() {

        return(
            <React.Fragment>
            <div className="NavMobile">
                    <div className="Items">
                        <ul className="NavItems">
                            <li className="CloseNavMobile"><img src={closeBtn} alt="Close"/></li>
                            <li><a href="/">HOME</a></li>
                            <div className="navLine"></div>
                            <li><a href="#CoursesSection">COURSES</a></li>
                            <div className="navLine"></div>
                            <li><a href="#proteam">TEAM</a></li>
                            <div className="navLine"></div>
                            <li><a href="#protestimonials">TESTIMONIALS</a></li>
                            <div className="navLine"></div>
                            <li><a href="#procallback">CONTACT</a></li>
                            <div className="navLine"></div>
                            
                        </ul>
                    </div>
                </div>
            <nav className="Navbar">
                
                <div className="imageDiv">
                    <img src={LogoWhite} alt="Logo" />
                </div>
                <div className="imageDiv1">
                    <img src={Logo} alt="Logo" />
                </div>
    
                <ul>
                    <li><a href="/">HOME</a></li>
                    <li className="onlineCourses"><a>COURSES</a></li>
                    {/* <li className="onlineCourses"><NavLink to="/fullstack">ONLINE COURSES</NavLink></li> */}
                    {/* <li><a>OFFLINE COURSES</a></li> */}
                    <li><a href="#protestimonials">TESTIMONIALS</a></li>
                    <li><a href="#proteam">TEAM</a></li>
                    <li><a href="#procallback">CONTACT</a></li>
                </ul>
    
                <div className="btnDiv">
                    {/* <button className="btnApply"><a href="#procallback">Request Callback</a></button> */}
                    <Modalpop/>
                    <button className="btnHire">Apply as Mentor</button>

                    <div className="Hamburger" id="Hamburger">
                        <div className="HamburgerTop"></div>
                        <div className="HamburgerMiddle"></div>
                        <div className="HamburgerBottom"></div>
                    </div>
                    {/* <button className="btnApply">Apply</button> */}
                   
                    {/* <ModalButton/> */}
                    {/* <Modalpop /> */}
                    <button className="btnHire">Hire Engineers</button>
                    
                </div>

                
            </nav>
            </React.Fragment>
        )
    }
 
}

export default Navbar