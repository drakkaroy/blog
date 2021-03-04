import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import Header from './../header/Header';
import About from './about/About';
import Home from './home/Home';
import Article from './article/Article';
import Footer from './../footer/Footer';

const Layout = () => {

    return (
        <Router>
            <Header />
            <div className="container">
                <Switch>
                    <Route path="/about">
                        <About />
                    </Route>
                    <Route path="/article/:slug">
                        <Article />
                    </Route>
                    <Route path="/">
                        <Home />
                    </Route>
                </Switch>
            </div>
            <Footer />
        </Router>
    );
}

export default Layout;