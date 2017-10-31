import React from 'react';
import './couponlayout.css';

class Couponlayout extends React.Component {
  render() {
    return(
      <div>
        <div className="outer-coupon-border">
          <div className="inner-coupon-border">
            <h3>Star Awards</h3>
            <h1>20% OFF</h1><span>10% OFF on clearance items</span>
            <h3><strong>Offer expires in:</strong>{this.props.couponTimer}</h3>
          </div>
        </div>
      </div>
    )
  }
}
export default Couponlayout;