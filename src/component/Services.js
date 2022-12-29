import React from 'react'
import { useGlobalContext } from '../context/Contexts'
import Card from './Card';

const Services = () => {
  const { data } = useGlobalContext();
  return (
    <div className='container service'>
      <h5 className='serviceheading'>Our Services</h5>
      <div className="servicedata">
        {
          data.map((element) => {
            const { id, name, image } = element;
            return (
              <Card
                key={id}
                name={name}
                image={image}
              />
            )

          })
        }
      </div>

    </div>
  )
}

export default Services
