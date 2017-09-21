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
                <img src="../../Images/top_screenshot_03.png" alt="Image3" className="img image3"/>
                <img src="../../Images/top_screenshot_01.png" alt="Image1" className="img image1"/>
                <img src="../../Images/top_screenshot_02.png" alt="Image2" className="img image2"/>
              </Col>
            </Row>
          </Grid>
        </div>
        <div className="MobilesBody">
        </div>
      </div>
    )
  }
}
