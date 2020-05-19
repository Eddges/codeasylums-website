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
                    <li>80+ Hrs of dedicated professional mentoring</li>
                    <li>Online Live interactive coding</li>
                    <li>Fully supported by Teaching Assistants</li>
                    <li>Coding Contest and Contest Discussions</li>
                </ul>
                <ul>
                    <li>Problem Solving Sharpening with Intuitive Learning </li>
                    <li>Collaborative and Interactive Environment using Community Channels</li>
                    <li>Internal plus Competitive progress & reports for self-assessments</li>
                    <li>Placement Assistance and Referrals for Job Opportunities</li>
                </ul>
                <div className={classes.divTestimonial}>
                    <Testimonial showCircle={false} showAbout={true} name="Saurav Suman" about="Ex Alibaba" content="I would be excited to see potential professionals with this skillset and command over algorithms and Data Structures. This program sure is one great stepping stone for future coders to develop and enhance their problem solving skills. The course is rigorous for sure but it will transform you into a much better coder and programmer." />
                </div>
            </div>
        </div>
    )
}

export default CodeAsylumsAdvantageDSA