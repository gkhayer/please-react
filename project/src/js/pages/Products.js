import React from "react";
import Gallery from '../components/Gallery';
export default class Products extends React.Component {
        
  render(){
    const { query } = this.props.location;
    const { params } = this.props;
    const { product } = params;
    const {date, filter} = query;

    return(
      <div>
        <h1>Products</h1>
        <Gallery />
      </div>
    );
  }
}