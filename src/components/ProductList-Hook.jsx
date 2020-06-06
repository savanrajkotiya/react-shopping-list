import React, { useState, useEffect } from 'react';
import Product from './Product'
import { productsList } from '../shared/data/products'
import '../assets/productList.css'



const ProductList = (props) => {
    
    // state hooks
    const [headerState] = useState('Shopping List App');
    const [newItem, setNewItem] = useState('');
    const [products, setProducts] = useState(productsList);

    // update hooks
    useEffect(() => {
       console.log(newItem)
    },[newItem]);

    useEffect(() => {
        console.log(products)
    }, [products]);

    
    const addItem = () => {
        let dataItem = {
            id: products.length + 1,
            name: newItem,
            isStock: true
        };
        let newproducts = [...products];
        newproducts.push(dataItem)
        setProducts(newproducts);
        setNewItem('');
    }

    const productClick = (data) => {
        console.log(data);
        
    }

    return (
        <div className="shopping-list">
            <h1>{headerState}</h1>
            <input type="text" placeholder="add new item.." value={newItem} onChange={e => setNewItem(e.target.value)} />
            <button
                className={'btn btn-primary'} disabled={newItem === ''} onClick={addItem}>Add Item</button>
            <ul className="list-style">
                {/* <Product>Product Children props</Product> */}
                {products.map(product => <Product click={() => productClick(product)} key={product.id} name={product.name}></Product>)}
            </ul>
        </div>
    )
}

   

export default ProductList