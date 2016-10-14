import React from 'react';
import {Link} from 'react-router';

const Products = (props) => {
    return (
        <div>
            <h3>All products...</h3>
            <ul>
                <li><Link to='/products/1'>product item one</Link></li>
                <li><Link to='/products/2'>product item two</Link></li>
            </ul>
            {props.children}
        </div>
    );
};

export default Products;