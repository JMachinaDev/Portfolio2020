import React from 'react';
import emailjs from 'emailjs-com';

// https://www.youtube.com/watch?v=NgWGllOjkbs
// https://www.docdroid.net/mydocuments

export default function ContactUs() {

  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('service_oge86qg', 'template_8ux5ykj', e.target, 'user_zwK8twhy4NRmlB4iTodFU')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();
  }

  return (
    <div className="contactMeBox" id="contactMeId">
      <div className="contactMeForm">
        
        <div className="contactMeSection" >
          <div className="contactMeTitle" >Get <strong>In Touch</strong></div>
          <form className="contact-form"  onSubmit={sendEmail}>

            <div className="contactName" >
              <label>
                <input type="text" name="name"  placeholder="Your Name" required/>
              </label>
            </div>

            <div className="contactNumber" >
              <label>
                <input type="tel" name="number"  placeholder="Your Phone Number" />
              </label>
            </div>

            <div className="contactEmail" >
              <label>
                <input type="email" name="email"  placeholder="Your Email" required/>
              </label>
            </div>

            <div className="contactMessage" >
              <label>
                <textarea name="message" cols="32" rows="10" style={{height: '200px', resize: "vertical"}} placeholder="Your Message"  required/>
              </label>
            </div>

            <div className="send" >
              <input type="submit" value="Send" style={{width: '75px'}} />
            </div>

          </form>
        </div>

      

        <div className="myInfoBox" >
          <div className="myInfoTitle" >My <strong>Info</strong></div>

          <div className="myInfo" ><strong>EMAIL</strong></div>
            <span style={{color: 'var(--text-color)'}}>jmachinadev@gmail.com</span>

          <div className="myInfo" ><strong>PHONE</strong></div>
            <span style={{color: 'var(--text-color)'}}>+1-574-350-6350</span>

          <div className="myInfo" ><strong>LOCATION</strong></div>
            <span style={{color: 'var(--text-color)'}}>Elkhart, Indiana</span>

          <div style={{marginTop: '20px'}}>
            <button className="resumeLink">
              <a href="https://docs.google.com/document/d/1R20ZhgHepB6lejP6gVxxNemJTZAUgUd8YWI_nAezAPo/edit?usp=sharing" 
              alt="" 
              target="_blank" 
              rel="noreferrer"
              style={{color: 'var(--bg)', backgroundColor: '#fbfafa', fontWeight: 'light', textShadow: 'none'}}
              >Resume</a></button>
          </div>
        </div>



      </div>
    </div>
  );
}
