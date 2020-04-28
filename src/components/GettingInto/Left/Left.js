import React from 'react'
import classes from './Left.module.css'

const Left = (props) => {
    return (
        <div className={classes.left}>
            <div className={classes.content}>
                <p className={classes.Title}>{props.title}</p>
                <p>{props.content}</p>
            </div>
            <div className={classes.circle}>
            </div>
            <div className={classes.blank}></div>
        </div>
    )
}

export default Left;