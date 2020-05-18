import React from 'react'
import MentorCards from '../../mentorCards/mentorCards'
import classes from '../mentorsPage2.module.css'
import professional from '../../../assets/professional.jpg'

const MentorsDSAdvanced = (props) => {
    return(
        <div className={classes.container} id="mentors">
            <div className={classes.divMentors}>
                <MentorCards name="Dhruv Malhotra" image={professional} about="Freecharge, Software Engineer" details="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a."  />
                <MentorCards name="Sandeep Alajangi" image={professional} about="Google, Software Engineer" details="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a." />
                <MentorCards name="Nabh Chaudhari" image={professional} about="Goldman Sachs, Software Engineer" details="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a." />
                {/* <MentorCards name="Madhav Chaturvedi" image={professional} about="Platform Engineer, R&D at Paysafe" details="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a." /> */}
            </div>
        </div>

    )
}

export default MentorsDSAdvanced