import React, { Components} from 'react';
import PropTypes from 'prop-types';
import ReactDOM from "react-dom";
import { Popover, Tooltip, Button, Modal, Thumbnail, OverlayTrigger, Grid, Row, Col} from 'react-bootstrap';
import './Gallery.css';
import {gamingNavaData} from '../../Data/gamingSideNavData'

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
      {
        this.props.cardDetail.map((value, idx) => {
          return (
          <div key={`img${idx}`} className='gallery-card'>
            <img className="images-card" src={value.image} alt={value.itemName}/>
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
          </div>
        )})
      }
      { selectedItem &&
        <Modal show onHide={this.close.bind(this)}>
          <Modal.Header closeButton>
            <Modal.Title >{selectedItem.itemName}</Modal.Title>
            {selectedItem.itemDetail}
          </Modal.Header>
          <Modal.Body>
            <img src={selectedItem.image} alt={selectedItem.name}/>
            <div className="input-quantity">
              <div className="input-group">
                <input type="number" className="input-control" placeholder="Qty" aria-describedby="basic-addon1" />
              </div>
              <div className="btn-group">
                <button className="btn btn-warning addcart"
                  type="button" 
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                Add to Cart
                </button>
              </div>
            </div>
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

