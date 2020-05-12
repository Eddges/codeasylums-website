import React from 'react'
import classes from './CampusSelection.module.css'
import online from '../../assets/Online.jpg'
import campus from '../../assets/campus.jpg'

const Campus_Selection = (props) => {
    return(
        <div className={classes.campus}>
            <div className={classes.Online}>
                <div className={classes.gradient} />
                <div className="blend-blue">
                    <img src={online} alt="Online" />
                </div>
                
            </div>
            <div className={classes.Campus}>
                <div className={classes.gradient} />
                <div className="blend-purple">
                    <img src={campus} alt="campus" />
                </div>
                
                
            </div>
        </div>
    )
}

export default Campus_Selection