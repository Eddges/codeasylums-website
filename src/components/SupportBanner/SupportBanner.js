import React from 'react'
import classes from './SupportBanner.module.css'
import medal from '../../assets/medal.svg'

const SupportBanner = (props) => {
    return(
        <div className={classes.SupportBanner}>
            <p className={classes.TopText}>
                We are there for you, every step of the way
            </p>
            <div className={classes.Line}></div>
            <div className={classes.body}>
                <div className={classes.Item}>
                    <img src={medal} alt="Support" />
                    <p>360 degree, 24*7 Doubt Clearance</p>
                </div>
                <div className={classes.Item}>
                    <img src={medal} alt="Expert" />
                    <p>Expert instruction and guidance</p>
                </div>
                <div className={classes.Item}>
                    <img src={medal} alt="Mentor" />
                    <p>Impeccable Mentor Support throughout</p>
                </div>
            </div>
            <div className={classes.Line}></div>
            <p className={classes.BottomText}>
                Come in a learner, come out a winner!
            </p>
        </div>
    )
}

export default SupportBanner