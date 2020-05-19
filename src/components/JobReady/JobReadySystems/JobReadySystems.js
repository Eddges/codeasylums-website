import React from 'react'
import Testimonial from '../../Testimonial/Testimonial'
import classes from './JobReadySystems.module.css'

const JobReadySystems = (props) => {
    return(
        <div className={classes.Job}>
            <p className={classes.Heading} >Be Job Ready</p>
            <p className={classes.Opportunities}>Accelerate your scale with CodeAsylums Platform Development with Scalability Professional Bootcamp</p>
            <div className={classes.BG}>
                <div className={classes.divTestimonial}>
                    <Testimonial showCircle={false} showAbout={true} content="I could have saved collosal amount of my time and energy only if I had such mentors to guide me right from the start. Teaching complicated topics with such ease is a rare skill. I am completely satisfied with my experience." />
                </div>
                <ul>
                    <li>FullStack Developer</li>
                    <li>Front end developer</li>
                    <li>Back end developer</li>
                    <li>Software developer</li>
                </ul>
                <ul>                    
                    <li>ReactJS developer</li>
                    <li>Webmaster</li>
                    <li>Platform Engineer</li>
                    <li>NodeJS developer</li>
                </ul>
                
            </div>
        </div>
    )
}

export default JobReadySystems