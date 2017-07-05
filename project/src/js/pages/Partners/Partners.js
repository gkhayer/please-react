import React, { Components} from 'react';
import {partners} from '../../Data/PartnersData';
import PropTypes from 'prop-types';
import {Grid, Row, Col} from 'react-bootstrap';
import './Partners.css';

export default class Partners extends React.Component {
        render() {
            return(
                <div>
                    <h1>All Top Seller</h1>
                    <Grid>
                      <Row>
                      {
                        partners.map((value, idx) => {
                        return (
                            <Col key={`img${idx}`} md={3}>
                              <div className="partnerscard">
                                <img src={value.image} />
                              </div>
                            </Col>
                        )})
                      }
                      </Row>
                    </Grid>
                </div>
            );
        }
    }