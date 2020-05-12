import React from 'react';
// import logo from './logo.svg';
import styles from './TeamPage.module.css';
// import Card from './Card';
import BoxAvatar from './BoxAvatar';



function Team() {
    return(
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
        {/* <div className = {styles.teamsection}> */}
            {/* <div className = {styles.cardAvatar}>
                <div className = {styles.cardAvater_img}>
                <img src="https://img.icons8.com/color/200/000000/person-male.png"/>
                </div>
                <div className = {styles.cardAvatar_intro}>
                    <p>SOLU</p>
                    <p>Position</p>
                </div>
            </div> */}
        {/* </div> */}
    </div>
    )
}

export default Team