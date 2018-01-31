import React from 'react';
import "./Banner.css";
import { syncHistoryWithStore, browserHistory, store } from 'react-router-redux'

export default class Banner extends React.Component {
  render() {
      const { isProducts, isdeals, ispartners } = this.props;
      return (
        <section>
          <div className="banner-products"></div>
          <div className="banner-deals"></div>
          <div className="banner-partners"></div>
          </section>
      );
  }
}
