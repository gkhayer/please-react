import React, {PropTypes, Components} from 'react';
import ReactDOM from "react-dom";
import { Popover, Tooltip, Button, Modal, OverlayTrigger} from 'react-bootstrap';
import './Gallery.css';

// Component for gallery
export default class Gallery extends React.Component{
  constructor(){
    super();
    this.close =  this.close.bind(this);
    this.open = this.open(this);
  }

  state = {
     showModal: false,
  }

  close() {
    this.setState({ showModal: false });
  };

  open() {
    this.setState({ showModal: true });
  };

  render() {
  const {cardDetail} = this.props;
  const popover = (
    <Popover id="modal-popover" title="popover">
        very popover. such engagement
      </Popover>
  );

  const tooltip = (
        <Tooltip id="modal-tooltip">
          wow.
        </Tooltip>
      );

  return(
    <div className='container-fluid gallery-container'>
    <div className='row'>
    {
      this.props.cardDetail.map((url, idx) => {
      return (
        <div key={`img${idx}`} className='col-sm-6 col-md-3 col-xl-2'>
          <div className='gallery-card'>
            <img className="images-card" src={url.image} alt={url.itemName}/>
          </div>
          <div className="card-detail">
            <span className="item-price">{url.itemNumber}</span>
            <span>{url.itemName}</span>
            <span>{url.itemDetail}</span>
          </div>
        </div>
      )})
    }
    </div>
    <div>
      <Button
          bsStyle="primary"
          bsSize="small"
          onClick={this.open}
        >
          Open Modal
        </Button>
        <Modal show={this.state.showModal} onHide={this.close}>
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <h4>Text in a modal</h4>
            <p>Duis mollis, est non commodo luctus, nisi erat porttitor ligula.</p>

            <h4>Popover in a modal</h4>
            <p>there is a <OverlayTrigger overlay={popover}><a href="#">popover</a></OverlayTrigger> here</p>

            <h4>Tooltips in a modal</h4>
            <p>there is a <OverlayTrigger overlay={tooltip}><a href="#">tooltip</a></OverlayTrigger> here</p>

            <hr />

            <h4>Overflowing text to show scroll behavior</h4>
            <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</p>
            <p>Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.</p>
            <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</p>
            <p>Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.</p>
            <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</p>
            <p>Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.</p>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.close}>Close</Button>
          </Modal.Footer>
        </Modal>
    </div>
  </div>
  )
  }
}

