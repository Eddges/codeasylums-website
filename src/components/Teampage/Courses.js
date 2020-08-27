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

      <div className={styles.card3}>
            <div className={styles.up}>
                <div className={styles.gradient}></div>
                <h3>FULLSTACK WEB DEVELOPMENT (from Scratch)</h3>
            </div>
            <div className={styles.down}>
            <p>Made for those with a passion for design, development and programming expertise, this course enables the average working professional to learn FullStack from scratch, with Industry-relevant projects and live exposure to both Client & Server-side Technologies like React, JavaScript, NodeJs, AWS and Git</p>
            </div>
            <div className={styles.bottom}>
                <a href="/fullstack"><button className={styles.button}>Explore</button></a>
            </div>
        </div>

        <div className={styles.card}>
            <div className={styles.up}>
                <div className={styles.gradient}></div>
                <h3>DATA STRUCTURES AND ALGORITHMS (from Scratch)</h3>
            </div>
            <div className={styles.down}>
                <p>Specifically tailored for those looking to boost their knowledge in Data Structures & Algorithms, our curated content takes a deep dive into algorithms like Trees, Graphs & Dynamic Programming. Supported with HackerRank Contests, Self Practice Material, and a Hands-On Coding Sessions and Pair Programming. We ensure that you'll be ready for every coding test.</p>
            </div>
            <div className={styles.bottom}>
                <a href="/dsa"><button className={styles.button}>Explore</button></a>
            </div>
        </div>





        {/* 2nd */}
        <div className={styles.card1}>
            <div className={styles.up}>
                <div className={styles.gradient}></div>
                <h3>DATA ANALYST WITH BUSINESS ANALYSTS</h3>
            </div>
            <div className={styles.down}>
                <p>Let Data do the talking for you. Derive insights, trends and inferences from real-world data using technologies like SQL, Python, Tableau. Join today to land exciting career opportunities in the hottest career prospect of the century. 3 Month intensive training on the latest Data Analytics tools and Technologies to make you learn Data Analytics from scratch!</p>
            </div>
            <div className={styles.bottom}>
                <a href="/danalytics"><button className={styles.button}>Explore</button></a>
            </div>
        </div>

        {/* 3rd */}
        <div className={styles.card2}>
            <div className={styles.up}>
                <div className={styles.gradient}></div>
                <h3>DATA SCIENCE WITH MACHINE LEARNING</h3>
            </div>
            <div className={styles.down}>
                <p>For the people who are interested in extracting insightful information from structured as well as unstructured data and want to switch careers in Machine Learning to become a Data Scientist.</p>
            </div>
            <div className={styles.bottom}>
                <a href="/datascience"><button className={styles.button}>Explore</button></a>
            </div>
        </div>
        {/* 4 */}


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