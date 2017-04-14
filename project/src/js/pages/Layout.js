import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default class Layout extends React.Component {
    constructor(){
        super();
        this.state ={
            title: "welcome here"
        };
    }

    changeTitle(title){
        this.setState({title})
    }
    render() {      
       
        return (
           <div>          
               <Header title ={title} />
               <Footer />
           </div>
        );
    }
}