import React from 'react'

const Card = ({ name, image }) => {
    return (
        <div className='card'>
            <div className="image">
                <img src={image} alt="#" />
            </div>
            <h5>{name}</h5>
        </div>
    )
}

export default Card
