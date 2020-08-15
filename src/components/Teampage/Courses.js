import React from 'react';
// import logo from './logo.svg';
import styles from './TeamPage.module.css';
// import Card from './Card';
import BoxAvatar from './BoxAvatar';
import './intro.css'
import checked from '../../assets/check.png'
import {NavLink} from 'react-router-dom'

function Courses() {
  return (
    <div className={styles.CoursesMain} >
    
      <div className = {styles.App}>
        <div className={styles.Desc}>
            <p className={styles.DescP}>High quality and expertly crafted curriculum</p>
            <div className={styles.checks1}>
                <div className={styles.check}>
                    <img src={checked} alt="Checked" />
                    <p>Consistent quality throughout the course to prepare professionals for the industry</p>
                </div>
                <div className={styles.check}>
                    <img src={checked} alt="Checked" />
                    <p>Courses are structurally conducted to avoid confusion and maintain proper flow</p>
                </div>
                <div className={styles.check}>
                <img src={checked} alt="Checked" />
                    <p>We mentor in-demand technologies, not obsolete ones</p>
                </div>
            </div>
            
        </div>
            <div className={styles.Line}></div>
            <p id="CoursesSection">Explore</p>
            
      </div>
      <div id="courses"></div>
      <div className={styles.wrapper}>
        <div className={styles.card}>
            <div className={styles.up}>
                <div className={styles.gradient}></div>
                <h3>DATA STRUCTURES AND ALGORITHMS (FROM SCRATCH)</h3>
            </div>
            <div className={styles.down}>
                <p>This course is for the people who are new to the world of Data Structures and are looking forward to implement data structures in depth and crack coding interviews of mainly tier-2 companies</p>
            </div>
            <div className={styles.bottom}>
                <a href="/dsa"><button className={styles.button}>Explore</button></a>
            </div>
        </div>

        {/* 2nd */}
        {/* <div className={styles.card1}>
            <div className={styles.up}>
                <div className={styles.gradient}></div>
                <h3>COMPETITIVE PROGRAMMING AND ADVANCED DSA</h3>
            </div>
            <div className={styles.down}>
                <p>This course is majorly for the professionals who are looking forward to crack coding interviews for tier - 1 product-based companies</p>
            </div>
            <div className={styles.bottom}>
                <a href="/dsadvanced"><button className={styles.button}>Explore</button></a>
            </div>
        </div> */}

        {/* 3rd */}
        <div className={styles.card2}>
            <div className={styles.up}>
                <div className={styles.gradient}></div>
                <h3>DATA SCIENCE WITH MACHINE LEARNING (FROM SCRATCH)</h3>
            </div>
            <div className={styles.down}>
                <p>For the people who are interested in extracting insightful information from structured as well as unstructured data and want to switch careers in data related field.</p>
            </div>
            <div className={styles.bottom}>
                <a href="/datascience"><button className={styles.button}>Explore</button></a>
            </div>
        </div>
        {/* 4 */}
        <div className={styles.card3}>
            <div className={styles.up}>
                <div className={styles.gradient}></div>
                <h3>FULLSTACK WEB DEVELOPMENT (FROM SCRATCH)</h3>
            </div>
            <div className={styles.down}>
            <p>For the pofessionals in the industry who have worked in Testing, Maintenance, Ops, System Admin, and are looking forward to working in startups in the field of full-stack web development</p>
            </div>
            <div className={styles.bottom}>
                <a href="/fullstack"><button className={styles.button}>Explore</button></a>
            </div>
        </div>

        {/* 5 */}
        {/* <div className={styles.card4}>
            <div className={styles.up}>
                <div className={styles.gradient}></div>
                <h3>ADVANCED FULLSTACK WITH SCALABILITY</h3>
            </div>
            <div className={styles.down}>
                <p>For the professionals who are working on web and mobile-based applications, starting from scratch and are looking for framework based development and scalability</p>
            </div>
            <div className={styles.bottom}>
                <a href="/fullstackadvanced"><button className={styles.button}>Explore</button></a>
            </div>
        </div> */}
        
    </div>
    </div>
  );
}

export default Courses;