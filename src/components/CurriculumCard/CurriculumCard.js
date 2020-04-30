import React from 'react';

import classes from './CurriculumCard.module.css'

const CurriculumCard = (props) => {
    return(
        <div className={classes.CurriculumCard}>
            <div className={classes.divIcon}>
                <img src={props.icon} alt={props.icon} />
            </div>
            <p className={classes.title}>{props.title}</p>
            <p className={classes.content}>{props.content}</p>
        </div>
    )
}

export default CurriculumCard