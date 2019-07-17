import React from 'react';

const ProductDetails = (props) => {
    const { name, description, price, url, stock} = props
    return (
        <div className="shoe-details">
            <img src={url} alt={name} height='300' width='300'/>
            <h3>{name}</h3>
            <p>{description}</p>
            <p><b>£{price}</b></p>
            <select>
                {stock.map((shoe, index) => (
                <option key={index}>{shoe.size} {shoe.quantity < 4 && ' - LOW IN STOCK'}</option>
                ))}
            </select>
            <button>Buy Now</button>
        </div>
    );
};

export default ProductDetails;