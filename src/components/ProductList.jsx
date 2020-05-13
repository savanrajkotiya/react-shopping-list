import React, { Component } from 'react';


class ProductList extends Component {
    state = { 
        header:'Shopping List App'
        
    }
    render() {
        return (
            <div id="shopping-list"> 
                <h1>{this.state.header}</h1>
                <input type="text"  placeholder="add new item.." />
            </div>
        )
    } 
      
    
}
 
export default ProductList;