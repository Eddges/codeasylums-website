import React from 'react'
// import classes from './Accordion.module.css'
import './Link.css'

const Accordion = (props) => {
    return(
        <section className="accordion" id="faq">
            <p className="acctitle">Frequently Asked Questions</p>
            <div className="acccontainer">
                <div className="accitem" id="item1">
                    <a className="acclink"  >
                        How much will I need to devote to the course?
                        <span>+</span>
                        <span>-</span>
                    </a>
                    <div className="accanswer">
                        <p>Around 10-12 Hrs of Mentorship per week plus assignments and challenges.
                        </p>
                    </div>
                </div>
                <div className="accitem" id="item2">
                    <a className="acclink" >
                        Will I get a certificate of completion?
                        <span>+</span>
                        <span>-</span>
                    </a>
                    <div className="accanswer">
                        <p>In the professional industry, people are looking for skills for now, but still you will be getting a completion certificate with the speciations of your performance and analysis by CodeAsylums.
                        </p>
                    </div>
                </div>
              
                <div className="accitem" id="item4">
                    <a className="acclink" >
                        Can I apply for more than one course at a time?
                        <span>+</span>
                        <span>-</span>
                    </a>
                    <div className="accanswer">
                        <p>We will be here always, start with one and can move to another after at least starting one.
                        </p>
                    </div>
                </div>
                <div className="accitem" id="item5">
                    <a className="acclink" >
                        Who will clear my doubts upon enrolment?
                        <span>+</span>
                        <span>-</span>
                    </a>
                    <div className="accanswer">
                        <p> We have a great counselling support for your conduction related doubts and TA support for 24x7 teaching assistance.
                        </p>
                    </div>
                </div>
                <div className="accitem" id="item6">
                    <a className="acclink" >
                    Will my performance and projects be graded?
                        <span>+</span>
                        <span>-</span>
                    </a>
                    <div className="accanswer">
                        <p> We don’t believe in grades, we look for implementation and applications which we motivates through coding challenges and Hackathons.
                        </p>
                    </div>
                </div>
            </div>
        </section>
        // <React.Fragment>
        //             <div id="Hello">Hellloooooo</div>
        // <a >Click here</a>
        // </React.Fragment>

    )
}

export default Accordion