import React from 'react';
import styles from './Footer.module.css';
import logo from './medium.png'
// import logo from '../../assets/logoWhite.png';

// const logo = require('./logo.png');

const Footer = () => {
    return(
        <>
        <div className={styles.footer_section}>
        <div className={styles.col}>
            <h1>COURSES</h1>
            <a href="/fullstack"><p>Full Stack Web Development</p></a>
            {/* <a href="/fullstackadvanced"><p>Advanced Full Stack Development</p></a> */}
            <a href="/dsa"><p>Data Structures & Algorithms</p></a>
            <a href="/danalytics"><p>Data Analytics</p></a>
            <a href="/datascience"><p>Data Science with Machine Learning</p></a>
        </div>
        <div className={styles.col}>
            <h1>ABOUT US</h1>
            <p><a href="/about">About CodeAsylums</a></p>
            <p><a href="/team">Meet the Team</a></p>
            <p>Jobs</p>
            <p><a href="mailto:saurav@codeasylums.com">Become a Mentor</a></p>
        </div>
        <div className={styles.col}>
            <h1>CONTACT</h1>
            <p>Email us:</p>
            <p>info@codeasylums.com</p>
            <p>Call us:</p>
            <p>+91 9739439326</p>
            <p>+91 6281455032</p>
            
        </div>
        <div className={styles.col}>
            <h1>FOLLOW US</h1>
            <div className = {styles.col_facebook}>
            <img src="https://img.icons8.com/offices/30/000000/facebook-new.png"/>
                <a href="https://www.facebook.com/CodeAsylums/" target = "_blank">Like Us on Facebook</a>
            </div>
            <div className = {styles.col_facebook}>
            <img src="https://img.icons8.com/offices/30/000000/twitter.png"/>
            <a href="https://twitter.com/codeasylums?lang=en" target = "_blank">Follow Us on Twitter</a>
            </div>

            <div className = {styles.col_facebook}>
            <img src="https://img.icons8.com/offices/30/000000/instagram.png"/>
            <a href="https://www.instagram.com/codeasylums/?hl=en" target = "_blank">Follow Us on Instagram</a>
            </div>

            <div className = {styles.col_facebook}>
            <img src={logo} style = {{width: "30px"}} />
            <a href="https://medium.com/progate/kickstarting-careers-during-summer-holidays-with-a-4-week-programming-bootcamp-f807da834d83" target = "_blank">Read Our Stories on medium</a>

            </div>
           
           
        </div>
    </div>
    <div className={styles.footer_down}>
       
        <div className={styles.col2}>
            <p>CodeAsylums 2020</p>
        </div>
       
        </div>
        </>
    
    )
}

export default Footer;