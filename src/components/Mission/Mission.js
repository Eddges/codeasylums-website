import React from 'react'
import classes from './Mission.module.css'

const Mission = (props) => {
    return(
        <div className={classes.Mission}>
            <div className={classes.Gradient}></div>
            <p className={classes.Title}>The Promise</p>
            <p className={classes.Description}>To hone developers that excel in computer programming and thereafter have successful careers in the I.T. field, and whose actions raise industry standards and surpass client expectations.</p>
        </div>
    )
}

export default Mission