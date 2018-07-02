import React from 'react';
import { Button, Modal} from 'react-bootstrap';
import './Gallery.css';
import {cardDetail} from '../../Data/ProductData/index';

// Component for gallery
export default class Gallery extends React.Component{
  constructor(){
    super();

    this.state = {
     selectedItem: null,
  };
  this.open = this.open.bind(this);
  this.close = this.close.bind(this);
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

  const selectedItem = this.state.selectedItem;

  return(
    <div className="container">
      <h1>Featured Products</h1>
      <div className='gallery'>
        {
          cardDetail.slice(0, 3).map((value, idx) => {
            return (
            <div key={`img${idx}`} className='gallery-card'>
              <img className="images-card" src={value.image} alt={value.itemName}/>
              <div className="card-detail">
                <span className="item-price">{value.itemPrice}<span>{value.itemName}</span></span>
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
    </div>
  )
  }
}

