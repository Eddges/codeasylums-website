import React from 'react'
import MentorCards from '../../mentorCards/mentorCards'
import classes from '../mentorsPage2.module.css'
import professional from '../../../assets/professional.jpg'

const MentorsSystems = (props) => {
    return(
        <div className={classes.container} id="mentors">
            <div className={classes.divMentors}>
                <MentorCards name="Rajat jain" image={professional} about="Frontend developer at Microsoft" details="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a."  />
                <MentorCards name="Anubhav Chaturvedi" image={professional} about="Corporate trainer, Oracle, DevOps, Bigdata" details="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a." />
                <MentorCards name="CS Madhav" image={professional} about="Platform Engineer, R&D at Paysafe" details="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a." />
                <MentorCards name="Shivam Gupta" image={professional} about="Platform Engineer, Paysafe, System Design" details="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a." />
            </div>
        </div>

    )
}

export default MentorsSystems