import React from 'react';

const Product = (props) => {
    return (
        <div>
            product detail... {props.params.id}
        </div>
    );
};

export default Product;