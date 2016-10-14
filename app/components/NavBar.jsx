import React from 'react';
import {Link, IndexLink} from 'react-router'
const NavBar = (props) => {
    return (
        <nav>
            <ul>
                <IndexLink to='/'><li>Home</li></IndexLink>
                <Link to='/about'><li>About</li></Link>
                <Link to='/products'><li>Products</li></Link>
            </ul>
        </nav>
    );
};

    <Link><li></li></Link>

export default NavBar;