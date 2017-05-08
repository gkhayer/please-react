import React from 'react';
import "./Header.css";
import Nav from './Nav';

export default class Header extends React.Component {

  render(){
    return(
     <div className="mdl-layout mdl-js-layout mdl-layout--fixed-header">
      <header className="mdl-layout__header">
        <div className="mdl-layout__header-row">
          <span className="mdl-layout-title">Computer Parts</span>
          <div className="mdl-layout-spacer"></div>
          <Nav></Nav>
        </div>
      </header>
    </div>
    )
  }
}