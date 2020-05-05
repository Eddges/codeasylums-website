import React from 'react'
// import classes from './Accordion.module.css'
import './Link.css'

const Accordion = (props) => {
    return(
        <section className="accordion">
            <p className="title">Frequently Asked Questions</p>
            <div className="container">
                <div className="item" id="item1">
                    <a className="link" href="#item1" >
                        What is the average duration of the programs?
                        <span>+</span>
                        <span>-</span>
                    </a>
                    <div className="answer">
                        <p>This is the expanded answer. This is the expanded answer. This is the expanded answer.This is the expanded answer. This is the expanded answer. This is the expanded answer.This is the expanded answer. This is the expanded answer. This is the expanded answer.
                            This is the expanded answer. This is the expanded answer. This is the expanded answer.This is the expanded answer. This is the expanded answer. This is the expanded answer.This is the expanded answer. This is the expanded answer. This is the expanded answer.
                            This is the expanded answer. This is the expanded answer. This is the expanded answer.This is the expanded answer. This is the expanded answer. This is the expanded answer.This is the expanded answer. This is the expanded answer. This is the expanded answer.
                        </p>
                    </div>
                </div>
                <div className="item" id="item2">
                    <a className="link" href="#item2">
                        Is it for complete beginners too?
                        <span>+</span>
                        <span>-</span>
                    </a>
                    <div className="answer">
                        <p>This is the expanded answer. This is the expanded answer. This is the expanded answer.This is the expanded answer. This is the expanded answer. This is the expanded answer.This is the expanded answer. This is the expanded answer. This is the expanded answer.
                            This is the expanded answer. This is the expanded answer. This is the expanded answer.This is the expanded answer. This is the expanded answer. This is the expanded answer.This is the expanded answer. This is the expanded answer. This is the expanded answer.
                            This is the expanded answer. This is the expanded answer. This is the expanded answer.This is the expanded answer. This is the expanded answer. This is the expanded answer.This is the expanded answer. This is the expanded answer. This is the expanded answer.
                        </p>
                    </div>
                </div>
                <div className="item" id="item3">
                    <a className="link" href="#item3">
                        How long will I need to devoted each day?
                        <span>+</span>
                        <span>-</span>
                    </a>
                    <div className="answer">
                        <p>This is the expanded answer. This is the expanded answer. This is the expanded answer.This is the expanded answer. This is the expanded answer. This is the expanded answer.This is the expanded answer. This is the expanded answer. This is the expanded answer.
                            This is the expanded answer. This is the expanded answer. This is the expanded answer.This is the expanded answer. This is the expanded answer. This is the expanded answer.This is the expanded answer. This is the expanded answer. This is the expanded answer.
                            This is the expanded answer. This is the expanded answer. This is the expanded answer.This is the expanded answer. This is the expanded answer. This is the expanded answer.This is the expanded answer. This is the expanded answer. This is the expanded answer.
                        </p>
                    </div>
                </div>
                <div className="item" id="item4">
                    <a className="link" href="#item4">
                        What if I have a team already?
                        <span>+</span>
                        <span>-</span>
                    </a>
                    <div className="answer">
                        <p>This is the expanded answer. This is the expanded answer. This is the expanded answer.This is the expanded answer. This is the expanded answer. This is the expanded answer.This is the expanded answer. This is the expanded answer. This is the expanded answer.
                            This is the expanded answer. This is the expanded answer. This is the expanded answer.This is the expanded answer. This is the expanded answer. This is the expanded answer.This is the expanded answer. This is the expanded answer. This is the expanded answer.
                            This is the expanded answer. This is the expanded answer. This is the expanded answer.This is the expanded answer. This is the expanded answer. This is the expanded answer.This is the expanded answer. This is the expanded answer. This is the expanded answer.
                        </p>
                    </div>
                </div>
                <div className="item" id="item5">
                    <a className="link" href="#item5">
                        What is the refund policy?
                        <span>+</span>
                        <span>-</span>
                    </a>
                    <div className="answer">
                        <p>This is the expanded answer. This is the expanded answer. This is the expanded answer.This is the expanded answer. This is the expanded answer. This is the expanded answer.This is the expanded answer. This is the expanded answer. This is the expanded answer.
                            This is the expanded answer. This is the expanded answer. This is the expanded answer.This is the expanded answer. This is the expanded answer. This is the expanded answer.This is the expanded answer. This is the expanded answer. This is the expanded answer.
                            This is the expanded answer. This is the expanded answer. This is the expanded answer.This is the expanded answer. This is the expanded answer. This is the expanded answer.This is the expanded answer. This is the expanded answer. This is the expanded answer.
                        </p>
                    </div>
                </div>
                <div className="item" id="item6">
                    <a className="link" href="#item6">
                        What if I don't like the program?
                        <span>+</span>
                        <span>-</span>
                    </a>
                    <div className="answer">
                        <p>This is the expanded answer. This is the expanded answer. This is the expanded answer.This is the expanded answer. This is the expanded answer. This is the expanded answer.This is the expanded answer. This is the expanded answer. This is the expanded answer.
                            This is the expanded answer. This is the expanded answer. This is the expanded answer.This is the expanded answer. This is the expanded answer. This is the expanded answer.This is the expanded answer. This is the expanded answer. This is the expanded answer.
                            This is the expanded answer. This is the expanded answer. This is the expanded answer.This is the expanded answer. This is the expanded answer. This is the expanded answer.This is the expanded answer. This is the expanded answer. This is the expanded answer.
                        </p>
                    </div>
                </div>
            </div>
        </section>
        // <React.Fragment>
        //             <div id="Hello">Hellloooooo</div>
        // <a href="#Hello">Click here</a>
        // </React.Fragment>

    )
}

export default Accordion