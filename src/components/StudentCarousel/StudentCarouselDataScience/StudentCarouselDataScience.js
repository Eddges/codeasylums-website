import React from 'react'
import './SC.css'
// import ht from '../../assets/curriculum/html.png'
import student from '../../../assets/student.jpg'
import mentor from '../../../assets/mentorCarousel.jpg'
import caseStudy from '../../../assets/case-studyCarousel.jpg'
import contest from '../../../assets/contestCarousel.jpg'
import discussion from '../../../assets/discussionCarousel.jpg'
import interviews from '../../../assets/interviewsCarousel.jpg'
import webinars from '../../../assets/webinarsCarousel.jpg'

const StudentCarouselDataScience = (props) => {
    return(
    <div className="containerCarousel">
        <h1 className="title">We leave no stone unturned</h1>
        <p className="details">We at CodeAsylums are educators first and professionals second. We leave no stone unturned in imparting all-around holistic education to the students!<span></span></p>
        <div className="timeline">
            <div className="timeline-nav">
                <div className="timeline-nav__item">Mentorship</div>
                <div className="timeline-nav__item">Case-Studies</div>
                <div className="timeline-nav__item">Contests</div>
                <div className="timeline-nav__item">Discussions</div>
                <div className="timeline-nav__item">Interviews</div>
                <div className="timeline-nav__item">Webinars</div>
                {/* <div className="timeline-nav__item">Sunday</div> */}

            </div>
            <div className="timeline-wrapper">
                <div className="timeline-slider">
                    <div className="timeline-slide monday" style={{backgroundImage : `url(${mentor})`}} data-year="1985"> <span className="timeline-year">Mentorship</span>
                        <div className="timeline-slide__content"  >
                            <h4 className="timeline-title">Lively Mentorship Sessions</h4>
                            <p className="timeline-text">Working professionals, from the industry, provide their valuable time to mentor the best and latest required coding skills and make job-ready</p>
                        </div>
                    </div>
                    <div className="timeline-slide tuesday" style={{backgroundImage : `url(${caseStudy})`}} data-year="1988"> <span className="timeline-year">Case Studies</span>
                        <div className="timeline-slide__content">
                            <h4 className="timeline-title">Case Studies and Guestimates</h4>
                            <p className="timeline-text">Data Science Professionals requires a lot of brainstorming on Data and MetaData in groups, with a practical conclusion</p>
                        </div>
                    </div>
                    <div className="timeline-slide wednesday" style={{backgroundImage : `url(${contest})`}} data-year="1998"> <span className="timeline-year">Contests</span>
                        <div className="timeline-slide__content">
                            <h4 className="timeline-title">Kaggle Coding Contest</h4>
                            <p className="timeline-text">Compete with other mates and the ML community all around the world using kaggle</p>
                        </div>
                    </div>
                    <div className="timeline-slide thursday"style={{backgroundImage : `url(${discussion})`}} data-year="2006"> <span className="timeline-year">Discussions</span>
                        <div className="timeline-slide__content">
                            <h4 className="timeline-title">Contest Discussions</h4>
                            <p className="timeline-text">Solving and Discussing various approaches required to solve, analyse and optimise code with mentors and other batch mates</p>
                        </div>
                    </div>
                    <div className="timeline-slide friday" style={{backgroundImage : `url(${interviews})`}}  data-year="2008"> <span className="timeline-year">Interviews</span>
                        <div className="timeline-slide__content">
                            <h4 className="timeline-title">Mock-Interviews</h4>
                            <p className="timeline-text">Personal Mock interviews, for the companies you look forward, with the help of great network and connectivity in the Professional and Coding Community</p>
                        </div>
                    </div>
                    <div className="timeline-slide saturday" style={{backgroundImage : `url(${webinars})`}} data-year="2010"> <span className="timeline-year">Webinars</span>
                        <div className="timeline-slide__content">
                            <h4 className="timeline-title">Tech-Talk Webinars</h4>
                            <p className="timeline-text">Awareness sessions on the latest technologies coming and going in the industry and research</p>
                        </div>
                    </div>
                    {/* <div className="timeline-slide sunday" style={{backgroundImage : `url(${student})`}} data-year="2012"> <span className="timeline-year">Sunday</span>
                        <div className="timeline-slide__content">
                            <h4 className="timeline-title">Our nice super title</h4>
                            <p className="timeline-text">Lorem ipsum dolor site amet, consectetur adipscing elit, sed do eisumod tempor incididut ut labore et dolore magna aliqua. Ut enim ad mimim venjam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                        </div>
                    </div> */}
                </div>
            </div>
        </div>
    </div>
    )
}

export default StudentCarouselDataScience