import React from 'react';
import styles from './BatchdetailsSystems.module.css';
import Box from './BoxDSA';
// import classes from './BatchdetailsDSA.module.css'

const BatchdetailsSystems = () => {
    return(

        <div className={styles.mainDiv} id="batches">
            <div className = {styles.header}>
                <h1>Upcoming Batches</h1>
            </div>
            <div className={styles.wrapper}>
        
        
        {/* <Box date = "16"  month = "May"  coursename = "Platform Development with Scalability" status = "Seats Filling" count = "10/15 students"/> */}
        {/* <!-- 2 --> */}
        <Box date = "21" month = "May"  coursename = "Platform Development with Scalability" status = "Seats Filling" count = "8/15 students"/>
        {/* <!-- 3 -FullStack-> */}
        <Box date = "30" month = "May"  coursename = "Platform Development with Scalability" status = "Open" count = "4/15 students"/>
        {/* <!-- 4 --> */}
        <Box date = "6" month = "June"  coursename = "Platform Development with Scalability" status = "Open" count = "3/15 students"/>
        {/* <Box date = "19" month = "February"  coursename = "Machine Learning Lessson #43" status = "Booking Ended" count = "200/200tickets sold"/> */}


        
    </div>
        </div>
    )
}


export default BatchdetailsSystems;