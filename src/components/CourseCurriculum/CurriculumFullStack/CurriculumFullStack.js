import React from 'react'
import Curriculum2Item from '../../Curriculum2Item/Curriculum2Item'
import classes from './CurriculumFullStack.module.css'

class CurriculumFullStack extends React.Component{

    render() {

        const section1 = [
            {
                link : "HTML, CSS, Bootstrap, Linux, Git, UI/UX",
                details : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer id lectus sed purus tristique sagittis. Aliquam molestie eu ligula eget bibendum. Nullam sapien nisi, varius a lacinia vel, posuere sit amet mi"
            },
            {
                link : "36Hrs Hackathon (Project)",
                details : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer id lectus sed purus tristique sagittis. Aliquam molestie eu ligula eget bibendum. Nullam sapien nisi, varius a lacinia vel, posuere sit amet mi"
            }
        ]

        const section2 = [
            {
                link : "JavaScript, Integrating External third party APIs",
                details : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer id lectus sed purus tristique sagittis. Aliquam molestie eu ligula eget bibendum. Nullam sapien nisi, varius a lacinia vel, posuere sit amet mi"
            },
            {
                link : "Frontend 36Hrs Hackathon (Project)",
                details : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer id lectus sed purus tristique sagittis. Aliquam molestie eu ligula eget bibendum. Nullam sapien nisi, varius a lacinia vel, posuere sit amet mi"
            }
        ]

        const section3 = [
            {
                link : "Node.js - APIs, MongoDB, Express",
                details : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer id lectus sed purus tristique sagittis. Aliquam molestie eu ligula eget bibendum. Nullam sapien nisi, varius a lacinia vel, posuere sit amet mi"
            },
            {
                link : "Fullstack 36Hrs Hackathon (Project)",
                details : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer id lectus sed purus tristique sagittis. Aliquam molestie eu ligula eget bibendum. Nullam sapien nisi, varius a lacinia vel, posuere sit amet mi"
            }
        ]

        const section4 = [
            {
                link : "Authentication, Integration, AWS(EC2, S3)",
                details : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer id lectus sed purus tristique sagittis. Aliquam molestie eu ligula eget bibendum. Nullam sapien nisi, varius a lacinia vel, posuere sit amet mi"
            },
            {
                link : "Deployment, Database Design, Making App Live",
                details : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer id lectus sed purus tristique sagittis. Aliquam molestie eu ligula eget bibendum. Nullam sapien nisi, varius a lacinia vel, posuere sit amet mi"
            }
        ]
        const section5 = [
            {
                link : " React Based Development",
                details : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer id lectus sed purus tristique sagittis. Aliquam molestie eu ligula eget bibendum. Nullam sapien nisi, varius a lacinia vel, posuere sit amet mi"
            },
            {
                link : "Integrating with Backend",
                details : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer id lectus sed purus tristique sagittis. Aliquam molestie eu ligula eget bibendum. Nullam sapien nisi, varius a lacinia vel, posuere sit amet mi"
            }
        ]
        const section6 = [
            {
                link : "Product Development Week (Product)",
                details : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer id lectus sed purus tristique sagittis. Aliquam molestie eu ligula eget bibendum. Nullam sapien nisi, varius a lacinia vel, posuere sit amet mi"
            },
        ]
        return(
            <div className={classes.CurriculumFullStack}>
                <p className={classes.title}>Course Curriculum</p>
                <p className={classes.Description}>There are professionals in the industry who have worked in Testing, Maintenance, Ops, System Admin, who are looking forward to work in startups with good work in the field of full-stack web development</p>
                <Curriculum2Item title="Week1" topic1="Array-Based Problems" topic2="Linked lists" section={section1} />
                <Curriculum2Item title="Week 2" topic1="ReactJS" topic2="ExpressJS" section={section2} />
                <Curriculum2Item title="Week 3" topic1="NodeJS" topic2="MongoDB" section={section3} />
                <Curriculum2Item title="Week 4" topic1="NodeJS" topic2="MongoDB" section={section4} />
                <Curriculum2Item title="Week 5" topic1="NodeJS" topic2="MongoDB" section={section5} />
                <Curriculum2Item title="Week 6" topic1="NodeJS" topic2="MongoDB" section={section6} />
            </div>
            
        )
    }
}

export default CurriculumFullStack