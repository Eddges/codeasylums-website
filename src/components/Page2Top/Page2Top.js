import React from 'react'
import classes from './Page2Top.module.css'
import stars from '../../assets/stars.png'
import adobe from '../../assets/companies/Adobe.png'
import amazon from '../../assets/companies/amazon.png'
import di from '../../assets/companies/DI.png'
import google from '../../assets/companies/google.png'
import flipkart from '../../assets/companies/flipkart.png'
import microsoft from '../../assets/companies/microsoft.png'
import axios from 'axios'


class Page2Top extends React.Component {
    state={
        title : this.props.title,
        line1 : this.props.line1,
        line2 : this.props.line2,
        course : this.props.course,
        duration : this.props.duration,
        illustration : this.props.illustration,
        fname : "",
        lname : "",
        email : "",
        phone : "",
        course : this.props.course,
        exp : ""
    }

    changeExp = (e) => {
        if(e.target.value==="More than 5 Years"){
            this.setState({
                exp : "5plus"
            })
        }
        else if(e.target.value==="Work Experience"){
            this.setState({
                exp : ""
            })
        }
        else if(e.target.value==="Student"){
            this.setState({
                exp : "student"
            })
        }
        else {
            this.setState({
                exp : e.target.value.substring(0,3)
            })
        }
    }
    changeName = (e) => {
        const name = e.target.value.split(" ")
        let firstname = ""
        let lastname = ""
        console.log(name.length)
        if (name.length>1){
            firstname = name[0]
            lastname = name[name.length - 1]
        }
        else{
            firstname= name[0]
            lastname= ""
        }
        this.setState({
            fname : firstname,
            lname : lastname
        })
    }
    changeEmail = (e) => {
        this.setState({
            email : e.target.value
        })
    }
    changePhone = (e) => {
        this.setState({
            phone : e.target.value
        })
    }

    handleClick = () => {
        if(this.state.fname==="" || this.state.email==="" || this.state.phone==="" || this.state.exp===""){
            alert("All the fields are required to proceed. Kindly make sure no field is left blank.")
        }
        else{
            axios.get(`http://localhost:4001/api/saveLead?fname=${this.state.fname}&lname=${this.state.lname}&email=${this.state.email}&phone=${this.state.phone}&course=${this.state.course}&exp=${this.state.exp}`)
            .then((response, reject) => {
                console.log(response.data)
                console.log(`First Name : ${this.state.fname}`)
                console.log(`Last Name : ${this.state.lname}`)
                console.log(`email : ${this.state.email}`)
                console.log(`Phone: ${this.state.phone}`)
                console.log(`course : ${this.state.course}`)
                console.log(`exp: ${this.state.exp}`)
            })
        }
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
                            <p>{this.props.top}</p>
                            <p>{this.state.title}</p>   
                            <p>{this.state.line1}</p>
                            
                            <div className={classes.stars}>
                                <img src={stars} alt="5 Stars" />
                            </div>
                            <p>{this.state.line2}</p>
                            <p className={classes.alumni}>Our alumni work at : </p>
                            <div className="introSS"></div>
                        </div>
                    </div>
                    <div className={classes.Form} id="formApply">
                        <div className={classes.Container}>
                            <form>
                                <span>REQUEST A CALLBACK</span>
                                <input type="text" placeholder="Name" onChange={(e) => this.changeName(e)} />
                                <input type="email" placeholder="e-Mail" onChange={(e) => {this.changeEmail(e)}} />
                                <input type="text" placeholder="Phone" onChange={(e) => {this.changePhone(e)}} />
                                <select onChange={(e)=> this.changeExp(e)}>
                                    <option>Work Experience</option>
                                    <option>Student</option>
                                    <option>0-1 Years</option>
                                    <option>1-3 Years</option>
                                    <option>3-5 Years</option>
                                    <option>More than 5 Years</option>
                                </select>
                                <button type="button" onClick={this.handleClick} >Request Callback</button>
                            </form>
                        </div>
                    </div>
                </div>  
                <div className={classes.bar}>
                    <div className={classes.barContent}>
                        <p className={classes.alumniWork}>Our alumni work at : </p>
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
                        </div>
                    </div>
                </div>
            </div>         
        )
    }
}

export default Page2Top