import React from 'react'
import './testimonials.css'
import AVTR1 from '../../assets/avatar1.jpg'
import AVTR2 from '../../assets/avatar2.jpg'
import AVTR3 from '../../assets/avatar3.jpg'
import AVTR4 from '../../assets/avatar4.jpg'

// import Swiper core and required modules
import {Pagination} from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles

import 'swiper/css';
import 'swiper/css/pagination';


const data = [
  {
    avatar: AVTR1,
    name: "John Doe",
    review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer gravida condimentum est, nec pellentesque ipsum volutpat sed. Sed laoreet scelerisque mauris, sed auctor turpis fermentum in."
  },
  {
    avatar: AVTR2,
    name: "Jane Smith",
    review: "Fusce ut tellus ligula. Quisque eu metus vel nisl efficitur pellentesque eu id turpis. Proin nec condimentum mi, vel dignissim dui. Nam eu urna at ante malesuada interdum."
  },
  {
    avatar: AVTR3,
    name: "Mark Johnson",
    review: "Aliquam erat volutpat. Suspendisse in feugiat nulla. Cras venenatis nulla vitae facilisis efficitur. Aenean tristique nibh non ultrices ultricies. Etiam malesuada odio sed turpis euismod facilisis."
  },
  {
    avatar: AVTR4,
    name: "Sarah Wilson",
    review: "Nullam vitae elit ut leo interdum ultricies. Nulla rhoncus turpis non justo eleifend, in sollicitudin turpis lobortis. Proin et diam in velit volutpat eleifend sit amet ut orci."
  }
];



const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Review From Clients</h5>
      <h2>Testimonials</h2>

      <Swiper className="container testimonials_container"
       // install Swiper modules
       modules={[Pagination]}
       spaceBetween={40}
       slidesPerView={1}
       pagination={{ clickable: true }}
      >
     {
      data.map(({avatar, name, review}, index) =>{
        return(
          <SwiperSlide key={index} className="testimonial">
          <div className="client_avatar">
            <img src={avatar} alt=''/>    
          </div>
          <h5 className="client_name">{name}</h5>
            <small className="client_review">{review}</small>
        </SwiperSlide>
        )
      })
     }
      </Swiper>
    </section>
  )
}

export default Testimonials
