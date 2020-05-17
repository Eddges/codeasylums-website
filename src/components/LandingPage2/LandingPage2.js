import React from 'react'
import classes from './LandingPage2.module.css'
import video1 from '../../assets/codingVid.webm'

const LandingPage2 = () => (
    <header className={classes.Header}>
        <div className={classes.margin}></div>
        <div className={classes.content}>
            <div className={classes.left}>
                <p>Welcome to</p>
                <p>CodeAsylums</p>
                <p>The best coding bootcamp in India</p>
                <p>Data Structures | Algorithms | Full-Stack Development</p>
                <p>Machine Learning | Data Science | DevOps</p>
                <button className={classes.ApplyButton} > <a href="#CoursesSection">Explore</a></button>
            </div>
            <div className={classes.gradient}></div>
            <video className={classes.bg} autobuffer="autobuffer" autoplay="autoplay" loop="loop" >
                <source src={video1} />
            </video>
        </div>
        <div className="introSS"></div>
    </header>
)

export default LandingPage2