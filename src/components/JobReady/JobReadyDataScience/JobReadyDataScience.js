import React from 'react'
import Testimonial from '../../Testimonial/Testimonial'
import classes from './JobReadyDataScience.module.css'

const JobReadyDataScience = (props) => {
    return(
        <div className={classes.Job}>
            {/* <div className={classes.Line}></div> */}
            <p className={classes.Heading} >Be Job Ready</p>
            <p className={classes.Opportunities}>Accelerate your coding skills with CodeAsylums to Crack Coding Interviews</p>
            <div className={classes.BG}>
                <div className={classes.divTestimonial}>
                    <Testimonial showCircle={false} showAbout={true} name="Shivam Shekhar" about="-CEO/CTO Google" content="...and I must say that the CodeAsylums Data Structures and algorithms has truly been a life-changer!" />
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

export default JobReadyDataScience