import React from 'react'
import Layout from '../../components/Layout/Layout'
import classes from './course.module.css'
import Navbar from '../../components/navbar/Navbar'
import CodeAsylumsAdvantage from '../../components/CodeAsylumsAdvantage/CodeAsylumsAdvantage'
import MentorsPage2 from '../../components/mentorsPage2/mentorsPage2'
import Bubbles from '../../components/Bubbles/Bubbles'
import JobReady from '../../components/JobReady/JobReady'
import ApplyButton from '../../components/ApplyButton/ApplyButton'
import CourseTestimonials from '../../components/CourseTestimonials/CourseTestimonials'
import Curriculum from '../../components/Curriculum/Curriculum'
import Footer from '../../components/Footer/Footer'

const Course = (props) => {
    return(
        <Layout>
            <Navbar />
            <MentorsPage2 />
            <CodeAsylumsAdvantage />
            <Bubbles />
            <Curriculum />
            <JobReady />
            <ApplyButton />
            <CourseTestimonials />
            <Footer />
        </Layout>
        
    )
}

export default Course