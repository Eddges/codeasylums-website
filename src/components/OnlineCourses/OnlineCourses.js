import React from 'react'
import classes from './OnlineCourses.module.css'
import neural from '../../assets/neural1.png'
import fullstack from '../../assets/content.png'
import business from '../../assets/structure1.png'
import mlearning from '../../assets/machine-learning1.png'

const OnlineCourses = (props) => {
    return(
        <div className={classes.OnlineCourses}>
            <div className={classes.descText}>
                <span>Online Courses</span>
            </div>
            <div className={classes.Cards}>

                <div className={classes.item1}>
                    <div className={classes.item1img}>
                        <img src={neural} alt="Algorithms Bootcamp"></img>
                    </div>
                    <div className={classes.item1Content}>
                        <h2>Virgin Algorithms</h2>
                        <p>Excel at coding skills and crack coding interviews at your own pace</p>
                    </div>
                </div>

                <div className={classes.item2}>
                    <div className={classes.item2img}>
                        <img src={fullstack} alt="Full-Stack Bootcamp"></img>
                    </div>
                    <div className={classes.item2Content}>
                        <h2>FullStack WebDev + DSA</h2>
                        <p>Develop, debug and deploy complete Web Applications from scratch</p>
                    </div>
                </div>

                <div className={classes.item3}>
                    <div className={classes.item3img}>
                        <img src={business} alt="Business Analytics Bootcamp"></img>
                    </div>
                    <div className={classes.item3Content}>
                        <h2>Business & Data Analytics</h2>
                        <p>Develop skills required for position of Data Analyst, Data Scientist or Associal Consultant</p>
                    </div>
                </div>

                <div className={classes.item4}>
                    <div className={classes.item4img}>
                        <img src={mlearning} alt="Machine Learning Bootcamp"></img>
                    </div>
                    <div className={classes.item4Content}>
                        <h2>Machine Learning + DSA</h2>
                        <p>Step into the world of Statistics, Data Modelling, Algorithms and AI</p>
                    </div>
                </div>

            </div>

            <div className={classes.together}>
                <span>We code together</span>
                <span>and grow together</span>
            </div>
        </div>
    )
}

export default OnlineCourses