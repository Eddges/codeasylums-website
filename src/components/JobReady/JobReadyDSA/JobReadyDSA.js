import React from 'react'
import Testimonial from '../../Testimonial/Testimonial'
import classes from './JobReadyDSA.module.css'

const JobReadyDSA = (props) => {
    return(
        <div className={classes.Job}>
            <p className={classes.Heading} >Be Job Ready</p>
            <p className={classes.Opportunities}>Accelerate your coding skills with CodeAsylums to Crack Coding Interviews</p>
            <div className={classes.BG}>
                <div className={classes.divTestimonial}>
                    <Testimonial showCircle={false} showAbout={true}  content="I'm honestly glad that I didn't look further and decided enroll myself into this program for my training and education. The benefits have been immense. I was amazed by the sheer quality of content being taught. Looking back, I can see that my coding skills have improved drastically." />
                </div>
                <ul>
                    <li>Software developer</li>
                    <li>Software Engineer</li>
                    <li>Member of Technical Staff</li>
                    <li>Platform Engineer</li>
                </ul>
                <ul>                    
                    <li>Senior Software Developer</li>
                    <li>Senior Software Engineer</li>
                    <li>SDE - 1 / SDE - 2</li>
                    {/* <li>NodeJS developer</li> */}
                </ul>
                
            </div>
        </div>
    )
}

export default JobReadyDSA