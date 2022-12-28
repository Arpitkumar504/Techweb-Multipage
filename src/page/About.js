import React from 'react'
import Hero from '../component/Hero'

const About = () => {
    const data = {
        name: "About Me",
        image: "./image/image1.png",
    }
    return (
        <div>
            <Hero {...data} />
        </div>
    )
}

export default About