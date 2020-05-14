import React from 'react'
import './MenuModal.css'
import '../../scripts/modal'

// class MenuModal extends React.Component {
//     render() {

//     }
// }

const MenuModal = () => {
    return(
        <div className="MenuModal">
            <div className="upperDiv">
            <div className="Courses">
                <ul>
                    <li>Full Stack Development Web/App </li>
                    <li>Full Stack Development <span className="new">popular</span></li>
                    <li>Advanced Full Stack Development <span className="new">popular</span></li>
                </ul>
            </div>
            <div className="Courses">
                <ul>
                    <li>Cracking Coding Interview</li>
                    <li>Data Structures Track <span className="new">popular</span></li>
                    <li>Competitive Programming & Advanced DSA <span className="new">popular</span></li>
                </ul>
            </div>
            <div className="Courses">
                <ul>
                    <li>Data Science</li>
                    <li>Data Science & Engineering <span className="new">popular</span></li>
                    
                </ul>
            </div>
            </div>
            <div className="lineDiv"></div>
        <div className="lowerDiv">
            <p className="help">Want to know more about courses? Call us on <span className="explore">8505885570</span></p>
        </div>
        </div>
    )
}
export default MenuModal