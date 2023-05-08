import React from 'react'

const Servies = () => {
    return (
        <>
            <section className='service' id='service'>
                <div className='service_headings'>
                    <h1 className='service_heading'>Our Services</h1>
                </div>
                <div className='service-card-main-div'>

                    <div className='service_cards'>
                        <div className='service_card'>
                            <h1>Walkie-talkie</h1>
                            <div className='service_card_detils'>
                                <img src="image/WalkieTalkie.jpg" alt="" />
                                <p>Walkie-talkies are an essential tool for on-set communication. provide high-quality, reliable walkietalkies that allow you to stay connected with your team at all times.</p>
                            </div>
                        </div>
                    </div>
                    <div className='service_cards'>
                        <div className='service_card'>
                            <h1>Tents</h1>
                            <div className='service_card_detils service_card_reverse'>
                                <p>We offer a range of tents in different sizes and styles to suit your needs. Whether you need a largetent for catering or a small tent for wardrobe changes, we have you covered. Our tents are waterproof and easy to set up.</p>
                                <img src="image/tents.jpg" alt="" />
                            </div>
                        </div>
                    </div>
                    <div className='service_cards'>
                        <div className='service_card'>
                            <h1>Tables and Chairs</h1>
                            <div className='service_card_detils'>
                                <img src="image/tableChairs.jpg" alt="" />
                                <p>Our tables and chairs are perfect for setting up a comfortable workspace for your team. We have a varietyof options to suit your needs, from basic folding tables and chairs to more elaborate setups.</p>
                            </div>
                        </div>
                    </div>
                    <div className='service_cards'>
                        <div className='service_card'>
                            <h1>Portable Air Conditioners</h1>
                            <div className='service_card_detils service_card_reverse'>
                                <p>We provide portable air conditioners that keep you cool and comfortable on set, no matter how hot it is outside. Our Aana Condo Alc is a great option for larger productions that require a more permanent air ditioning solution.</p>
                                <img src="image/portableAirConditioner.jpeg" alt="" />
                            </div>
                        </div>
                    </div>
                    <div className='service_cards'>
                        <div className='service_card'>
                            <h1>Lighting and Sound</h1>
                            <div className='service_card_detils'>
                                <img src="image/lightSound.png" alt="" />
                                <p>We provide a full range of lighting and sound equipment, including everything from basic LED lights to highend cinema lighting systems. Our sound equipment is of the highest quality and can be tailored to meetyour specific needs.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Servies
