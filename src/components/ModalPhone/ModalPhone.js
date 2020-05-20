import React , {useState} from "react";
import './ModalPhone.css'
import Modal from 'react-modal'
import logo from './illustration.png'
import axios from 'axios'


function ModalPhone(){
  const [modalIsOpen, setModalIsOpen] = useState(false);
  // const [data, setData] = useState({
  //   fname : "",
  //   lname : "",
  //   email : "",
  //   phone : "",
  //   course : "",
  //   exp : ""
  // })

  var fname = "";
  var lname = "";
  let email = "";
  let phone = "";
  let course = "";
  let exp = "";

  const nameChange = (e) =>{
    const name = e.target.value.split(" ")
    let firstname = ""
    let lastname = ""
    if (name.length>1){
        firstname = name[0]
        lastname = name[name.length - 1]
    }
    else{
        firstname= name[0]
        lastname= ""
    }
    fname = firstname;
    lname = lastname;
  }
  const emailChange = (e) =>{
    email = e.target.value;
  }
  const phoneChange = (e) =>{
    phone = e.target.value;
  }
  const courseChange = (e) =>{
    if(e.target.value=="Fullstack Web Development") {
      course = "fullstack"
    }
    if(e.target.value=="Fullstack Web Development (Advanced)") {
      course = "fullstack-advanced"
    }
    if(e.target.value=="Data Science Track") {
      course = "datascience"
    }
    if(e.target.value=="Data Structures and Algorithms") {
      course = "dsa"
    }
    if(e.target.value=="Competitive Programming & Advanced DSA") {
      course = "dsa-advanced"
    }
    if(e.target.value=="Select Course"){
      course = ""
    }
  }
  const expChange = (e) =>{
    if(e.target.value==="More than 5 Years"){
      exp = "5plus"
    }
    else if(e.target.value==="Work Experience"){
        exp = "";
    }
    else if(e.target.value==="Student"){
        exp = "student"
    }
    else {
      exp = e.target.value.substring(0,3)
    }
  }

  const handleClick = () => {
    if(fname==="" || email==="" || phone==="" || exp==="" || course===""){
      alert("All the fields are required to proceed. Kindly make sure no field is left blank.")
  }
  else{
      axios.get(`http://localhost:4001/api/saveLead?fname=${fname}&lname=${lname}&email=${email}&phone=${phone}&course=${course}&exp=${exp}`)
      .then((response, reject) => {
        alert("Thanks, Will get back to you soon.");
      })
  }
  }

  return(
    <div className = 'modal-root'>
      <button className ="btnModalPhone" onClick={() => setModalIsOpen(true)}>Request Callback</button>
      <Modal isOpen = {modalIsOpen} onRequestClose={()=>setModalIsOpen(false)} className = "wrapper_modal">
        {/* <div className = "wrapper_modal"> */}
        <div className = "left">
          <img src = {logo}/>
          </div>
          <div className = "right">
            { <p>Request for Callback<br></br>And get reply with in 24 hours!</p> }
            <form>
              <label>Name</label>
              <input type="text" placeholder="Name" onChange={(e)=>nameChange(e)} />
              <label>Email</label>
              <input type="text" placeholder="Email" onChange={(e)=> emailChange(e)} />
              <label>Phone</label>
              <input type="text" placeholder="Phone" onChange={(e)=> phoneChange(e)} />
              <label>Course</label>
              <select onChange={(e)=> courseChange(e)}>
                  <option>Select Course</option>
                  <option>Fullstack Web Development</option>
                  <option>Fullstack Web Development (Advanced)</option>
                  <option>Data Science Track</option>
                  <option>Data Structures and Algorithms</option>
                  <option>Competitive Programming & Advanced DSA</option>
              </select>
              <label>Work Experience</label>
              <select onChange={(e)=>expChange(e)}>
                  <option>Work Experience</option>
                  <option>Student</option>
                  <option>0-1 Years</option>
                  <option>1-3 Years</option>
                  <option>3-5 Years</option>
                  <option>More than 5 Years</option>
              </select>
              <button type="button" className = "btn" onClick={handleClick} >Request Callback</button>
            </form>
            <button className = "btnClose" onClick={() => setModalIsOpen(false)}>
            <img src="https://img.icons8.com/office/30/000000/close-window.png"/>
            </button>

            {/* <button class="toggle-button"  onClick={this.onClose}>
            <img src="https://img.icons8.com/office/30/000000/close-window.png"/>
          </button> */}
          </div>
        {/* </div> */}
       
      </Modal>
    </div>
  )
}
export default ModalPhone;
