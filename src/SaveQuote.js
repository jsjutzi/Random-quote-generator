import React, { Component } from 'react';
import axios from 'axios';



export default class SaveQuote extends Component{
    constructor(props){
        super(props)
        this.state={
            quote: "",
            author: ""
        }
    }

addSavedQuote(){
    this.setState({quote:  this.props.quote});
    this.setState({author: this.props.author})
}
        
    }