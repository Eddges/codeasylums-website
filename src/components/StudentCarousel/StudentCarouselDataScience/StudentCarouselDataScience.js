import React from 'react'
import './SC.css'
// import ht from '../../assets/curriculum/html.png'
import student from '../../../assets/student.jpg'

const StudentCarouselDataScience = (props) => {
    return(
    <div className="containerCarousel">
        <h1 className="title">#Asylumites Professional Diary</h1>
        <p className="details">A week in the life of CodeAsylums student <span>Shivam Shekhar</span>, DSA, Winter 2019.</p>
        <div className="timeline">
            <div className="timeline-nav">
                <div className="timeline-nav__item">Monday</div>
                <div className="timeline-nav__item">Tuesday</div>
                <div className="timeline-nav__item">Wednesday</div>
                <div className="timeline-nav__item">Thursday</div>
                <div className="timeline-nav__item">Friday</div>
                <div className="timeline-nav__item">Saturday</div>
                <div className="timeline-nav__item">Sunday</div>

            </div>
            <div className="timeline-wrapper">
                <div className="timeline-slider">
                    <div className="timeline-slide monday" style={{backgroundImage : `url(${student})`}} data-year="1985"> <span className="timeline-year">Monday</span>
                        <div className="timeline-slide__content"  >
                            <h4 className="timeline-title">Coursework</h4>
                            <p className="timeline-text">This week, my team started working on a very cool concept involving food ingredients. My mentors are very supportive of my idea.</p>
                        </div>
                    </div>
                    <div className="timeline-slide tuesday" style={{backgroundImage : `url(${student})`}} data-year="1988"> <span className="timeline-year">Tuesday</span>
                        <div className="timeline-slide__content">
                            <h4 className="timeline-title">Our first project</h4>
                            <p className="timeline-text">First project for the leading film actress Jamuna Barua, wife of Pramathesh Barua the legendary actor, director, and screenwriter</p>
                        </div>
                    </div>
                    <div className="timeline-slide wednesday" style={{backgroundImage : `url(${student})`}} data-year="1998"> <span className="timeline-year">Wednesday</span>
                        <div className="timeline-slide__content">
                            <h4 className="timeline-title">Our nice super title</h4>
                            <p className="timeline-text">Lorem ipsum dolor site amet, consectetur adipscing elit, sed do eisumod tempor incididut ut labore et dolore magna aliqua. Ut enim ad mimim venjam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                        </div>
                    </div>
                    <div className="timeline-slide thursday"style={{backgroundImage : `url(${student})`}} data-year="2006"> <span className="timeline-year">Thursday</span>
                        <div className="timeline-slide__content">
                            <h4 className="timeline-title">Our nice super title</h4>
                            <p className="timeline-text">Lorem ipsum dolor site amet, consectetur adipscing elit, sed do eisumod tempor incididut ut labore et dolore magna aliqua. Ut enim ad mimim venjam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                        </div>
                    </div>
                    <div className="timeline-slide friday" style={{backgroundImage : `url(${student})`}}  data-year="2008"> <span className="timeline-year">Friday</span>
                        <div className="timeline-slide__content">
                            <h4 className="timeline-title">Our nice super title</h4>
                            <p className="timeline-text">Lorem ipsum dolor site amet, consectetur adipscing elit, sed do eisumod tempor incididut ut labore et dolore magna aliqua. Ut enim ad mimim venjam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                        </div>
                    </div>
                    <div className="timeline-slide saturday" style={{backgroundImage : `url(${student})`}} data-year="2010"> <span className="timeline-year">Saturday</span>
                        <div className="timeline-slide__content">
                            <h4 className="timeline-title">Our nice super title</h4>
                            <p className="timeline-text">Lorem ipsum dolor site amet, consectetur adipscing elit, sed do eisumod tempor incididut ut labore et dolore magna aliqua. Ut enim ad mimim venjam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                        </div>
                    </div>
                    <div className="timeline-slide sunday" style={{backgroundImage : `url(${student})`}} data-year="2012"> <span className="timeline-year">Sunday</span>
                        <div className="timeline-slide__content">
                            <h4 className="timeline-title">Our nice super title</h4>
                            <p className="timeline-text">Lorem ipsum dolor site amet, consectetur adipscing elit, sed do eisumod tempor incididut ut labore et dolore magna aliqua. Ut enim ad mimim venjam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}

export default StudentCarouselDataScience