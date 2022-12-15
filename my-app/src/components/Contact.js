import React from 'react';
import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { useForm } from 'react-hook-form';


const Contact = () => {
    const { register, handleSubmit, errors } = useForm();
    const [success, setSuccess] = useState(""); //hook for submit success

    const form = useRef();
    const serviceID = "service_x0lyg6i";
    const templateID = "template_abp8f57";
    const userID = "2f_qcA3H4qZWaeanV";

    const sendEmail = (serviceID, templateID, varibles, userID) => {
        e.preventDefault();
    
        emailjs.sendForm(serviceID, templateID, varibles, userID)
          .then(() => {
              setSuccess("Thank you for your submission, I will reply as soon as possible.");
          }).catch(err => console.error(`Something went wrong, please try again ${err}`))
    };

    const onSubmit = (data, r) => { //reset
        sendEmail(
            serviceID, 
            templateID,
            {
                name: data.name,
                phone: data.phone,
                email: data.email,
                subject: data.subject,
                message: data.message
            },
            userID
            )
            r.rarget.rest();
    }

    return (
    <div id="contact" className='contact'>
        <div className='text-center'>
            <h1>Contact Me</h1>
            <p>Please fill out the form if you are hiring or would like to contact me for project collaboration.</p>
        </div>
        <div className='container'>
            <form ref={form} onSubmit={handleSubmit(onSubmit)}>
                <div className='row'>
                    <div className='col-md-6 col-xs-12'>
                        <div className="text-center">
                            <input
                                id='name'
                                type='text'
                                className='form-control'
                                placeholder='Name'
                                name='user_name'
                                ref={
                                    register({
                                        required: "Please enter your name",
                                        maxLength: {
                                            value: 30,
                                            message: "Please enter a name with fewer than 30 characters"
                                        }
                                    })
                                }
                                required
                            />
                        </div>
                            <div className='line'></div>
                        <div className="text-center">
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
                        </div>
                        <div className="text-center">
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
                    </div>
                    <div className='col-md-6 col-xs-12'>
                        <div className="text-center">
                            <textarea
                                id='message'
                                type="text"
                                className='form-control'
                                placeholder='Please enter your message here.'
                                name='message'
                                required
                            >
                            </textarea>
                            <div className='line'></div>
                         </div>
                        <button className='btn-main-offer contact-btn' type='submit'>contact</button>
                    </div>
                </div>
            </form>  
        </div>
    </div>
  )
}

export default Contact;