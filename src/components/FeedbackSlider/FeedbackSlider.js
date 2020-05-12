import React from 'react'
import './FeedbackSlider.css'
import FeedbackSliderCard from '../FeedbackSliderCard/FeedbackSliderCard'

const FeedbackSlider = (props) => {

    const feedbacks = [
        {
            name : "Nagendra Kumar",
            feedback : "Hello I am XYZ and I attended codeasylums and I am very happy"
        },
        {
            name : "Shivam Shekhar",
            feedback : "Hello I am XYZ and I attended codeasylums and I am very happy"
        },
        {
            name : "Saurav Suman",
            feedback : "Hello I am XYZ and I attended codeasylums and I am very happy"
        },
        {
            name : "Nagendra Kumar",
            feedback : "Hello I am XYZ and I attended codeasylums and I am very happy"
        }
    ]

    const cards = feedbacks.map((iterator, index) => <FeedbackSliderCard feedback={iterator.feedback} name={iterator.name} key={index} />)

    return(

        <div>
            <div class ="headertestimonial">
                <p>OUR TESTIMONIALS</p>
            </div>
            <div class="testimonials_section">

        <div class="containerSlider">
            <div class="carouselSlider">
              <div class="sliderMain">
              {cards}
              </div>
              <div class="controls">
                <button class="next"><i class="material-icons">
          keyboard_arrow_right
          </i></button>
                <button class="prev"><i class="material-icons">
          keyboard_arrow_left
          </i></button>
              </div>
            </div>
          </div>
    </div>

        </div>

    )
}

export default FeedbackSlider