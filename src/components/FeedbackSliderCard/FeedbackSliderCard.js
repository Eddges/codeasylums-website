import React from 'react'
import './../FeedbackSlider/FeedbackSlider.css'

const FeedbackSliderCard = (props) => {
    return(
        <section class="section">
            <span class=" material-icons" style={{fontSize: "50px", color: "#6b86ff"}}>
            face
            </span>
            <p>{props.feedback}</p>
            <p>{props.name}</p>
        </section>
    )
}

export default FeedbackSliderCard