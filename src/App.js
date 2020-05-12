import React from 'react'
import LandPage from './pages/landingPage/landingPage'
import classes from './App.module.css'
import Course from './pages/coursePage/course'
import Navbar from './components/navbar/Navbar'
import {Switch, Route} from 'react-router-dom'


class App extends React.Component {
    render() {
        return(
            <Switch>
                <Route path="/" exact component={LandPage} />
                <Route path="/fullstack" component={Course} />
            </Switch>
                

            
        )
    }
}

export default App