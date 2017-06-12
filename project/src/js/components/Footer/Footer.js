import React from 'react';

import './Footer.css';

export default class Footer extends React.Component {
  render(){
    return (
      <section>
        <footer className="mdl-mega-footer">
          <div className="mdl-mega-footer__middle-section">
            <div className="mdl-mega-footer__drop-down-section">
              <h1 className="mdl-mega-footer__heading">Features</h1>
              <ul className="mdl-mega-footer__link-list">
                <li><a href="#">About</a></li>
                <li><a href="#">Terms</a></li>
                <li><a href="#">Partners</a></li>
                <li><a href="#">Updates</a></li>
              </ul>
            </div>
            <div className="mdl-mega-footer__drop-down-section">
              <h1 className="mdl-mega-footer__heading">Details</h1>
              <ul className="mdl-mega-footer__link-list">
                <li><a href="#">Specs</a></li>
                <li><a href="#">Tools</a></li>
                <li><a href="#">Resources</a></li>
              </ul>
            </div>
          </div>
          <div className="mdl-mega-footer__bottom-section">
            <div className="mdl-logo">Title</div>
            <ul className="mdl-mega-footer__link-list">
              <li><a href="#">Help</a></li>
              <li><a href="#">Privacy & Terms</a></li>
            </ul>
          </div>
        </footer>
      </section>
    );
  }
}