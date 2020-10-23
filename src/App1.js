import React, { Component } from "react";
import Header from './components/Header';
import ProductsContainers from './containers/ProductsContainers';
import Footer from './components/Footer';
import CartContainer from "./containers/CartContainer";
import MessageContainer from "./containers/MessageContainer";
import { BrowserRouter as Router, Route, Link, NavLink, Switch } from 'react-router-dom';
import Work from './MyWork/App'; 


class App1 extends Component {
    render() {
        return (
                <div>
                    <main id="mainContainer">
                        <div className="container">
                            <ProductsContainers />
                            <MessageContainer />
                            <CartContainer />
                        </div>
                    </main>
                    <Footer />
                </div>
        );
    };
}

export default App1;
