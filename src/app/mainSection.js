import React from 'react';

import { 
    FaHtml5, 
    FaCss3Alt, 
    FaNodeJs, FaReact, 
    FaBootstrap, 
    FaGem,
    FaGithubSquare
} from 'react-icons/fa';

import { SiJavascript } from 'react-icons/si'
import { DiJqueryLogo } from'react-icons/di';

import {Parallax} from 'react-parallax';



const image2 = "https://images.pexels.com/photos/34153/pexels-photo.jpg?cs=srgb&dl=pexels-negative-space-34153.jpg&fm=jpg";
const image1 = "https://images.pexels.com/photos/2115257/pexels-photo-2115257.jpeg?cs=srgb&dl=pexels-john-petalcurin-2115257.jpg&fm=jpg"


const paragraphStyling ={
    textIndent: '2vw',
    margin: '10px 0px',
}

const salmon = {
    color: 'var(--bg-accent)',
}


export default function MainSection () {
   return(
       <div style={{textAlign:'center'}}>
           <Parallax className="bgColor" bgImage={ image1 } blur={1} strength={200} bgImageStyle={{opacity: '0.85'}}>
               <div className="titleImage" style={{height: 600}}>
                   <div className="subTitle" >Welcome To <strong style={{fontWeight: 700}}>My Portfolio</strong></div>
                   <div className="title" >J Machina</div>

               </div>
           </Parallax>

            <div className="aboutMeBox" id="aboutMeId">
                <div className="aboutMePage" >
                        <span className="profilePic"></span>
                        <span className="aboutMeSection">
                        <div className="aboutMeTitle">About <strong style={{fontWeight: 700}}>Me</strong></div> 
                        <h6 style={{marginBottom: '10px'}}>Hello, my name is <strong style={salmon}>Josue Mendez !</strong></h6>
                        <h6 style={{margin: 0}}>I am a self taught <strong style={salmon}>Web Developer</strong> who has been happily married to my best friend since 2016.</h6>
                        <p style={paragraphStyling}>
I originally learned <b style={salmon}>Ruby</b>, which led me to pursue web applications.
Since then I have been passionate about learning front-end technologies.
                        </p>
                        <p style={paragraphStyling}>
Knowing you can <b style={salmon}>CREATE</b> something <b style={salmon}>aesthetic</b> and <b style={salmon}>beautiful</b> like a webpage, yet <b style={salmon}>complex</b> and <b style={salmon}>structured</b> in the background has fueled me in pursuing Web Develpment.
Web technologies is a never ending and evolving field, which is why I consider myself a continuous 'forever student'.
                        </p>
                        <p style={paragraphStyling}>
I currently spend most of the day working on projects & studying <b style={salmon}>MERN</b> technologies <b style={salmon}>(MongoDb/Express/React/Node)</b>. It is my goal to become a Full Stack Developer and continue educating myself. I can't wait to gain more knowlege through experience and new opportunities!

                        <br></br>
                        </p>
                        <h6 style={{marginTop: '10px', color: 'var(--bg-accent)'}}>
Feel free to get in touch below!
                        </h6>
                        </span>
                </div>
            </div>


            <Parallax className="bgColor" bgImage={ image2} blur={1} strength={300} bgImageStyle={{opacity: '0.95'}} >
                <div className="developerSkillsBox" id="skillsId">
                    <div className="developerSkillsPage">
                        <div className="developerSkills">
                        <div className="developerSkillsTitle" ><strong style={{fontWeight: 700}}>Developer Skills</strong></div>
                            <div className="html" ><FaHtml5 size={56}/><span>HTML5</span></div>
                            <div className="css" ><FaCss3Alt size={56}/><span>CSS3</span></div>
                            <div className="bootstrap" ><FaBootstrap size={56}/><span>Bootstrap</span></div>
                            <div className="javascript" ><SiJavascript size={56}/><span>JavaScript</span></div>
                            <div className="jquery" ><DiJqueryLogo size={56}/><span>JQuery</span></div>
                            <div className="react" ><FaReact size={56}/><span>ReactJS</span></div>
                            <div className="ruby" ><FaGem size={56}/><span>Ruby</span></div>
                            <div className="nodejs" ><FaNodeJs size={56}/><span>Node/Express Js</span></div>
                            <div className="gitVCS" ><FaGithubSquare size={56}/><span>GitHub</span></div>
                        </div>
                    </div>
                </div>
            </Parallax>

       </div>
    )
};