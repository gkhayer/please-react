import React from 'react';
import "./Header.css";
import Nav from './Nav';

export default class Header extends React.Component {

  render(){
    return(
      <header>
        <Nav></Nav>
      </header>
    )
  }
}
