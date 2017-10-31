import React from "react";
import { Link } from "react-router";

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
        <nav className="mdl-navigation" role="navigation">
          <ul className="nav navbar-nav">
            <li><Link to="ProductInfo" className="mdl-navigation__link">Gallery</Link></li>
            <li>
              <Link className="mdl-navigation__link" id="demo-menu-lower-left">
              Deals and Services
                <ul className="mdl-menu mdl-menu--bottom-left mdl-js-menu mdl-js-ripple-effect"
                  htmlFor="demo-menu-lower-left">
                  <li className="mdl-menu__item mdl-menu__item--full-bleed-divider">
                    <Link to="Gaming" className="child-link">Gaming</Link>
                  </li>
                  <li className="mdl-menu__item mdl-menu__item--full-bleed-divider">
                    <Link to="SoftwareServices" className="child-link">Software Services</Link>
                  </li>
                  <li className="mdl-menu__item mdl-menu__item--full-bleed-divider">
                    <Link to="DailyDeals" className="child-link">Daily Deals</Link>
                  </li>
                  <li className="mdl-menu__item">
                    <Link className="child-link">Marketplace Spotlight</Link>
                  </li>
                </ul>
              </Link>
            </li>
            <li>
              <Link to="Partners" className="mdl-navigation__link">Partners</Link>
            </li>
            <li>
              <Link to="About" className="mdl-navigation__link">About</Link>
            </li>
            <li>
              <Link to="Contact" className="mdl-navigation__link">Contact</Link>
            </li>
            <li>
              <img src="../../../Images/products/cart-outline.png" alt="cart-outline"/>
            </li>
          </ul>
        </nav>
      </div>
      );
      }
}