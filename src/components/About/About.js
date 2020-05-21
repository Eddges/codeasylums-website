import React from 'react'
import classes from './About.module.css'
import Layout from '../Layout/Layout'
import Navbar from '../navbar/Navbar'
import codebg from '../../assets/aboutvideo.webm'
import MenuModal from '../MenuModal/MenuModal'
import BGClick from '../BGClick/BGClick'
import Footer from '../Footer_Section/Footer'

const About = (props) => {
    return(
        <Layout>
            <Navbar />
            <MenuModal />
            <BGClick />
            {/* <div className={classes.bg}>
                <div className={classes.gradient}></div>
                <video className={classes.bg} preload="auto" autobuffer="autobuffer" autoplay="autoplay" loop="loop" muted >
                    <source src={codebg} type="video/webm" />
                </video>
            </div> */}
            <div className={classes.MarginTop}></div>
            <div className={classes.About}>
                <div className={classes.Title}>
                    <p>About Us</p>
                </div>
                <div className={classes.Content}>
                    <h1>Who we are</h1>
                    <p>We are a bunch of working professionals who have a knack for teaching. We are educators first and professionals second. Our goal is to help aspiring and working professionals around the world achieve their goals with unrivalled skills and crystal clear concepts.</p>
                </div>
                </div>
                <div className={classes.Video}>
                    <div className={classes.left}>
                        <p>Life doesn't get better by chance, it gets better by change</p>
                    </div>
                    <div className={classes.right}>
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/NhRijUX8_QI" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>
                </div>
                {/* <div className={classes.Values}>
                    <h1>Our values</h1>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing</p>
                </div>
                <div className={classes.Culture}>
                    <h1>Culture</h1>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing</p>
                </div> */}
            <Footer />
        </Layout>
        
    )
}

export default About