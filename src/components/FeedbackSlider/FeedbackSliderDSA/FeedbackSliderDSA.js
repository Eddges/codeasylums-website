import React from 'react'
import './FeedbackSliderDSA.css'
import FeedbackSliderCard from '../../FeedbackSliderCard/FeedbackSliderCard'

const FeedbackSliderDSA = (props) => {

    const feedbacks = [
        {
            name : "Nagendra Kumar",
            feedback : "CodeAsylums was elemental in helping me secure my job at Microsoft. The mentors were amazing. You could either try to grasp everything by yourself, which would take months, or you could join CodeAsylums and kickstart your career path!"
        },
        {
            name : "Shivam Shekhar",
            feedback : "CodeAsylums was elemental in helping me secure my job at Microsoft. The mentors were amazing. You could either try to grasp everything by yourself, which would take months, or you could join CodeAsylums and kickstart your career path!"
        },
        {
            name : "Saurav Suman",
            feedback : "CodeAsylums was elemental in helping me secure my job at Microsoft. The mentors were amazing. You could either try to grasp everything by yourself, which would take months, or you could join CodeAsylums and kickstart your career path!"
        },
        {
            name : "Nagendra Kumar",
            feedback : "CodeAsylums was elemental in helping me secure my job at Microsoft. The mentors were amazing. You could either try to grasp everything by yourself, which would take months, or you could join CodeAsylums and kickstart your career path!"
        }
    ]

    const cards = feedbacks.map((iterator, index) => <FeedbackSliderCard feedback={iterator.feedback} name={iterator.name} key={index} />)

    return(

        <div>
            {/* <div class ="headertestimonial">
                <p>OUR TESTIMONIALS</p>
            </div> */}
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
          {/* keyboard_arrow_left */}
          </i></button>
              </div>
            </div>
          </div>
    </div>

        </div>

    )
}

export default FeedbackSliderDSA  