import React from 'react'
import { Link } from 'react-router-dom';
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
              <Link to={`/singleproduct/${id}`} >
                <Card
                  key={id}
                  name={name}
                  image={image}
                />
              </Link>
            )
          })
        }
      </div>
    </div>
  )
}

export default Services
