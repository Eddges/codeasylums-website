import React from 'react'
import Layout from '../../components/Layout/Layout'
import Navbar from '../../components/navbarCourses/Navbar'
import MentorsDSA from '../../components/mentorsPage2/MentorsDSA/MentorsDSA'
import Footer from '../../components/Footer_Section/Footer'
import MenuModal from '../../components/MenuModal/MenuModal'
import Accordion from '../../components/accordion/Accordion'
import Page2Top from '../../components/Page2Top/Page2Top'
// import Parallax1 from '../../components/Parallax1/Parallax1'
import Banner from '../../components/Banner/Banner';
// import dsaBG from '../../assets/dsa.jpg'
import BGClick from '../../components/BGClick/BGClick'
// import CurriculumDSA from '../../components/CourseCurriculum/CurriculumDSA/CurriculumDSA'
import FeedbackSliderDSA from '../../components/FeedbackSlider/FeedbackSliderDSA/FeedbackSliderDSA'
import BatchdetailsDSA from '../../components/Batchdetails/BatchDetailsDSA/BatchdetailsDSA'
// import JobReadyDSA from '../../components/JobReady/JobReadyDSA/JobReadyDSA'
// import CodeAsylumsAdvantageDSA from '../../components/CodeAsylumsAdvantage/CodeAsylumsAdvantageDSA/CodeAsylumsAdvantageDSA'
import StudentCarouselDSA from '../../components/StudentCarousel/StudentCarouselDSA/StudentCarouselDSA'
import dsAdvancedBG from '../../assets/fullstackadvanced.jpg'
import CurriculumDSAdvanced from '../../components/CourseCurriculum/CurriculumDSAdvanced/CurriculumDSAdvanced'
// import MentorsDSAdvanced from '../../components/mentorsPage2/MentorsDSAdvanced/MentorsDSAdvanced'
import JobReadyDSAdvanced from '../../components/JobReady/JobReadyDSAdvanced/JobReadyDSAdvanced'
import CodeAsylumsAdvantageDSAdvanced from '../../components/CodeAsylumsAdvantage/CodeAsylumsAdvantageDSAdvanced/CodeAsylumsAdvantageDSAdvanced'
import ReactPixel from 'react-facebook-pixel';
import TagManager from 'react-gtm-module'

import ReactGA from 'react-ga';
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

const CourseDSAdvanced = (props) => {
    return(
        <Layout>
            <MenuModal />
            <Navbar />
            <BGClick />
            <Page2Top course="dsa-advanced" title="Competitive Programming with Advanced DSA" top="Online | 8 Weeks | Lively Mentorship | 4 Weeks Job Assistance" line1="Crack the coding interviews of Tier-1 Product based companies" line2="Best Assistance for Cracking Coding Interviews" type="fullstack" illustration={dsAdvancedBG} />
            <CodeAsylumsAdvantageDSAdvanced />
            {/* <Parallax1 /> */}
            {/* <MentorsDSAdvanced /> */}
            <JobReadyDSAdvanced />
            <FeedbackSliderDSA />
            <CurriculumDSAdvanced />
            {/*  <StudentCarouselDSA />*/}
            
            <BatchdetailsDSA/>
            {/* <CourseTestimonials /> */}
            
            {/* <BubblesDSA /> */}
            <Banner/>
            <Accordion />
            

            <Footer/>
        </Layout>
        
    )
}

export default CourseDSAdvanced