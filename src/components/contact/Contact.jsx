import React from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {SlCallEnd} from 'react-icons/sl'
import {TfiLocationPin} from 'react-icons/tfi'
import {useRef} from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {

    const form = useRef();
  
    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_06qv4t5', 'template_fpq43u5', form.current, 'zjlvHyE1IDsTPqPpQ')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
        e.target.reset();
    }; 

  return (
    <section id='contact'>
    <h5>Get In Touch</h5>
    <h2>Contact Me</h2>
   
    <div className="container contact_container">
      <div className="contact_options">
        <article className="contact_option">
        <MdOutlineEmail className='contact_option-icon'/>
          <h4>Email</h4>
          <a href="mailto:splucky389@gmail.com">splucky389@gmail.com</a>
        </article>
        <article className="contact_option">
        <SlCallEnd className='contact_option-icon'/>
          <h4>Contact</h4>
          <h5>+977 9816549955</h5>
        </article>
        <article className="contact_option">
        <TfiLocationPin className='contact_option-icon'/>
          <h4>Location</h4>
          <h5>Lalitpur-11, Chakupath Nepal</h5>
        </article>
      </div>
      {/*end of contact*/}
      <form ref={form} onSubmit={sendEmail}>
        <input type="text" name='name'
        placeholder='Your Full Name' required />
        <input type="email" name='email' placeholder='Your Email' required />
        <textarea name="message" rows="7" required></textarea>
        <button type='submit' className='btn btn-primary'>Send Message</button>
      </form>
    </div>
   </section>
  )
}

export default Contact
