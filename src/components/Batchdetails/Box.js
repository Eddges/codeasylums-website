import React from 'react';


const Box = (props) => {
    return(
        <div>
            <div className="box">
            <div className="first_section">
                <div className="left">
                    <h1> {props.date} </h1>
                </div>
                <div className="right">
                    <p> {props.month} </p>
                    <p> {props.time} </p>
                </div>
            </div>
            <div className="second_section">
                <h4> {props.coursename} </h4>
            </div>
            <div className="divider"></div>
            <div className="third_section">
                <p> {props.status} </p>
                <p> {props.count} </p>
            </div>
        </div>
        </div>
    )
}

export default Box;