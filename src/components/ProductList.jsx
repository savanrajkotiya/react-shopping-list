import React, { Component } from 'react';
import {productsList} from '../shared/data/products'

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
            <div id="shopping-list"> 
                <h1>{this.state.header}</h1>
                <input type="text" placeholder="add new item.." value={this.state.newItem}  onChange={e => this.setState({ newItem: e.target.value })} />
                <button
                    className={'btn btn-primary'} disabled={this.state.newItem === ''} onClick={()=> this.addItem()}>Add Item</button>
                <ul>
                    {this.state.products.map(product => <li key={product.id}>{product.name}</li>)}
                </ul>
            </div>
        )
    } 
      
    addItem() {
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
    
}
 
export default ProductList;