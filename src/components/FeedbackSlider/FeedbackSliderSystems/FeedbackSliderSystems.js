import React from 'react'
import './FeedbackSliderSystems.css'
import FeedbackSliderCard from '../../FeedbackSliderCard/FeedbackSliderCard'
import amanAryan from '../../../assets/aman-aryan.jpeg'
import ayushi from '../../../assets/ayushi.jpeg'
import raunak from '../../../assets/raunak.jpeg'
import omkar from '../../../assets/omkar.png'

const FeedbackSliderSystems = (props) => {

    const feedbacks = [
        {   
            image : amanAryan,
            name : "Aman Aryan",
            feedback : " It's the best ever bootcamp I have ever attended. The pattern of teaching and the quality mentors and tutors are top notch and it provides a friendly competitive environment of learning."
        },
        {
            image : omkar,
            name : "Omkar Jai",
            feedback : "Great place to learn and improve your techy skills ! Great mentors and great community as well. Would definitely recommend!"
        },
        {
            image : ayushi,
            name : "Ayushi",
            feedback : "The experience is totally worth it, and I would definitely recommend it to my juniors, just go there, and experience it."
        },
        {
            image : raunak,
            name : "Raunak Agrawal",
            feedback : "CodeAsylums was elemental in helping me secure my job at Microsoft. The mentors were amazing. You could either try to grasp everything by yourself, which would take months, or you could join CodeAsylums and kickstart your career path!"
        }
    ]
    const cards = feedbacks.map((iterator, index) => <FeedbackSliderCard feedback={iterator.feedback} name={iterator.name} image={iterator.image} key={index} />)

    return(

        <div>
            {/* <div class ="headertestimonial">
                <p>OUR TESTIMONIALS</p>
            </div> */}
            <div class="testimonials_section" id="testimonials">

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

export default FeedbackSliderSystems