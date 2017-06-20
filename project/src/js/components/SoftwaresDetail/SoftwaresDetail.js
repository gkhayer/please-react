import React from 'react';
import PropTypes from 'prop-types';
import {Grid, Row, Col} from 'react-bootstrap';
import './SoftwaresDetail.css';
import {operatingSystem, productivitySoftware, securitySoftware, audioVideoSoftware} from '../../Data/SoftwareServicesData';

export default class SoftwaresDetail extends React.Component {
  render() {
    return (
      <div>
        <Grid>
          {
            this.props.operatingSystem.map((value, idx) => (
            <Row key={'software-detail-${idx}'}>
                <Col md={6}>image</Col>
                <Col md={6}>desc, add to cart</Col>
            </Row>
            ))
          }
        </Grid>
      </div>
    )
  }
} 