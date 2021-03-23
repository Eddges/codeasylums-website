import React from 'react';
import styles from './BatchdetailsFullStack.module.css';
import Box from './BoxDSA';
// import classes from './BatchdetailsDSA.module.css'

const BatchdetailsFullStack = () => {
    return(

        <div className={styles.mainDiv} id="batches">
            <div className = {styles.header}>
                <h1>Upcoming Batches</h1>
            </div>
            <div className={styles.wrapper}>
        
        
        {/* <Box date = "16"  month = "May"  coursename = "Full Stack Web Development" status = "Seats Filling" count = "8/15 students"/> */}
        {/* <!-- 2 --> */}
        <Box date = "05" month = "April"  coursename = "Full Stack Web Development" status = "Seats Filling" count = "13/15 students"/>
        {/* <!-- 3 --> */}
        <Box date = "05" month = "May"  coursename = "Full Stack Web Development" status = "Open" count = "7/15 students"/>
        {/* <!-- 4 --> */}
        <Box date = "05" month = "June"  coursename = "Full Stack Web Development" status = "Open" count = "5/15 students"/>
        {/* <Box date = "19" month = "February"  coursename = "Machine Learning Lessson #43" status = "Booking Ended" count = "200/200tickets sold"/> */}


        
    </div>
        </div>
    )
}


export default BatchdetailsFullStack;