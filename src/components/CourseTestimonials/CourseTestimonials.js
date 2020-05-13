import React from 'react'
import Testimonial from '../Testimonial/Testimonial'
import classes from './CourseTestimonials.module.css'

const CourseTestimonials = (props) => {
    const testimonials = [
        {
            icon : null,
            name : "Shivam Shekhar",
            about : "CEO, Microsoft", 
            content : "I completely give my placement credits to CodeAsylum’s FullStack Development program. It has indeed changed my life."
        },
        {
            icon : null,
            name : "Shivam Shekhar",
            about : "CEO, Microsoft", 
            content : "I completely give my placement credits to CodeAsylum’s FullStack Development program. It has indeed changed my life."
        },
        {
            icon : null,
            name : "Shivam Shekhar",
            about : "CEO, Microsoft", 
            content : "I completely give my placement credits to CodeAsylum’s FullStack Development program. It has indeed changed my life."
        },
        // {
        //     icon : null,
        //     name : "Shivam Shekhar",
        //     about : "CEO, Microsoft", 
        //     content : "I completely give my placement credits to CodeAsylum’s FullStack Development program. It has indeed changed my life."
        // },
        // {
        //     icon : null,
        //     name : "Shivam Shekhar",
        //     about : "CEO, Microsoft", 
        //     content : "I completely give my placement credits to CodeAsylum’s FullStack Development program. It has indeed changed my life."
        // },
        // {
        //     icon : null,
        //     name : "Shivam Shekhar",
        //     about : "CEO, Microsoft", 
        //     content : "I completely give my placement credits to CodeAsylum’s FullStack Development program. It has indeed changed my life."
        // }
    ]

    const testimonialCards = testimonials.map(card => 
        <div className={classes.Testimonial}><Testimonial scrollAnimated={true} content={card.content} name={card.name} about={classes.about} showAbout={true} showCircle={false} /></div>
    )
    return (
        <div className={classes.container}>
            <p>What are our students saying about us?</p>
            <div className={classes.Line}></div>
            <div className={classes.CourseTestimonials}>
                {testimonialCards}
            </div>
        </div>

    )
}

export default CourseTestimonials