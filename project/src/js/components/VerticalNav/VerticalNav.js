import React, {Components} from 'react';
import PropTypes from 'prop-types';
import {gamingNavaData} from '../../Data/gamingSideNavData';
import { Row, Col, Grid, Nav, NavDropdown, MenuItem, ListGroup, } from 'react-bootstrap';
import './VerticalNav.css';

export default class VerticalNav extends React.Component {

  state = {
   // defaultData: images,
    selectedItem: null,
  }

  setData(data) {
    this.setState({data})
  }

  showproducts(products) {
    return () => {
      this.setState({
        selectedItem: products,
      });
    }
  };

  render() {
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
                    {value.items.map((v, i) => <li key={`game${i}`}><a>{v.name}</a></li>)}
                  </ul>
                </div>
              )
            })
          }
          </Col>
          <Col md={6}>
          {
            gamingNavaData.map((val, indx) => {
              return (
               <div key={`prod${indx}`}>
                {val.items.map((v) => {v.products})}
               </div>
              )
            })
          }
          </Col>
          {
            selectedItem &&
            <Col md={3}>
              <Row>
                <Col md={3}>{selectedItem.items.map((v) => <div>{v.products}</div>)}</Col>
              </Row>
            </Col>
          }
        </Row>
      </Grid>
    )
  }
}

