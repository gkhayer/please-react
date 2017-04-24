import React from "react";

export default class Title extends React.Component {
  constructor(){
      super();
      this.state ={
          title: "inside header folder > title > Gagan"
      }
  }
        render(){
            return(                
                <div>
                    <h1>{this.props.title}</h1>
                </div>
            );
        }
    }
