import React from 'react';
import styles from './BatchdetailsDataScience.module.css';
import Box from './BoxDataScience';
// import classes from './BatchdetailsDSA.module.css'

const BatchdetailsDataScience = () => {
    return(

        <div className={styles.mainDiv}>
            <div className = {styles.header}>
                <h1>Upcoming Batches</h1>
            </div>
            <div className={styles.wrapper}>
        
        
        <Box date = "16"  month = "May" time="18:00-22:00" coursename = "Data Science Track" status = "Seats Full" count = "40/40 students"/>
        {/* <!-- 2 --> */}
        <Box date = "21" month = "May" time="18:00-22:00" coursename = "Data Science Track" status = "Seats Filling" count = "31/40 students"/>
        {/* <!-- 3 --> */}
        <Box date = "30" month = "May" time="18:00-22:00" coursename = "Data Science Track" status = "Open" count = "15/40 students"/>
        {/* <!-- 4 --> */}
        <Box date = "6" month = "June" time="18:00-22:00" coursename = "Data Science Track" status = "Open" count = "12/40 students"/>
        {/* <Box date = "19" month = "February" time="18:00-22:00" coursename = "Machine Learning Lessson #43" status = "Booking Ended" count = "200/200tickets sold"/> */}


        
    </div>
        </div>
    )
}


export default BatchdetailsDataScience;