import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import Banner from '../components/Banner';
import "./Layout.css";

export default class Layout extends React.Component {
  static propTypes = {
    products: PropTypes.bool,
    deals: PropTypes.bool,
    partners: PropTypes.bool,
  };

  render() {
    const isproducts = location.pathname === '/products';
    return (
      <section>
      <Banner 
        isproducts={this.props.products} 
        isdeals={this.props.deals}
        ispartners={this.props.partners}
      />
        <Header></Header>
        <div className="container">
          <div className="row">
            <div className="children">
              {this.props.children}
            </div>
          </div>
        </div>
        <Footer></Footer>
        </section>
    );
  }
}
