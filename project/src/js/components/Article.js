import React from 'react';

export default class Article extends React.Component {

  consoleData(){
    console.log(this.props);
  }
  render(){
    const { title } =this.props;

    return(
      <div class="col-md-4">
        <h4>{title}</h4>
        <p onClick={this.consoleData.bind(this)}>Lorem ipsum dolor sit amet,
           consectetur adipisicing elit. 
           Saepe rem nisi accusamus error velit animi non ipsa placeat.
        </p>
        <a class="btn btn-default" href="#">More information</a>
      </div>
    )
  };
}

