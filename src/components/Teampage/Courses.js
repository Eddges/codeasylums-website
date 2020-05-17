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
    <div className={styles.CoursesMain} id="Courses">
    
      <div className = {styles.App}>
        <div className={styles.Desc}>
            <p className={styles.DescP}>High quality and expertly crafted curriculum</p>
            <div className={styles.checks1}>
                <div className={styles.check}>
                    <img src={checked} alt="Checked" />
                    <p>Consistent quality throughout the course to prepare our students for the industry</p>
                </div>
                <div className={styles.check}>
                    <img src={checked} alt="Checked" />
                    <p>Courses are highly structured to avoid confusion and maintain proper flow</p>
                </div>
                <div className={styles.check}>
                <img src={checked} alt="Checked" />
                    <p>We teach in-demand technologies, not obsolete ones</p>
                </div>
            </div>
            
        </div>
            <div className={styles.Line}></div>
            <p>Explore</p>
            
      </div>
      <div id="courses"></div>
      <div className={styles.wrapper}>
        <div className={styles.card}>
            <div className={styles.up}>
                <div className={styles.gradient}></div>
                <h3>DATA STRUCTURE COURSE</h3>
            </div>
            <div className={styles.down}>
                <p>This course is for those people who are new to the world of data structures and looking forward to implementing data structures in depth to crack coding interviews of mainly tier-2 companies</p>
            </div>
            <div className={styles.bottom}>
                <a href="/dsa"><button className={styles.button}>Explore</button></a>
            </div>
        </div>

        {/* 2nd */}
        <div className={styles.card1}>
            <div className={styles.up}>
                <div className={styles.gradient}></div>
                <h3>COMPETITIVE PROGRAMMING AND ADVANCED DSA</h3>
            </div>
            <div className={styles.down}>
                <p>This course is majorly for the professionals who are looking forward to cracking coding interviews for tier - 1 product-based companies</p>
            </div>
            <div className={styles.bottom}>
                <a href="/dsadvanced"><button className={styles.button}>Explore</button></a>
            </div>
        </div>

        {/* 3rd */}
        <div className={styles.card2}>
            <div className={styles.up}>
                <div className={styles.gradient}></div>
                <h3>DATA SCIENCE TRACK CERTIFICATION</h3>
            </div>
            <div className={styles.down}>
                <p>There are professionals in the industry who have worked in Testing, Maintenance, Ops, System Admin, who are looking forward to work in startups with good work in the field of full-stack web developmen</p>
            </div>
            <div className={styles.bottom}>
                <a href="/datascience"><button className={styles.button}>Explore</button></a>
            </div>
        </div>
        {/* 4 */}
        <div className={styles.card3}>
            <div className={styles.up}>
                <div className={styles.gradient}></div>
                <h3>FULLSTACK WEB-BASED DEVELOPMENT</h3>
            </div>
            <div className={styles.down}>
            <p>There are professionals in the industry who have worked in Testing, Maintenance, Ops, System Admin, who are looking forward to work in startups with good work in the field of full-stack web development</p>
            </div>
            <div className={styles.bottom}>
                <a href="/fullstack"><button className={styles.button}>Explore</button></a>
            </div>
        </div>

        {/* 5 */}
        <div className={styles.card4}>
            <div className={styles.up}>
                <div className={styles.gradient}></div>
                <h3>ADVANCED FULLSTACK</h3>
            </div>
            <div className={styles.down}>
                <p>There are professionals who are working in making web and mobile-based applications from scratch and looking for a framework based development and development</p>
            </div>
            <div className={styles.bottom}>
                <a href="/fullstackadvanced"><button className={styles.button}>Explore</button></a>
            </div>
        </div>
        
    </div>
    </div>
  );
}

export default Courses;