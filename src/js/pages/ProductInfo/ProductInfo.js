import React from "react";
import Gallery from '../../components/Gallery';

class ProductInfo extends React.Component {

  render(){
    return(
      <div className="container">
        <h1>Products</h1>
        <Gallery />
      </div>
    );
  }
}

export default ProductInfo;