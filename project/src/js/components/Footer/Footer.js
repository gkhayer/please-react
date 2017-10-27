import React from 'react';
import { Link } from "react-router";

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
                <li><Link to="About">About</Link></li>
                <li><Link to="#">Terms</Link></li>
                <li><Link to="Partners">Partners</Link></li>
              </ul>
            </div>
            <div className="mdl-mega-footer__drop-down-section">
              <h1 className="mdl-mega-footer__heading">FAQ</h1>
              <ul className="mdl-mega-footer__link-list">
                <li><Link to="#">Questions</Link></li>
                <li><Link to="#">Answers</Link></li>
                <li><Link to="Contact">Contact us</Link></li>
              </ul>
            </div>
          </div>
          <div className="mdl-mega-footer__bottom-section">
            <div className="mdl-logo">Title</div>
            <ul className="mdl-mega-footer__link-list">
              <li><Link to="#">Help</Link></li>
              <li><Link to="#">Privacy & Terms</Link></li>
            </ul>
          </div>
        </footer>
      </section>
    );
  }
}