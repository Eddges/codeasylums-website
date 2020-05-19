import React from 'react'
import './FeedbackSlider.css'
import FeedbackSliderCard from '../FeedbackSliderCard/FeedbackSliderCard'
import classes from './FeedbackSlider.module.css'

const FeedbackSlider = (props) => {

    const feedbacks = [
        {
            name : "Ankur Kumar Singh",
            feedback : "It has been a wonderful experience. Mentors are very good,they teach you from basics to advanced concepts very well. There are conceptual classes, doubt classes & timely contests to strengthen your knowledge."
        },
        {
            name : "Abhishek Kumar",
            feedback : "So far so good. I'm learning new concepts everyday. Mentors are top notch and their teaching style makes it easier to grasp concepts"
        },
        {
            name : "Akshay Gupta",
            feedback : "It has been a great experience. Teachers are very supportive here. Codeasylums is doing a good job in creating a community of people working towards a similar goal."
        },
        {
            name : "Swarnendu Ganguli",
            feedback : "Classes are excellent here and also the teaching of mentors. I am very thankful to everyone here for guiding me throughout the course as I have learnt so many new things and look forward to learn as much as I can. You guys are great."
        }
    ]

    const cards = feedbacks.map((iterator, index) => <FeedbackSliderCard feedback={iterator.feedback} name={iterator.name} key={index} />)

    return(

        <div id="protestimonials">
            <div className={classes.headertestimonial}>
                <p>What are our students saying about us?</p>
            </div>
            <div class="testimonials_section_main">

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