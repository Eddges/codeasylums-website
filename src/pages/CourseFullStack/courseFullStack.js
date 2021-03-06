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
// import dsaBG from '../../assets/dsa.jpg'
import BGClick from '../../components/BGClick/BGClick'
// import CurriculumDSA from '../../components/CourseCurriculum/CurriculumDSA/CurriculumDSA'
// import FeedbackSliderDSA from '../../components/FeedbackSlider/FeedbackSliderDSA/FeedbackSliderDSA'
// import BatchdetailsDSA from '../../components/Batchdetails/BatchDetailsDSA/BatchdetailsDSA'
// import JobReadyDSA from '../../components/JobReady/JobReadyDSA/JobReadyDSA'
// import CodeAsylumsAdvantageDSA from '../../components/CodeAsylumsAdvantage/CodeAsylumsAdvantageDSA/CodeAsylumsAdvantageDSA'
// import StudentCarouselDSA from '../../components/StudentCarousel/StudentCarouselDSA/StudentCarouselDSA'
// import BubblesDSA from '../../components/Bubbles/BubblesDSA/BubblesDSA'
import CodeAsylumsAdvantageFullStack from '../../components/CodeAsylumsAdvantage/CodeAsylumsAdvantageFullStack/CodeAsylumsAdvantageFullStack'
// import MentorsFullStack from '../../components/mentorsPage2/MentorsFullStack/MentorsFullStack'
import CurriculumFullStack from '../../components/CourseCurriculum/CurriculumFullStack/CurriculumFullStack'
import JobReadyFullStack from '../../components/JobReady/JobReadyFullStack/JobReadyFullStack'
import FeedbackSliderFullStack from '../../components/FeedbackSlider/FeedbackSliderFullStack/FeedbackSliderFullStack'
import BatchdetailsFullStack from '../../components/Batchdetails/BatchDetailsFullStack/BatchdetailsFullStack'
// import StudentCarouselFullStack from '../../components/StudentCarousel/StudentCarouselFullStack/StudentCarouseFullStack'
import fullStackBG from '../../assets/fullStackBG.jpg'
import ReactPixel from 'react-facebook-pixel';
import TagManager from 'react-gtm-module'

import ReactGA from 'react-ga';
import PhoneBottom from '../../components/PhoneBottom/PhoneBottom'
// import PhoneBottomCourses from '../../components/PhoneBottom/PhoneBottomCourses'
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
const CourseFullStack = (props) => {
    return(
        <Layout>
            <MenuModal />
            <Navbar />
            <BGClick />
            <Page2Top course="fullstack" title="Full-Stack Web Development" top="Online | 3 Months | Live Mentorship | Interview + Job Assistance" line1="From Scratch" line2="Become a Full-Stack developer to skill up & get a job" line3_1 = "₹ 37,000" line3_2 = "₹ 40,000" type="fullstack" illustration={fullStackBG} />
            <CodeAsylumsAdvantageFullStack />
            <PhoneBottom />
            {/* <Parallax1 /> */}
            {/* <MentorsFullStack /> */}
            <JobReadyFullStack />
            <FeedbackSliderFullStack />
            <CurriculumFullStack/>
            
            {/*<StudentCarouselFullStack />*/}
            <BatchdetailsFullStack/>
            {/* <CourseTestimonials /> */}
            
            {/* <BubblesDSA /> */}
            <Banner rPrice = "₹35,000 + GST" oPrice = "₹45,000"/>
            <Accordion />
           

            <Footer/>
        </Layout>
        
    )
}

export default CourseFullStack;