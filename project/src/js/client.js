import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, IndexRoute, hashHistory } from 'react-router';

//import  Bootstrap from './vendor/bootstrap-without-jquery';

import Contact from "./pages/Contact/Contact.js";
import DealsServices from "./pages/DealsServices/DealsServices.js";
import Layout from "./Layout";
import Partners from "./pages/Partners";
import Products from "./pages/Products";
import Mobiles from "./pages/Mobiles";
import SoftwareServices from "./pages/SoftwareServices";
import ProductsDetail from "./components/ProductsDetail";


const app = document.getElementById('app');

ReactDOM.render(
  <Router history={hashHistory}>
      <Route path="/" component={Layout}>
         <Route path="partners" component={Partners}></Route>
         <Route path="contact" component={Contact}></Route>
         <Route path="dealsservices" component={DealsServices}></Route>
         <Route path="products" component={Products}></Route>
         <Route path="mobiles" component={Mobiles}></Route>
         <Route path="softwareServices" component={SoftwareServices}></Route>
         <Route path="ProductsDetail" component={ProductsDetail}></Route>
      </Route>
  </Router>,
app);