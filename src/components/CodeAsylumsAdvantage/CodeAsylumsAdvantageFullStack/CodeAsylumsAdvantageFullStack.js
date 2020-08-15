import React from 'react'
import Testimonial from '../../Testimonial/Testimonial'
import classes from './CodeAsylumsAdvantageFullStack.module.css'

const CodeAsylumsAdvantageFullStack = (props) => {
    return(
        <div className={classes.Advantage}>
        <div className={classes.Line}></div>
            <p className={classes.Heading} >The CodeAsylums Advantage</p>
            <div className={classes.BG}>
                <ul>
                    <li>45+ Live Sessions</li>
                    <li>Alternate Days Live Sessions - in sync with your job work</li>
                    <li>Concept Building Sessions</li>
                    <li>Doubt Clearing Sessions</li>
                </ul>
                <ul>
                    <li>Hand-On-Live Coding with Mentors</li>
                    
                    <li>Forums for discussions, assignment, and doubts</li>
                    <li>Tech Talks and Awareness sessions by Industry Experts</li>
                    <li>Placement Assistance and Mock Interviews by Industry Experts</li>
                </ul>
                <div className={classes.divTestimonial}>
                    <Testimonial showCircle={false} showAbout={true} name="Rajat Jain" about="Engineer, Microsoft" content="I feel the curriculum is very extensive and covers everything from the basics in backend and frontend technologies. The program will be very helpful for anyone who’s looking to start their career as a full-stack developer." />
                </div>
            </div>
        </div>
    )
}

export default CodeAsylumsAdvantageFullStack