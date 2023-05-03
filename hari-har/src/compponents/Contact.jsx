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
                            <h1>ADDRESS</h1>
                            <p>G-13, Omkar Apartment, Dhaniiwadi near Jain mandir, malad-east, Mumbai - 400097</p>
                        </div>
                        <div className='contact_card'>
                            <div>
                                <PhoneIphoneOutlinedIcon />
                            </div>
                            <h1>PHONE</h1>
                            <p>
                                <p>Vijay : 8928747843</p>
                                <p>JD : 7506052073</p>
                                <p>Yash : 7506051496</p>
                            </p>
                        </div>
                    </div>
                    <div className="row2">
                        <div className='contact_card'>
                            <div>
                                <FeedOutlinedIcon />
                            </div>
                            <h1>EMAIL</h1>
                            <p>hariharenterprise@gmail.com</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Contact
