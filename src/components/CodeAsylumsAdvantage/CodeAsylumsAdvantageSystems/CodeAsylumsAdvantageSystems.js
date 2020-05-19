import React from 'react'
import Testimonial from '../../Testimonial/Testimonial'
import classes from './CodeAsylumsAdvantageSystems.module.css'

const CodeAsylumsAdvantageSystems = (props) => {
    return(
        <div className={classes.Advantage}>
        <div className={classes.Line}></div>
            <div className={classes.Line}></div>
            <p className={classes.Heading} >The CodeAsylums Advantage</p>
            <div className={classes.BG}>
                <ul>
                    <li>100+ Hrs of dedicated professional mentoring</li>
                    <li>Online Live interactive coding</li>
                    <li>Fully supported by Teaching Assistants</li>
                    <li>5+ Mentored Hackathons for Project Building</li>
                </ul>
                <ul>
                    <li>Developing Product by Mentored Week Long Challenge</li>
                    <li>Collaborative and Interactive Environment using Community Channels</li>
                    <li>Internal plus Competitive progress & reports for self-assessments</li>
                    <li>Placement Assistance and Referrals for Job Opportunities</li>
                </ul>
                <div className={classes.divTestimonial}>
                    <Testimonial showCircle={false} showAbout={true} name="C S Madhav" about="Platform Engineer, Paysafe" content="Stepping into the world of development can be a daunting task for many, given the sheer number of tools and technologies available at one's disposal to choose from. I am so glad to be a part of this program and to be able to help developers make right decisions in their coding journey." />
                </div>
            </div>
        </div>
    )
}

export default CodeAsylumsAdvantageSystems