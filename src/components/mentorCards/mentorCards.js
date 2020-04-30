import React from 'react'
import classes from './mentorCards.module.css'

const MentorCards = (props) => {
    return(
        <div className={classes.card}>
            <div className={classes.Circle}></div>
            <p className={classes.name}>{props.name}</p>
            <p className={classes.about}>{props.about}</p>
        </div>
    )
}

export default MentorCards