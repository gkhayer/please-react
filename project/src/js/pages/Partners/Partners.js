import React from "react";
import {partners} from '../../Data/Partners';
import {Grid, Row, Col} from 'react-bootstrap';

export default class Partners extends React.Component {
        render() {
            return(
                <div>
                    <h1>All Top Seller</h1>
                    <Grid>
                      <Row>
                        <Col md={3}>
                        </Col>
                      </Row>
                    </Grid>
                </div>
            );
        }
    }