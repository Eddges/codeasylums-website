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
import dsaBG from '../../assets/dsa.jpg'
import BGClick from '../../components/BGClick/BGClick'
import CurriculumDSA from '../../components/CourseCurriculum/CurriculumDSA/CurriculumDSA'
import FeedbackSliderDSA from '../../components/FeedbackSlider/FeedbackSliderDSA/FeedbackSliderDSA'
import BatchdetailsDSA from '../../components/Batchdetails/BatchDetailsDSA/BatchdetailsDSA'
import JobReadyDSA from '../../components/JobReady/JobReadyDSA/JobReadyDSA'
import CodeAsylumsAdvantageDSA from '../../components/CodeAsylumsAdvantage/CodeAsylumsAdvantageDSA/CodeAsylumsAdvantageDSA'
import StudentCarouselDSA from '../../components/StudentCarousel/StudentCarouselDSA/StudentCarouselDSA'
import BubblesDSA from '../../components/Bubbles/BubblesDSA/BubblesDSA'
import CodeAsylumsAdvantageFullStack from '../../components/CodeAsylumsAdvantage/CodeAsylumsAdvantageFullStack/CodeAsylumsAdvantageFullStack'
import MentorsFullStack from '../../components/mentorsPage2/MentorsFullStack/MentorsFullStack'
import CurriculumFullStack from '../../components/CourseCurriculum/CurriculumFullStack/CurriculumFullStack'
import JobReadyFullStack from '../../components/JobReady/JobReadyFullStack/JobReadyFullStack'
import FeedbackSliderFullStack from '../../components/FeedbackSlider/FeedbackSliderFullStack/FeedbackSliderFullStack'
import BatchdetailsFullStack from '../../components/Batchdetails/BatchDetailsFullStack/BatchdetailsFullStack'
import StudentCarouselFullStack from '../../components/StudentCarousel/StudentCarouselFullStack/StudentCarouseFullStack'
import fullStackBG from '../../assets/fullStackBG.jpg'

const CourseFullStack = (props) => {
    return(
        <Layout>
            <MenuModal />
            <Navbar />
            <BGClick />
            <Page2Top title="Full-Stack Web Development (From Scratch)" top="Online | 6 Weeks | Lively Mentorship | 4 Weeks Job Assistance" line1="Become a Full-Stack developer to skill up & get a job" line2="Rated by students" type="fullstack" illustration={fullStackBG} />
            <CodeAsylumsAdvantageFullStack />
            <Parallax1 />
            <MentorsFullStack />
            <JobReadyFullStack />
            <FeedbackSliderFullStack />
            <CurriculumFullStack/>
            
            <StudentCarouselFullStack />
            <BatchdetailsFullStack/>
            {/* <CourseTestimonials /> */}
            
            {/* <BubblesDSA /> */}
            <Accordion />
            <Banner/>

            <Footer/>
        </Layout>
        
    )
}

export default CourseFullStack;