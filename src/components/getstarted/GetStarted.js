import React from 'react'
import classes from './GetStarted.module.css'
import codescreen from '../../assets/codescreen.png'

const GetStarted = () => (
    <div className={classes.container}>
        <p>Learn by doing</p>
        <div className={classes.border}>
            <img src={codescreen} alt="Code Screen" />
        </div>
    </div>
)

export default GetStarted