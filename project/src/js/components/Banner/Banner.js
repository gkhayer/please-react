import React from 'react';
import PropTypes from 'prop-types';
import "./Banner.css";
import { syncHistoryWithStore, browserHistory, store } from 'react-router-redux'

export default class Banner extends React.Component {
  static propTypes = {
    isProducts: PropTypes.bool.isRequired,
    isdeals: PropTypes.bool.isRequired,
    ispartners: PropTypes.bool.isRequired,

  }

  static defaultProps = {
    isProducts: false,
    isdeals: false,
    ispartners: false,
  }
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
