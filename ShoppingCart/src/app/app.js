import React from "react";
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Address from "./CartApp/Container/AddressContainer";
import Checkout from "./CartApp/Container/CheckoutContainer";
//import About from "./CommonComponents/AboutComponent";
//import Footer from "./CommonComponents/FooterComponent";
//import Header from "./CommonComponents/HeaderComponent";
//import NotFound from "./CommonComponents/PageNotFound";
//import Cart from "./CartApp/Container/CartContainer";
//import ProductList from "./CartApp/Container/ProductContainer";
import Loadable from "react-loadable"; //allows lazy loading

// // functional component, used as placeholder
// //when lazy loaded modules delayed
function Loading() {
    return (
        <div>
            Loading ...
        </div>
    )
}
const About = Loadable({
    // import - specification
    // webpack, create a seperate bundle
    loader: () => import('./CommonComponents/AboutComponent'),
    loading: Loading,
  });

  const Home = Loadable({
    // import - specification
    // webpack, create a seperate bundle
    loader: () => import('./CommonComponents/HomeComponent'),
    loading: Loading,
  });

const Footer = Loadable({
    // import - specification
    // webpack, create a seperate bundle
    loader: () => import('./CommonComponents/FooterComponent'),
    loading: Loading,
  });

  const Header = Loadable({
    // import - specification
    // webpack, create a seperate bundle
    loader: () => import('./CommonComponents/HeaderComponent'),
    loading: Loading,
  });

  const NotFound = Loadable({
    // import - specification
    // webpack, create a seperate bundle
    loader: () => import('./CommonComponents/PageNotFound'),
    loading: Loading,
  });

const ProductList = Loadable({
    // import - specification
    // webpack, create a seperate bundle
    loader: () => import('./CartApp/Container/ProductContainer'),
    loading: Loading,
  });


const Cart = Loadable({
    // import - specification
    loader: () => import('./CartApp/Container/CartContainer'),
    loading: Loading,
  });

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
                  {/* user route.map(item=>{key,path}) */}
                    <Route path="/" exact component={Home} />
                    <Route path="/cart" component={Cart} />
                    <Route path="/products" component={ProductList} />
                    <Route path="/about" component={About} />
                    <Route path="/checkout" component={Checkout} />
                    <Route path="/address" component={Address} />
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
