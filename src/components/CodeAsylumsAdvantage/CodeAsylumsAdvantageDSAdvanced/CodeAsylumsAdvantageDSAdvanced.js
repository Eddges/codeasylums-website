import React from 'react'
import Testimonial from '../../Testimonial/Testimonial'
import classes from './CodeAsylumsAdvantageDSAdvanced.module.css'

const CodeAsylumsAdvantageDSAdvanced = (props) => {
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
                    <Testimonial showCircle={false} showAbout={true} name="Rahul Kumar" about="Data Scientist, Future First" content="There is nothing more promising in the world of technology right now than Data Science and Machine Learning. To put it simply, the future is data. It's really unfortunate that most courses and professors do not do justice to the beauty of this field. The Data Science Track from CodeAsylums is an excellent opportunity to truly dive deeply into the world of data and numbers." />
                </div>
            </div>
        </div>
    )
}

export default CodeAsylumsAdvantageDSAdvanced