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
                    <Testimonial showCircle={false} showAbout={true}  content="The Competitive Programming course was surely one great eye opener for someone who has always wanted to get into the big name companies. The program not only helped me conquer my fears over Trees and Graphs, but also helped me develop the right approach to tackle programming problems." />
                </div>
                <ul>
                    <li>Software developer</li>
                    <li>Software Engineer</li>
                    <li>Member of Technical Staff</li>
                    <li>Platform Engineer</li>
                </ul>
                <ul>                    
                    <li>Senior Software Developer</li>
                    <li>Senior Software Engineer</li>
                    <li>SDE - 1 / SDE - 2</li>
                    {/* <li>NodeJS developer</li> */}
                </ul>
                
            </div>
        </div>
    )
}

export default JobReadyDSAdvanced