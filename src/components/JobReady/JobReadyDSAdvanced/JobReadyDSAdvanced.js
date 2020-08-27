import React from 'react'
import Testimonial from '../../Testimonial/Testimonial'
import classes from './JobReadyDSAdvanced.module.css'

const JobReadyDSAdvanced = (props) => {
    return(
        <div className={classes.Job}>
            <p className={classes.Heading} >Be Job Ready</p>
            <p className={classes.Opportunities}>Accelerate your coding skills with CodeAsylums to Crack Coding Interviews</p>
            <div className={classes.BG}>
                <div className={classes.divTestimonial}>
                    <Testimonial showCircle={false} showAbout={true}  content="This was truly an eye opener. I never thought that I'll be able to make such complicated and efficient models and build real-life problem solving applications. I am so fortunate to have discoverd this program and work study under such amazing mentorship." />
                </div>
                <ul>
                    <li>Data Scientist</li>
                    <li>Machine Learning Engineer</li>
                    <li>Data Analyst</li>
                    <li>Business Analyst</li>
                </ul>
                <ul>                    
                    <li>Statistician</li>
                    <li>Database Administrator</li>
                    <li>BI Analyst</li>
                    <li>Data & Analytics Manager</li>
                </ul>
                
            </div>
        </div>
    )
}

export default JobReadyDSAdvanced