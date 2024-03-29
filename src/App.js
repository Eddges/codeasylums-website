import React from 'react'
import LandPage from './pages/landingPage/landingPage'
import classes from './App.module.css'
import Navbar from './components/navbar/Navbar'
import {Switch, Route} from 'react-router-dom'
import DeciderPage from './pages/DeciderPage/DeciderPage'
import CourseDSA from './pages/CourseDSA/courseDSA'
import CourseFullStack from './pages/CourseFullStack/courseFullStack'
import CourseSystems from './pages/CourseSystems/courseSystems'
// import CourseFullStackAdvanced from './pages/CourseFullStackAdvanced/courseFullStackAdvanced'
import CourseDataScience from './pages/CourseDSAdvanced/courseDSAdvanced'
import CourseDataAnalytics from './pages/CourseDataScience/courseDataScience'
import'./App.css'
import About from './components/About/About'
import TeamSection from './components/TeamSection/TeamSection'


class App extends React.Component {
    render() {
        return(
            <Switch>

                <Route path="/" exact component={LandPage} />
                <Route path="/fullstack" exact component={CourseFullStack} />
                <Route path="/decide" exact component={DeciderPage} />
                <Route path="/dsa" exact component={CourseDSA} />
                {/* <Route path="/fullstackadvanced" exact component={CourseSystems} /> */}
                {/* <Route path="/fullstackadvanced" exact component={CourseFullStackAdvanced} /> */}
                <Route path="/datascience" exact component={CourseDataScience} />
                <Route path="/danalytics" exact component={CourseDataAnalytics} />
                <Route path="/about" exact component={About} />
                <Route path="/team" exact component={TeamSection} />
            </Switch>
                

            
        )
    }
}

export default App