import React from 'react';

const TeamBox = (props) => {
    return(
        <div>
            <div class="team_member">
                <div class="avatar">
                    <img src={props.imageavatar}/>
                </div>
                <p class="name">{props.name}</p>
                {/* <p class="designation">CEO</p> */}
                <div class="social_icon">
                    <a href={props.link} target = "_blank">
                        <img src="https://img.icons8.com/plasticine/30/000000/linkedin.png"/>
    
                    </a>
                
                </div>
            </div>
        </div>
    )
}

export default TeamBox;