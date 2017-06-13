import React, {PropTypes, Components} from 'react';
import ReactDOM from "react-dom";
import { Popover, Tooltip, Button, Modal, OverlayTrigger} from 'react-bootstrap';
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
    <div className='container-fluid gallery-container'>
      <div className='row'>
      {
        this.props.cardDetail.map((value, idx) => {
        return (
            <div key={`img${idx}`} className='col-sm-6 col-md-3 col-xl-2 wrapper'>
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
            </div>
        )})
      }
      { selectedItem &&
        <Modal show onHide={this.close}>
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
      </div>
    </div>
  )
  }
}

