import React from 'react'
import Curriculum2Item from '../../Curriculum2Item/Curriculum2Item'
import classes from './CurriculumSystems.module.css'

class CurriculumSystems extends React.Component{

    render() {

        const section1 = [
            {
                link : "React Based Web Development with Redux",
                details : "Redux is an open-source JavaScript library for managing application state. It is most commonly used with libraries such as React or Angular for building user interfaces. Similar to Facebook's Flux architecture, it was created by Dan Abramov and Andrew Clark."
            },
            {
                link : "Frontend Hackathon",
                details : "Hackathons are a great place to test your skills and apply whatever you have learnt and translate all of it into a real-life tangible product. In your first hackathon with CodeAsylums, you will implement all of your skills and knowledge into developing a product of your choice."
            }
        ]

        const section2 = [
            {
                link : "React Native based Mobile Application Development",
                details : "React Native is an open-source mobile application framework created by Facebook. It is used to develop applications for Android, iOS, Web and UWP by enabling developers to use React along with native platform capabilities."
            },
            {
                link : "App Design Hackathon",
                details : "Self explanatory You will design your first native app with React Native."
            }
        ]

        const section3 = [
            {
                link : "Firebase, Nodejs, APIs, Authentication",
                details : "Firebase is a mobile and web application development platform developed by Firebase, Inc. in 2011, then acquired by Google in 2014. Node.js is an open-source, cross-platform, JavaScript runtime environment that executes JavaScript code outside of a web browser. An application programming interface is a computing interface which defines interactions between multiple software intermediaries."
            },
            {
                link : "Fullstack Web + App Hackathon",
                details : "A hackathon wherein you will implement the fullstack technologies and create and app."
            }
        ]

        const section4 = [
            {
                link : "Firebase Integrations for Monitoring, Analytics",
                details : "Google Analytics for Firebase provides free, unlimited reporting on up to 500 distinct events. The SDK automatically captures certain key events and user properties, and you can define your own custom events to measure the things that uniquely matter to a business."
            },
            {
                link : "Business growth tools",
                details : "Learn about services like Mailchimp, Google Analytics, imPerson for ChatBot solutions and Google Ads for paid advertisements."
            }
        ]
        const section5 = [
            {
                link : "Testing, Maintenance, Cookies, Sessions",
                details : "An HTTP cookie is a small piece of data sent from a website and stored on the user's computer by the user's web browser while the user is browsing. Cookies were designed to be a reliable mechanism for websites to remember stateful information (such as items added in the shopping cart in an online store) or to record the user's browsing activity. In client-server protocols, like HTTP, sessions consist of three phases: 1. The client establishes a TCP connection (or the appropriate connection if the transport layer is not TCP). 2. The client sends its request, and waits for the answer. 3. The server processes the request, sending back its answer, providing a status code and appropriate data."
            },
            {
                link : "Deployment",
                details : "We will deploy everything we have learnt so far using web technologies."
            }
        ]
        const section6 = [
            {
                link : "Product Development Week (Product)",
                details : "This week, we will focus on developing a tangible real-life product that people will actually use."
            }
        ]
        const section7 = [
            {
                link : "Scalability, Distributed Systems",
                details : "Scalability is an important indicator in distributed computing and parallel computing. It describes the ability of the system to dynamically adjust its own computing performance by changing available computing resources and scheduling methods. Scalability is divided into two aspects: hardware and software."
            },
            {
                link : "Dockers, Containers, CI/CD, Kubernetes",
                details : "Docker is a set of platform as a service products that uses OS-level virtualization to deliver software in packages called containers. Containers are isolated from one another and bundle their own software, libraries and configuration files; they can communicate with each other through well-defined channels. Kubernetes is an open-source container-orchestration system for automating application deployment, scaling, and management. It was originally designed by Google, and is now maintained by the Cloud Native Computing Foundation."
            }
        ]
        const section8 = [
            {
                link : "Kafka, Redis",
                details : "Apache Kafka is an open-source stream-processing software platform developed by LinkedIn and donated to the Apache Software Foundation, written in Scala and Java. Redis  is an in-memory data structure project implementing a distributed, in-memory key-value database with optional durability."
            },
            {
                link : "ELK Stack",
                details : "ELK is the acronym for three open source projects: Elasticsearch, Logstash, and Kibana. Elasticsearch is a search and analytics engine. Logstash is a server‑side data processing pipeline that ingests data from multiple sources simultaneously, transforms it, and then sends it to a stash like Elasticsearch. Kibana lets users visualize data with charts and graphs in Elasticsearch. "
            }
        ]
        const section9 = [
            {
                link : "System Designs",
                details : "Systems design is the process of defining the architecture, modules, interfaces, and data for a system to satisfy specified requirements. Systems design could be seen as the application of systems theory to product development."
            }
        ]
        const section10 = [
            {
                link : "Database Design and Pipeline",
                details : "A data pipeline is a set of data processing elements connected in series, where the output of one element is the input of the next one. The elements of a pipeline are often executed in parallel or in time-sliced fashion."
            }
        ]
        return(
            <div className={classes.CurriculumFullStack} id="curriculum">
                <p className={classes.title}>Course Curriculum</p>
                <p className={classes.Description}>There are professionals who are working in making web and mobile-based applications from scratch and looking for a framework based development and development</p>
                <Curriculum2Item title="Module 1" topic1="Array-Based Problems" topic2="Linked lists" section={section1} />
                <Curriculum2Item title="Module 2" topic1="ReactJS" topic2="ExpressJS" section={section2} />
                <Curriculum2Item title="Module 3" topic1="NodeJS" topic2="MongoDB" section={section3} />
                <Curriculum2Item title="Module 4" topic1="NodeJS" topic2="MongoDB" section={section4} />
                <Curriculum2Item title="Module 5" topic1="NodeJS" topic2="MongoDB" section={section5} />
                <Curriculum2Item title="Module 6" topic1="NodeJS" topic2="MongoDB" section={section6} />
                <Curriculum2Item title="Module 7" topic1="NodeJS" topic2="MongoDB" section={section7} />
                <Curriculum2Item title="Module 8" topic1="NodeJS" topic2="MongoDB" section={section8} />
                <Curriculum2Item title="Module 9" topic1="NodeJS" topic2="MongoDB" section={section9} />
                <Curriculum2Item title="Module 10" topic1="NodeJS" topic2="MongoDB" section={section10} />
            </div>
            
        )
    }
}

export default CurriculumSystems