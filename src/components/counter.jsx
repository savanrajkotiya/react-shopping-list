import React, { Component } from 'react';

class Counter extends Component {
    state = {
        counter: 0,
        tagsList: [
            { id: 1, name: 'Tag1' },
            { id: 2, name: 'Tag2' },
            { id: 3, name: 'Tag3' }

        ]
    }

    constructor(state,props) {
        super(state, props);
        console.log('call constructor', this.state, this.props);    
    }

    render() { 
        return (
            <div>
                <h1 style={{ fontSize: 20 }} className={this.getBadgeClass()}>{this.formatCounter()}</h1>
                <button onClick={() => this.increment()} className="btn btn-secondary">Increment</button>
                <ul>
                        {this.state.tagsList.map(tag => <li key={tag.id}>{tag.name}</li>)}
                </ul>
            </div>
        );          
    }

    increment = () => {
        this.setState({ counter: this.state.counter + 1 })
    }

    getBadgeClass() {
        let classes = 'badge m-2 badge-';
        classes += this.state.counter === 0 ? "warning" : 'primary';
        return classes;
    }

    formatCounter() {
        const { counter } = this.state;
        return counter === 0 ? <span>Zero</span> : counter
    }
}
 
export default Counter;