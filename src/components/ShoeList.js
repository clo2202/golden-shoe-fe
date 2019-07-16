import React from 'react';
import { Link } from '@reach/router'

const ShoeList = ({shoes}) => {
    return (
        <ul>
            {shoes.map(shoe => (
              <li key={`${shoe.shoe_id} + ${shoe.size}`}>
                  <img src={shoe.image_url} alt={shoe.shoe_name} height='100' width='100'/>
                  <h4>{shoe.shoe_name}</h4>
                  {shoe.quantity === 0 && <p>SOLD OUT</p>}
                  <p>£{shoe.price}</p>
                  <Link to={`/shoes/${shoe.shoe_id}`}>More Info</Link>
              </li>
            ))}
        </ul>
    );
};

export default ShoeList;