import React from 'react'
import LandPage from './pages/landingPage/landingPage'
import classes from './App.module.css'
import Course from './pages/coursePage/course'
import Navbar from './components/navbar/Navbar'

class App extends React.Component {
    render() {
        return(
            // <Course />
            <LandPage />
        )
    }
}

export default App