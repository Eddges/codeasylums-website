import React from 'react'
import classes from './LandingPage2.module.css'
import image from '../../assets/bloc.jpg'
import video1 from '../../assets/video1.webm'
import cod from '../../assets/code.webm'

const LandingPage2 = () => (
    <header className={classes.Header}>
        <div className={classes.margin}></div>
        <div className={classes.content}>
            <div className={classes.left}>
                <p>Welcome to CodeAsylums</p>
                <p>The best coding bootcamp in India</p>
                <p>Data Structures | Algorithms | Full-Stack Development</p>
                <p>Machine Learning | Data Science | DevOps</p>
                <button className={classes.ApplyButton}>Explore</button>
            </div>
            <div className={classes.gradient}></div>
            <video className={classes.bg} poster="https://cdn2.bloc.io/assets/marketing_pages/homepage/homepage-img-1-73a8987b3799c4064ef9c768b8ec1b10.jpg" autobuffer="autobuffer" autoplay="autoplay" loop="loop" >
                <source src={video1} />
            </video>
        </div>
        
    </header>
)

export default LandingPage2