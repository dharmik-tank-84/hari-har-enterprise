import React from 'react'
import logoImg from '../assets/home.jpeg'

const Home = () => {
  return (
    <>
      <section className='home' id='home'>
        <div className='home_img'>
          <img src={logoImg} alt="404" />
          <p>Communicate across the miles, Walkie Talkie - a communicator's style!</p>
        </div>
      </section>
    </>
  )
}

export default Home
