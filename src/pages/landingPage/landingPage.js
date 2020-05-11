import React from 'react'
import Navbar from '../../components/navbartransparent/Navbar'
import LandingPage from '../../components/LandingPage/LandingPage'
import Layout from '../../components/Layout/Layout'
import OnlineCourses from '../../components/OnlineCourses/OnlineCourses'
import Expectations from '../../components/expectations/Expectations'
import Placements from '../../components/Placements/Placements'
import GettingInto from '../../components/GettingInto/GettingInto'
// import classes from './LandingPage.module.css'
import Footer from '../../components/Footer/Footer'
import LandingPage2 from '../../components/LandingPage2/LandingPage2'
import Campus_Selection from '../../components/Campus_Selection/Campus_Selection'
import GetStarted from '../../components/getstarted/GetStarted'


class LandPage extends React.Component {
    render() {
        return(
            <div >
                <Layout>
                    <Navbar />
                    <LandingPage2 />
                    <GetStarted />
                    <LandingPage />
                    <Campus_Selection />
                    <OnlineCourses />
                    <Expectations />
                    <Placements />
                    <GettingInto />
                    <Footer />
                </Layout>
            </div>
        )
    }
}

export default LandPage