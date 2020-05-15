import React from 'react'
import LandPage from './pages/landingPage/landingPage'
import classes from './App.module.css'
import Course from './pages/coursePage/course'
import Navbar from './components/navbar/Navbar'
import {Switch, Route} from 'react-router-dom'
import DeciderPage from './pages/DeciderPage/DeciderPage'
import CourseDSA from './pages/CourseDSA/courseDSA'


class App extends React.Component {
    render() {
        return(
            <Switch>
                <Route path="/" exact component={LandPage} />
                <Route path="/fullstack" exact component={Course} />
                <Route path="/decide" exact component={DeciderPage} />
                <Route path="/dsa" exact component={CourseDSA} />
            </Switch>
                

            
        )
    }
}

export default App