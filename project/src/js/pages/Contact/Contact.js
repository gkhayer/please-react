import React from "react";
import Maps from '../../components/Maps';
import { Popover, Tooltip, Button, Modal, Thumbnail, OverlayTrigger, Grid, Row, Col} from 'react-bootstrap';

export default class Contact extends React.Component {
        render() {
            return(
                <div>
                  <h1>Contact</h1>
                  <div>
                    <Grid>
                      <Row>
                        <Col md={6}>
                          <h3 className="contact-subheadings">iTEAM Consulting</h3>
                          <p>6100 Indian School Rd. NE</p>
                          <p>Suite 100, 105</p>
                          <p>Albuquerque, NM 87110</p>
                          <h3 className="contact-subheadings">Phone Numbers</h3>
                          <p>Main: (505) 796-5656</p>
                          <p>Fax: (505) 888-9433</p>
                          <p>Toll Free: (855) 454-3939</p>
                          <p>Help Desk: (505) 796-6603</p>
                        </Col>
                        <Col md={6}>
                          <div style={{ width: '100%', height: '500px' }}>
                          <Maps/>
                      </div>
                        </Col>
                        </Row>
                        </Grid>
                  </div>
                </div>
            );
        }
    }