import React from 'react';
import styles from './Footer.module.css';
import logo from '../../assets/logoWhite.png';

// const logo = require('./logo.png');

const Footer = () => {
    return(
        <>
        <div class={styles.footer_section}>
        <div class={styles.col}>
            <h1>COURSES</h1>
            <p>Full Stack Development</p>
            <p>Advance Full Stack Development</p>
            <p>Data Structures Track</p>
            <p>Competitive Programming & Advanced DSA</p>
            <p>Data Science & Engineering</p>
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
            <p>bootcamp@codeasylums.com</p>
            <p>Call us:</p>
            <p>+91123567800</p>
            
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
       
        <div class={styles.col2}>
            <p>Copyright 2020</p>
        </div>
       
        </div>
        </>
    
    )
}

export default Footer;