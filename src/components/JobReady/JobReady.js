import React from 'react'
import Testimonial from '../Testimonial/Testimonial'
import classes from './JobReady.module.css'

const CodeAsylumsAdvantage = (props) => {
    return(
        <div className={classes.Job}>
            <p className={classes.Heading} >Be Job Ready</p>
            <p className={classes.Opportunities}>What are the job Opportunities?</p>
            <div className={classes.BG}>
                <div className={classes.divTestimonial}>
                    <Testimonial showCircle={true} showAbout={true} name="Shivam Shekhar" about="-CEO/CTO Google" content="I attended the FullStack Development bootcamp at CodeAsylums in the summer of 2019 in my final year of engineering. I am currently placed at Amzon as a JavaScript web developer. I completely give my placement credits to CodeAsylum’s FullStack Development program. It has indeed changed my life." />
                </div>
                <ul>
                    <li>FullStack Developer</li>
                    <li>Front end developer</li>
                    <li>Back end developer</li>
                    <li>JavaScript developer</li>
                </ul>
                <ul>                    
                    <li>ReactJS developer</li>
                    <li>Webmaster</li>
                    <li>UI/UX engineer</li>
                    <li>NodeJS developer</li>
                </ul>
                
            </div>
        </div>
    )
}

export default CodeAsylumsAdvantage