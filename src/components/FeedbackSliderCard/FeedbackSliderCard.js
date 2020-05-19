import React from 'react'
import './../FeedbackSlider/FeedbackSlider.css'

const FeedbackSliderCard = (props) => {
    return(
        <section className="section">
            <div className = "leftfeedbackCard">
            <span className = "img">
            {/* <img src="https://img.icons8.com/bubbles/200/000000/user-female.png"/> */}
            {/* <img src = "https://randomuser.me/api/portraits/men/1.jpg"/> */}
            <img src="https://img.icons8.com/bubbles/150/000000/man-in-red-shirt.png"/>
            </span>
            </div>
            <div className = "rightfeedbackCard">
                <p>{props.feedback}</p>
                <p>{props.name}</p>
            </div>
           
        </section>
    )
}

export default FeedbackSliderCard