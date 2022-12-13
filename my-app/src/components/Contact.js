import React from 'react';
import { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  
    const form = useRef();
    const serviceID = "service_x0lyg6i";
    const templateID = "template_abp8f57";
    const userID = "2f_qcA3H4qZWaeanV";

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm(serviceID, templateID, form.current, userID)
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
    };

    return (
    <div id="contact" className='contact'>
        <div className='text-center'>
            <h1>Contact Me</h1>
            <p>Please fill out the form if you are hiring or would like to contact me for project collaboration.</p>
        </div>
        <div className='container'>
            <form ref={form} onSubmit={sendEmail}>
                <div className='row'>
                    <div className='col-md-6 col-xs-12'>
                        <input
                            id='name'
                            type='text'
                            className='form-control'
                            placeholder='Name'
                            name='user_name'
                            required
                        />
                        <div className='line'></div>
                        <input
                            id='phone'
                            type='text'
                            className='form-control'
                            placeholder='Phone Number'
                            name='user_phone'
                        />
                        <div className='line'></div>
                        <input
                            id='email'
                            type='text'
                            className='form-control'
                            placeholder='Email'
                            name='user_email'
                            required
                        />
                        <div className='line'></div>
                        <input
                            id='subject'
                            type='text'
                            className='form-control'
                            placeholder='Subject'
                            name='user_subject'
                            required
                        />
                        <div className='line'></div>
                    </div>
                    <div className='col-md-6 col-xs-12'>
                        <textarea
                            id='messsage'
                            type="text"
                            className='form-control'
                            placeholder='Please enter your message here.'
                            name='message'
                            required
                        ></textarea>
                        <div className='line'></div>
                        <button className='btn-main-offer contact-btn' type='submit'>contact</button>
                    </div>
                </div>
            </form>  
        </div>
    </div>
  )
}

export default Contact;