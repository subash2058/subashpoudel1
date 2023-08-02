import React from 'react';
import './services.css';
import { BiCheck } from 'react-icons/bi';

const Services = () => {
  return (
    <section id='services'>
       <h5>What I Offer</h5>
        <h2>Services</h2>
        
      <div className="container services_container">
        <article className='service'>
          <div className="service_head">
            <h3>Graphic Design</h3>
          </div>

          <ul className="service_list">
            <li>
              <BiCheck className='service_list-icon' />
              <p>Logo Design</p>
            </li>
            <li>
              <BiCheck className='service_list-icon' />
              <p>Branding and Identity Design</p>
            </li>
            <li>
              <BiCheck className='service_list-icon' />
              <p>Print Design</p>
            </li>
            <li>
              <BiCheck className='service_list-icon' />
              <p>Social Media Graphics</p>
            </li>
            <li>
              <BiCheck className='service_list-icon' />
              <p>Web Design</p>
            </li>
          </ul>
        </article>
         {/*Graphic Design*/}

        <article className='service'>
          <div className="service_head">
            <h3>Web Development</h3>
          </div>

          <ul className="service_list">
            <li>
              <BiCheck className='service_list-icon' />
              <p>Front-end Development</p>
            </li>
            <li>
              <BiCheck className='service_list-icon' />
              <p>Back-end Development</p>
            </li>
            <li>
              <BiCheck className='service_list-icon' />
              <p>Content Management System (CMS) Development</p>
            </li>
            <li>
              <BiCheck className='service_list-icon' />
              <p>E-commerce Development</p>
            </li>
            <li>
              <BiCheck className='service_list-icon' />
              <p>Website Maintenance and Support</p>
            </li>
          </ul>
        </article>
        {/*Web Development*/}

        <article className='service'>
          <div className="service_head">
            <h3>Digital Marketing</h3>
          </div>

          <ul className="service_list">
            <li>
              <BiCheck className='service_list-icon' />
              <p>Search Engine Optimization (SEO)</p>
            </li>
            <li>
              <BiCheck className='service_list-icon' />
              <p>Pay-per-Click Advertising (PPC)</p>
            </li>
            <li>
              <BiCheck className='service_list-icon' />
              <p>Conversion Rate Optimization (CRO)</p>
            </li>
            <li>
              <BiCheck className='service_list-icon' />
              <p>Social Media Marketing</p>
            </li>
            <li>
              <BiCheck className='service_list-icon' />
              <p>Influencer Marketing</p>
            </li>
          </ul>
        </article>
        {/*Digital Marketing*/}
      </div>
    </section>
  );
};

export default Services;

