import React from 'react'
import Curriculum2Item from '../../Curriculum2Item/Curriculum2Item'
import classes from './CurriculumDataScience.module.css'

class CurriculumDataScience extends React.Component{

    render() {

        const section1 = [
            {
                link : "Intro to Machine Learning",
                details : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer id lectus sed purus tristique sagittis. Aliquam molestie eu ligula eget bibendum. Nullam sapien nisi, varius a lacinia vel, posuere sit amet mi"
            },
            {
                link : "Guesstimates",
                details : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer id lectus sed purus tristique sagittis. Aliquam molestie eu ligula eget bibendum. Nullam sapien nisi, varius a lacinia vel, posuere sit amet mi"
            },
            {
                link : "Case Studies",
                details : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer id lectus sed purus tristique sagittis. Aliquam molestie eu ligula eget bibendum. Nullam sapien nisi, varius a lacinia vel, posuere sit amet mi"
            },
        ]

        const section2 = [
            {
                link : "Python and Statistics",
                details : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer id lectus sed purus tristique sagittis. Aliquam molestie eu ligula eget bibendum. Nullam sapien nisi, varius a lacinia vel, posuere sit amet mi"
            },
            {
                link : "Case Study and Aptitude",
                details : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer id lectus sed purus tristique sagittis. Aliquam molestie eu ligula eget bibendum. Nullam sapien nisi, varius a lacinia vel, posuere sit amet mi"
            }
        ]

        const section3 = [
            {
                link : "Excel & Aptitude",
                details : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer id lectus sed purus tristique sagittis. Aliquam molestie eu ligula eget bibendum. Nullam sapien nisi, varius a lacinia vel, posuere sit amet mi"
            },
            {
                link : "Group Discussions",
                details : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer id lectus sed purus tristique sagittis. Aliquam molestie eu ligula eget bibendum. Nullam sapien nisi, varius a lacinia vel, posuere sit amet mi"
            }
        ]

        const section4 = [
            {
                link : "SQL",
                details : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer id lectus sed purus tristique sagittis. Aliquam molestie eu ligula eget bibendum. Nullam sapien nisi, varius a lacinia vel, posuere sit amet mi"
            },
            {
                link : "Numpy Pandas",
                details : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer id lectus sed purus tristique sagittis. Aliquam molestie eu ligula eget bibendum. Nullam sapien nisi, varius a lacinia vel, posuere sit amet mi"
            }
        ]
        const section5 = [
            {
                link : "SQL",
                details : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer id lectus sed purus tristique sagittis. Aliquam molestie eu ligula eget bibendum. Nullam sapien nisi, varius a lacinia vel, posuere sit amet mi"
            },
            {
                link : "Machine Learning Regression",
                details : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer id lectus sed purus tristique sagittis. Aliquam molestie eu ligula eget bibendum. Nullam sapien nisi, varius a lacinia vel, posuere sit amet mi"
            }
        ]
        const section6 = [
            {
                link : "Machine Learning Supervised & Unsupervised",
                details : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer id lectus sed purus tristique sagittis. Aliquam molestie eu ligula eget bibendum. Nullam sapien nisi, varius a lacinia vel, posuere sit amet mi"
            }
        ]
        const section7 = [
            {
                link : "Machine Learning Models & Algorithms using SkLearn",
                details : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer id lectus sed purus tristique sagittis. Aliquam molestie eu ligula eget bibendum. Nullam sapien nisi, varius a lacinia vel, posuere sit amet mi"
            }
        ]
        const section8 = [
            {
                link : "Deep Learning using Keras",
                details : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer id lectus sed purus tristique sagittis. Aliquam molestie eu ligula eget bibendum. Nullam sapien nisi, varius a lacinia vel, posuere sit amet mi"
            }
        ]
        const section9 = [
            {
                link : "Visualisation Tools",
                details : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer id lectus sed purus tristique sagittis. Aliquam molestie eu ligula eget bibendum. Nullam sapien nisi, varius a lacinia vel, posuere sit amet mi"
            },
            {
                link : "Dashboarding",
                details : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer id lectus sed purus tristique sagittis. Aliquam molestie eu ligula eget bibendum. Nullam sapien nisi, varius a lacinia vel, posuere sit amet mi"
            }
        ]
        const section10 = [
            {
                link : "Week Long Product Development",
                details : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer id lectus sed purus tristique sagittis. Aliquam molestie eu ligula eget bibendum. Nullam sapien nisi, varius a lacinia vel, posuere sit amet mi"
            }
        ]
        const section11 = [
            {
                link : "Data Science and related Technologies",
                details : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer id lectus sed purus tristique sagittis. Aliquam molestie eu ligula eget bibendum. Nullam sapien nisi, varius a lacinia vel, posuere sit amet mi"
            }
        ]


        return(
            <div className={classes.CurriculumFullStack}>
                <p className={classes.title}>Course Curriculum</p>
                <p className={classes.Description}>This course is for those people who are new to the world of data structures and looking forward to implementing data structures in depth to crack coding interviews of mainly tier-2 companies</p>
                <Curriculum2Item title="Week 0 - Week1" topic1="Array-Based Problems" topic2="Linked lists" section={section1} />
                <Curriculum2Item title="Week 2" topic1="ReactJS" topic2="ExpressJS" section={section2} />
                <Curriculum2Item title="Week 3" topic1="NodeJS" topic2="MongoDB" section={section3} />
                <Curriculum2Item title="Week 4" topic1="NodeJS" topic2="MongoDB" section={section4} />
                <Curriculum2Item title="Week 5" topic1="NodeJS" topic2="MongoDB" section={section5} />
                <Curriculum2Item title="Week 6" topic1="NodeJS" topic2="MongoDB" section={section6} />
                <Curriculum2Item title="Week 7" topic1="NodeJS" topic2="MongoDB" section={section7} />
                <Curriculum2Item title="Week 8" topic1="NodeJS" topic2="MongoDB" section={section8} />
                <Curriculum2Item title="Week 9" topic1="NodeJS" topic2="MongoDB" section={section9} />
                <Curriculum2Item title="Week 10" topic1="NodeJS" topic2="MongoDB" section={section10} />
                <Curriculum2Item title="Week 11" topic1="NodeJS" topic2="MongoDB" section={section11} />
                {/* <Curriculum2Item title="Week 12 - Week 13" topic1="NodeJS" topic2="MongoDB" section={section12} /> */}
            </div>
            
        )
    }
}

export default CurriculumDataScience