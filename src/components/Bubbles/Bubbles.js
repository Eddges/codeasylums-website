import React from 'react'
import classes from './Bubbles.module.css'

const Bubbles = (props) => {
    return(
        <div className={classes.Container}>
            <p className={classes.Advantage}>An average week</p>
            <div className={classes.Bubble1}>
                <div>
                <p>Day 1</p>
                <p>Live Concept Classes</p>
                <p>Problem and doubt discussions</p>
                </div>
            </div>
            <div className={classes.Bubble2}>
                <div>
                <p>Day 2</p>
                <p>Live Concept classes</p>
                <p>Coding Contest.</p>
                <p>Contest Solution Discussions</p>
                </div>
            </div>
            <div className={classes.Bubble3}>
                <div>
                <p>Day 3</p>
                <p>Problem Solving</p>
                <p>Doubt discussions</p>
                </div>
            </div>
            <div className={classes.Bubble4}>
                <div>
                <p>Day 4</p>
                <p>Coding Contest</p>
                <p>Contest Solution </p>
                <p>Discussions</p>
                </div>
            </div>
            <div className={classes.Bubble5}>
                <div>
                <p>Day 5</p>
                <p>Live Concept Classes</p>
                <p>Doubt clearing session</p>
                </div>
            </div>
            <div className={classes.Bubble6}>
                <div>
                <p>Day 6</p>
                <p>Mock Interview with </p>
                <p>Industry Experts,</p>
                <p>Interview Discussions</p>
                </div>
            </div>
            <div className={classes.Bubble7}>
                <div>
                <p>Day 7</p>
                <p>Problem Solving</p>
                <p>Doubt clearing session</p>
                </div>
            </div>
        </div>
    )
}

export default Bubbles;