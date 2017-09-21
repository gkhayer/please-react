import React from 'react';
import "./Header.css";
import Nav from '../Nav';
import { Link } from "react-router";

export default class Header extends React.Component {

  render(){
    return(
     <div className="mdl-layout mdl-js-layout mdl-layout--fixed-header">
      <header className="mdl-layout__header head">
        <div className="mdl-layout__header-row">
          <div className="mdl-layout-title">
            <Link className="company-title" to="/">Computer Parts</Link>
          </div>
          <div className="mdl-layout-spacer"></div>
          <Nav></Nav>
        </div>
      </header>
     </div>
    )
  }
}