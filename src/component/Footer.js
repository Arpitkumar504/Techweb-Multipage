import React from 'react'
import { AiFillFacebook, AiFillInstagram, AiFillTwitterCircle } from 'react-icons/ai'
import { BsTelephoneFill } from 'react-icons/bs'
import { MdEmail } from 'react-icons/md'
import { HiLink } from 'react-icons/hi';
import { BiCopyright } from 'react-icons/bi'

const Footer = () => {
  return (
    <div className='footercontent'>
      <div className='footer'>
        <div className='info'>
          <div className='heading'>
            <h5>ArpitTech</h5>
          </div>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis eveniet, nisi</p>
        </div>
        <div className='suscribe'>
          <div className='heading'>
            <h5>Suscribe Us Now</h5>
          </div>
          <div className='inputs'>
            <input type="text" name='update' placeholder='Enter email' />
            <button type='button'>SUSCRIBE</button>
          </div>
        </div>
        <div className='social'>
          <div className='heading'>
            <h5>Follow Us</h5>
          </div>
          <div className='socialicons'>
            <AiFillFacebook className='icon' />
            <AiFillInstagram className='icon' />
            <AiFillTwitterCircle className='icon' />
          </div>
        </div>
        <div className="contact">
          <div className='heading'>
            <h5>Call Us</h5>
          </div>
          <h5><BsTelephoneFill /> 9393939393</h5>
          <h5><MdEmail /> rk9003278@gmail.com</h5>
          <h5><HiLink /> ArpitTech.netlify.app</h5>
        </div>
      </div>
      <div className="copyright">
        <h1>ArpitTech <BiCopyright /> All Right Reserved</h1>
      </div>
    </div>
  )
}

export default Footer
