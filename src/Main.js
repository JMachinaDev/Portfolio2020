import React from 'react';

import { FaHtml5 } from 'react-icons/fa';
import { FaCss3Alt } from 'react-icons/fa';
import { FaNodeJs } from 'react-icons/fa';
import { FaReact } from 'react-icons/fa';
import { FaGem } from 'react-icons/fa';
import { DiJqueryLogo } from'react-icons/di';

import {Parallax} from 'react-parallax';


const image2 = "https://images.pexels.com/photos/34153/pexels-photo.jpg?cs=srgb&dl=pexels-negative-space-34153.jpg&fm=jpg";
const profilePic = "https://images.pexels.com/photos/1021145/pexels-photo-1021145.jpeg?auto=compress&cs=tinysrgb&h=650&w=940";
const image1 = "https://images.pexels.com/photos/2115257/pexels-photo-2115257.jpeg?cs=srgb&dl=pexels-john-petalcurin-2115257.jpg&fm=jpg"

const titleStyle = {
    left: '50%',
    top: '50%',
    position: 'relative',
    padding: '5px',
    margin: 'auto',
    transform: 'translate(-50%, -50%)',
    color: '#e2e2e2',
}
const subTitleStyle = {
    left: '50%',
    top: '48%',
    position: 'relative',
    padding: '0px',
    margin: '5px',
    transform: 'translate(-50%, -50%)',
    fontSize: '1.5rem',
    color: '#e2e2e2',
}
const paragraphStyling ={
    textIndent: '2%',
    margin: '0',
}


export default function MainPage () {
   return(
       <div style={{textAlign:'center'}}>
           <Parallax bgImage={ image1 } strength={200}>
               <div className="titleImage" style={{height: 650}}>
                   <div className="subTitle" style={subTitleStyle}>Welcome To <strong style={{fontWeight: 700}}>My Portfolio</strong></div>
                   <div className="title" style={titleStyle}>J Machina</div>

               </div>
           </Parallax>

            <div className="aboutMeBox">
                <div className="aboutMePage">
                    <div className="aboutMeTitle">About <strong style={{fontWeight: 700}}>Me</strong></div>
                    <img className="profilePic" src={profilePic} alt=""></img>
                        <span className="aboutMeSection">
                            
                        <h4 style={{margin: 0}}>Hello, my name is <strong>Josue Mendez !</strong></h4>
                        <h4 style={{margin: 0}}>I am a self taught <strong>Web Developer</strong> who has been happily married to my best friend since 2016.</h4>
                        <p style={paragraphStyling}>
I originally learned <strong>Ruby</strong> (back-end language), which led me to pursue web applications.
Since then I have been passionate about learning front-end technologies.
                        </p>
                        <p style={paragraphStyling}>
Knowing you can <b>CREATE</b> something <b>aesthetic</b> and <b>beautiful</b> like a webpage, yet more <b>complex</b> in the background has fueled me in pursuing Web Develpment.
Web technologies is a never ending and evolving field, which is why I consider myself a continuous 'forever student'.
                        </p>
                        <p style={paragraphStyling}>
I currently spend most of the day working on projects & studying , whether it be reading through documentation, watching tutorials, or putting something in action to see how it works.
                        <br></br>
                        </p>
                        <h4 style={{margin: 0}}>
Feel free to get in touch below!
                        </h4>
                        </span>
                </div>
            </div>


            <Parallax bgImage={ image2} blur={3} strength={400}>
                <div className="developerSkillsBox">
                    <div className="developerSkillsPage">
                        <div className="developerSkills">
                        <div className="developerSkillsTitle" ><strong style={{fontWeight: 700}}>Developer Skills</strong></div>
                            <div className="html" ><FaHtml5 size={56}/><span>HTML5</span></div>
                            <div className="css" ><FaCss3Alt size={56}/><span>CSS3</span></div>
                            <div className="javascript" ><FaNodeJs size={56}/><span>NodeJS</span></div>
                            <div className="jquery" ><DiJqueryLogo size={56}/><span>JQuery</span></div>
                            <div className="react" ><FaReact size={56}/><span>ReactJS</span></div>
                            <div className="ruby" ><FaGem size={56}/><span>Ruby</span></div>
                        </div>
                    </div>
                </div>
            </Parallax>

       </div>
    )
};