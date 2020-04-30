import React from 'react'
import Testimonial from '../Testimonial/Testimonial'
import classes from './CodeAsylumsAdvantage.module.css'

const CodeAsylumsAdvantage = (props) => {
    return(
        <div className={classes.Advantage}>
            <p className={classes.Heading} >The CodeAsylums Advantage</p>
            <div className={classes.BG}>
                <ul>
                    <li>120 + hrs of dedicated mentoring</li>
                    <li>Long distance interactive coding</li>
                    <li>24x7 support with expert TAs</li>
                    <li>5+ Real World inspired projects</li>
                </ul>
                <ul>
                    <li>Dedicated App for tracking progress</li>
                    <li>Multidisciplinary Hackathons every weekend</li>
                    <li>Benefit number seven here</li>
                    <li>Benefit number 8 here please</li>
                </ul>
                <div className={classes.divTestimonial}>
                    <Testimonial showCircle={false} showAbout={true} name="Shivam Shekhar" about="-CEO/CTO Google" content="I feel the curriculum is very extensive and covers everything from the basics in backend and frontend technologies. The program will be very helpful for anyone who’s looking to start their career as a full-stack developer." />
                </div>
            </div>
        </div>
    )
}

export default CodeAsylumsAdvantage