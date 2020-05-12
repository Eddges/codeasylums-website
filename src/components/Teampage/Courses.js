import React from 'react';
// import logo from './logo.svg';
import styles from './TeamPage.module.css';
// import Card from './Card';
import BoxAvatar from './BoxAvatar';
import './intro.css'

function Courses() {
  return (
    <div className={styles.CoursesMain}>
      <div className = {styles.App}>
            <p>Explore our courses</p>
      </div>
      {/* <div className={styles.App2}>
          <p>gather the skills</p>
          <p>conquer your career</p>
      </div> */}
      <div className={styles.wrapper}>
        <div className={styles.card}>
            <div className={styles.up}>
                <div className={styles.gradient}></div>
                <h3>FULL STACK TRACK CERTIFICATION</h3>
            </div>
            <div className={styles.down}>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.Soluta reiciendis officiis asperiores dolorem tenetur quod consequatur necessitatibus ducimus, tempore quas?</p>
            </div>
            <div className={styles.bottom}>
                <button className={styles.button}>Explore</button>
            </div>
            {/* <div className={styles.card_footer}>
                <p>For 6 months</p>
            </div> */}
        </div>

        {/* 2nd */}
        <div className={styles.card1}>
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
            {/* <div className={styles.card_footer}>
                <p>For 6 months</p>
            </div> */}
        </div>

        {/* 3rd */}
        <div className={styles.card2}>
            <div className={styles.up}>
                <div className={styles.gradient}></div>
                <h3>DEEP LEARNING TRACK CERTIFICATION</h3>
            </div>
            <div className={styles.down}>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.Soluta reiciendis officiis asperiores dolorem tenetur quod consequatur necessitatibus ducimus, tempore quas?</p>
            </div>
            <div className={styles.bottom}>
                <button className={styles.button}>Explore</button>
            </div>
            {/* <div className={styles.card_footer}>
                <p>For 6 months</p>
            </div> */}
        </div>
        
    </div>
    </div>
  );
}

export default Courses;