import React from 'react';
import PropTypes from 'prop-types';
import {Row, Col, Grid, Carousel, Image, ListGroup, ListGroupItem, Table} from 'react-bootstrap';
import './SoftwareServices.css';
import {operatingSystem, productivitySoftware, securitySoftware} from '../../Data/SoftwareServicesData';

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
                <div>Operating Systems</div>
              </Col>
              <Col md={3} onClick={() => this.setData(productivitySoftware)}>
                <Image src="../../Images/productivity.jpg" />
                <div>Productivity Software</div>
              </Col>
              <Col md={3} onClick={() => this.setData(securitySoftware)}>
                <Image src="../../Images/security.jpg" />
                <div>Security Software</div>
              </Col>
              <Col md={3}>
                <Image src="../../Images/audio-video.jpg"/>
                <div>Audio & Video Software</div>
              </Col>
            </Row>
          </Grid>
        </div>
        {
          data && (
            <div className="SoftwareServicesBody">
              <Table striped bordered condensed hover>
                <tbody>
                  { data.map((value, idx) => (
                      <tr key={`operating-system-${idx}`}>
                        <td>{value.name}</td>
                        <td>{value.desc}</td>
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
