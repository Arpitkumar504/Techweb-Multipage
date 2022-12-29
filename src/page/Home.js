import React from 'react'
import Contacts from '../component/Contacts';
import Hero from '../component/Hero'
import Services from '../component/Services';

const Home = () => {
  const data = {
    name: "Arpit Technology",
    image: "./image/image4.png",
  };
  return (
    <div>
      <Hero {...data} />
      <Services />
      <Contacts />
    </div>
  )
}

export default Home
