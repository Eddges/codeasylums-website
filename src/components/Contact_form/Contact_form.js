import React from 'react';
import styles from './Contact_form.module.css';
import axios from 'axios'
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
        exp : ""
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

            // console.log(`http://localhost:4001/api/saveLead?fname=${this.state.fname}&lname=${this.state.lname}&email=${this.state.email}&phone=${this.state.phone}&course=fullstaack&exp=1-2`)
            // axios.get(`http://localhost:4001/api/saveLead?fname=${this.state.fname}&lname=${this.state.lname}&email=${this.state.email}&phone=${this.state.phone}&course=fullstaack&exp=1-2`)
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
    
    render(){

        return(
            <div id="procallback">
                <div className = {styles.contact_container}>
                    <div className = {styles.left_container}>
                        <p className={styles.heading}>Have a query?</p>
                        <p className={styles.text}>“I now have a rewarding job that challenges me and stretches me to grow and learn every day. Not to mention, I can afford to save money and pay off debt.”</p>
                        <p className={styles.label}>Nagendra Kumar</p>
                        <p className={styles.textCredential}>FullStack Web Development track, December 2019</p> 
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
                                    <input type = "text" placeholder="+91 8971555493" onChange={(e)=> this.phoneChange(e)} />
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