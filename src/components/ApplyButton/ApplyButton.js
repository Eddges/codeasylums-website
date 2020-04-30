import React from 'react'
import classes from './ApplyButton.module.css'

const ApplyButton = (props) => {
    return (
        <div className={classes.Apply}>
            <p>So, Ready?</p>
            <button>Apply</button>
        </div>
    )
}

export default ApplyButton