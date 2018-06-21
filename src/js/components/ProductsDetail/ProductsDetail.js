import React from 'react';
import PropTypes from 'prop-types';
import {Grid, Row, Col} from 'react-bootstrap';
import './ProductsDetail.css';
import {operatingSystem, productivitySoftware, securitySoftware, audioVideoSoftware} from '../../Data/SoftwareServicesData';

export default class ProductsDetail extends React.Component {
  render() {
    const {addToCart} = this.props;
    return (
      <div>
        <Grid>
          {
            this.props.operatingSystem.map((value, idx) => (
            <Row key={'software-detail-${idx}'}>
                <Col md={6}>{value.name}</Col>
                <Col md={6}>desc, add to cart</Col>
            </Row>
            ))
          }
        </Grid>
      </div>
    )
  }
} 