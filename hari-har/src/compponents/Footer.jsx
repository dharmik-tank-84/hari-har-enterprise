import React from 'react'
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';

const Footer = () => {
  return (
    <>
      <section className='footer'>
        <div className='footer_icon'>
            <div className='footer_social_icons'>
                <div className='footer_social_icon'>
                    <FacebookIcon />
                </div>
                <div className='footer_social_icon'>
                    <YouTubeIcon />
                </div>
                <div className='footer_social_icon'>
                    <InstagramIcon />
                </div>
                <div className='footer_social_icon'>
                    <TwitterIcon />
                </div>
            </div>
        </div>
      </section>
    </>
  )
}

export default Footer
