import React from 'react';
import styles from './Contact_form.module.css';

const Contact_form = () => {
    return(
        <div>
            <div className = {styles.contact_container}>
                <div className = {styles.left_container}>
                <p className={styles.heading}>Let's do this!</p>
                <p className={styles.text}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minima maxime aliquam, delectus enim fugiat incidunt voluptate dicta aut possimus corrupti.</p>
                <p className={styles.label}>Nagendra Kumar</p>
                <p className={styles.text}>Lorem ipsum dolor sit amet.</p> 
                </div>
                {/* left container ends here */}

                <div className = {styles.right_container}>
                    <p className = {styles.heading}>
                        Schedule a call
                    </p>
                    <form>
                        <label>Name</label>
                        <input type = "text"/>
                        <div className = {styles.boxarea}>
                            <div className = {styles.emailarea}>
                                <label>Email</label>
                                <input type = "text"/>
                            </div>
                            <div className = {styles.phonearea}>
                                <label>Email</label>
                                <input type = "text"/>
                            </div>
                        </div>
                        <label>In which program are you interested?</label>
                        <input type = "text"/>"
                       
                    </form>
                    <p className={styles.footer}>Prefer email? Contact abc to talk to a student advisor</p>  
                </div>

            
            </div>

        </div>
    )
}

export default Contact_form;