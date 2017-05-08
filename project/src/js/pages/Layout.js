import React from "react";
import { Link } from 'react-router';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import "./Layout.css";

export default class Layout extends React.Component {
  
    render() {
      const { history } = this.props;
      history.isActive("Products");
        return (
          <section>
            <Header></Header>
            <div className="demo-layout-waterfall mdl-layout mdl-js-layout">
             
                <div className="mdl-layout__header-row">
                  <div className="mdl-textfield__expandable-holder"></div>
                </div>
                <div className="mdl-layout__header-row">
                  <div className="mdl-layout-spacer"></div>
                    <nav className="mdl-navigation">
                      <a className="mdl-navigation__link" href="">Link</a>
                      <a className="mdl-navigation__link" href="">Link</a>
                      <a className="mdl-navigation__link" href="">Link</a>
                      <a className="mdl-navigation__link" href="">Link</a>
                    </nav>
                  </div>
            </div>

            <div className="container">
                <div className="row">
                    <div className="children">
                      {this.props.children}
                    </div>
                </div>
            </div>
            <Footer></Footer>
           </section>
        );
    }
}