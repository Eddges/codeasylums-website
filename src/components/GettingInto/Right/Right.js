import React from 'react'
import classes from './Right.module.css'

const Right = (props) => {
    return (
        <div className={classes.right}>
            <div className={classes.blank}></div>
            <div className={classes.circle}>
            </div>
            <div className={classes.content}>
                <p className={classes.Title}>{props.title}</p>
                <p>{props.content}</p>
            </div>
        </div>
    )
}

export default Right;