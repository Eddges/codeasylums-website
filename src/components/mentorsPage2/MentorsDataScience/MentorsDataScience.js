import React from 'react'
import MentorCards from '../../mentorCards/mentorCards'
import classes from '../mentorsPage2.module.css'
import professional from '../../../assets/professional.jpg'

const MentorsDataScience = (props) => {
    return(
        <div className={classes.container}>
            <div className={classes.divMentors}>
                <MentorCards name="Ishan Khurana" image={professional} about="Software Engineer at Microsoft" details="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a."  />
                <MentorCards name="Rahul Kumar" image={professional} about="SRE, Devops, BlockChain evangelist and trainer" details="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a." />
                <MentorCards name="Shubham Sureka" image={professional} about="Platform Engineer, R&D at Paysafe" details="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a." />
                <MentorCards name="Karan Chaddha" image={professional} about="Platform Engineer, R&D at Paysafe" details="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a." />
            </div>
        </div>

    )
}

export default MentorsDataScience