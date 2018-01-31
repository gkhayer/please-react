import React, {Components} from 'react';
import { Row, Col, Grid } from 'react-bootstrap';
import './About.css';

export default class About extends React.Component {
  render() {
    return(
      <div>
        <div className="mobile-banner">
          <img src="../../Images/top_screenshot_03.png" alt="Image3" className="img image3"/>
          <img src="../../Images/top_screenshot_01.png" alt="Image1" className="img image1"/>
          <img src="../../Images/top_screenshot_02.png" alt="Image2" className="img image2"/>
        </div>
        <div className="MobilesBody container">Body</div>
      </div>
    )
  }
}
