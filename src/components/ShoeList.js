import React from 'react';
import { Link } from '@reach/router'

const ShoeList = ({shoes}) => {
    return (
        <ul className="shoelist">
            {shoes.map(shoe => (
              <li className="shoe-item" key={`${shoe.shoe_id} + ${shoe.size}`}>
                  <img src={shoe.image_url} alt={shoe.shoe_name} height='150' width='150'/>
                  <div>
                  <h4>{shoe.shoe_name}</h4>
                  {shoe.quantity === 0 && <p>SOLD OUT</p>}
                  <p><b>£{shoe.price}</b></p>
                  <Link to={`/shoes/${shoe.shoe_id}`}><button>More Info</button></Link>
                  </div>
              </li>
            ))}
        </ul>
    );
};

export default ShoeList;