import React from "react";
import Title from "./Header/Title";

export default class Header extends React.Component {
    handleChange(e){
        this.props.changeTitle
    }
    render(){
        return(    
            <div>
                <Title title={this.props.title}/>
                <input onChange={this.handleChange.bind(this)}/>
            </div>
        );
     }
}
