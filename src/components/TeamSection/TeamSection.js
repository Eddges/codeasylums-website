import React from 'react';
import './TeamSection.css';
import Team from '../Teampage/Team';
import TeamBox from './TeamBox';
import MenuModal from '../MenuModal/MenuModal'
import BGClick from '../BGClick/BGClick'
import Footer from '../Footer_Section/Footer'
import Navbar from '../navbar/Navbar'
import pratsy from './pratsy.jpg';
import amanagarwal from './amanagarwal.jpg';
import rahulkumar from './rahul.jpg';
import rajatjain from './rajat.jpg';
import harshit from './harshit.jpg';
import sourabhmishra from './sourabhmishra.jpg';
import pragya from './pragyagarg.jpg';
import nikita from './nikitagupta.jpg';
import shushma from './sushma.jpeg';
import suman from './sourav.jpeg';
import rajeev from './rajeev.jpeg';
import kohli from './kohli.jpeg'; 
import goyal from './goyal.jpeg';
import sureka from './sureka.jpg';
import pathak from './pathak.jpg';
import karan from './karan.jpg';


const TeamSection = () => {
    return(
        <div>
            <div className = "header">
            <Navbar />
            <MenuModal />
            <BGClick />
            </div>
            <div class="wrapper-heading">
        <p class="heading">Meet Our <span className = "redtext">Team</span></p>
    </div>
    <div class="wrapper_team">
        <div class="parent_team">
           
            <TeamBox imageavatar = {pratsy} name = "PRATYUSH AGARWAL" link = "https://www.linkedin.com/in/pratsy/"/>
            <TeamBox imageavatar = {rahulkumar} name = "RAHUL KUMAR"  link = "https://www.linkedin.com/in/rahul-kumar-501776504/"/>
            <TeamBox imageavatar = {suman} name = "SOURABH SUMAN"  link = "https://www.linkedin.com/in/sauravsumn/"/>
            <TeamBox imageavatar = {rajatjain} name = "RAJAT JAIN"  link = "https://www.linkedin.com/in/rajatjain-21/"/>
            <TeamBox imageavatar = {sourabhmishra} name = "SAURABH MISHRA"  link = "https://www.linkedin.com/in/saurabhmishra2/"/>
            <TeamBox imageavatar = {amanagarwal} name = "AMAN AGARWAL"  link = "https://www.linkedin.com/in/amana632/"/>
            <TeamBox imageavatar = {shushma} name = "SHUSHMA NAGRAJ"  link = "https://www.linkedin.com/in/sushman2/"/>
            <TeamBox imageavatar = {nikita} name = "NIKITA GUPTA"  link = "https://www.linkedin.com/in/nikita-gupta-b4939542/"/>
            <TeamBox imageavatar = {rajeev} name = "RAJEEV AGARWAL"  link = "#"/>
            <TeamBox imageavatar = {harshit} name = "HARSHIT SINGH"  link = "https://www.linkedin.com/in/helios1101/"/>
            <TeamBox imageavatar = {pragya} name = "PRAGYA GARG"  link = "https://www.linkedin.com/in/pragya-garg-pg/"/>
            <TeamBox imageavatar = {kohli} name = "PUNEET KOHLI"  link = "https://www.linkedin.com/in/punkohl/"/>
            <TeamBox imageavatar = {sureka} name = "SHUBHAM SUREKA"  link = "https://www.linkedin.com/in/shubhamsureka/"/>
            <TeamBox imageavatar = {pathak} name = "AMAR PATHAK"  link = "https://www.linkedin.com/in/pathakamar/"/>
            <TeamBox imageavatar = {karan} name = "KARAN CHADDHA"  link = "https://www.linkedin.com/in/karan-chaddha-91303794/"/>
            <TeamBox imageavatar = {goyal} name = "RAJAT GOYAL"  link = "https://www.linkedin.com/in/rajat-g/"/>
         
        </div>
   
    </div>
    <Footer />
        </div>
    )
}

export default TeamSection;