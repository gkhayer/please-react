import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, IndexRoute, hashHistory } from 'react-router';

//import  Bootstrap from './vendor/bootstrap-without-jquery';

import Contact from "./pages/Contact/Contact.js";
import DealsServices from "./pages/DealsServices/DealsServices.js";
import Layout from "./Layout/Layout.js";
import Partners from "./pages/Partners/Partners.js";
import Products from "./pages/Products/Products.js";


const app = document.getElementById('app');

ReactDOM.render(
  <Router history={hashHistory}>
      <Route path="/" component={Layout}>
         <Route path="partners" component={Partners}></Route>
         <Route path="contact" component={Contact}></Route>
         <Route path="dealsservices" component={DealsServices}></Route>
         <Route path="products" component={Products}></Route>
      </Route>
  </Router>,
app);