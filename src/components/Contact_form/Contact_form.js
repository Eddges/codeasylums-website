import React from 'react';
import styles from './Contact_form.module.css';

const Contact_form = () => {
    return(
        <div>
            <div className = {styles.contact_container}>
                <div className = {styles.left_container}>
                    <p className={styles.heading}>Let's do this!</p>
                    <p className={styles.text}>“I now have a rewarding job that challenges me and stretches me to grow and learn every day. Not to mention, I can afford to save money and pay off debt.”</p>
                    <p className={styles.label}>Nagendra Kumar</p>
                    <p className={styles.textCredential}>FullStack Web Development track, December 2019</p> 
                </div>
                {/* left container ends here */}

                <div className = {styles.right_container}>
                    <p className = {styles.heading}>
                        Schedule a call
                    </p>
                    <form>
                        <label>Name</label>
                        <input type = "text" placeholder="John Doe"/>
                        <div className = {styles.boxarea}>
                            <div className = {styles.emailarea}>
                                <label>Email</label>
                                <input type = "text" placeholder="johndoe@gmail.com"/>
                            </div>
                            <div className = {styles.phonearea}>
                                <label>Phone</label>
                                <input type = "text" placeholder="(+91)-9999999999"/>
                            </div>
                        </div>
                        <button className={styles.time}>Find a time</button>
                       
                    </form>
                    <p className={styles.footer}>Prefer email? Contact <span>codeasylums@gmail.com</span> to talk to a student advisor</p>  
                </div>

            
            </div>

        </div>
    )
}

export default Contact_form;