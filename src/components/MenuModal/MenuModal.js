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
                    <li>Courses</li>
                    <li>FullStack Development</li>
                    <li>Virgin Algorithms<span className="new">new</span></li>
                    <li>Machine Learning <span className="popular">popular</span></li>
                    <li>Business Analytics</li>
                </ul>
            </div>
            <div className="Tracks">
                <ul>
                    <li>Tracks</li>
                    <li>Development Track</li>
                    <li>Coding Track</li>
                    <li>Analyst Track</li>
                </ul>
            </div>
            </div>
            <div className="lineDiv"></div>
        <div className="lowerDiv">
            <p className="help">Need help choosing the right course? <span className="explore">Explore Career paths</span></p>
        </div>
        </div>
    )
}
export default MenuModal