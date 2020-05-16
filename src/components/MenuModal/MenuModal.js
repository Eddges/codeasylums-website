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
                    <li><a href="/fullstack">Full Stack Development</a> <span className="new">popular</span></li>
                    <li><a href="/fullstackadvanced">Advanced Full Stack Development </a><span className="new">popular</span></li>
                </ul>
            </div>
            <div className="Courses">
                <ul>
                    <li>Cracking Coding Interview</li>
                    <li><a href="/dsa">Data Structures Track</a> <span className="new">popular</span></li>
                    <li><a href="/dsadvanced">Competitive Programming & Advanced DSA</a> <span className="new">popular</span></li>
                </ul>
            </div>
            <div className="Courses">
                <ul>
                    <li>Data Science</li>
                    <li><a href="/datascience">Data Science & Engineering </a><span className="new">popular</span></li>
                    
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