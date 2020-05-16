import React from 'react';
import styles from './BatchdetailsDataScience.module.css';

const Box = (props) => {
    return(
        <div className={styles.boxDiv}>
            <div className={styles.box}>
            <div className={styles.first_section}>
                <div className={styles.left}>
                    <h1> {props.date} </h1>
                </div>
                <div className={styles.right}>
                    <p> {props.month} </p>
                    <p> {props.time} </p>
                </div>
            </div>
            <div className={styles.second_section}>
                <h4> {props.coursename} </h4>
            </div>
            <div className={styles.divider}></div>
            <div className={styles.third_section}>
                <p> {props.status} </p>
                <p> {props.count} </p>
            </div>
        </div>
        </div>
    )
}

export default Box;