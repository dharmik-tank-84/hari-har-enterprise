import React from 'react'
// import FacebookIcon from '@mui/icons-material/Facebook';
// import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';
// import TwitterIcon from '@mui/icons-material/Twitter';

const Footer = () => {
  return (
    <>
      <section className='footer'>
        <div className='footer_icon'>
            <div className='footer_social_icons'>
                {/* <a href='https://www.google.com' target='_blank' className='footer_social_icon'>
                    <FacebookIcon />
                </a>
                <a href='https://www.google.com' target='_blank' className='footer_social_icon'>
                    <YouTubeIcon />
                </a> */}
                <a href='https://instagram.com/hariharenterprise?igshid=ZDdkNTZiNTM=' target='_blank' className='footer_social_icon'>
                    <InstagramIcon />
                </a>
                {/* <a href='https://www.google.com' target='_blank' className='footer_social_icon'>
                    <TwitterIcon />
                </a> */}
            </div>
        </div>
      </section>
    </>
  )
}

export default Footer
