import React from 'react'
import './FeedbackSlider.css'
import FeedbackSliderCard from '../FeedbackSliderCard/FeedbackSliderCard'

const FeedbackSlider = (props) => {

    const feedbacks = [
        {
            name : "ANKUR KUMAR SINGH",
            feedback : "It has been a wonderful experience. Mentors are very good,they teach you from basics to advanced concepts very well. There are conceptual classes, doubt classes & timely contests to strengthen your knowledge."
        },
        {
            name : "ABHISHEK KUMAR",
            feedback : "So far so good. I'm learning new concepts everyday. Mentors are top notch and their and their teaching style makes it easier to grasp concepts"
        },
        {
            name : "AKSHAY GUPTA",
            feedback : "It has been a great experience. Teachers are very supportive here. Codeasylums is doing a good job in creating a community of people working towards a similar goal."
        },
        {
            name : "SWARNENDU GANGULI",
            feedback : "Classes are excellent here and also the teaching of mentors. I am very thankful to everyone here for guiding me throughout the course as I have learnt so many new things over here and will look forward to learn as much as I can. You guys are great."
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
          </i>
          </button>
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

export default FeedbackSlider   