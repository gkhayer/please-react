import React from "react";
import { Link } from 'react-router';

export default class Layout extends React.Component {
  navigate() {
    //push
    //replace
    this.props.history.replaceState(null,  "/");
  }
    render() {
        return (
           <div>
              <h1>Killernews</h1>
              <Link to="archives" class="btn btn-success">Archives</Link><br /><br/>
              <Link to="settings" class="btn btn-success">Settings</Link><br /><br/>
              <button class="btn btn-danger" onClick ={this.navigate.bind(this)}>Featured</button>
              {this.props.children}
           </div>
        );
    }
} 