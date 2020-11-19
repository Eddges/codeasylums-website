import React from 'react';
import styles from './BatchdetailsDataScience.module.css';
// import classes from './BatchdetailsDSA.module.css'
import Box from './BoxDataAnalytics'

const BatchdetailsDataAnalytics = () => {
    return(

        <div className={styles.mainDiv} id="batches">
            <div className = {styles.header}>
                <h1>Upcoming Batches</h1>
            </div>
            <div className={styles.wrapper}>
        
        
        {/* <Box date = "16"  month = "May"  coursename = "Data Science Track" status = "Seats Filling" count = "10/15 students"/> */}
        {/* <!-- 2 --> */}
        <Box date = "05" month = "Dec"  coursename = "Data Analyst with Business Analysts" status = "Seats Filling" count = "13/15 students"/>
        {/* <!-- 3 --> */}
        <Box date = "05" month = "Jan"  coursename = "Data Analyst with Business Analysts" status = "Open" count = "7/15 students"/>
        {/* <!-- 4 --> */}
        <Box date = "05" month = "Feb"  coursename = "Data Analyst with Business Analysts" status = "Open" count = "5/15 students"/>
        {/* <Box date = "19" month = "February"  coursename = "Machine Learning Lessson #43" status = "Booking Ended" count = "200/200tickets sold"/> */}


        
    </div>
        </div>
    )
}


export default BatchdetailsDataAnalytics;