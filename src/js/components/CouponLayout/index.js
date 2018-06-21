import React from 'react';
import {Grid, Row, Col} from 'react-bootstrap';

import './couponlayout.css';

class Couponlayout extends React.Component {
  render() {
    return(
      <Grid>
        <Row className="wrapper-coupon">
          <Col md={9} className="horizontal">
            <div className="title">Star Awards</div>
            <p><span className="coupon-value">$5.00</span>off your next purchase</p>
            <div><strong>Offer expires in:</strong><span className="coupon-timer">{this.props.couponTimer}</span></div>
          </Col>
          <Col md={3} className="vertical">
            <p>Computer Parts</p>
            <p>408-xxx-xxxx</p>
            <p>Contact Infomation</p>
          </Col>
        </Row>
        <Row className="wrapper-coupon">
          <Col md={9} className="horizontal">
            <div className="title">Star Awards</div>
            <p><span className="coupon-value">20%</span>off on regular price</p>
            <div><strong>Offer valid till:<span className="coupon-timer">12/10/2017</span></strong></div>
          </Col>
          <Col md={3} className="vertical">
            <p>Computer Parts</p>
            <p>408-xxx-xxxx</p>
            <p>Contact Infomation</p>
          </Col>
        </Row>
      </Grid>
    )
  }
}
export default Couponlayout;