import React, {PropTypes, Components} from 'react';
import ReactDOM from "react-dom";
import './Gallery.css';

// Component for gallery
export default class Gallery extends React.Component{
 render() {
 const {cardDetail} = this.props;
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
  </div>
  )
 }
}

