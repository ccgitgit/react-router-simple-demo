### React Boilerplate from : [CADBT](https://github.com/CADBOT/CADBOT-react-boilerplate) 

includes webpack, webpack-dev-server, jsx, and es6


***
### This is just a simple react-router-demo to show the basic of route、index route、nest route、route with params as :
```
    <Router history={browserHistory}>
        <Route path='/' component={App}>
            <IndexRoute component={Home} />
            <Route path='/about' component={About} />
            <Route path='/products' component={Products} >
                <Route path='/products/:id' component={Product} />
            </Route>
        </Route>
    </Router>
```
