import React, { Component } from 'react';
import axios from 'axios';
const colorsArray = ['#3a82f4', '#00ff08','#ff00c3', '#ff6100', '#ff0000', '#000cFP', '#47474c', '#6ee6ed'];






export default class QuoteChanger extends Component{

changeColor(colorsArray){
    let num = Math.floor(Math.random() * (9 - 1) + 1);
    let newColor = colorsArray[num];
    return newColor;

}

        render(){
            return{
            
            }
        }
    
}
