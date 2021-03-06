import React from 'react';
import styles from './Contact_form.module.css';
import axios from 'axios'
import ReactPixel from 'react-facebook-pixel';
import {Spinner} from 'react-spinners-css'

const advancedMatching = {}; // optional, more info: https://developers.facebook.com/docs/facebook-pixel/advanced/advanced-matching
const options = {
autoConfig: true, // set pixel's autoConfig
debug: false, // enable logs
};
ReactPixel.init('2710640059047495', advancedMatching, options);

// import './Contact_form.css'

class Contact_form extends React.Component {

    // constructor(props) {
    //     super(props)
    //     this.handleSubmit = this.handleSubmit.bind(this);
    // }

    // handleSubmit(event) {
    //     event.preventDefault();
    //     const data = new FormData(event.target);
        
    //     fetch('/api/form-submit-url', {
    //       method: 'POST',
    //       body: data,
    //     });
    //   }

    state={
        fname :"",
        lname : "",
        email : "",
        phone : "", 
        course : "query",
        exp : "",
        showLoader : false
    }

    nameChange = (e) => {
        let name = e.target.value.split(" ")
        let firstname = ""
        let lastname = ""
        if (name.length>=1){
            firstname = name[0]
            lastname = name[name.length - 1]
        }
        else{
            firstname= name[0]
            lastname = ""
        }
        this.setState({
            fname : firstname,
            lname : lastname
        })
        
    }

    emailChange = (e) => {
        this.setState({
            email : e.target.value
        })
    }

    phoneChange = (e) => {
        this.setState({
            phone : e.target.value
        })
    }

    handleClick = () => {

        if(this.state.fname==="" || this.state.email==="" || this.state.phone===""){
            alert("All three fields are required to proceed. Kindly make sure no field is left blank.")
        }

        else{

            this.setState({
                ...this.state,
                showLoader : true
            })
            // console.log(`https://apiace.codeasylums.com/api/saveLead?fname=${this.state.fname}&lname=${this.state.lname}&email=${this.state.email}&phone=${this.state.phone}&course=${this.state.course}&exp=${this.state.exp}`)

            // console.log(`http://localhost:4001/api/saveLead?fname=${this.state.fname}&lname=${this.state.lname}&email=${this.state.email}&phone=${this.state.phone}&course=fullstaack&exp=1-2`)
            // axios.get(`http://localhost:4001/api/saveLead?fname=${this.state.fname}&lname=${this.state.lname}&email=${this.state.email}&phone=${this.state.phone}&course=fullstaack&exp=1-2`)
            axios.get(`https://apiace.codeasylums.com/api/saveLead?fname=${this.state.fname}&lname=${this.state.lname}&email=${this.state.email}&phone=${this.state.phone}&course=${this.state.course}&exp=${this.state.exp}`)
            .then((response, reject) => {

                this.setState({
                    ...this.state,
                    showLoader : false
                })
                alert("Thanks, Will get back to you soon.");
               
                ReactPixel.track('SubmitButton', {
                    email: this.state.email,
                  });
            })
        }
    }
    
    render(){

        return(
            <div id="procallback">
            {
                this.state.showLoader &&
                <div className={styles.CssLoader}>
                    <Spinner size="200" color="#fff" />
                </div>
            }
                
                <div className = {styles.contact_container}>
                    <div className = {styles.left_container}>
                        <p className={styles.heading}>Have a query?</p>
                        <p className={styles.text}>“The environment provided by Codeasylums is excellent. The mentors provide 24*7 guidance. Hackathons are a fun way of implementing.”</p>
                        <p className={styles.label}>Mohak Jain</p>
                        <p className={styles.textCredential}>Placed at Salesforce</p> 
                    </div>
                    {/* left container ends here */}
    
                    <div className = {styles.right_container}>
                        <p className = {styles.heading}>
                            Schedule a call
                        </p>
                        <form >
                            <label>Name</label>
                            <div className={styles.nameInputs}>
                                <input className={styles.Name} type = "text" placeholder="First Name" onChange={(e)=> this.nameChange(e)} />
                                {/* <input className={styles.lastName} type = "text" placeholder="Last Name" onChange={(e)=> this.nameChange(e)} /> */}
                            </div>
                            
                            <div className = {styles.boxarea}>
                                <div className = {styles.emailarea}>
                                    <label>Email</label>
                                    <input type = "text" placeholder="johndoe@gmail.com" onChange={(e)=> this.emailChange(e)} />
                                </div>
                                <div className = {styles.phonearea}>
                                    <label>Phone</label>
                                    <input type = "text" placeholder="+91 9988776655" onChange={(e)=> this.phoneChange(e)} />
                                </div>
                            </div>
                            <button type="button" className={styles.time} onClick={this.handleClick}>Submit</button>
                           
                        </form>
                        <p className={styles.footer}>Prefer email? Contact <span>info@codeasylums.com</span> to talk to a student advisor</p>  
                    </div>
    
                
                </div>
    
            </div>
        )
    }
}

export default Contact_form;