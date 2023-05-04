import React from 'react'
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import PhoneIphoneOutlinedIcon from '@mui/icons-material/PhoneIphoneOutlined';
import FeedOutlinedIcon from '@mui/icons-material/FeedOutlined';

const Contact = () => {
    return (
        <>
            <section className='contact' id='contact'>
                <div className='contact_headings'>
                    <h1 className='contact_heading'>Contact</h1>
                </div>
                <div className='row'>
                    <div className="row1">
                        <div className='contact_card'>
                            <div>
                                <LocationOnOutlinedIcon />
                            </div>
                            <span>ADDRESS</span>
                            <span>G-13, Omkar Apartment, Dhaniiwadi near Jain mandir, malad-east, Mumbai - 400097</span>
                        </div>
                        <div className='contact_card'>
                            <div>
                                <PhoneIphoneOutlinedIcon />
                            </div>
                            <span>PHONE</span>
                            <span style={{display: 'flex', flexDirection: 'column'}}>
                                <span>Vijay : 8928747843</span>
                                <span>JD : 7506052073</span>
                                <span>Yash : 7506051496</span>
                            </span>
                        </div>
                    </div>
                    <div className="row2">
                        <div className='contact_card'>
                            <div>
                                <FeedOutlinedIcon />
                            </div>
                            <span>EMAIL</span>
                            <span><a href="mailto:support@hariharenterprise.com" className='mail_link'>support@hariharenterprise.com</a></span>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Contact
