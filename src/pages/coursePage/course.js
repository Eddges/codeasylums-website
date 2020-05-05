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
import MenuModal from '../../components/MenuModal/MenuModal'
import StudentCarousel from '../../components/StudentCarousel/StudentCarousel'
import Accordion from '../../components/accordion/Accordion'
import Page2Top from '../../components/Page2Top/Page2Top'
import TeamPage from '../../components/Teampage/TeamPage';

const Course = (props) => {
    return(
        <Layout>
            <MenuModal />
            <Navbar />
            <Page2Top title="FULLSTACK WEB DEVELOPMENT + DSA" line1="Become a MERN stack developer and get a job" line2="A 6 week long bootcamp" type="fullstack" />
            <MentorsPage2 />
            <CodeAsylumsAdvantage />
            <Bubbles />
            <StudentCarousel />
            <Curriculum />
            <JobReady />
            <ApplyButton />
            <CourseTestimonials />
            <TeamPage/>
            <Accordion />
            <Footer />
        </Layout>
        
    )
}

export default Course