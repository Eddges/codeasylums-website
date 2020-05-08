import React from 'react'
import Curriculum2Item from '../Curriculum2Item/Curriculum2Item'
import classes from './CurriculumFullStack.module.css'

class CurriculumFullStack extends React.Component{

    render() {

        const section1 = [
            {
                link : "HTML and CSS",
                details : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer id lectus sed purus tristique sagittis. Aliquam molestie eu ligula eget bibendum. Nullam sapien nisi, varius a lacinia vel, posuere sit amet mi"
            },
            {
                link : "JavaScript",
                details : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer id lectus sed purus tristique sagittis. Aliquam molestie eu ligula eget bibendum. Nullam sapien nisi, varius a lacinia vel, posuere sit amet mi"
            }
        ]

        const section2 = [
            {
                link : "ReactJS",
                details : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer id lectus sed purus tristique sagittis. Aliquam molestie eu ligula eget bibendum. Nullam sapien nisi, varius a lacinia vel, posuere sit amet mi"
            },
            {
                link : "NodeJS",
                details : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer id lectus sed purus tristique sagittis. Aliquam molestie eu ligula eget bibendum. Nullam sapien nisi, varius a lacinia vel, posuere sit amet mi"
            }
        ]

        const section3 = [
            {
                link : "MongoDB",
                details : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer id lectus sed purus tristique sagittis. Aliquam molestie eu ligula eget bibendum. Nullam sapien nisi, varius a lacinia vel, posuere sit amet mi"
            },
            {
                link : "GitHub",
                details : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer id lectus sed purus tristique sagittis. Aliquam molestie eu ligula eget bibendum. Nullam sapien nisi, varius a lacinia vel, posuere sit amet mi"
            },
            {
                link : "Cloud and AWS",
                details : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer id lectus sed purus tristique sagittis. Aliquam molestie eu ligula eget bibendum. Nullam sapien nisi, varius a lacinia vel, posuere sit amet mi"
            }
        ]

        return(
            <div className={classes.CurriculumFullStack}>
                <p className={classes.title}>Course Curriculum</p>
                <Curriculum2Item title="Fundamentals" topic1="HTML and CSS" topic2="JavaScript" section={section1} />
                <Curriculum2Item title="Frameworks" topic1="ReactJS" topic2="ExpressJS" section={section2} />
                <Curriculum2Item title="Backend" topic1="NodeJS" topic2="MongoDB" section={section3} />
            </div>
            
        )
    }
}

export default CurriculumFullStack