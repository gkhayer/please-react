import React from "react";
import { Link } from 'react-router';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import "./Layout.css";

export default class Layout extends React.Component {
  
    render() {
        return (
          <section>
            <Header></Header>
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
