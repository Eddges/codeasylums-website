import React from 'react'
import classes from './Expectations.module.css'
import collaborate from '../../assets/collaborate.svg'
import job from '../../assets/job.svg'
import idea from '../../assets/idea.svg'

const Expectations = (props) => {
    return(
        <React.Fragment>
            <div className={classes.Expectations}>
                <div className={classes.ExpectationsInside}>
                    <div class={classes.image}>
                        <img src={collaborate} alt="Be collaborative" />
                    </div>
                    <div className={classes.Text}>
                        <p>Be Collaborative</p>
                        <p>Students work in close proximity, allowing ideas to form through collaboration</p>
                    </div>
                </div>
                <div className={classes.ExpectationsInside}>
                    <div class={classes.image}>
                        <img src={idea} alt="Be collaborative" />
                    </div>
                    <div className={classes.Text}>
                        <p>Be Inspired</p>
                        <p>We push you to do more, think bigger, and go further.</p>
                    </div>
                </div>
                <div className={classes.ExpectationsInside}>
                    <div class={classes.image}>
                        <img src={job} alt="Be collaborative" />
                    </div>
                    <div className={classes.Text}>
                        <p>Be Job Ready</p>
                        <p>You receive comprehensive programming training from the best faculty in the business.</p>
                    </div>
                </div>
            </div> 
            <div className={classes.Intermediate}>
                <p>Our grads have been successfully placed at </p>
            </div>  
        </React.Fragment>    
    )
}

export default Expectations