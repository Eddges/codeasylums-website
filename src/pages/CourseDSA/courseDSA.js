import React from 'react'
import Layout from '../../components/Layout/Layout'
import Navbar from '../../components/navbartransparent/Navbar'
import CodeAsylumsAdvantage from '../../components/CodeAsylumsAdvantage/CodeAsylumsAdvantage'
import MentorsDSA from '../../components/mentorsPage2/MentorsDSA/MentorsDSA'
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
import CurriculumFullStack from '../../components/CurriculumFullStack/CurriculumDSA/CurriculumDSA'
import Banner1 from '../../components/Banner1/Banner1'
import Courses from '../../components/Teampage/Courses';
import Parallax1 from '../../components/Parallax1/Parallax1'
import Banner from '../../components/Banner/Banner';
import Batchdetails from '../../components/Batchdetails/Batchdetails'
import fullstackIllustration from '../../assets/illustration2.jpg'
import dsaBG from '../../assets/dsa.jpg'
import BGClick from '../../components/BGClick/BGClick'
import CurriculumDSA from '../../components/CurriculumFullStack/CurriculumDSA/CurriculumDSA'
import FeedbackSliderCard from '../../components/FeedbackSliderCard/FeedbackSliderCard'
import FeedbackSlider from '../../components/FeedbackSlider/FeedbackSlider'
import FeedbackSliderDSA from '../../components/FeedbackSlider/FeedbackSliderDSA/FeedbackSliderDSA'
import BatchdetailsDSA from '../../components/Batchdetails/BatchDetailsDSA/BatchdetailsDSA'
import JobReadyDSA from '../../components/JobReady/JobReadyDSA/JobReadyDSA'


const CourseDSA = (props) => {
    return(
        <Layout>
            <MenuModal />
            <Navbar />
            <BGClick />
            <Page2Top title="Data Structures and Algorithms (From scratch)" top="Online | 8 Weeks | Lively Mentorship | 4 Weeks Job Assistance" line1="Implement Data Structures and crack coding interviews" line2="Rated by students" type="fullstack" illustration={dsaBG} />
            <CodeAsylumsAdvantage />
            <Parallax1 />
            <MentorsDSA />
            <CurriculumDSA/>
            <JobReadyDSA />
            <FeedbackSliderDSA />
            <BatchdetailsDSA/>
            {/* <CourseTestimonials /> */}
            <StudentCarousel />
            <Bubbles />
            <Accordion />
            <Banner/>

            <Footer/>
        </Layout>
        
    )
}

export default CourseDSA;