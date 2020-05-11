import React from 'react'
import Navbar from '../../components/navbartransparent/Navbar'
import LandingPage from '../../components/LandingPage/LandingPage'
import Layout from '../../components/Layout/Layout'
import OnlineCourses from '../../components/OnlineCourses/OnlineCourses'
import Expectations from '../../components/expectations/Expectations'
import Placements from '../../components/Placements/Placements'
import GettingInto from '../../components/GettingInto/GettingInto'
// import classes from './LandingPage.module.css'
import Footer from '../../components/Footer_Section/Footer'
import LandingPage2 from '../../components/LandingPage2/LandingPage2'
import Campus_Selection from '../../components/Campus_Selection/Campus_Selection'
import GetStarted from '../../components/getstarted/GetStarted'
import Courses from '../../components/Teampage/Courses'
import Banner from '../../components/Banner/Banner'
import MenuModal from '../../components/MenuModal/MenuModal'
import Team from '../../components/Teampage/Team'
import FeedbackSlider from '../../components/FeedbackSlider/FeedbackSlider'
import Companies from '../../components/Companies/Companies'


class LandPage extends React.Component {
    render() {
        return(
            <div >
                <Layout>
                    <Navbar />
                    <MenuModal />
                    <LandingPage2 />
                    <Courses />
                    <Expectations />
                    <Companies />
                    {/* <Placements /> */}
                    <Team />
                    <FeedbackSlider />
                    {/* <GetStarted /> */}
                    {/* <LandingPage /> */}
                    {/* <Campus_Selection /> */}
                    {/* <OnlineCourses /> */}
                    
                    
                    {/* <GettingInto /> */}
                    {/* <TeamPage /> */}
                    <Banner />
                    <Footer />
                    {/* <Footer /> */}
                </Layout>
            </div>
        )
    }
}

export default LandPage