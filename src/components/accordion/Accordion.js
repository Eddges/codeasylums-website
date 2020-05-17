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
                        <p>You will get around 10-12 hours of live mentored classes. Apart from the classes, you will also be given plenty of assignments and challenges.
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
                        <p>Yes, you will. In the current day and age, employers have an eye for actual talent and skill and a certificate of completion of one of our professional courses does indeed affirm your skills.
                        </p>
                    </div>
                </div>
                <div className="accitem" id="item3">
                    <a className="acclink" >
                        What is the refund and cancellation policy?
                        <span>+</span>
                        <span>-</span>
                    </a>
                    <div className="accanswer">
                        <p> We believe in 100% refund policy in case of disconnectivity. But due to payment processing and extra services of onboarding, we will deduct 5% for the same.
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
                        <p>You certainly can. Although owing to the rigorous curriculum of the courses, we would advise you to stick to one course at a time, finish it and apply for the next one afterwards.
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
                        <p> We have great counselling support for the conduction related doubts as well as a TA support for 24x7 teaching assistance.
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
                        <p>We don’t believe in grades. We look for implementation, applications and creativity which we try to inculcate among our students through coding challenges and Hackathons.
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