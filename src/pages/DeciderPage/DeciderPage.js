import React from 'react'
import classes from './DeciderPage.module.css'
import './DeciderPage.css'

import Hacker from '../../assets/Hacker.png'
import HackerPC from '../../assets/HackerPC.png'
import HackerTable from '../../assets/HackerTable.png'
import ReactJS from '../../assets/react.png'
import Kuber from '../../assets/kuber.png'
import Html5 from '../../assets/html5.svg'
import Github from '../../assets/github.png'
import Logo from '../../assets/logo.png'
import LogoWhite from '../../assets/logoWhite.png'

import ProfessionalBG from '../../assets/ProfessionalBG.svg'
import Professional1 from '../../assets/Professional1.svg'
import Docker from '../../assets/docker.png'
import Ansible from '../../assets/ansible.png'
import Circle from '../../assets/Circle.png'


const DeciderPage = () => {
    return(
        <div className="landing-container">
            <div className="glass"></div>
            <div className="landing-left">
                <div className="landing-left-text">
                    <p>Student</p>
                    <p>Are you a student</p>
                    <p>wishing to learn new stuff?</p>
                    <p>Give us and yourself some time and secure your dream job</p>
                    <button className="landing-left-button">Explore</button>
                </div>
                <img className="Main" src={Hacker} />
                <img className="Decor" src={HackerPC} alt="Decor" />
                <img className="Table" src={HackerTable} />
                
                <img className="ReactJS" src={ReactJS} alt="Decor" />
                <img className="Kuber" src={Kuber} alt="Decor" />
                <img className="HTML5" src={Html5} alt="Decor" />
                <img className="Github" src={Github} alt="Decor" />
                <img className="Logo" src={Logo} alt="CodeAsylums" />
                <img className="LogoWhite" src={LogoWhite} alt="CodeAsylums" />
            </div>
            <div className="landing-right">
                <div className="landing-right-absolute">
                    
                </div>
                <div className="landing-right-text">
                    <p>Professional?</p>
                    <p>Are you a working professional</p>
                    <p>and want to improve your skills?</p>
                    <p>Jumpstart with professional courses from CodeAsylums online Bootcamp</p>
                    <button className="landing-right-button">Request Callback</button>
                </div>
                <img className="Decor" src={ProfessionalBG} alt="Decor" />
                <img className="Main" src={Professional1} alt="Main" />
                
                {/* <img className="Docker" src={Docker} alt="Decor" /> */}
                {/* <img className="Ansible" src={Ansible} alt="Decor" />
                <img className="Circle4" src={Circle} alt="Decor" /> */}
            </div>
    </div>
    )
}

export default DeciderPage