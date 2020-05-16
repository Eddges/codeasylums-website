import React from 'react';
// import logo from './logo.svg';
import styles from './TeamPage.module.css';
// import Card from './Card';
import BoxAvatar from './BoxAvatar';
import './intro.css'
import checked from '../../assets/check.png'

function Courses() {
  return (
    <div className={styles.CoursesMain}>
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
      <div className={styles.wrapper}>
        <div className={styles.card}>
            <div className={styles.up}>
                <div className={styles.gradient}></div>
                <h3>DATA STRUCTURE COURSE</h3>
            </div>
            <div className={styles.down}>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.Soluta reiciendis officiis asperiores dolorem tenetur quod consequatur necessitatibus ducimus, tempore quas?</p>
            </div>
            <div className={styles.bottom}>
                <button className={styles.button}>Explore</button>
            </div>
        </div>

        {/* 2nd */}
        <div className={styles.card1}>
            <div className={styles.up}>
                <div className={styles.gradient}></div>
                <h3>COMPETITIVE PROGRAMMING AND ADVANCED DSA</h3>
            </div>
            <div className={styles.down}>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.Soluta reiciendis officiis asperiores dolorem tenetur quod consequatur necessitatibus ducimus, tempore quas?</p>
            </div>
            <div className={styles.bottom}>
                <button className={styles.button}>Explore</button>
            </div>
        </div>

        {/* 3rd */}
        <div className={styles.card2}>
            <div className={styles.up}>
                <div className={styles.gradient}></div>
                <h3>DATA SCIENCE TRACK CERTIFICATION</h3>
            </div>
            <div className={styles.down}>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.Soluta reiciendis officiis asperiores dolorem tenetur quod consequatur necessitatibus ducimus, tempore quas?</p>
            </div>
            <div className={styles.bottom}>
                <button className={styles.button}>Explore</button>
            </div>
        </div>
        {/* 4 */}
        <div className={styles.card3}>
            <div className={styles.up}>
                <div className={styles.gradient}></div>
                <h3>FULLSTACK WEB-BASED DEVELOPMENT</h3>
            </div>
            <div className={styles.down}>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.Soluta reiciendis officiis asperiores dolorem tenetur quod consequatur necessitatibus ducimus, tempore quas?</p>
            </div>
            <div className={styles.bottom}>
                <button className={styles.button}>Explore</button>
            </div>
        </div>

        {/* 5 */}
        <div className={styles.card4}>
            <div className={styles.up}>
                <div className={styles.gradient}></div>
                <h3>ADVANCED FULLSTACK</h3>
            </div>
            <div className={styles.down}>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.Soluta reiciendis officiis asperiores dolorem tenetur quod consequatur necessitatibus ducimus, tempore quas?</p>
            </div>
            <div className={styles.bottom}>
                <button className={styles.button}>Explore</button>
            </div>
        </div>
        
    </div>
    </div>
  );
}

export default Courses;