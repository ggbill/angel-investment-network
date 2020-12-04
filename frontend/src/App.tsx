import React from 'react'
import { Router, Route, Switch } from "react-router-dom"
import './App.scss'
import HttpsRedirect from 'react-https-redirect'
import Home from './components/home/Home'
import { createBrowserHistory } from 'history'
// import MenuBar from './components/shared/MenuBar'
import Footer from './components/shared/Footer'
import Buy from './components/buy/Buy'
import Sell from './components/sell/Sell'
import About from './components/about/About'
import Blog from './components/blog/Blog'
import Contact from './components/contact/Contact'
import ReactGA from'react-ga'

const history = createBrowserHistory();
ReactGA.initialize('UA-171582169-2');

history.listen((location) => {
    ReactGA.set({ page: location.pathname + location.search })
    ReactGA.pageview(location.pathname + location.search)
});

function App() {
    return (
        <HttpsRedirect>
            <Router history={history}>
                <div className="full-height-content">
                    <Switch>
                        <Route
                            path="/"
                            component={Home}
                            exact
                        />
                        <Route
                            path="/about"
                            component={About}
                            exact
                        />
                        <Route
                            path="/contact"
                            component={Contact}
                            exact
                        />
                        <Route
                            path="/blog"
                            component={Blog}
                            exact
                        />
                        <Route
                            path="/buy"
                            component={Buy}
                            exact
                        />
                        <Route
                            path="/sell"
                            component={Sell}
                            exact
                        />
                    </Switch>
                </div>
                <Footer />
            </Router>
        </HttpsRedirect>
    );
}

export default App;
