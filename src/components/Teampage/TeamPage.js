import React from 'react';
// import logo from './logo.svg';
import styles from './TeamPage.module.css';
// import Card from './Card';
import BoxAvatar from './BoxAvatar';
import classes from './TeamPage.module.css'

function TeamPage() {
  return (
<<<<<<< HEAD
    <div className={classes.container}>
      <div className = "App">
=======
    <div>
      <div className = {styles.App}>
>>>>>>> 5e937acd942530959c28e6837355c0bd325e6bab
            <h1>EXPLORE OUR COURSES</h1>
      </div>
      <div className={styles.wrapper}>
        {/* <Card title ="FULL STACK TRACK CERTIFICATION" description = "Lorem ipsum dolor sit amet consectetur adipisicing elit.Soluta reiciendis officiis asperiores dolorem tenetur quod consequatur necessitatibus ducimus, tempore quas?" />
        <Card title= "DATA SCIENCE TRACK CERTIFICATION" description = "Lorem ipsum dolor sit amet consectetur adipisicing elit.Soluta reiciendis officiis asperiores dolorem tenetur quod consequatur necessitatibus ducimus, tempore quas?"/>
        <Card title= "DATA SCIENCE TRACK CERTIFICATION" description = "Lorem ipsum dolor sit amet consectetur adipisicing elit.Soluta reiciendis officiis asperiores dolorem tenetur quod consequatur necessitatibus ducimus, tempore quas?"/> */}

        <div className={styles.card}>
            <div className={styles.up}>
                <h3>FULL STACK TRACK CERTIFICATION</h3>
            </div>
            <div className={styles.down}>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.Soluta reiciendis officiis asperiores dolorem tenetur quod consequatur necessitatibus ducimus, tempore quas?</p>
            </div>
            <div className={styles.bottom}>
                <button className={styles.button}>Explore</button>
            </div>
            <div className={styles.card_footer}>
                <p>For 6 months</p>
            </div>
        </div>

        {/* 2nd */}
        <div className={styles.card1}>
            <div className={styles.up}>
                <h3>DATA SCIENCE TRACK CERTIFICATION</h3>
            </div>
            <div className={styles.down}>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.Soluta reiciendis officiis asperiores dolorem tenetur quod consequatur necessitatibus ducimus, tempore quas?</p>
            </div>
            <div className={styles.bottom}>
                <button className={styles.button}>Explore</button>
            </div>
            <div className={styles.card_footer}>
                <p>For 6 months</p>
            </div>
        </div>

        {/* 3rd */}
        <div className={styles.card2}>
            <div className={styles.up}>
                <h3>DEEP LEARNING TRACK CERTIFICATION</h3>
            </div>
            <div className={styles.down}>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.Soluta reiciendis officiis asperiores dolorem tenetur quod consequatur necessitatibus ducimus, tempore quas?</p>
            </div>
            <div className={styles.bottom}>
                <button className={styles.button}>Explore</button>
            </div>
            <div className={styles.card_footer}>
                <p>For 6 months</p>
            </div>
        </div>
        
    </div>
    <div class={styles.wrapper_team}>
        <div class={styles.left}>
            <h1>The Creative Crew behind Codeasylums</h1>
            <h5>What we are</h5>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Veniam odit voluptatibus, exercitationem veritatis modi incidunt assumenda facere ut voluptate dolorum?</p>
            <h5>Our Mission</h5>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Necessitatibus voluptatem ex maxime sunt totam, corrupti temporibus excepturi iusto asperiores porro.</p>
        </div>
        <div class={styles.right}>
            <div class={styles.up}>
                <BoxAvatar/>
                <div class={styles.box,styles.box2}>
                    <img src="https://img.icons8.com/color/200/000000/person-male.png"/>
                    <h5>solu</h5>
                    <p>product manager</p>
                </div>
                <div class={styles.box,styles.box3}>
                    <img src="https://img.icons8.com/color/200/000000/person-male.png"/>
                    <h5>solu</h5>
                    <p>product manager</p>
                </div>
            </div>

            <div class={styles.down}>
                <div class={styles.box,styles.box4}>
                    <img src="https://img.icons8.com/color/200/000000/person-male.png"/>
                    <h5>solu</h5>
                    <p>product manager</p>
                </div>
                <div class={styles.box,styles.box5}>
                    <img src="https://img.icons8.com/color/200/000000/person-male.png"/>
                    <h5>solu</h5>
                    <p>product manager</p>
                </div>
                <div class={styles.box,styles.box6}>
                    <img src="https://img.icons8.com/color/200/000000/person-male.png"/>  
                    <h5>solu</h5>
                    <p>product manager</p>    
                </div>
            </div>
        </div>
    </div>
    </div>
  );
}

export default TeamPage;