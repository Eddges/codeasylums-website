import React from 'react';
import styles from './Batchdetails.module.css';
import Box from './Box';
import classes from './Batchdetails.module.css'

const Batchdetails = () => {
    return(

        <div className={styles.mainDiv}>
            <div className = {styles.header}>
                <h1>Upcoming Batches</h1>
            </div>
            <div className={styles.wrapper}>
        
        
        <Box date = "19"  month = "February" time="18:00-22:00" coursename = "Machine Learning Lessson #43" status = "Booking Ended" count = "200/200tickets sold"/>
        {/* <!-- 2 --> */}
        <Box date = "19" month = "February" time="18:00-22:00" coursename = "Machine Learning Lessson #43" status = "Booking Ended" count = "200/200tickets sold"/>
        {/* <!-- 3 --> */}
        <Box date = "19" month = "February" time="18:00-22:00" coursename = "Machine Learning Lessson #43" status = "Booking Ended" count = "200/200tickets sold"/>
        {/* <!-- 4 --> */}
        <Box date = "19" month = "February" time="18:00-22:00" coursename = "Machine Learning Lessson #43" status = "Booking Ended" count = "200/200tickets sold"/>
        {/* <Box date = "19" month = "February" time="18:00-22:00" coursename = "Machine Learning Lessson #43" status = "Booking Ended" count = "200/200tickets sold"/> */}


        
    </div>
        </div>
    )
}


export default Batchdetails;