import React from 'react';
import { Link } from 'react-router';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import Banner from '../components/Banner';
import "./Layout.css";

export default class Layout extends React.Component {
  static propTypes = {
    
  };

  render() {
    return (
      <div>
        <Header></Header>
          <div>{this.props.children}</div>
        <Footer></Footer>
      </div>
    );
  }
}
