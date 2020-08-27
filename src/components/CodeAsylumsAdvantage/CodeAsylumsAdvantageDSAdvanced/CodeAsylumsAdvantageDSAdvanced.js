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
                        <li>100+ Hrs of dedicated professional mentoring</li>
                        <li>Online Live interactive sessions</li>
                        <li>Aptitude, Case Studies & Guestimates</li>
                        <li>Kaggle Contest and AI Webinars  </li>
                    </ul>
                    <ul>
                        <li>Fully supported by Teaching Assistants</li>
                        <li>Collaborative and Interactive Environment using Community Channels</li>
                        <li>Internal plus Competitive progress & reports for self-assessments</li>
                        <li>Placement Assistance and Referrals for Job Opportunities</li>
                    </ul>
                <div className={classes.divTestimonial}>
                    <Testimonial showCircle={false} showAbout={true} name="Rahul Kumar" about="Data Scientist, Future First" content="There is nothing more promising in the world of technology right now than Data Science and Machine Learning. To put it simply, the future is data. It's really unfortunate that most courses and professors do not do justice to the beauty of this field. The Data Science Track from CodeAsylums is an excellent opportunity to truly dive deeply into the world of data and numbers." />
                </div>
            </div>
        </div>
    )
}

export default CodeAsylumsAdvantageDSAdvanced