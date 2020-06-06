import React from 'react';

const Product = (props) => {

    return (<li onClick={props.click}>
       <p>{props.children}</p>
       {props.name}
    </li>)
}

export default Product