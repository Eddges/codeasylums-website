import React from 'react'
import Curriculum2Item from '../../Curriculum2Item/Curriculum2Item'
import classes from './CurriculumDSA.module.css'

class CurriculumDSA extends React.Component{

    render() {

        const section1 = [
            {
                link : "Array Based Problems",
                details : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer id lectus sed purus tristique sagittis. Aliquam molestie eu ligula eget bibendum. Nullam sapien nisi, varius a lacinia vel, posuere sit amet mi"
            },
            {
                link : "Linked lists",
                details : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer id lectus sed purus tristique sagittis. Aliquam molestie eu ligula eget bibendum. Nullam sapien nisi, varius a lacinia vel, posuere sit amet mi"
            }
        ]

        const section2 = [
            {
                link : "Stacks",
                details : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer id lectus sed purus tristique sagittis. Aliquam molestie eu ligula eget bibendum. Nullam sapien nisi, varius a lacinia vel, posuere sit amet mi"
            },
            {
                link : "Queues",
                details : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer id lectus sed purus tristique sagittis. Aliquam molestie eu ligula eget bibendum. Nullam sapien nisi, varius a lacinia vel, posuere sit amet mi"
            }
        ]

        const section3 = [
            {
                link : "Number Theory",
                details : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer id lectus sed purus tristique sagittis. Aliquam molestie eu ligula eget bibendum. Nullam sapien nisi, varius a lacinia vel, posuere sit amet mi"
            },
            {
                link : "Recursion",
                details : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer id lectus sed purus tristique sagittis. Aliquam molestie eu ligula eget bibendum. Nullam sapien nisi, varius a lacinia vel, posuere sit amet mi"
            }
        ]

        const section4 = [
            {
                link : "Trees",
                details : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer id lectus sed purus tristique sagittis. Aliquam molestie eu ligula eget bibendum. Nullam sapien nisi, varius a lacinia vel, posuere sit amet mi"
            }
        ]
        const section5 = [
            {
                link : "Binary Search Trees",
                details : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer id lectus sed purus tristique sagittis. Aliquam molestie eu ligula eget bibendum. Nullam sapien nisi, varius a lacinia vel, posuere sit amet mi"
            },
            {
                link : "Heaps",
                details : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer id lectus sed purus tristique sagittis. Aliquam molestie eu ligula eget bibendum. Nullam sapien nisi, varius a lacinia vel, posuere sit amet mi"
            }
        ]
        const section6 = [
            {
                link : "Sorting - Quick Sort and Merge Sort",
                details : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer id lectus sed purus tristique sagittis. Aliquam molestie eu ligula eget bibendum. Nullam sapien nisi, varius a lacinia vel, posuere sit amet mi"
            },
            {
                link : "D&C and Backtracking",
                details : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer id lectus sed purus tristique sagittis. Aliquam molestie eu ligula eget bibendum. Nullam sapien nisi, varius a lacinia vel, posuere sit amet mi"
            }
        ]
        const section7 = [
            {
                link : "Basic Dynamic Programming",
                details : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer id lectus sed purus tristique sagittis. Aliquam molestie eu ligula eget bibendum. Nullam sapien nisi, varius a lacinia vel, posuere sit amet mi"
            },
            {
                link : "Graphs",
                details : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer id lectus sed purus tristique sagittis. Aliquam molestie eu ligula eget bibendum. Nullam sapien nisi, varius a lacinia vel, posuere sit amet mi"
            }
        ]
        const section8 = [
            {
                link : "System Design",
                details : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer id lectus sed purus tristique sagittis. Aliquam molestie eu ligula eget bibendum. Nullam sapien nisi, varius a lacinia vel, posuere sit amet mi"
            }
        ]

        return(
            <div className={classes.CurriculumFullStack} id="curriculum">
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
            </div>
            
        )
    }
}

export default CurriculumDSA