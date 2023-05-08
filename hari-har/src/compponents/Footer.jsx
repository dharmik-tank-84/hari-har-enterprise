import React from 'react'
import FacebookIcon from '@mui/icons-material/Facebook';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import InstagramIcon from '@mui/icons-material/Instagram';

const Footer = () => {
  return (
    <>
      <section className='footer'>
        <div className='footer_icon'>
            <div className='footer_social_icons'>
                <a href='https://www.facebook.com/profile.php?id=100092238231706' target='_blank' className='footer_social_icon'>
                    <FacebookIcon />
                </a>
                <a href='https://wa.me/+918928747843' target='_blank' className='footer_social_icon'>
                    <WhatsAppIcon />
                </a>
                <a href='https://instagram.com/hariharenterprise?igshid=ZDdkNTZiNTM=' target='_blank' className='footer_social_icon'>
                    <InstagramIcon />
                </a>
            </div>
        </div>
      </section>
    </>
  )
}

export default Footer
