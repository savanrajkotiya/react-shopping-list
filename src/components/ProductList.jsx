import React, { Component } from 'react';
import { productsList } from '../shared/data/products'
import Product from './Product'
import '../assets/productList.css'

class ProductList extends Component {
    state = { 
        header: 'Shopping List App',
        newItem:'',
        products: productsList
    }

    constructor(state) {
        super();
    }
    render() {
        return (
            <div className="shopping-list"> 
                <h1>{this.state.header}</h1>
                <input type="text" placeholder="add new item.." value={this.state.newItem}  onChange={e => this.setState({ newItem: e.target.value })} />
                <button
                    className={'btn btn-primary'} disabled={this.state.newItem === ''} onClick={this.addItem}>Add Item</button>
                <ul className="list-style">
                    {/* <Product>Product Children props</Product> */}
                    {this.state.products.map(product => <Product click={() => this.productClick(product)} key={product.id} name={product.name}></Product>)}
                </ul>
            </div>
        )
    } 

    componentDidMount() {
        console.log('Did Mount');
        
    }
      
    addItem = () => {
        let dataItem = {
            id: this.state.products.length + 1,
            name: this.state.newItem,
            isStock: true
        };
        let products = this.state.products;
        products.push(dataItem)
        this.setState({ products: products })
        this.setState({ newItem: '' })
    }

    productClick = (data) => {
        console.log('click',data);
    }
    
}
 
export default ProductList;


//


