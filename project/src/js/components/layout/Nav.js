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
      <nav className="navbar navbar-inverse navbar-fixed-top" role="navigation">
        <div class="container">
          <div class="navbar-header">
          </div>
          <div id="bs-example-navbar-collapse-1">
            <ul class="nav navbar-nav">
              <li>
                <IndexLink to="/">Featured</IndexLink>
              </li>
              <li>
                <Link to="archives" activeClassName="test">Archives</Link>
              </li>
              <li>
                <Link to="settings" activeClassName="test">Settings</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}