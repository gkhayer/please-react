import React from "react";
import './DealsServices.css';
import { browserHistory } from 'react-router';
import { FieldGroup, FormGroup } from 'react-bootstrap';

export default class DealsServices extends React.Component {

  render(){
    console.log(browserHistory);
    return (
      <div className="wrapper">
          <h1>Deals and Services</h1>
      </div>
    );
  }
}