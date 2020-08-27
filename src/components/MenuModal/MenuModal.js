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
                    <li>Software Development Track </li>
                    <li><a href="/fullstack">Full Stack Web Development from Scratch</a> <span className="new">popular</span></li>
                    <li><a href="/dsa">Data Science and Algorithms </a><span className="new">new</span></li>
                </ul>
            </div>
            <div className="Courses">
                <ul>
                    <li>Data Science Track</li>
                    <li><a href="/danalytics">Data Analysts with Business Analysts</a> <span className="new">new</span></li>
                    <li><a href="/datascience">Data Science and Machine Learning</a> <span className="new">popular</span></li>
                </ul>
            </div>
            {/* <div className="Courses">
                <ul>
                    <li>Data Science</li>
                    <li><a href="/datascience">Data Science with Machine Learning from Scratch </a><span className="new">popular</span></li>
                    
                </ul>
            </div> */}
            </div>
            <div className="lineDiv"></div>
        <div className="lowerDiv">
            <p className="help">Want to know more about courses? Call us on <span className="explore">8505885570</span></p>
        </div>
        </div>
    )
}
export default MenuModal