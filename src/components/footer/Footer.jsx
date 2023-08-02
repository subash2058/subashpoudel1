import React from 'react'
import './footer.css'
import {BsFacebook} from 'react-icons/bs'
import {BsInstagram} from 'react-icons/bs'
import {BsYoutube} from 'react-icons/bs'
import {BsTwitter} from 'react-icons/bs'

const Footer = () => {
  return (
    <section id='footer'>
   <footer>
    <a href="#" className="footer_logo">SUBASH</a>

    <ul className="permalinks">
      <li><a href="#">Home</a></li>
      <li><a href="#about">About</a></li>
      <li><a href="#experience">Experience</a></li>
      <li><a href="#services">Services</a></li>
      <li><a href="#portfolio">Portfolio</a></li>
      <li><a href="#testimonials">Testimonials</a></li>
      <li><a href="#contact">Contact</a></li>
    </ul>

    <div className="footer_socials">
    <a href="https://www.facebook.com/subash.poudel.545" target="jsx-no-target-blank"> <BsFacebook/> </a>
      <a href="https://www.youtube.com/channel/UCI-wuKvy06XQeFpVVA9l4fQ" target="jsx-no-target-blank"> <BsYoutube/> </a>
      <a href="https://www.twitter.com/SubashP78465182" target="jsx-no-target-blank"> <BsTwitter/> </a>
      <a href="https://www.instagram.com/subash.poudel58" target="jsx-no-target-blank"> <BsInstagram/> </a>
    </div>

    <div className="footer_copyright">
      <small>&copy; SUBASH POUDEL. All right reserved.</small>
    </div>
   </footer>
   </section>
  )
}

export default Footer
