import React from 'react';
import styles from './Banner.module.css';


const Banner = (props) =>{
    return(
        <div>
        <div class={styles.wrapper}>
        <div class={styles.banner}>
            <div class={styles.left}>
               <h2> We'd love to hear from you info@codeasylums.com</h2>
               <p>
                   <span>
                    {props.rPrice}
                   </span>
                   <span>
                    {props.oPrice}
                   </span>
               
               </p>
            </div>
            <div class={styles.right}>
                <a href="/#procallback">
                    <button class={styles.button}>Talk to us</button>
                </a>
                
                <a href = "mailto: info@codeasylums.com">
                <button class={styles.button}>Explore more</button>
                </a>
                
            </div>
        </div>
    </div>
        </div>
    )
}

export default Banner;