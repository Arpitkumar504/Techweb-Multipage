import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useGlobalContext } from '../context/Contexts';

const Singleproduct = () => {
    const { id } = useParams();
    const { getsingleproduct, singleproduct } = useGlobalContext();
    const api = "https://api.pujakaitem.com/api/products?";

    useEffect(() => {
        getsingleproduct(`${api}id=${id}`);
    }, [id])

    return (
        <div className='container singleproduct'>
            <div className="productcontent">
                <h1 className='name'>{singleproduct.name}</h1>
                <h5>{singleproduct.company}</h5>
                <p>{singleproduct.description}</p>
                <button type='button'>Add to cart</button>
            </div>
        </div>
    )
}

export default Singleproduct
