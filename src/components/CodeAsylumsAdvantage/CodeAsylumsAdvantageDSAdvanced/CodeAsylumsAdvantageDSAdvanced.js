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
                    <Testimonial showCircle={false} showAbout={true} name="Sandeep Alajangi" about="Software Engineer, Google" content="Solving competitive programming questions requires a lot of patience, determination and skills. It also requires a solid grasp over Data Structures. It requires persistence and hard work to get into the A-Listers. And that makes me excited to be mentoring prospective professionals and helping them land their dream job." />
                </div>
            </div>
        </div>
    )
}

export default CodeAsylumsAdvantageDSAdvanced