import React from 'react'
import StudentCarousel from '../StudentCarousel/StudentCarousel'
import student from '../../assets/student.jpg'

const Fullstack_student_carousel = (props) => {

    const data = [
        {
            titleMonday : "Coursework",
            contentMonday : "This week, my team started working on a very cool concept involving food ingredients. My mentors are very supportive of my idea.",
            imgMonday : student
        },
        {
            titleTuesday : "Coursework",
            contentTuesday : "This week, my team started working on a very cool concept involving food ingredients. My mentors are very supportive of my idea.",
            imgTuesday : student
        },
        {
            titleWednesday : "Coursework",
            contentWednesday : "This week, my team started working on a very cool concept involving food ingredients. My mentors are very supportive of my idea.",
            imgWednesday : student
        },
        {
            titleThursday : "Coursework",
            contentThursday : "This week, my team started working on a very cool concept involving food ingredients. My mentors are very supportive of my idea.",
            imgThursday : student
        },
        {
            titleFriday : "Coursework",
            contentFriday : "This week, my team started working on a very cool concept involving food ingredients. My mentors are very supportive of my idea.",
            imgFriday : student
        },
        {
            titleSaturday : "Coursework",
            contentSaturday : "This week, my team started working on a very cool concept involving food ingredients. My mentors are very supportive of my idea.",
            imgSaturday : student
        },
        {
            titleSunday : "Coursework",
            contentSunday : "This week, my team started working on a very cool concept involving food ingredients. My mentors are very supportive of my idea.",
            imgSunday : student
        }
    ]

    return(
        <StudentCarousel data={data} />
    )
}

export default Fullstack_student_carousel