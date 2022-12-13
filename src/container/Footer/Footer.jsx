import React from 'react';
import { FiFacebook, FiTwitter, FiInstagram } from 'react-icons/fi'
import { FooterOverlay, Newsletter } from '../../components'
import { images } from '../../constants';
import './Footer.css';

const Footer = () => (
  <div className='app__footer section__padding'>
    <FooterOverlay/>
    <Newsletter/>

    {/* CREATING 3 COLUMNS */}
    <div className='app__footer-links'>
      <div className='app__footer-links_contact'>
        <h1 className='headtext__cormorant'>Contact Us</h1>
        <p className='p__opensans'>Niskayuna NewYork 12309</p>
        <p className='p__opensans'>+1 212 818 1230</p>
        <p className='p__opensans'>+1 212 818 1230</p>
    </div>

      <div className='app__footer-links_logo'>
        {/*<img src={images.gericht} alt="footer_logo"/>*/}
        <h1 className='headtext__cormorant'>ALYASSIN</h1>
        <p className='p__opensans'>"To gain Value you must always give value"</p>
        <img src={images.spoon} alt="spoon" className='spoon__img' style={{marginTop: "15"}}/>
        <div className='app__footer-links_icons'>
          <FiFacebook/>
          <FiInstagram/>
          <FiTwitter/>
        </div>
      </div>

      <div className='app__footer-links_work'>
        <h1 className="headtext__cormorant">Working Hours</h1>
          <p className="p__opensans">Monday-Friday:</p>
          <p className="p__opensans">08:00 am - 12:00 am</p>
          <p className="p__opensans">Saturday-Sunday:</p>
          <p className="p__opensans">07:00 am - 11:00 pm</p>
      </div>
    </div>

    <div className='footer__copyright'>
      <p className='p__opensans'>2022 D'Yaa Portfolio build</p>
    </div>
  </div>
);

export default Footer;
