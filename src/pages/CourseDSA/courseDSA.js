import React from 'react'
import Layout from '../../components/Layout/Layout'
import Navbar from '../../components/navbarCourses/Navbar'
import MentorsDSA from '../../components/mentorsPage2/MentorsDSA/MentorsDSA'
import Footer from '../../components/Footer_Section/Footer'
import MenuModal from '../../components/MenuModal/MenuModal'
import Accordion from '../../components/accordion/Accordion'
import Page2Top from '../../components/Page2Top/Page2Top'
import Parallax1 from '../../components/Parallax1/Parallax1'
import Banner from '../../components/Banner/Banner';
import dsaBG from '../../assets/dsa.jpg'
import BGClick from '../../components/BGClick/BGClick'
import CurriculumDSA from '../../components/CourseCurriculum/CurriculumDSA/CurriculumDSA'
import FeedbackSliderDSA from '../../components/FeedbackSlider/FeedbackSliderDSA/FeedbackSliderDSA'
import BatchdetailsDSA from '../../components/Batchdetails/BatchDetailsDSA/BatchdetailsDSA'
import JobReadyDSA from '../../components/JobReady/JobReadyDSA/JobReadyDSA'
import CodeAsylumsAdvantageDSA from '../../components/CodeAsylumsAdvantage/CodeAsylumsAdvantageDSA/CodeAsylumsAdvantageDSA'
import StudentCarouselDSA from '../../components/StudentCarousel/StudentCarouselDSA/StudentCarouselDSA'
import BubblesDSA from '../../components/Bubbles/BubblesDSA/BubblesDSA'


const CourseDSA = (props) => {
    return(
        <Layout>
            <MenuModal />
            <Navbar />
            <BGClick />
            <Page2Top course="dsa" title="Data Structures and Algorithms (From scratch)" top="Online | 8 Weeks | Lively Mentorship | 4 Weeks Job Assistance" line1="Implement Data Structures and crack coding interviews" line2="Rated by students" type="fullstack" illustration={dsaBG} />
            <CodeAsylumsAdvantageDSA />
            <Parallax1 />
            <MentorsDSA />
            <JobReadyDSA />
            <FeedbackSliderDSA />
            <CurriculumDSA/>
            
            <StudentCarouselDSA />
            <BatchdetailsDSA/>
            {/* <CourseTestimonials /> */}
            
            {/* <BubblesDSA /> */}
            <Banner/>
            <Accordion />
          

            <Footer/>
        </Layout>
        
    )
}

export default CourseDSA;