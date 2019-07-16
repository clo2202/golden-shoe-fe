import React from 'react';

const ProductDetails = (props) => {
    const { name, description, price, url} = props
    return (
        <div>
            <img src={url} alt={name} height='300' width='300'/>
            <h3>{name}</h3>
            <p>{description}</p>
            <p>£{price}</p>
            <button>Buy Now</button>
        </div>
    );
};

export default ProductDetails;