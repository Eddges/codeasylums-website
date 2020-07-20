import React from 'react'
import Curriculum2Item from '../../Curriculum2Item/Curriculum2Item'
import classes from './CurriculumFullStack.module.css'

class CurriculumFullStack extends React.Component{

    render() {

        const section1 = [
            {
                link : "HTML, CSS, Bootstrap, Linux, Git, UI/UX",
                details : "HTML and CSS are the basics of Web technology. We will learn to create elements web elements with HTML, style them with CSS, and make it responsive. We will learn about Bootstrap, which is a free and open-source CSS framework directed at responsive, mobile-first front-end web development. We will also learn the basics of Linux, Git. We will take a leap into the world of UI/UX design and principles and how to create good looking and functional websites."
            },
            {
                link : "36Hrs Hackathon (Project)",
                details : "Hackathons are great opportunities to implement whatever you have learnt. You will create your first Web based product using the above mentioned technologies while implementing version control using Git and Github."
            }
        ]

        const section2 = [
            {
                link : "JavaScript, Integrating External third party APIs",
                details : "You will learn about the Document-Object Model and how to manipulate it with JavaScript.JavaScript (JS) is a lightweight, interpreted, or just-in-time compiled programming language with first-class functions. While it is most well-known as the scripting language for Web pages, many non-browser environments also use it, such as Node.js, Apache CouchDB and Adobe Acrobat. JavaScript is a prototype-based, multi-paradigm, single-threaded, dynamic language, supporting object-oriented, imperative, and declarative (e.g. functional programming) styles."
            },
            {
                link : "Frontend 36Hrs Hackathon (Project)",
                details : "You will build another project implementing whatever you have learnt in DOM Manipulation. You project now will also be judged based on its UI/UX, how good it looks and how creative it is."
            }
        ]

        const section3 = [
            {
                link : "Node.js - APIs, MongoDB, Express",
                details : "Node.js is an open-source, cross-platform, JavaScript runtime environment that executes JavaScript code outside of a web browser. We will learn about NodeJS, arguably the most flexible environment for backend work. You will learn to perform CRUD operations using Node. You will also be introduced to MongoDB and the world of NoSQL."
            },
            {
                link : "Fullstack 36Hrs Hackathon (Project)",
                details : "Now that we have learnt the basics of front-end and back-end technologies, we will implement it in our project. Our project will be more complicated and sophisticated than before and with greater number of functionalities."
            }
        ]

        const section4 = [
            {
                link : "Authentication, Integration, AWS(EC2, S3)",
                details : "We will learn how the Internet Protocols like HTTP and HTTPS operate, the various status codes, JWT authentication, creating sessions etc. We will also dive into the world of Cloud Web Hosting with Amazon's AWS technology."
            },
            {
                link : "Deployment, Database Design, Making App Live",
                details : "We will deploy our web-based app on the cloud. We will also learn about Database design principles and how to design efficient database systems. We will also get our app live on to the web."
            }
        ]
        const section5 = [
            {
                link : " React Based Development",
                details : "ReactJS is developed and supported by Facebook and is currently the most widely used front-end JavaScript framework. We will implement the JavaScript projects previously created in the course with ReactJS and make use of its features and ease of use."
            },
            {
                link : "Integrating with Backend",
                details : "In this section we wil learn more about the ReactJS framework and its integration with the Backend technologies learnt in the course."
            }
        ]
        const section6 = [
            {
                link : "Product Development Week (Product)",
                details : "We will use all of our time and resources to develop the best product using the technologies we have learnt."
            },
        ]
        return(
            <div className={classes.CurriculumFullStack} id="curriculum">
                <p className={classes.title}>Course Curriculum</p>
                <p className={classes.Description}>There are professionals in the industry who have worked in Testing, Maintenance, Ops, System Admin, who are looking forward to work in startups with good work in the field of full-stack web development</p>
                <Curriculum2Item title="Module 1" description="In your first week with CodeAsylums, you will be introduced to the basics of web technologies which include creating elements with HTML and styling with CSS. You will also learn about a lot of technologies used by developers all around." section={section1} />
                <Curriculum2Item title="Module 2" description="Now that you have been acquainted with the bare minimums of the web, it is time to write our first script. We will use the language of the web - JavaScript to hit APIs and to implement truly unique ideas and manipulate the elements to our will." section={section2} />
                <Curriculum2Item title="Module 3" description="Now acquainted with Front-End technologies, we will continue our journey to becoming a fullstack developer by learning about NodeJS, a high performance and highly scalable back-end environment. We will create our first server and make our own APIs." section={section3} />
                <Curriculum2Item title="Module 4" description="We will foray into the amazing world of cloud and host our website on the most popular cloud platform, Amazon's AWS. We will also learn about Databases, their principles and create efficient database systems for our projects." section={section4} />
                <Curriculum2Item title="Module 5" description="ReactJS is a front-end JavaScript framework that has truly taken the world by storm. Currently the most popular framework, we will take a deep dive into the framework and make use of its flexible features in our projects." section={section5} />
                <Curriculum2Item title="Module 6" description="Now that you are a fullstack developer who has command over both the frontend and backend technologies, it is time to put your skills to the work. In this final week, we focus on working on an idea of your choice and turning it into reality, by yourself!" section={section6} />
            </div>
            
        )
    }
}

export default CurriculumFullStack