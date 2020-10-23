import React, { Component } from "react";
import Header from './components/Header';
import ProductsContainers from './containers/ProductsContainers';
import Footer from './components/Footer';
import CartContainer from "./containers/CartContainer";
import MessageContainer from "./containers/MessageContainer";
import { BrowserRouter as Router, Route, Link, NavLink, Switch } from 'react-router-dom';
import Work from './MyWork/App'; 
import Shopping from './App1'; 


class App extends Component {
    render() {
        return (
            <Router>
                <div>
                    <Header />
                    <Route exact path="/"> <Shopping /></Route>
                    <Route path="/work"> <Work /></Route>
                </div>
            </Router>
        );
    };
}

export default App;
