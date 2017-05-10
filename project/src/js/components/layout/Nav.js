import React from "react";
import { IndexLink, Link } from "react-router";

import './Nav.css';

export default class Nav extends React.Component {
  constructor() {
    super()
    this.state = {
      collapsed: true,
    };
  }
  

  toggleCollapse() {
    const collapsed = !this.state.collapsed;
    this.setState({collapsed});
  }

  render() {

    return (
     <div className="wrapper">
        <nav className="mdl-navigation mdl-layout--large-screen-only" role="navigation">
          <div>
            <ul className="nav navbar-nav">
              <li>
                <Link to="Products" className="mdl-navigation__link">Products</Link>
              </li>
              <li>
                <Link to="DealsServices" className="mdl-navigation__link">Deals and Services</Link>
              </li>
              <li>
                <Link to="Partners" className="mdl-navigation__link">Partners</Link>
              </li>
              <li>
                <Link to="Contact" className="mdl-navigation__link">Contact</Link>
              </li>
            </ul>
          </div>
        </nav>
        <div className="mdl-layout__drawer">
          <span className="mdl-layout-title">Computer Parts</span>
          <nav className="mdl-navigation">
            <Link to="Products" className="mdl-navigation__link">Products</Link>
            <Link to="DealsServices" className="mdl-navigation__link">Deals and Services</Link>
            <Link to="Partners" className="mdl-navigation__link">Partners</Link>
            <Link to="Contact" className="mdl-navigation__link">Contact</Link>
          </nav>
        </div>
      </div>
    );
  }
}