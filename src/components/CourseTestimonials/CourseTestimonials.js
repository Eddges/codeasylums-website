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
        }
    ]

    const testimonialCards = testimonials.map(card => 
        <div className={classes.Testimonial}><Testimonial content={card.content} name={card.name} about={classes.about} showAbout={true} showCircle={true} /></div>
    )
    return (
        <div className={classes.CourseTestimonials}>
            {/* <div className={classes.Testimonial}>
                <Testimonial content="I completely give my placement credits to CodeAsylum’s FullStack Development program. It has indeed changed my life." name="Shivam Shekhar" about="CEO Microsoft" showAbout={true} showCircle={true} />
            </div> */}
            {testimonialCards}
        </div>
    )
}

export default CourseTestimonials