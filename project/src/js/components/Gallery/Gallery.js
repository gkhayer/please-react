import React, { Components} from 'react';
import PropTypes from 'prop-types';
import ReactDOM from "react-dom";
import { Popover, Tooltip, Button, Modal, OverlayTrigger, Grid, Row, Col} from 'react-bootstrap';
import './Gallery.css';

// Component for gallery
export default class Gallery extends React.Component{
  state = {
     selectedItem: null,
  }

  close() {
    this.setState({ selectedItem: null });
  };

  open(item) {
    return () => {
      this.setState({
        selectedItem: item,
      });
    }
  };

  render() {
  const {cardDetail} = this.props;
  const popover = (
    <Popover id="modal-popover" title="popover">
       This item ships to the Continental US only, do you still want to add it to your cart?
      </Popover>
  );

  const selectedItem = this.state.selectedItem;

  return(
    <div className='gallery'>
      <Grid>
        <Row>
        {
          this.props.cardDetail.map((value, idx) => {
          return (
              <Col key={`img${idx}`} md={3} className="wrapper">
                <div className='gallery-card'>
                  <img className="images-card" src={value.image} alt={value.itemName}/>
                </div>
                <div className="card-detail">
                  <span className="item-price">{value.itemPrice}</span>
                  <span>{value.itemName}</span>
                  <Button
                    bsStyle="primary"
                    bsSize="small"
                    onClick={this.open(value).bind(this)} >
                    View Detail
                  </Button>
                </div>
              </Col>
          )})
        }
        { selectedItem &&
          <Modal show onHide={this.close.bind(this)}>
            <Modal.Header closeButton>
              <Modal.Title >{selectedItem.itemName}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              {selectedItem.itemDetail}
            </Modal.Body>
            <Modal.Footer>
              <Button onClick={this.close.bind(this)}>Close</Button>
            </Modal.Footer>
          </Modal>
        }
        </Row>
      </Grid>
    </div>
  )
  }
}

