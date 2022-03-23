import React from 'react';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import './Footer.css';

function Footer () {

  return (
    <div className="footer">
      
      <div className='black'>
      <div className="footer-social-media">
      <InstagramIcon className='insta' /> 
      <YouTubeIcon className='youtube'/>
      <TwitterIcon/>
      </div>
      <div className="footer-info">
        <div className="footer-info-left">
          <div className="footer-info__name">
              food
          </div>
          <div className="footer-info__returns">
            Hunger Hunt
            <br />
            <br />
            Delivery
          </div>        
        </div>
        <div className="footer-info-center">
          <div className="footer-info__email">
            food.info@gmail.com
          </div>
          <div className="footer-info__terms">
            Terms and Conditions
            <br />
            Copyright
          </div>
        </div>
        <div className="footer-info-right">
          <div className="footer-info__number">
            7336068485
          </div>
          <div className="footer-info__contact">
            My Story
            <br />
            <br />
            Contact Us
          </div>
        </div>
      </div>
      </div>
      
      
    </div>
  )

}

export default Footer;