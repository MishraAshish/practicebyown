import React from "react";
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import "../App.css";
import Home from "./CommonComponents/HomeComponent";
import About from "./CommonComponents/AboutComponent";
import Footer from "./CommonComponents/FooterComponent";
import Header from "./CommonComponents/HeaderComponent";
import NotFound from "./CommonComponents/PageNotFound";


export default class App extends React.Component {
    constructor() {
        super();
        this.state = {
            appTitle:"Learn React and Respond",
            year: 2019
        }
    }

    render() {
        return (           
            <Router>
            <div>
                <Header appTitle={this.state.appTitle} />
                <Switch>
                    <Route path="/" exact component={Home} />
                    {/* <Route path="/cart" component={Cart} /> */}
                    {/* <Route path="/products" component={ProductList} /> */}
                    <Route path="/about" component={About} />
                    <Route path="*" component={NotFound} />
                </Switch>
                <Footer appTitle={this.state.appTitle} year={this.state.year}>
                    <p>Contact time: 8:00 AM to 5:00 PM | India Contact time: 9:00 to 6:00 PM</p>
                </Footer>
            </div>
            </Router>
        );
    }
}
