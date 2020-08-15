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
                link : "Python - 5 Sessions",
                details : "Keywords, Identifiers, Variables, Standard Input & Output, Operators, Control Flow,Strings, Loops, Lists, Tuples, Dictionary, Functions, Lambda, Module, Packages, FileHandling, Error Handling, Map, Reduce, Filter, Zip"
            }
        ]

        const section3 = [
            {
                link : "Linear Algebra ",
                details : "Scalars, Vectors, Matrices, Tensors, Determinant, Dot Product, Hyperplane, Linear Dependence and Span, Norms, Eigen decomposition, SingularValue Decomposition"
            },
            {
                link : "Statistics",
                details : "PDF, CDF, Bayes’ Rule, Expectations, Variance, Covariance, Kernel Density Estimation, Kernel Density Classification, Central Limit Theorem, Chebyshev’s Inequality, Continuous Probability Distribution, and its Significance, Correlation, Confidence Interval, Hypothesis Testing, Conditional Probability"
            },
            {
                link : "Calculus",
                details : "Differentiation, Maxima-Minima Concepts, Gradient Descent, Stochastic Gradient Descent"
            }
        ]

        const section4 = [
            {
                link : "Exploratory Analysis",
                details : "Variable Identification, Univariate Analysis, Bivariate Analysis, Missing Value Imputation, Outlier Detection, Feature Engineering, Variable Transformation, Numpy, Pandas, Matplotlib, SciPy, Seaborn, Bar Plot, Histograms, Contingency Table, Heat Map, Scatter Plot, Correlation Matrix, Violin Plot, Line Plots"
            }
        ]
        const section5 = [
            {
                link : "Diving into Machine Learning",
                details : "Linear Regression, Logistic Regression, KNN, Naive Bayes, Decision Tree, Random Forest, SVM, KMeans, PCA, Recommendation System, Accuracy Measurement Technique"
            }
        ]
        const section5_1 = [
            {
                link : "Introduction to Neural Networks",
                details : "A neural network is a series of algorithms that endeavors to recognize underlying relationships in a set of data through a process that mimics the way the human brain operates. In this sense, neural networks refer to systems of neurons, either organic or artificial in nature."
            }
        ]
        const section6 = [
            {
                link : "Hackathon",
                details : "Frontend Hackathon & Fullstack Hackathon - Teams based project development"
            }
        ]
        const section7 = [
            {
                link : "Build a Project",
                details : "Bootstrap-based responsive static web application for community profiling Integrating Bitcoin API to make a browser-based application  E-Commerce Web-Application using MERN stack (end-to-end)  "
            }
        ]
        const section8 = [
            {
                link : "Interview Preparations",
                details : "Will be taken by the industry people who are working in startups and product-based Companies."
            }
        ]
        const section9 = [
            {
                link : "Guidance and support",
                details : "Tech talks and discussions around the tech and industry culture."
            }
        ]


        return(
            <div className={classes.CurriculumFullStack} id="curriculum">
                <p className={classes.title}>Course Curriculum</p>
                <p className={classes.Description}>This course is for those people who are new to the world of data structures and looking forward to implementing data structures in depth to crack coding interviews of mainly tier-2 companies</p>
                <Curriculum2Item title="Fundamentals - 25 sessions" topic1="Array-Based Problems" topic2="Linked lists" section={section1} />
                <Curriculum2Item title="SQL - 10 sessions" topic1="Array-Based Problems" topic2="Linked lists" section={section1_1} />
                <Curriculum2Item title="Python 5 sessions" topic1="ReactJS" topic2="ExpressJS" section={section2} />
                <Curriculum2Item title="Mathematics & Statistics - 10 Sessions" topic1="NodeJS" topic2="MongoDB" section={section3} />
                <Curriculum2Item title="Exploratory Data Analysis - 7 Sessions" topic1="NodeJS" topic2="MongoDB" section={section4} />
                <Curriculum2Item title="Machine Learning - 15 Sessions" topic1="NodeJS" topic2="MongoDB" section={section5} />
                <Curriculum2Item title="Neural Networks - 5 Sessions" topic1="NodeJS" topic2="MongoDB" section={section5_1} />
                <Curriculum2Item title="Mentored Hackathon - 4 Sessions" topic1="NodeJS" topic2="MongoDB" section={section6} />
                <Curriculum2Item title="Project Development Sessions - 7 Sessions" topic1="NodeJS" topic2="MongoDB" section={section7} />
                <Curriculum2Item title="Mock Interviews - 2 Sessions" topic1="NodeJS" topic2="MongoDB" section={section8} />
                <Curriculum2Item title= "Placement Assistance - 2 Sessions" topic1="NodeJS" topic2="MongoDB" section={section9} />
                {/* <Curriculum2Item title="Week 12 - Week 13" topic1="NodeJS" topic2="MongoDB" section={section12} /> */}
            </div>
            
        )
    }
}

export default CurriculumDataScience