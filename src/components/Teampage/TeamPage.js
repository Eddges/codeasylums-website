import React from 'react';
// import logo from './logo.svg';
import './TeamPage.css';
import Card from './Card';
import BoxAvatar from './BoxAvatar';

function TeamPage() {
  return (
    <div>
      <div className = "App">
            <h1>EXPLORE OUR COURSES</h1>
      </div>
      <div className="wrapper">
        <Card title ="FULL STACK TRACK CERTIFICATION" description = "Lorem ipsum dolor sit amet consectetur adipisicing elit.Soluta reiciendis officiis asperiores dolorem tenetur quod consequatur necessitatibus ducimus, tempore quas?" />
        <Card title= "DATA SCIENCE TRACK CERTIFICATION" description = "Lorem ipsum dolor sit amet consectetur adipisicing elit.Soluta reiciendis officiis asperiores dolorem tenetur quod consequatur necessitatibus ducimus, tempore quas?"/>
        <Card title= "DATA SCIENCE TRACK CERTIFICATION" description = "Lorem ipsum dolor sit amet consectetur adipisicing elit.Soluta reiciendis officiis asperiores dolorem tenetur quod consequatur necessitatibus ducimus, tempore quas?"/>
        
    </div>
    <div class="wrapper_team">
        <div class="left">
            <h1>The Creative Crew behind Codeasylums</h1>
            <h5>What we are</h5>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Veniam odit voluptatibus, exercitationem veritatis modi incidunt assumenda facere ut voluptate dolorum?</p>
            <h5>Our Mission</h5>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Necessitatibus voluptatem ex maxime sunt totam, corrupti temporibus excepturi iusto asperiores porro.</p>
        </div>
        <div class="right">
            <div class="up">
                <BoxAvatar/>
                <div class="box box2">
                    <img src="https://img.icons8.com/color/200/000000/person-male.png"/>
                    <h5>solu</h5>
                    <p>product manager</p>
                </div>
                <div class="box box3">
                    <img src="https://img.icons8.com/color/200/000000/person-male.png"/>
                    <h5>solu</h5>
                    <p>product manager</p>
                </div>
            </div>

            <div class="down">
                <div class="box box4">
                    <img src="https://img.icons8.com/color/200/000000/person-male.png"/>
                    <h5>solu</h5>
                    <p>product manager</p>
                </div>
                <div class="box box5">
                    <img src="https://img.icons8.com/color/200/000000/person-male.png"/>
                    <h5>solu</h5>
                    <p>product manager</p>
                </div>
                <div class="box box6">
                    <img src="https://img.icons8.com/color/200/000000/person-male.png"/>  
                    <h5>solu</h5>
                    <p>product manager</p>    
                </div>
            </div>
        </div>
    </div>
    </div>
  );
}

export default TeamPage;