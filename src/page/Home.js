import React from 'react'
import Header from '../component/Header';
import Hero from '../component/Hero'

const Home = () => {
  const data = {
    name: "Arpit Technology",
    image: "./image/image4.png",
  };
  return (
    <div>
      <Hero {...data} />
    </div>
  )
}

export default Home
