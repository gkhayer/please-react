import React from "react";
import { Link } from 'react-router';
import Header from '../components/layout/Header';
import "./Layout.css";

export default class Layout extends React.Component {
  navigate() {
    //push
    //replace
    console.log(this.props);
    this.props.history.replaceState(null, "/");
  }
    render() {
      const { history } = this.props;
      history.isActive("archives");
        return (
           <div class="container">
              <div class="row">
                <div class="col-md-8">
                  <Header></Header>
                  <div className="children">
                    {this.props.children}
                    <h2>Hello</h2>
                  </div>
                </div>
              </div>
           </div>
        );
    }
}