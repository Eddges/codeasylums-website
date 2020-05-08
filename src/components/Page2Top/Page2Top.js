import React from 'react'
import classes from './Page2Top.module.css'
import stars from '../../assets/stars.png'
import adobe from '../../assets/companies/Adobe.png'
import amazon from '../../assets/companies/amazon.png'
import di from '../../assets/companies/DI.png'
import google from '../../assets/companies/google.png'
import flipkart from '../../assets/companies/flipkart.png'
import microsoft from '../../assets/companies/microsoft.png'

class Page2Top extends React.Component {
    state={
        title : this.props.title,
        line1 : this.props.line1,
        line2 : this.props.line2,
        course : this.props.course,
        illustration : this.props.illustration
    }

    render() {
        return(
            <div className={classes.Wrapper}>
            <div className={classes.marginDiv}></div>
                <div className={classes.Page2Top}>
                    <img src={this.state.illustration} alt="Student Image" />
                    <div className={classes.gradient}></div>
                    <div className={classes.container}>
                        <div className={classes.text}>
                            <p>Online | 6 Weeks | 1:1 Mentorship</p>
                            <p>{this.state.title}</p>   
                            <p>{this.state.line1}</p>
                            
                            <div className={classes.stars}>
                                <img src={stars} alt="5 Stars" />
                            </div>
                            <p>{this.state.line2}</p>
                            <p className={classes.alumni}>Our alumni work at : </p>
                        </div>
                    </div>
                    <div className={classes.Form}>
                        <div className={classes.Container}>
                            <form>
                                <span>Need assistance?</span>
                                <input type="text" placeholder="Name" />
                                <input type="emai" placeholder="e-Mail" />
                                <input type="text" placeholder="Phone" />
                                <button type="submit">Request Callback</button>
                            </form>
                        </div>
                    </div>



                    {/* <div className={classes.buttons}>
                            <form>
                                <input type="text" placeholder="Enter your name" /><span></span>
                                <input type="email" placeholder="e-Mail" /><span></span>
                                <input type="text" placeholder="Phone" />
                                <button type="submit">Request Callback</button>
                            </form>
                    </div> */}




                </div>  
                <div className={classes.bar}>
                    <div className={classes.barContent}>
                        {/* <p>Our alumni work at</p> */}
                        <div className={classes.barIcons}>
                            <div className={classes.icons}>
                                <img src={adobe} alt="Adobe" />
                            </div>
                            <div className={classes.icons}>
                                <img src={google} alt="Google" />
                            </div>
                            <div className={classes.icons}>
                                <img src={amazon} alt="Amazon" />
                            </div>
                            <div className={classes.icons}>
                                <img src={di} alt="Directi" />
                            </div>
                            <div className={classes.icons}>
                                <img src={flipkart} alt="Flipkart" />
                            </div>
                            <div className={classes.icons}>
                                <img src={microsoft} alt="Microsoft" />
                            </div>
                            {/* <ion-icon name="logo-css3"></ion-icon> */}
                            {/* <ion-icon name="logo-buffer"></ion-icon> */}
                            {/* <ion-icon name="logo-github"></ion-icon> */}
                            {/* <ion-icon name="logo-html5"></ion-icon> */}
                            {/* <ion-icon name="logo-react"></ion-icon> */}
                            {/* <ion-icon name="logo-wordpress"></ion-icon> */}
                        </div>
                    </div>
                </div>
            </div>         
        )
    }
}

export default Page2Top