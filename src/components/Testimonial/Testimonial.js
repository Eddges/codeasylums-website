import React from 'react'
import classes from './Testimonial.module.css'

const Testimonial = (props) => {
    let showCircle = "none"
    if(props.showCircle){
        showCircle = "1"
    }
    let showAbout = "none"
    if(props.showAbout){
        showAbout = "1"
    }

    let animated = "";
    if(props.scrollAnimated){
        animated="zoom-in"
    }
    return(
        <div className={classes.Testimonial} data-aos={animated}> 
            <div className={classes.Circle} style={{display : showCircle}}></div>
            <div className={classes.Content}>"{props.content}"</div>
            <div className={classes.Name}>{props.name}</div>
            <div className={classes.About} style={{display : showAbout}}>{props.about}</div>
        </div>
    )
}

export default Testimonial