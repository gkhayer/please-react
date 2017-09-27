import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, IndexRoute, hashHistory } from 'react-router';

//import  Bootstrap from './vendor/bootstrap-without-jquery';

import Contact from "./pages/Contact/Contact.js";
import DealsServices from "./pages/DealsServices/DealsServices.js";
import Layout from "./Layout";
import Partners from "./pages/Partners";
import Products from "./pages/Products";
import Gaming from "./pages/Gaming";
import Home from "./pages/Home";
import SoftwareServices from "./pages/SoftwareServices";
import ProductsDetail from "./components/ProductsDetail";
import About from "./pages/About";


const app = document.getElementById('app');

ReactDOM.render(
  <Router history={hashHistory}>
      <Route path='/' component={Layout}>
        <IndexRoute component={Home}/>
        <Route path='partners' active component={Partners}></Route>
        <Route path='contact' component={Contact}></Route>
        <Route path='dealsservices' component={DealsServices}></Route>
        <Route path='products' component={Products}></Route>
        <Route path='gaming' component={Gaming}></Route>
        <Route path='softwareServices' component={SoftwareServices}></Route>
        <Route path='ProductsDetail' component={ProductsDetail}></Route>
        <Route path='about' component={About}></Route>
      </Route>
  </Router>,
app);