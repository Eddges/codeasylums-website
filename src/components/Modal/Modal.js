import React , {useState} from "react";
import './Modal.css'
import Modal from 'react-modal'
import logo from './illustration.png'


function Modalpop(){
  const [modalIsOpen, setModalIsOpen] = useState(false);
  return(
    <div className = 'modal-root'>
      <button className = "btnModal" onClick={() => setModalIsOpen(true)}>Request Callback</button>
      <Modal isOpen = {modalIsOpen} onRequestClose={()=>setModalIsOpen(false)} className = "wrapper_modal">
        {/* <div className = "wrapper_modal"> */}
        <div className = "left">
          <img src = {logo}/>
          </div>
          <div className = "right">
            {/* <p>Schedule a Call</p> */}
            <form>
              <label>Name</label>
              <input/>
              <label>Email</label>
              <input/>
              <label>Phone</label>
              <input/>
              <label>Course</label>
              <input/>
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
