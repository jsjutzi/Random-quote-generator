import React, { Component } from 'react';
import './App.css';
import axios from 'axios';




class App extends Component {
  constructor(props){
    super(props)
    this.state={
      quote: this.quote,
      author: this.author,
      category: this.category
    }
    this.handleClickNewQuote  = this.handleClickNewQuote.bind(this);
    // this.handleClickTweet = this.handleClickTweet.bind(this);
    // this.handleClickSave = this.handleClickSave.bind(this);
  }

  //Fires when app is loaded~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

  componentDidMount(){
    axios.get('http://localhost:3001/api/getQuote').then(response =>{
      this.setState({quote: response.data.quote, 
                    author: response.data.author,
                    category: response.data.category})
    }).catch(console.log)
  }

  //Fires when NewQuote is clicked, makes API call to server and gets data back
  handleClickNewQuote(){
    axios.get('http://localhost:3001/api/getQuote').then(response =>{
      this.setState({quote: response.data.quote, 
                    author: response.data.author,
                    category: response.data.category})
    }).catch(console.log)
    console.log("Button is working?");
  }

  // //Should use twitter API to post 'this' as a new tweet on twitter
  // handleClickTweetQuote(){
     
  // }

  //Should use onClick event to add 'this' quote to favorites flexbox on bottom of page
  //  handleClickSave(){

  // }

  // //Should use onClick event to remove item from favorites flexbox on bottom of page
  //   handleClickRemove(){


  //   }


  render() {
    return (
      <div className="App">
        <div id="main-container">
          <div id="quote-box">
            <p id="quote-text">{this.state.quote}</p>
            <div id="author-name">
            <p id="author-text">{this.state.author}</p>
              <div id="button-box">
                <button type="button" className="button-color" id="save-button">Save</button>
                <button type="button" className="button-color" id="tweet-button">Tweet</button>
                <button type="button" className="button-color" id="new-quote-button"  onClick={this.handleClickNewQuote}>New Quote</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
