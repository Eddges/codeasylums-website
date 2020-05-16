import React from 'react'
import Testimonial from '../../Testimonial/Testimonial'
import classes from './CodeAsylumsAdvantageDataScience.module.css'

const CodeAsylumsAdvantageDataScience = (props) => {
    return(
        <div className={classes.Advantage}>
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
                    <Testimonial showCircle={false} showAbout={true} name="Shivam Shekhar" about="-CEO/CTO Google" content="I feel the curriculum is very extensive and covers everything from the basics in backend and frontend technologies. The program will be very helpful for anyone who’s looking to start their career as a full-stack developer." />
                </div>
            </div>
        </div>
    )
}

export default CodeAsylumsAdvantageDataScience