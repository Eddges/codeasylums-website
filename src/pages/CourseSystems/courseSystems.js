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
import BGClick from '../../components/BGClick/BGClick'
import systemsBG from '../../assets/systems.jpg'
import CodeAsylumsAdvantageSystems from '../../components/CodeAsylumsAdvantage/CodeAsylumsAdvantageSystems/CodeAsylumsAdvantageSystems'
import MentorsSystems from '../../components/mentorsPage2/MentorsSystems/MentorsSystems'
import CurriculumSystems from '../../components/CourseCurriculum/CurriculumSystems/CurriculumSystems'
import StudentCarouselSystems from '../../components/StudentCarousel/StudentCarouselSystems/StudentCarouseSystems'
import JobReadySystems from '../../components/JobReady/JobReadySystems/JobReadySystems'
import FeedbackSliderSystems from '../../components/FeedbackSlider/FeedbackSliderSystems/FeedbackSliderSystems'
import BatchdetailsSystems from '../../components/Batchdetails/BatchDetailsSystems/BatchdetailsSystems'

const CourseSystems = (props) => {
    return(
        <Layout>
            <MenuModal />
            <Navbar />
            <BGClick />
            <Page2Top course="fullstack-advanced" title="FullStack Web Development (Advanced)" top="Online | 10 Weeks | Lively Mentorship | 4 Weeks Job Assistance" line1="Web Development with Platform Scalability - Intermediate to Advance" line2="Become a Software Developer + Scale your code & get a job" type="fullstack" illustration={systemsBG} />
            <CodeAsylumsAdvantageSystems />
            {/* <Parallax1 /> */}
            {/* <MentorsSystems /> */}
            <JobReadySystems />
            <FeedbackSliderSystems />
            <CurriculumSystems/>
            
            <StudentCarouselSystems />
            <BatchdetailsSystems/>
            {/* <CourseTestimonials /> */}
            
            {/* <BubblesDSA /> */}
            <Accordion />
            <Banner/>

            <Footer/>
        </Layout>
        
    )
}

export default CourseSystems;