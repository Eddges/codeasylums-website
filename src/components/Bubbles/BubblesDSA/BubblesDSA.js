import React from 'react'
import classes from './Bubbles.module.css'

const BubblesDSA = (props) => {
    return(
        <div className={classes.Container}>
            <p className={classes.Advantage}>An average week</p>
            <div className={classes.Bubble1} data-aos="zoom-in" data-aos-anchor-placement="top-bottom">
                <div>
                <p>Day 1</p>
                <p>Lively Mentor Sessions</p>
                </div>
            </div>
            <div className={classes.Bubble2}  data-aos="zoom-in" >
                <div>
                <p>Day 2</p>
                <p>Assignment Sessions with Doubts & Discussion</p>
                </div>
            </div>
            <div className={classes.Bubble3} data-aos="zoom-in" >
                <div>
                <p>Day 3</p>
                <p>Lively Mentor Sessions</p>
                </div>
            </div>
            <div className={classes.Bubble4} data-aos="zoom-in" >
                <div>
                <p>Day 4</p>
                <p>Lively Mentor Sessions</p>
                </div>
            </div>
            <div className={classes.Bubble5} data-aos="zoom-in">
                <div>
                <p>Day 5</p>
                <p>Assignment Sessions with Doubts & Discussion</p>
                </div>
            </div>
            <div className={classes.Bubble6} data-aos="zoom-in" data-aos-anchor-placement="top-bottom">
                <div>
                <p>Day 6</p>
                <p>Hackathon & Projects</p>
                </div>
            </div>
            <div className={classes.Bubble7} data-aos="zoom-in" data-aos-anchor-placement="top-bottom">
                <div>
                <p>Day 7</p>
                <p>Analysis, Presentations, Tech-Talk</p>
                </div>
            </div>
        </div>
    )
}

export default BubblesDSA;