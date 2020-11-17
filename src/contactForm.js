import React from 'react';
import emailjs from 'emailjs-com';

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
    <div className="contactMeBox">
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
                <textarea name="message" cols="32" rows="10 "style={{height: '200px', resize: "vertical"}} placeholder="Your Message"  required/>
              </label>
            </div>

            <div className="send" >
              <input type="submit" value="Send" />
            </div>

          </form>
        </div>

      

        <div className="myInfoBox" >
          <div className="myInfoTitle" >My <strong>Info</strong></div>
          <div className="myInfo" ><strong>EMAIL</strong></div><span>jmachinadev@gmail.com</span>
          <div className="myInfo" ><strong>PHONE</strong></div><span>+1-574-350-6350</span>
          <div className="myInfo" ><strong>LOCATION</strong></div><span>Elkhart, Indiana</span>
        </div>

      </div>
    </div>
  );
}
