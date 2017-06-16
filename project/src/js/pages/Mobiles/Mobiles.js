import React, {Components} from 'react';
import PropTypes from 'prop-types';
import ReactDOM from "react-dom";
import { Row, Col, Grid } from 'react-bootstrap';
import './Mobiles.css';

export default class Mobiles extends React.Component {

  render() {
    return(
      <div>
        <div className="wrapper-mobiles">
          <Grid>
            <Row>
              <Col md={6}>
                <h1>Mobiles</h1>
                <h2>Reviews & Images</h2>
              </Col>
              <Col md={6}>
                <div className="img">
                  <img src="../../Images/top_screenshot_01.png" alt="Image1" className="image1"/>
                </div>
                  <div className="img">
                  <img src="../../Images/top_screenshot_02.png" alt="Image2" className="image2"/>
                </div>
              </Col>
            </Row>
          </Grid>
        </div>
        <div className="MobilesBody">
          <h1>Hello!!</h1>
        </div>
      </div>
    )
  }
}
