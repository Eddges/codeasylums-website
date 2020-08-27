import React from 'react'
import Testimonial from '../../Testimonial/Testimonial'
import classes from './CodeAsylumsAdvantageDSA.module.css'

const CodeAsylumsAdvantageDSA = (props) => {
    return(
        <div className={classes.Advantage}>
        <div className={classes.Line}></div>
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
                    <Testimonial showCircle={false} showAbout={true} name="Saurav Suman" about="Ex Alibaba" content="I would be excited to see potential professionals with this skillset and command over algorithms and Data Structures. This program sure is one great stepping stone for future coders to develop and enhance their problem solving skills. The course is rigorous for sure but it will transform you into a much better coder and programmer." />
                </div>
            </div>
        </div>
    )
}

export default CodeAsylumsAdvantageDSA