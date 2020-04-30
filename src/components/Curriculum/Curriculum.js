import React from 'react'
import CurriculumCard from '../CurriculumCard/CurriculumCard'
import node from '../../assets/curriculum/node.png'
import react from '../../assets/curriculum/react.png'
import github from '../../assets/curriculum/github.png'
import html from '../../assets/curriculum/html.png'
import classes from './Curriculum.module.css'

const Curriculum = (props) => {
    let cards=[
        {
            icon : html,
            title : "HTML, CSS and BootStrap",
            content : "Creating web pages using the elementary UI/UX skills"
        },
        {
            icon : react,
            title : "JavaScript and ReactJS",
            content : "Covering the entire frontend using ES6 and framework based programming using React.js."
        },
        {
            icon : node,
            title : "NodeJS, Ex and MongoDB",
            content : "Writing Restful APIs with Express and Authentication for backend programming and MongoDB"
        },
        {
            icon : github,
            title : "Linux and Git",
            content : "Collaborative programming using a version control system over a Linux based operating system",
        }

    ]
    const cardRender = cards.map(card => <div className={classes.Card}><CurriculumCard icon={card.icon} title={card.title} content={card.content} /></div>)
    return(
        <div className={classes.Curriculum}>
            
            <div className={classes.BG}>
                <p className={classes.paraCurriculum} >Curriculum</p>
                <p className={classes.paraLearn}>Technologies you will learn</p>
                <div className={classes.divCurriculumCards}>
                    {cardRender}
                </div>
            </div>
        </div>
    )
}

export default Curriculum