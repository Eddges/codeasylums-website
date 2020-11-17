import React from 'react';
import styles from './Banner.module.css';


const Banner = (props) =>{
    return(
        <div>
        <div className={styles.wrapper}>
        <div className={styles.banner}>
            <div className={styles.left}>
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
            <div className={styles.right}>
                <a href="/#procallback">
                    <button className={styles.button}>Talk to us</button>
                </a>
                
                <a href = "mailto: info@codeasylums.com">
                <button className={styles.button}>Explore more</button>
                </a>
                
            </div>
        </div>
    </div>
        </div>
    )
}

export default Banner;