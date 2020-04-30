import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import LandingPage from '../../components/LandingPage/LandingPage'
import Layout from '../../components/Layout/Layout'
import OnlineCourses from '../../components/OnlineCourses/OnlineCourses'
import Expectations from '../../components/expectations/Expectations'
import Placements from '../../components/Placements/Placements'
import GettingInto from '../../components/GettingInto/GettingInto'
import classes from './LandingPage.module.css'
import Footer from '../../components/Footer/Footer'

class LandPage extends React.Component {
    render() {
        return(
            <div >
                <Layout>
                    <Navbar />
                    <LandingPage />
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