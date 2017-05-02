import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, IndexRoute, hashHistory } from 'react-router';

//import  Bootstrap from './vendor/bootstrap-without-jquery';

import Contact from "./pages/Contact";
import DealsServices from "./pages/DealsServices";
import Layout from "./pages/Layout";
import Partners from "./pages/Partners";
import Products from "./pages/Products";


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