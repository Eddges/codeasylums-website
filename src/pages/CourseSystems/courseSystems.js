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
const CourseSystems = (props) => {
    return(
        <Layout>
            <MenuModal />
            <Navbar />
            <BGClick />
            <Page2Top course="fullstack-advanced" title="FullStack Web Development" top="Online | 10 Weeks | Lively Mentorship | 4 Weeks Job Assistance" line1="(Intermediate to Advance)" line2="Become a Software Developer + Scale your code & get a job" line3_1 = "₹ 72,000" line3_2 = "₹ 75,000" type="fullstack" illustration={systemsBG} />
            <CodeAsylumsAdvantageSystems />
            {/* <Parallax1 /> */}
            {/* <MentorsSystems /> */}
            <JobReadySystems />
            <FeedbackSliderSystems />
            <CurriculumSystems/>
            
             {/*<StudentCarouselSystems />*/}
            <BatchdetailsSystems/>
            {/* <CourseTestimonials /> */}
            
            {/* <BubblesDSA /> */}
            <Accordion />
            <Banner rPrice = "₹72,000" oPrice = "₹75,000"/>

            <Footer/>
        </Layout>
        
    )
}

export default CourseSystems;