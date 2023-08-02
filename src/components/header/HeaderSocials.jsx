import React from 'react'
import {BsFacebook} from 'react-icons/bs'
import {BsInstagram} from 'react-icons/bs'
import {BsYoutube} from 'react-icons/bs'
import {BsTwitter} from 'react-icons/bs'

const HeaderSocials = () => {
  return (
    <div className='header_socials'>
        <a href="https://www.facebook.com/subash.poudel.545" target="jsx-no-target-blank"> <BsFacebook/> </a>
      <a href="https://www.youtube.com/channel/UCI-wuKvy06XQeFpVVA9l4fQ" target="jsx-no-target-blank"> <BsYoutube/> </a>
      <a href="https://www.twitter.com/SubashP78465182" target="jsx-no-target-blank"> <BsTwitter/> </a>
      <a href="https://www.instagram.com/subash.poudel58" target="jsx-no-target-blank"> <BsInstagram/> </a>
    </div>
  )
}

export default HeaderSocials
