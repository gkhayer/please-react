import React from 'react';

Const galleryContainer = document.querySelector('.react-gallery');

let imgUrls = [
  'https://source.unsplash.com/3Z70SDuYs5g/800x600',
  'https://source.unsplash.com/01vFmYAOqQ0/800x600',
  'https://source.unsplash.com/2Bjq3A7rGn4/800x600',
  'https://source.unsplash.com/t20pc32VbrU/800x600',
  'https://source.unsplash.com/pHANr-CpbYM/800x600',
  'https://source.unsplash.com/3PmwYw2uErY/800x600',
  'https://source.unsplash.com/uOi3lg8fGl4/800x600',
  'https://source.unsplash.com/CwkiN6_qpDI/800x600',
  'https://source.unsplash.com/9O1oQ9SzQZQ/800x600',
  'https://source.unsplash.com/E4944K_4SvI/800x600',
  'https://source.unsplash.com/-hI5dX2ObAs/800x600',
  'https://source.unsplash.com/vZlTg_McCDo/800x600'
];

export default class ImageGrid extends React.Component {
  render() {

    if(this.props.isOpen === false) {
      return null;
    }

    return(
      <div isOpen={this.props.isOpen} className="modal-overlay gallery-container" onClick={this.props.onClick} name={this.props.name}>
        <div className="modal-body gallery-card">
          <a className="modal-close" href="#" onClick={this.props.onClick}>
            <span className="fa fa-times"></span>
          </a>
          <img className={this.props.className} src={this.props.arc} alt={this.props.alt}/>
        </div>
      </div>
    )
  }
}