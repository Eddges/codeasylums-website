import React from 'react'
import MentorCards from '../mentorCards/mentorCards'
import classes from './mentorsPage2.module.css'

const MentorsPage2 = (props) => {
    return(
        <div>
            <div className={classes.divMargin}></div>
            <p className={classes.mentors}>Mentors</p>
            <div className={classes.divMentors}>
                <MentorCards name="Rajat Jain" about="Software Engineer at Microsoft" className={classes.Card} />
                <MentorCards name="Anubhav Chaturvedi" about="SRE, Devops, BlockChain evangelist and trainer" />
                <MentorCards name="Madhav Chaturvedi" about="Platform Engineer, R&D at Paysafe" />
            </div>
        </div>

    )
}

export default MentorsPage2