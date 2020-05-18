import React from 'react'
import classes from './mentorCards.module.css'

const MentorCards = (props) => {
    return(
        <div className={classes.container}>
            <div className={classes.card}>
                <div className={classes.back}></div>
                {/* <div className={classes.Circle}>
                    <img src={props.image} />
                </div> */}
                <p className={classes.name}>{props.name}</p>
                <p className={classes.about}>{props.about}</p>
                {/* <p className={classes.details}>{props.details}</p> */}
            </div>
        </div>

    )
}

export default MentorCards