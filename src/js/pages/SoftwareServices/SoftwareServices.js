import React from 'react';
import {Row, Col, Grid, Carousel, Image, Button, Modal, Table} from 'react-bootstrap';
import './SoftwareServices.css';
import {operatingSystem, productivitySoftware, securitySoftware, audioVideoSoftware} from '../../Data/SoftwareServicesData';

export default class SoftwareServices extends React.Component {

  state = {
    data: operatingSystem,
    selectedItem: null,
  }

  setData(data) {
    this.setState({data});
  }

  close() {
    this.setState({ selectedItem: null });
  }

  open(product) {
    return () => {
      this.setState({selectedItem: product});
    }
  };

  render() {
    const {data} = this.state;
    const selectedItem = this.state.selectedItem;

    return (
      <div className="container">
        <div className="wrapper-mobiles">
          <Carousel>
            <Carousel.Item>
              <img alt="Image1" src="../../Images/products/cor1.jpg"/>
            </Carousel.Item>
            <Carousel.Item>
              <img alt="Image2" src="../../Images/products/cor2.jpg"/>
            </Carousel.Item>
            <Carousel.Item>
              <img alt="Image3" src="../../Images/products/cor3.jpg"/>
            </Carousel.Item>
          </Carousel>
          <Grid>
            <Row className="categories">
              <Col md={3} onClick={() => this.setData(operatingSystem)}>
                <Image src="../../Images/products/operating-systems2.jpg" />
                <div className="softwares">Operating Systems</div>
              </Col>
              <Col md={3} onClick={() => this.setData(productivitySoftware)}>
                <Image src="../../Images/products/productivity.jpg" />
                <div className="softwares">Productivity Software</div>
              </Col>
              <Col md={3} onClick={() => this.setData(securitySoftware)}>
                <Image src="../../Images/products/security.jpg" />
                <div className="softwares">Security Software</div>
              </Col>
              <Col md={3} onClick={() => this.setData(audioVideoSoftware)}>
                <Image src="../../Images/products/audio-video.jpg"/>
                <div className="softwares">Audio & Video Software</div>
              </Col>
            </Row>
            <Row>
              <Col md={3}>
                <h2>Featured Items</h2>
              </Col>
            </Row>
          </Grid>
        </div>
        {
          data && (
            <div className="software-services-body">
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
                        <td><Button
                              onClick={this.open(value).bind(this)}>
                              {value.desc}
                            </Button>
                        </td>
                        <td>{value.price}</td>
                      </tr>
                    ))
                  }
                </tbody>
              </Table>
            </div>
          )
        }
        {
          selectedItem && 
          <Modal show onHide={this.close.bind(this)}>
            <Modal.Header closeButton>
              <Modal.Title>{selectedItem.desc}</Modal.Title>
            </Modal.Header>
            <Modal.Body className="modalbody">
              <Image className="modal-image" src={selectedItem.image} alt={selectedItem.name}/>
              <div><span className="itemdescriptions">Modal</span>: {selectedItem.desc}</div>
              <div><span className="itemdescriptions">Price</span>: {selectedItem.price}</div>
              <form>
                <input type="number" name="Quantity"/>
              </form>
                <Button className="add-to-cart">Add to Cart</Button>
            </Modal.Body>
            <Modal.Footer>
              <Button onClick={this.close.bind(this)}>Close</Button>
            </Modal.Footer>
          </Modal>
        }
      </div>
    )
  }
}
