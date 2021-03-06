import React from 'react'
import Testimonial from '../../Testimonial/Testimonial'
import classes from './JobReadyFullStack.module.css'

const JobReadyFullStack = (props) => {
    return(
        <div className={classes.Job}>
            <p className={classes.Heading} >Be Job Ready</p>
            <p className={classes.Opportunities}>Accelerate your scale with CodeAsylums FullStack Web Development Professional Bootcamp</p>
            <div className={classes.BG}>
                <div className={classes.divTestimonial}>
                    <Testimonial showCircle={false} showAbout={true}  content="...and I have to say that the CodeAsylums FullStack Web Devevlopment program has truly been a life-changer in more ways than one. I doubt if I could have had similar level of mentorship and support elsewhere." />
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

export default JobReadyFullStack