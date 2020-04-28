import React from 'react'
import Navbar from './components/navbar/Navbar'
import LandingPage from './components/LandingPage/LandingPage'
import Layout from './components/Layout/Layout'
import OnlineCourses from './components/OnlineCourses/OnlineCourses'
import classes from './App.module.css'

class App extends React.Component {
    render() {
        return(
            <div >
                <Layout>
                    <Navbar />
                    <LandingPage />
                    <OnlineCourses />
                </Layout>
            </div>
        )
    }
}

export default App