import React from 'react';
import styles from './Banner.module.css';


const Banner = () =>{
    return(
        <div>
        <div class={styles.wrapper}>
        <div class={styles.banner}>
            <div class={styles.left}>
               <h2> We'd love to hear from you info@codeasylums.com</h2>
            </div>
            <div class={styles.right}>
                <button class={styles.button}>Talk to us</button>
                <button class={styles.button}>Explore more</button>
            </div>
        </div>
    </div>
        </div>
    )
}

export default Banner;