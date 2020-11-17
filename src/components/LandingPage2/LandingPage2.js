import React from 'react'
import classes from './LandingPage2.module.css'
import video1 from '../../assets/codingVid.webm'
// import video2 from '../../assets/codingVid.mp4'
import Modalpop from '../Modal/Modal'
import ModalPhone from '../ModalPhone/ModalPhone'

const LandingPage2 = () => (
    <header className={classes.Header}>
        <div className={classes.margin}></div>
        <div className={classes.content}>
            <div className={classes.left}>
            
                <p>CodeAsylums | <span>Ace</span></p>
                <p>Live Mentoring | Career Focused | Online</p>
                <p>The best coding bootcamp in India</p>
                <p>Data Structures and Algorithms | Full Stack Web Development </p>
                <p> Data Analytics | Data Science with Machine Learning </p>
                
                <ModalPhone />
                <a href="#CoursesSection"><button className={classes.ApplyButton} >Explore</button></a>
                <div className="introSS"></div>
            </div>
            <div className={classes.gradient}></div>
            <video className={classes.bg} preload="auto" autobuffer="autobuffer" autoPlay="autoplay" loop="loop" muted >
                {/* <source src={video2} type="video/mp4" /> */}
                <source src={video1} type="video/webm" />
                
            </video>
        </div>
        
    </header>
)

export default LandingPage2