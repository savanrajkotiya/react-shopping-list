import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route} from 'react-router-dom'
import './index.css';

// import App from './App';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.css'
import './assets/styles.css'
import ProductList from './components/ProductList.jsx'
// import ProductList from './components/ProductList-Hook.jsx'



ReactDOM.render(
  <BrowserRouter>
  <React.StrictMode>
    <ProductList />
    </React.StrictMode>
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
