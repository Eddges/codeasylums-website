import React from 'react'
import classes from './LandingPage.module.css'
import Illustration from '../../assets/landingPageIllustration.jpg'
import Arrow from '../../assets/arrow-right.png'

const LandingPage = (props) => {
    return(
        <React.Fragment>
            <div className={classes.LandingMargin}></div>
            <div className={classes.LandingPage}>
                <div className={classes.divWelcome}>
                    <p className={classes.welcomeTo}>Welcome to</p>
                    <p className={classes.codeAsylums}>&lt;CodeAsylums /></p>
                    <p className={classes.detail1}>The best coding bootcamp in India</p>
                    <p className={classes.detail2}>Data Structures | Algorithms | Full-Stack Development</p>
                    <p className={classes.detail3}>Machine Learning | Data Science | DevOps</p>
                    <button className={classes.btnGetStarted}>Get Started</button>
                </div>
                <div className={classes.divImage}>
                    <img src={Illustration} alt="Illustration" />
                </div>
            </div>
            <div className={classes.Arrow}>
                <img src={Arrow} alt="Down Arrow" />
            </div>

        </React.Fragment>

    )
}

export default LandingPage