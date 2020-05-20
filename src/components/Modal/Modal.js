import React , {useState} from "react";
import './Modal.css'
import Modal from 'react-modal'
import logo from './illustration.png'


function Modalpop(){
  const [modalIsOpen, setModalIsOpen] = useState(false);
  return(
    <div className = 'modal-root'>
      <button className = "btnModal" onClick={() => setModalIsOpen(true)}>Request Callback</button>
      <Modal isOpen = {modalIsOpen} onRequestClose={()=>setModalIsOpen(true)} className = "wrapper_modal">
        {/* <div className = "wrapper_modal"> */}
        <div className = "left">
          <img src = {logo}/>
          </div>
          <div className = "right">
            { <p>Contact us today <br></br>and get reply with in 24 hours!</p> }
            <form>
              <label>Name</label>
              <input type="text" placeholder="Name" />
              <label>Email</label>
              <input type="email" placeholder="Email" />
              <label>Phone</label>
              <input type="text" placeholder="Phone" />
              <label>Course</label>
              <select>
                                    
                                    <option>Student</option>
                                    <option>0-1 Years</option>
                                    <option>1-3 Years</option>
                                    <option>3-5 Years</option>
                                    <option>More than 5 Years</option>
                                </select>
                                <label>Work Experience</label>
              <select>
                                   
                                    <option>Student</option>
                                    <option>0-1 Years</option>
                                    <option>1-3 Years</option>
                                    <option>3-5 Years</option>
                                    <option>More than 5 Years</option>
                                </select>
              <button className = "btn">Find a time</button>
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
export default Modalpop;
