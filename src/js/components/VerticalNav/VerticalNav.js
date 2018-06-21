import React, {Components} from 'react';
import PropTypes from 'prop-types';
import {gamingNavaData} from '../../Data/gamingSideNavData';
import { Row, Col, Grid, Nav, NavDropdown, MenuItem, ListGroup, Image, Tooltip } from 'react-bootstrap';
import './VerticalNav.css';

export default class VerticalNav extends React.Component {

  state = {
    data: gamingNavaData,
    selectedItem: null,
  }

  setData(data) {
    this.setState({data})
  }

  showproducts(product) {
    return () => {
      this.setState({
        selectedItem: product,
      });
    }
  };

  render() {
    const {data} = this.state;
    const selectedItem = this.state.selectedItem;

    return (
      <Grid className="vertical-nav">
        <Row> 
          <Col md={3}>
          {
            gamingNavaData.map((value, idx) => {
              return (
                <div key={`img${idx}`}>
                  <h4>{value.heading}</h4>
                  <ul className="gaming-menuitems">
                    {value.items.map((v, i) => <li key={`game${i}`} onClick={this.showproducts(v).bind(this)}><a>{v.name}</a></li>)}
                  </ul>
                </div>
              )
            })
          }
          </Col>
            <Col md={9} className="gaming-content-section">
            {
              selectedItem &&
              <Row>
              {
                selectedItem.products.map((v, i) => 
                <Col md={4} key={`product${i}`} className="selected-item-products">
                <Image src={v.image} alt="image" className="products-image" />
                <div className="products-price">Price:{v.price}</div>
                </Col>
                )
              }
              </Row>
            }
            </Col>
        </Row>
      </Grid>
    )
  }
}

