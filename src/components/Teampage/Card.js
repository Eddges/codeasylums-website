import React from 'react';

const Card = (props) => {
    return (
        <div>
            <div className="card">
            <div className="up">
                <h3>{props.title}</h3>
            </div>
            <div className="down">
                <p>{props.description}</p>
            </div>
            <div className="bottom">
                <button className="button">Explore</button>
            </div>
            <div className="card-footer">
                <p>For 6 months</p>
            </div>
        </div>
        </div>
    )
}

export default Card;