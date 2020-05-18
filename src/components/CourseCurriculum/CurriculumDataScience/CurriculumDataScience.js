import React from 'react'
import Curriculum2Item from '../../Curriculum2Item/Curriculum2Item'
import classes from './CurriculumDataScience.module.css'

class CurriculumDataScience extends React.Component{

    render() {

        const section1 = [
            {
                link : "Intro to Machine Learning",
                details : "Machine learning is a method of data analysis that automates analytical model building. It is a branch of artificial intelligence based on the idea that systems can learn from data, identify patterns and make decisions with minimal human intervention."
            },
            {
                link : "Guesstimates",
                details : "A guesstimate is a portmanteau of guess and estimate, used to make a rough approximation pending a more accurate estimate, or just an educated guess. Guess questions are common in interviews for data science roles."
            },
            {
                link : "Case Studies",
                details : "You will look at examples and study how algorithms are implemented, data is collected and scraped and lots of other funn stuff in these Case Studies to polish your inner data scientist"
            },
        ]

        const section2 = [
            {
                link : "Python and Statistics",
                details : "Python is an interpreted, high-level, general-purpose programming language. Created by Guido van Rossum and first released in 1991, Python's design philosophy emphasizes code readability with its notable use of significant whitespace."
            },
            {
                link : "Case Study and Aptitude",
                details : "You can't really turn youself into data scientist without developing proper perspective and the aptitude for solving problems. We will focus on the mentioned fields in these lessons."
            }
        ]

        const section3 = [
            {
                link : "Excel & Aptitude",
                details : "Microsoft Excel is a spreadsheet developed by Microsoft for Windows, macOS, Android and iOS. It features calculation, graphing tools, pivot tables, and a macro programming language called Visual Basic for Applications."
            },
            {
                link : "Group Discussions",
                details : "There will only be a few things as eye opening as brainstorming on ideas with a bunch of other people. Group discussions are sure to open your mind to new ideas and perspectives."
            }
        ]

        const section4 = [
            {
                link : "SQL",
                details : "SQL is a domain-specific language used in programming and designed for managing data held in a relational database management system, or for stream processing in a relational data stream management system."
            },
            {
                link : "Numpy Pandas",
                details : "NumPy is a library for the Python programming language, adding support for large, multi-dimensional arrays and matrices, along with a large collection of high-level mathematical functions to operate on these arrays."
            }
        ]
        const section5 = [
            {
                link : "SQL",
                details : "SQL is a domain-specific language used in programming and designed for managing data held in a relational database management system, or for stream processing in a relational data stream management system."
            },
            {
                link : "Machine Learning Regression",
                details : "Regression can be defined as a method or an algorithm in Machine Learning that models a target value based on independent predictors. It is essentially a statistical tool used in finding out the relationship between a dependent variable an independent variable."
            }
        ]
        const section6 = [
            {
                link : "Machine Learning Supervised & Unsupervised",
                details : "In Supervised learning, you train the machine using data which is well labeled. Unsupervised learning is a machine learning technique, where you do not need to supervise the model. Supervised learning allows you to collect data or produce a data output from the previous experience."
            }
        ]
        const section7 = [
            {
                link : "Machine Learning Models & Algorithms using SkLearn",
                details : "Scikit-learn is probably the most useful library for machine learning in Python. The sklearn library contains a lot of efficient tools for machine learning and statistical modeling including classification, regression, clustering and dimensionality reduction."
            }
        ]
        const section8 = [
            {
                link : "Deep Learning using Keras",
                details : "Keras is an open-source neural-network library written in Python. It is capable of running on top of TensorFlow, Microsoft Cognitive Toolkit, R, Theano, or PlaidML. Designed to enable fast experimentation with deep neural networks, it focuses on being user-friendly, modular, and extensible."
            }
        ]
        const section9 = [
            {
                link : "Visualisation Tools",
                details : "We will make use of tools like Tableau, which is a powerful and fastest growing data visualization tool used in the Business Intelligence Industry. It helps in simplifying raw data into the very easily understandable format. Data analysis is very fast with Tableau and the visualizations created are in the form of dashboards and worksheets."
            },
            {
                link : "Dashboarding",
                details : "A dashboard is a consolidated display of many worksheets and related information in a single place. It is used to compare and monitor a variety of data simultaneously. The different data views are displayed all at once."
            }
        ]
        const section10 = [
            {
                link : "Week Long Product Development",
                details : "This week will be dedicated to applying all the technologies you have learnt into developing a real life product. You will be surprised yourself on how far you have come."
            }
        ]
        const section11 = [
            {
                link : "Data Science and related Technologies",
                details : "What now? The journey has just begun into mastering data science. We will give you a cheat sheet of the up and coming trends and technologies so you can kickstart your career."
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
                <Curriculum2Item title="Week 9" topic1="NodeJS" topic2="MongoDB" section={section9} />
                <Curriculum2Item title="Week 10" topic1="NodeJS" topic2="MongoDB" section={section10} />
                <Curriculum2Item title="Week 11" topic1="NodeJS" topic2="MongoDB" section={section11} />
                {/* <Curriculum2Item title="Week 12 - Week 13" topic1="NodeJS" topic2="MongoDB" section={section12} /> */}
            </div>
            
        )
    }
}

export default CurriculumDataScience