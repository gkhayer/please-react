import React from 'react';
import "./Header.css";
import Nav from '../Nav';
import { Link } from "react-router";

export default class Header extends React.Component {

  render(){
    return(
      <div>
        <header className="mdl-layout__header">
          <div className="mdl-layout__header-row">
            <span className="mdl-layout-title">
              <Link className="company-title" to="/">Computer Parts</Link>
            </span>
            <div className="mdl-layout-spacer"></div>
            <Nav></Nav>
          </div>
        </header>
        <div className="mdl-layout__drawer">
          <span className="mdl-layout-title"><a href="/">Computer Parts</a></span>
          <Nav></Nav>
        </div>
      </div>
    )
  }
}
