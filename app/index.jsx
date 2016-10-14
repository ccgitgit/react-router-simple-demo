import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import {Router, Route, IndexRoute, browserHistory} from 'react-router'
import App from './components/App'
import About from './components/About'
import Products from './components/Products'
import Product from './components/Product'
import Home from './components/Home'

ReactDOM.render(
    <Router history={browserHistory}>
        <Route path='/' component={App}>
            <IndexRoute component={Home} />
            <Route path='/about' component={About} />
            <Route path='/products' component={Products} >
                <Route path='/products/:id' component={Product} />
            </Route>
        </Route>
    </Router>
    , document.getElementById('app'));
