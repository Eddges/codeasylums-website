import React from 'react'
import Curriculum2Item from '../../Curriculum2Item/Curriculum2Item'
import classes from './CurriculumFullStack.module.css'

class CurriculumFullStack extends React.Component{

    render() {

        const section1 = [
            {
                link : "Very basic starting implementation of HTML, CSS, JavaScript, Nodejs",
                details : "Progate Subscription (3 Months)"
            },
            {
                link : "HTML, CSS, Bootstrap - 5 Sessions",
                details : "Basic HTML syntax, Basic CSS syntax, Basic Layout, Header, Footer, Contents, Forms, Responsive Web Design, Media Queries, Making Your Page Responsive, Implementing Flexbox, Responsive Design, Bootstrap Templates and Components"
            }

        ]

        const section2 = [
            {
                link : "JavaScript - 10 Sessions",
                details : "ES6, ECMAScript, JIT compilation vs normal compilation, Window scope, Console, jsbin, jsfiddle, var, let, const, Operators (Your all c++ operators here), Strict typed, loosely typed, alert, confirm, prompt, functions expression, declaration, arrows, Buttons, input."
            },
            {
                link : "More on Javascript",
                details : "Datatypes, Type conversions, debugging via chrome, Babel, webpack, Object, Arrays, looping through these, In very basic words, what is \"this\" (not in classes), \"new\", Array methods, Object methods, String methods, SetTimeout, SetInterval, HTTP requests, XHR, Asynchronous Javascript, callbacks, event loops, API"
            }
        ]

        const section3 = [
            {
                link : "AdvanceJS - 5 Sessions",
                details : "Closures, Promises, Bind, Call, Apply, Async, Await, Classes, Destructuring, the Spread operator"
            }
        ]

        const section4 = [
            {
                link : "NodeJs & MongoDB- 5 Sessions",
                details : "Error handling, node, npm, webpack implementation, CRUD operation, APIs, Integration of Javascript with nodejs, Postman, Queries, DB integrations in NodeJS, DataBase Design"
            }
        ]
        const section5 = [
            {
                link : "AWS - 2 Sessions ",
                details : "Deploying and hosting the web application using EC2 and S3"
            },
            {
                link : "GIT - 4 Sessions",
                details : "Staging, Committing, Branching, Can Collaborate the code among peers and other team members involving various code bases."
            }
        ]
        const section6 = [
            {
                link : "Mentored Hackathon - 4 Sessions",
                details : "Frontend Hackathon & Fullstack Hackathon - Teams based project development"
            },
        ]
        const section7 = [
            {
                link : "Project Development Sessions - 7 Sessions",
                details : "Bootstrap-based responsive static web application for community profiling Integrating Bitcoin API to make a browser-based application E-Commerce Web-Application using MERN stack (end-to-end)"
            },
        ]
        const section8 = [
            {
                link : "Mock Interviews - 2 Sessions",
                details : "Will be taken by the industry people who are working in startups and product-based Companies.                "
            },
        ]
        const section9 = [
            {
                link : "Placement Assistance - 2 Sessions",
                details : "Tech talks and discussions around the tech and industry culture."
            },
        ]
        return(
            <div className={classes.CurriculumFullStack} id="curriculum">
                <p className={classes.title}>Course Curriculum</p>
                <p className={classes.Description}>There are professionals in the industry who have worked in Testing, Maintenance, Ops, System Admin, who are looking forward to work in startups with good work in the field of full-stack web development</p>
                <Curriculum2Item title="Module 1"  section={section1} />
                <Curriculum2Item title="Module 2"  section={section2} />
                <Curriculum2Item title="Module 3"  section={section3} />
                <Curriculum2Item title="Module 4"  section={section4} />
                <Curriculum2Item title="Module 5"  section={section5} />
                <Curriculum2Item title="Module 6"  section={section6} />
                <Curriculum2Item title="Module 7"  section={section7} />
                <Curriculum2Item title="Module 8"  section={section8} />
                <Curriculum2Item title="Module 9"  section={section9} />



                {/* <Curriculum2Item title="Module 1" description="In your first week with CodeAsylums, you will be introduced to the basics of web technologies which include creating elements with HTML and styling with CSS. You will also learn about a lot of technologies used by developers all around." section={section1} />
                <Curriculum2Item title="Module 2" description="Now that you have been acquainted with the bare minimums of the web, it is time to write our first script. We will use the language of the web - JavaScript to hit APIs and to implement truly unique ideas and manipulate the elements to our will." section={section2} />
                <Curriculum2Item title="Module 3" description="Now acquainted with Front-End technologies, we will continue our journey to becoming a fullstack developer by learning about NodeJS, a high performance and highly scalable back-end environment. We will create our first server and make our own APIs." section={section3} />
                <Curriculum2Item title="Module 4" description="We will foray into the amazing world of cloud and host our website on the most popular cloud platform, Amazon's AWS. We will also learn about Databases, their principles and create efficient database systems for our projects." section={section4} />
                <Curriculum2Item title="Module 5" description="ReactJS is a front-end JavaScript framework that has truly taken the world by storm. Currently the most popular framework, we will take a deep dive into the framework and make use of its flexible features in our projects." section={section5} />
                <Curriculum2Item title="Module 6" description="Now that you are a fullstack developer who has command over both the frontend and backend technologies, it is time to put your skills to the work. In this final week, we focus on working on an idea of your choice and turning it into reality, by yourself!" section={section6} /> */}
            </div>
            
        )
    }
}

export default CurriculumFullStack