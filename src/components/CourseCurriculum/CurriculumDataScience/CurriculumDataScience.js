import React from 'react'
import Curriculum2Item from '../../Curriculum2Item/Curriculum2Item'
import classes from './CurriculumDataScience.module.css'

class CurriculumDataScience extends React.Component{

    render() {

        const section1 = [
            {
                link : "Guesstimate & Case Study - 5 Sessions",
                details : "Guesstimate is defined as an estimate made without using adequate or complete information, or, more strongly, as an estimate arrived at by guesswork or conjecture."
            },
            {
                link : "Excel - 5 Sessions",
                details : "Excel is used for calculation, graphing tools, pivot tables, and a macro programming language called Visual Basic for Applications. "
            },
            {
                link : "Aptitude Quant & DI -  5 Sessions",
                details : "For developing the right mindset and brainpower."
            },
            {
                link : "Tableau - 5 Sessions",
                details : "Tableau is the fastest growing data visualization tool that aims to help people see and understand data"
            },
            {
                link : "R - 5 Sessions",
                details : "R is a programming language and free software environment for statistical computing and graphics supported by the R Foundation for Statistical Computing."
            }
        ]

        const section1_1 = [
            {
                link : "SQL - 5 Sessions",
                details : "USE, DESCRIBE, SHOW TABLES, SELECT, LIMIT, OFFSET, ORDER BY, DISTINCT, WHERE, Comparison operators, NULL, Logical Operators, Aggregate Functions: COUNT, MIN, MAX, AVG, SUM, GROUP BY, HAVING, Order of keywords, Join and Natural Join, Inner, Left, Right and Outer joins, Nested Queries, INSERT, UPDATE, DELETE, CREATE TABLE, ADD, MODIFY, DROP, DROP TABLE, TRUNCATE, DELETE, GRANT, REVOKE"
            },
            {
                link : "Advanced SQL - 5 Sessions",
                details : "Nested Queries over Industry level database "
            }
        ]


        const section2 = [
            {
                link : "Python - 7 Sessions",
                details : "Keywords, Identifiers, Variables, Standard Input & Output, Operators, Control Flow,Strings, Loops, Lists, Tuples, Dictionary, Functions, Lambda, Module, Packages, FileHandling, Error Handling, Map, Reduce, Filter, Zip"
            }
        ]

        const section3 = [
            {
                link : "Test, Assignments and Discussions",
                details : "Hackerrank Tests for SQL & Python, Assignments for Tableau & R programming, Case Studies Discussions."
            }
        ]

        const section4 = [
            {
                link : "Case Study & Analysis Sessions - 5 Sessions (1 - 2 Case Studies)",
                details : "Remote learning, distance education, and online learning during the COVID19 pandemic"
            }
        ]
        const section5 = [
            {
                link : "Interview Preparation",
                details : "Will be taken by the industry people who are working in startups and product-based Companies"
            }
        ]
        // const section5_1 = [
        //     {
        //         link : "Introduction to Neural Networks",
        //         details : "A neural network is a series of algorithms that endeavors to recognize underlying relationships in a set of data through a process that mimics the way the human brain operates. In this sense, neural networks refer to systems of neurons, either organic or artificial in nature."
        //     }
        // ]
        // const section6 = [
        //     {
        //         link : "Hackathon",
        //         details : "Frontend Hackathon & Fullstack Hackathon - Teams based project development"
        //     }
        // ]
        // const section7 = [
        //     {
        //         link : "Build a Project",
        //         details : "Bootstrap-based responsive static web application for community profiling Integrating Bitcoin API to make a browser-based application  E-Commerce Web-Application using MERN stack (end-to-end)  "
        //     }
        // ]
        const section8 = [
            {
                link : "Interview Preparations",
                details : "Will be taken by the industry people who are working in startups and product-based Companies."
            }
        ]
        const section9 = [
            {
                link : "Career and placement support",
                details : "Tech talks and discussions around the tech and industry culture."
            }
        ]


        return(
            <div className={classes.CurriculumFullStack} id="curriculum">
                <p className={classes.title}>Course Curriculum</p>
                <p className={classes.Description}>Let Data do the talking for you. Derive insights, trends and inferences from real-world data using technologies like SQL, Python, Tableau. Join today to land exciting career opportunities in the hottest career prospect of the century. 3 Month intensive training on the latest Data Analytics tools and Technologies to make you learn Data Analytics from scratch!</p>
                <Curriculum2Item title="Fundamentals - 25 sessions" topic1="Array-Based Problems" topic2="Linked lists" section={section1} />
                <Curriculum2Item title="SQL - 10 sessions" topic1="Array-Based Problems" topic2="Linked lists" section={section1_1} />
                <Curriculum2Item title="Python - 7 sessions" topic1="ReactJS" topic2="ExpressJS" section={section2} />
                <Curriculum2Item title="Hands on problems and test" topic1="NodeJS" topic2="MongoDB" section={section3} />
                <Curriculum2Item title="Case studies" topic1="NodeJS" topic2="MongoDB" section={section4} />
                <Curriculum2Item title="Interview Preparation - 2 sessions" topic1="NodeJS" topic2="MongoDB" section={section5} />
                {/* <Curriculum2Item title="Neural Networks - 5 Sessions" topic1="NodeJS" topic2="MongoDB" section={section5_1} /> */}
                {/* <Curriculum2Item title="Mentored Hackathon - 4 Sessions" topic1="NodeJS" topic2="MongoDB" section={section6} /> */}
                {/* <Curriculum2Item title="Project Development Sessions - 7 Sessions" topic1="NodeJS" topic2="MongoDB" section={section7} /> */}
                {/* <Curriculum2Item title="Mock Interviews - 2 Sessions" topic1="NodeJS" topic2="MongoDB" section={section8} /> */}
                <Curriculum2Item title= "Placement Assistance - 2 Sessions" topic1="NodeJS" topic2="MongoDB" section={section9} />
                {/* <Curriculum2Item title="Week 12 - Week 13" topic1="NodeJS" topic2="MongoDB" section={section12} /> */}
            </div>
            
        )
    }
}

export default CurriculumDataScience