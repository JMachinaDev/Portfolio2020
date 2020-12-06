import React from 'react';
import { FaTwitter} from 'react-icons/fa'; // twitter
import { FaGithub } from 'react-icons/fa'; // git
import { FaLinkedin } from 'react-icons/fa'; // indeed


export default function Footer (){
    return (
        <div className="footerBox">
            <footer className="footerSection">
                <div className="footerIcons" >

                    <div className="copy" style={{gridArea: 'copy'}}>
                        <p>Copyright  &#169; All rights reserved | J Machina 2020 </p>
                    </div>
                    <div id="icons" style={{gridArea: 'icons'}}>
                        <a  href= "https://twitter.com/jmachinadev" className="twitter" target="_blank" rel="noreferrer">
                            <i><FaTwitter size={28}/></i>
                        </a>
                        <a  href="https://github.com/JMachinaDev" className="git" target="_blank" rel="noreferrer">
                            <i><FaGithub size={28}/></i>
                        </a>
                        <a href= "https://www.linkedin.com/in/josue-mendez-0a78611ba" className="linkedin" target="_blank" rel="noreferrer">
                            <i><FaLinkedin size={28}/></i>
                        </a>
                    </div>

                </div>
            </footer>
        </div>
    )
}