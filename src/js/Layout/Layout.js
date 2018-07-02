import React from 'react';
import PropTypes from 'prop-types';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import "./Layout.css";

export default class Layout extends React.Component {
  static propTypes = {
    products: PropTypes.bool,
    deals: PropTypes.bool,
    partners: PropTypes.bool,
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
