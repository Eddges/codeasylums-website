import React from 'react'
import Layout from '../../components/Layout/Layout'
import Navbar from '../../components/navbartransparent/Navbar'
import MentorsDSA from '../../components/mentorsPage2/MentorsDSA/MentorsDSA'
import Footer from '../../components/Footer_Section/Footer'
import MenuModal from '../../components/MenuModal/MenuModal'
import Accordion from '../../components/accordion/Accordion'
import Page2Top from '../../components/Page2Top/Page2Top'
import Parallax1 from '../../components/Parallax1/Parallax1'
import Banner from '../../components/Banner/Banner';
import datascienceBG from '../../assets/data-science.jpg'
import BGClick from '../../components/BGClick/BGClick'
import CurriculumDSA from '../../components/CourseCurriculum/CurriculumDSA/CurriculumDSA'
import FeedbackSliderDSA from '../../components/FeedbackSlider/FeedbackSliderDSA/FeedbackSliderDSA'
import BatchdetailsDSA from '../../components/Batchdetails/BatchDetailsDSA/BatchdetailsDSA'
import JobReadyDSA from '../../components/JobReady/JobReadyDSA/JobReadyDSA'
import CodeAsylumsAdvantageDSA from '../../components/CodeAsylumsAdvantage/CodeAsylumsAdvantageDSA/CodeAsylumsAdvantageDSA'
import StudentCarouselDSA from '../../components/StudentCarousel/StudentCarouselDSA/StudentCarouselDSA'
import BubblesDSA from '../../components/Bubbles/BubblesDSA/BubblesDSA'
import CodeAsylumsAdvantageDataScience from '../../components/CodeAsylumsAdvantage/CodeAsylumsAdvantageDataScience/CodeAsylumsAdvantageDataScience'
import MentorsDataScience from '../../components/mentorsPage2/MentorsDataScience/MentorsDataScience'
import CurriculumDataScience from '../../components/CourseCurriculum/CurriculumDataScience/CurriculumDataScience'
import JobReadyDataScience from '../../components/JobReady/JobReadyDataScience/JobReadyDataScience'
import FeedbackSliderDataScience from '../../components/FeedbackSlider/FeedbackSliderDataScience/FeedbackSliderDataScience'
import BatchdetailsDataScience from '../../components/Batchdetails/BatchDetailsDataScience/BatchdetailsDataScience'
import StudentCarouselDataScience from '../../components/StudentCarousel/StudentCarouselDataScience/StudentCarouselDataScience'


const CourseDataScience = (props) => {
    return(
        <Layout>
            <MenuModal />
            <Navbar />
            <BGClick />
            <Page2Top title="Data Science Track" top="Online | 12 Weeks | Lively Mentorship | 4 Weeks Job Assistance" line1="Implement Data Structures and crack coding interviews" line2="Rated by students" type="fullstack" illustration={datascienceBG} />
            <CodeAsylumsAdvantageDataScience />
            <Parallax1 />
            <MentorsDataScience />
            <CurriculumDataScience/>
            <JobReadyDataScience />
            <FeedbackSliderDataScience />
            <BatchdetailsDataScience />
            {/* <CourseTestimonials /> */}
            <StudentCarouselDataScience />
            {/* <BubblesDSA /> */}
            <Accordion />
            <Banner/>

            <Footer/>
        </Layout>
        
    )
}

export default CourseDataScience;