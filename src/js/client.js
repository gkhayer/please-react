import React from 'react';
import {render} from 'react-dom';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import Contact from "./pages/Contact/Contact.js";
import Layout from "./Layout";
import Partners from "./pages/Partners";
import Gaming from "./pages/Gaming";
import SoftwareServices from "./pages/SoftwareServices";
import ProductsDetail from "./components/ProductsDetail";
import About from "./pages/About";
import DailyDeals from "./pages/DailyDeals";
import Gallery from './components/Gallery/index.js';

const app = document.getElementById('app');

render(
  <Router history={hashHistory}>
      <Route path='/' component={Layout}>
        <IndexRoute path='gaming' component={Gaming}/>
        <Route path='partners' active component={Partners}></Route>
        <Route path='contact' component={Contact}></Route>
        <Route path='dailyDeals' component={DailyDeals}></Route>
        <Route path='ProductInfo' component={Gallery}></Route>
        <Route path='gaming' component={Gaming}></Route>
        <Route path='softwareServices' component={SoftwareServices}></Route>
        <Route path='ProductsDetail' component={ProductsDetail}></Route>
        <Route path='about' component={About}></Route>
      </Route>
  </Router>,
  document.getElementById('app'));