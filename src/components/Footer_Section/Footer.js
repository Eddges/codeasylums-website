import React from 'react';
import styles from './Footer.module.css';
import logo from './logo.png';

// const logo = require('./logo.png');

const Footer = () => {
    return(
        <>
        <div class={styles.footer_section}>
        <div class={styles.col}>
            <h1>Courses</h1>
            <p>Data Science Career Track</p>
            <p>AI/Machine Learning Career Track</p>
            <p>Data Analytics Career Track</p>
            <p>UI/UX Design Career Track</p>
        </div>
        <div class={styles.col}>
            <h1>ABOUT US</h1>
            <p>About the Company</p>
            <p>Meet the Team</p>
            <p>Jobs</p>
            <p>Become a Mentor</p>
        </div>
        <div class={styles.col}>
            <h1>CONTACT</h1>
            <p>Email us:</p>
            <p>india@springboard.com</p>
            <p>Call us:</p>
            <p>+918088424853</p>
            
        </div>
        <div class={styles.col}>
            <h1>FOLLOW US</h1>
            <p>Like Us on Facebook</p>
            <p>Follow Us on Twitter</p>
            <p>Follow Us on Instagram</p>
            <p>Read Our Stories on medium</p>
        </div>
    </div>
    <div class={styles.footer_down}>
        <div class={styles.col1}>
            <img src="./logo.png" width = "104" height="61"  alt=""/>
        </div>
        <div class={styles.col2}>
            <p>Copyright 2019</p>
        </div>
        <div class={styles.col3}>
            <p>Terms</p>
            <p>Privacy</p>
            <p>Concern</p>
        </div>
        </div>
        </>
    
    )
}

export default Footer;