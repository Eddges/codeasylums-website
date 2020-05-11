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
import Footer from '../../components/Footer_Section/Footer'
import MenuModal from '../../components/MenuModal/MenuModal'
import StudentCarousel from '../../components/StudentCarousel/StudentCarousel'
import Accordion from '../../components/accordion/Accordion'
import Page2Top from '../../components/Page2Top/Page2Top'
import Curriculum2Item from '../../components/Curriculum2Item/Curriculum2Item'
import CurriculumFullStack from '../../components/CurriculumFullStack/CurriculumFullStack'
import Banner1 from '../../components/Banner1/Banner1'
import Courses from '../../components/Teampage/Courses';
import Parallax1 from '../../components/Parallax1/Parallax1'
import Banner from '../../components/Banner/Banner';
import Batchdetails from '../../components/Batchdetails/Batchdetails'
import fullstackIllustration from '../../assets/illustration2.jpg'
import Fullstack_student_carousel from '../../components/Fullstack_student_carousel/Fullstack_student_carousel'


const Course = (props) => {
    return(
        <Layout>
            <MenuModal />
            <Navbar />
            <Page2Top title="FULLSTACK WEB DEVELOPMENT + DSA" line1="Become a MERN stack developer and get a job" line2="Rated by students" type="fullstack" illustration={fullstackIllustration} />
            <CodeAsylumsAdvantage />
            <Parallax1 />
            <MentorsPage2 />
            <CurriculumFullStack />
            <JobReady />
            <Batchdetails/>
            <CourseTestimonials />
            
            
            {/* <Banner1 />  */}
            <StudentCarousel />
            
            
            <Bubbles />
            
            {/* <ApplyButton /> */}
            
            {/* <TeamPage/> */}
            <Accordion />
            <Banner/>

            <Footer/>
        </Layout>
        
    )
}

export default Course;