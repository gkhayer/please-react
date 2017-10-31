import React from 'react';
import {render} from 'react-dom';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import { createHashHistory  } from 'history'
import Contact from "./pages/Contact/Contact.js";
import DealsServices from "./pages/DealsServices/DealsServices.js";
import Layout from "./Layout";
import Partners from "./pages/Partners";
import ProductInfo from "./pages/ProductInfo";
import Gaming from "./pages/Gaming";
import Home from "./pages/Home";
import SoftwareServices from "./pages/SoftwareServices";
import ProductsDetail from "./components/ProductsDetail";
import About from "./pages/About";
import DailyDeals from "./pages/DailyDeals";

const app = document.getElementById('app');

render(
  <Router history={hashHistory}>
      <Route path='/' component={Layout}>
        <IndexRoute component={Home}/>
        <Route path='partners' active component={Partners}></Route>
        <Route path='contact' component={Contact}></Route>
        <Route path='dailyDeals' component={DailyDeals}></Route>
        <Route path='ProductInfo' component={ProductInfo}></Route>
        <Route path='gaming' component={Gaming}></Route>
        <Route path='softwareServices' component={SoftwareServices}></Route>
        <Route path='ProductsDetail' component={ProductsDetail}></Route>
        <Route path='about' component={About}></Route>
      </Route>
  </Router>,
  document.getElementById('app'));