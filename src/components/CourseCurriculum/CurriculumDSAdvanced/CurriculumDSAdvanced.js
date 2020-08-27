import React from 'react'
import Curriculum2Item from '../../Curriculum2Item/Curriculum2Item'
import classes from './CurriculumDSAdvanced.module.css'

class CurriculumDSAdvanced extends React.Component{

    render() {

        const section1 = [
            {
                link : "Python",
                details : "Keywords, Identifiers, Variables, Standard Input & Output,operators, Control Flow, Strings, Loops, Lists, Tuples, Dictionary, Functions, Lambda, Module, Packages, File Handling, Error Handling, Map, Reduce, Filter, Zip."
            },
        ]

        const section2 = [
            {
                link : "Linear Algebra",
                details : "Scalars, Vectors, Matrices, Tensors, Determinant, Dot Product, Hyperplane, Linear Dependence, and Span, Norms, Eigen decomposition, Singular Value Decomposition"
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

        const section3 = [
            {
                link : "Data Analysis",
                details : "DVariable Identification, Univariate Analysis, Bivariate Analysis, Missing Value Imputation, Outlier Detection, Feature Engineering, Variable Transformation, Numpy, Pandas, Matplotlib, SciPy, Seaborn, Bar Plot, Histograms, Contingency Table, Heat Map, Scatter Plot, Correlation Matrix, Violin Plot, Line Plots"
            }
        ]

        const section4 = [
            {
                link : "Exploring Machine Learning",
                details : "Linear Regression, Logistic Regression, KNN, Naive Bayes, Decision Tree, Random Forest, SVM, KMeans, PCA, Recommendation System, Accuracy Measurement Technique"
            }
        ]
        const section5 = [
            {
                link : "Fundamentals and Concepts of Neural Networks",
                details : "Basic Awareness sessions on Neural Networks for Deep Learning, Introduction to Artificial Neural Network, Multi-Layer Perceptron & Activation Function."
            }
        ]
        
        const section6 = [
            {
                link : "Kaggle Based Contest",
                details : "Teams based project development."
            }
        ]
        const section7 = [
            {
                link : "Project 1",
                details : "Housing Price Prediction"
            },
            {
                link : "Project 2",
                details : "Credit Card Fraud Detection"
            },
            {
                link : "Project 3",
                details : "Detecting Parkinson's Disease with XGBoost"
            },
            {
                link : "Project 4",
                details : "Catching Illegal Fishing Projects"
            },
            {
                link : "Project 5",
                details : "Customer Segmentation"
            },
            {
                link : "Project 6",
                details : "Corona Research & Predictions"
            }
        ]
        const section8 = [
            {
                link : "Interview Preparation",
                details : "Will be taken by the industry people who are working in startups and product-based Companies."
            }
        ]
        const section9 = [
            {
                link : "Career and placement assistance",
                details : "Tech talks and discussions around the tech and industry culture."
            }
        ]

        return(
            <div className={classes.CurriculumFullStack} id="curriculum">
                <p className={classes.title}>Course Curriculum</p>
                <p className={classes.Description}>This course is majorly for the professionals who are looking forward to cracking coding interviews for tier - 1 product-based companies</p>
                <Curriculum2Item title="Python - 5 Sessions" topic1="Array-Based Problems" topic2="Linked lists" section={section1} />
                <Curriculum2Item title="Mathematics & Statistics - 10 Sessions" topic1="ReactJS" topic2="ExpressJS" section={section2} />
                <Curriculum2Item title="Exploratory Data Analysis - 7 Sessions" topic1="NodeJS" topic2="MongoDB" section={section3} />
                <Curriculum2Item title="Machine Learning - 15 Sessions" topic1="NodeJS" topic2="MongoDB" section={section4} />
                <Curriculum2Item title="Introduction to Neural Networks - 5 Sessions" topic1="NodeJS" topic2="MongoDB" section={section5} />
                <Curriculum2Item title="Mentored Kaggle Contest - 4 Sessions" topic1="NodeJS" topic2="MongoDB" section={section6} />
                <Curriculum2Item title="Project Development Sessions - 7 Sessions" topic1="NodeJS" topic2="MongoDB" section={section7} />
                <Curriculum2Item title="Mock Interviews - 2 Sessions" topic1="NodeJS" topic2="MongoDB" section={section8} />
                <Curriculum2Item title="Placement Assistance- 2 Sessions" topic1="NodeJS" topic2="MongoDB" section={section9} />
            </div>
            
        )
    }
}

export default CurriculumDSAdvanced