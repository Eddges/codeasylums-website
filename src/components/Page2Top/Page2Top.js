import React from 'react'
import classes from './Page2Top.module.css'
import computer from '../../assets/computer.jpg'

class Page2Top extends React.Component {
    state={
        title : this.props.title,
        line1 : this.props.line1,
        line2 : this.props.line2,
        course : this.props.course
    }

    render() {
        return(
            <div className={classes.Wrapper}>
            <div className={classes.marginDiv}></div>
                <div className={classes.Page2Top}>
                    <img src={computer} alt="Student Image" />
                    <div className={classes.gradient}></div>
                    <div className={classes.container}>
                        <div className={classes.text}>
                            <p>{this.state.title}</p>
                            <p>{this.state.line1}</p>
                            <p>{this.state.line2}</p>
                        </div>
                        <div className={classes.buttons}>
                            <form>
                                <input type="text" placeholder="Enter your name" /><span></span>
                                <input type="email" placeholder="e-Mail" /><span></span>
                                <input type="text" placeholder="Phone" />
                                <button type="submit">Request Callback</button>
                            </form>
                        </div>
                    </div>
                </div>  
                <div className={classes.bar}>
                    <div className={classes.barContent}>
                        <div className={classes.barIcons}>
                            <ion-icon name="logo-css3"></ion-icon>
                            <ion-icon name="logo-buffer"></ion-icon>
                            <ion-icon name="logo-github"></ion-icon>
                            <ion-icon name="logo-html5"></ion-icon>
                            <ion-icon name="logo-react"></ion-icon>
                            <ion-icon name="logo-wordpress"></ion-icon>
                        </div>
                    </div>
                </div>
            </div>         
        )
    }
}

export default Page2Top