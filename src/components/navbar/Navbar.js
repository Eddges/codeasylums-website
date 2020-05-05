import React from 'react'
import classes from './navbar.module.css'
import Logo from '../../assets/CodeAsylums.png'

class Navbar extends React.Component {

    render() {

        return(
            <div className={classes.Navbar}>
                <div className={classes.imageDiv}>
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
    
                <div className={classes.btnDiv}>
                    <button className={classes.btnApply}>Apply</button>
                    <button className={classes.btnHire}>Hire Engineers</button>
                </div>
            </div>
        )
    }
 
}

export default Navbar