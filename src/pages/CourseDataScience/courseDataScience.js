import React from 'react'
import Layout from '../../components/Layout/Layout'
import Navbar from '../../components/navbarCourses/Navbar'
// import MentorsDSA from '../../components/mentorsPage2/MentorsDSA/MentorsDSA'
import Footer from '../../components/Footer_Section/Footer'
import MenuModal from '../../components/MenuModal/MenuModal'
import Accordion from '../../components/accordion/Accordion'
import Page2Top from '../../components/Page2Top/Page2Top'
// import Parallax1 from '../../components/Parallax1/Parallax1'
import Banner from '../../components/Banner/Banner';
import datascienceBG from '../../assets/data-science.jpg'
import BGClick from '../../components/BGClick/BGClick'
// import CurriculumDSA from '../../components/CourseCurriculum/CurriculumDSA/CurriculumDSA'
// import FeedbackSliderDSA from '../../components/FeedbackSlider/FeedbackSliderDSA/FeedbackSliderDSA'
// import BatchdetailsDSA from '../../components/Batchdetails/BatchDetailsDSA/BatchdetailsDSA'
// import JobReadyDSA from '../../components/JobReady/JobReadyDSA/JobReadyDSA'
// import CodeAsylumsAdvantageDSA from '../../components/CodeAsylumsAdvantage/CodeAsylumsAdvantageDSA/CodeAsylumsAdvantageDSA'
// import StudentCarouselDSA from '../../components/StudentCarousel/StudentCarouselDSA/StudentCarouselDSA'
// import BubblesDSA from '../../components/Bubbles/BubblesDSA/BubblesDSA'
import CodeAsylumsAdvantageDataScience from '../../components/CodeAsylumsAdvantage/CodeAsylumsAdvantageDataScience/CodeAsylumsAdvantageDataScience'
import MentorsDataScience from '../../components/mentorsPage2/MentorsDataScience/MentorsDataScience'
import CurriculumDataScience from '../../components/CourseCurriculum/CurriculumDataScience/CurriculumDataScience'
import JobReadyDataScience from '../../components/JobReady/JobReadyDataScience/JobReadyDataScience'
import FeedbackSliderDataScience from '../../components/FeedbackSlider/FeedbackSliderDataScience/FeedbackSliderDataScience'
import BatchdetailsDataScience from '../../components/Batchdetails/BatchDetailsDataScience/BatchdetailsDataScience'
import StudentCarouselDataScience from '../../components/StudentCarousel/StudentCarouselDataScience/StudentCarouselDataScience'
import ReactPixel from 'react-facebook-pixel';
import TagManager from 'react-gtm-module'

import ReactGA from 'react-ga';
import StudentCarousel from '../../components/StudentCarousel/StudentCarousel'
import PhoneBottom from '../../components/PhoneBottom/PhoneBottom'
ReactGA.initialize('UA-135901251-2');
ReactGA.pageview(window.location.pathname + window.location.search);

/*const tagManagerArgs = {
    gtmId: 'UA-135901251-2'
}

TagManager.initialize(tagManagerArgs)*/
//import ReactPixel from 'react-facebook-pixel';
const advancedMatching = {};
const options = {
    autoConfig: true, // set pixel's autoConfig
    debug: false, // enable logs
  };
  ReactPixel.init('2710640059047495', advancedMatching, options);
  
  ReactPixel.pageView(); // For tracking page view

const CourseDataAnalytics = (props) => {
    return(
        <Layout>
            <MenuModal />
            <Navbar />
            <BGClick />
            <Page2Top course="data-analytics" title="Data Analyst with Business Analysts" top="Online | 3 Months | Live Mentorship | Interview + Job Assistance" line1="Become a Data Analyst in 91 days" line2="For budding Data Analysts" line3_1 = "₹ 42,000" line3_2 = "₹ 45,000" type="fullstack" illustration={datascienceBG} />
            <CodeAsylumsAdvantageDataScience />
            {/* <Parallax1 /> */}
            {/* <MentorsDataScience /> */}
            <JobReadyDataScience />
            <FeedbackSliderDataScience />
            <CurriculumDataScience/>
            <PhoneBottom />
            {/* <StudentCarouselDataScience /> */}
            {/* <StudentCarousel /> */}
            
            <BatchdetailsDataScience />
            {/* <CourseTestimonials /> */}
            
            {/* <BubblesDSA /> */}
            <Banner rPrice = "₹35,000 + GST" oPrice = "₹45,000"/>
            <Accordion />
           

            <Footer/>
        </Layout>
        
    )
}

export default CourseDataAnalytics;