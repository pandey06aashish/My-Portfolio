import React from 'react'
import "./Contact.css"
import cursor from '../../assets/pointerlogo.svg'
import email_img from '../../assets/email_img.svg'
import location_img from '../../assets/location_img.svg'
import call_img from '../../assets/call_img.svg'


const Contact = () => {
        const onSubmit = async (event) => {
          event.preventDefault();
          const formData = new FormData(event.target);
      
          formData.append("access_key", "11b78edf-7d74-409d-96b8-f871aee167fc");
      
          const object = Object.fromEntries(formData);
          const json = JSON.stringify(object);
      
          const res = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json"
            },
            body: json
          }).then((res) => res.json());
      
          if (res.success) {
            alert(res.message);
          }
        }
  return (
    <div id='contact' className='contact'>
        <div className="contact-title">
            <h1>Get In Touch</h1>
            <img src={cursor} alt="" />
        </div>
        <div className="contact-section">
            <div className="contact-left">
                <h1>Let Taik</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. m.</p>
                <div className="contact-details">
                    <div className="contact-detail">
                     <img src={email_img} alt="" /> 
                     <p>pandey321aashish@gmail.com</p>
                    </div>
                    <div className="contact-detail">
                    <img src={call_img} alt="" /> 
                     <p>9140401510</p>
                    </div>
                    <div className="contact-detail">
                    <img src={location_img} alt="" /> 
                    <p>Lucknow,Uttter Pardesh</p> 
                    </div>
                </div>
            </div>
            <form className="contact-right" onSubmit={onSubmit}>
                <label htmlFor=''>Your Name</label>
                <input type='text' placeholder='Enter Your Name' name='name'/>
                <label htmlFor="">Your Email</label>
                <input type='email' placeholder='Enter Your Email' name='email'/>
                <label htmlFor="">Write Your Message Here</label>
                <textarea name="message" rows="8" placeholder='Enter Your Message'></textarea>
                <button type='submit' className="contact-submit">Submit Now</button>
            </form>
        </div>
    </div>
  )
}

export default Contact