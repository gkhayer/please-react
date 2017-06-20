import React from 'react';
import PropTypes from 'prop-types';
import {Row, Col, Grid, Carousel, Image, ListGroup, ListGroupItem, Table} from 'react-bootstrap';
import './SoftwareServices.css';
import {operatingSystem, productivitySoftware, securitySoftware, audioVideoSoftware} from '../../Data/SoftwareServicesData';

export default class SoftwareServices extends React.Component {

  state = {
    data: operatingSystem,
  }

  setData(data) {
    this.setState({data});
  }

  render() {
    const {data} = this.state;
    return (
      <div>
        <div className="wrapper-mobiles">
          <Carousel>
            <Carousel.Item>
              <img alt="Image1" src="../../Images/cor1.jpg"/>
            </Carousel.Item>
            <Carousel.Item>
              <img alt="Image2" src="../../Images/cor2.jpg"/>
            </Carousel.Item>
            <Carousel.Item>
              <img alt="Image3" src="../../Images/cor3.jpg"/>
            </Carousel.Item>
          </Carousel>
          <Grid>
            <Row className="categories">
              <Col md={3} onClick={() => this.setData(operatingSystem)}>
                <Image src="../../Images/operating-systems2.jpg" />
                <div className="softwares">Operating Systems</div>
              </Col>
              <Col md={3} onClick={() => this.setData(productivitySoftware)}>
                <Image src="../../Images/productivity.jpg" />
                <div className="softwares">Productivity Software</div>
              </Col>
              <Col md={3} onClick={() => this.setData(securitySoftware)}>
                <Image src="../../Images/security.jpg" />
                <div className="softwares">Security Software</div>
              </Col>
              <Col md={3} onClick={() => this.setData(audioVideoSoftware)}>
                <Image src="../../Images/audio-video.jpg"/>
                <div className="softwares">Audio & Video Software</div>
              </Col>
            </Row>
            <Row>
              <Col md={3}>
                <h2>Software & Services Featured Items</h2>
              </Col>
            </Row>
          </Grid>
        </div>
        {
          data && (
            <div className="SoftwareServicesBody">
              <Table striped bordered condensed hover ref='table'>
              <thead>
                <tr>
                  <td>Brand</td>
                  <td>Product</td>
                  <td>Price</td>
                </tr>
              </thead>
                <tbody>
                  { data.map((value, idx) => (
                      <tr key={`operating-system-${idx}`}>
                        <td>{value.name}</td>
                        <td><a rel="stylesheet" href="#">{value.desc}</a></td>
                        <td dataField='price'>{value.price}</td>
                      </tr>
                    ))
                  }
                </tbody>
              </Table>
            </div>
          )
        }
      </div>
    )
  }
}
