import React from "react";

export default class Products extends React.Component {
        
  render(){
    const { query } = this.props.location;
    const { params } = this.props;
    const { product } = params;
    const {date, filter} = query;

    const arr = [];
    for (var i=1; i<=50; i++) {
      arr.push(<div key={i} className="mdl-cell mdl-cell--2-col mdl-cell--4-col-phone">2</div>);
    }

    return(
      <div>
        <h1>Products</h1>
        <div className="mdl-grid demo-grid demo-grid__grid">
          
          <div className="mdl-cell mdl-cell--2-col mdl-cell--4-col-phone">2</div>
          <div className="mdl-cell mdl-cell--2-col mdl-cell--4-col-phone">2</div>
          <div className="mdl-cell mdl-cell--2-col mdl-cell--4-col-phone">2</div>
          <div className="mdl-cell mdl-cell--2-col mdl-cell--4-col-phone">2</div>
          <div className="mdl-cell mdl-cell--2-col mdl-cell--4-col-phone">2</div>
        </div>
      </div>
    );
  }
}