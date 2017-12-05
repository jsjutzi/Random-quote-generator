import React, { Component } from "react";
import "./App.css";
import axios from "axios";
import SaveQuote from "./SaveQuote.js";
import changeColor from "./Services/UtilityFunction";
import QuoteCard from "./QuoteCard";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quote: this.quote,
      author: this.author,
      category: this.category,
      primaryColor: "#3a82f4",
      flexArray: []
    };
    this.handleClickNewQuote = this.handleClickNewQuote.bind(this);
    this.handleClickDelete = this.handleClickDelete.bind(this);
    this.handleClickSave = this.handleClickSave.bind(this);
    //this.handleClickTweet = this.handleClickTweet.bind(this);
  }

  //Fires when app is loaded~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

  componentDidMount() {
    axios
      .get("/api/getQuote")
      .then(response => {
        this.setState({
          quote: response.data.quote,
          author: response.data.author,
          category: response.data.category
        });
      })
      .catch(console.log);
  }

  handleClickNewQuote() {
    axios
      .get("/api/getQuote")
      .then(response => {
        this.setState({
          quote: response.data.quote,
          author: response.data.author,
          category: response.data.category
        });
      })
      .catch(console.log)
      .then(() => {
        this.setState({ primaryColor: changeColor() });
      });
  }
  // handleClickTweet(){
  //   axios.post('http://localhost:3001/api/postQuote').then(response =>{
  //     {this.state.quote, this.state.author}
  // })

  // //Should use twitter API to post 'this' as a new tweet on twitter
  // handleClickTweetQuote(){

  // }

  //Should use onClick event to add 'this' quote to favorites flexbox on bottom of page
  handleClickSave() {
    if (this.state.flexArray.length < 4) {
      console.log(this.state.quote);
      // if(this.state.flexArray.indexOf(this.state.author) === -1){
      this.setState({
        flexArray: [
          ...this.state.flexArray,
          { quote: this.state.quote, author: this.state.author }
        ]
      });
    }
    // }
  }

  // //Should use onClick event to remove item from favorites flexbox on bottom of page
  handleClickDelete(quote) {
    this.setState({
      flexArray: this.state.flexArray.filter(cur => cur.quote !== quote)
    });
  }

  render() {
    const quotesToRender = this.state.flexArray.map(cur => (
      <QuoteCard
        key={cur.quote}
        author={cur.author}
        quote={cur.quote}
        color={this.state.primaryColor}
        handleClickDelete={this.handleClickDelete}
      />
    ));

    return (
      <div className="App" style={{ backgroundColor: this.state.primaryColor }}>
        <a href="https://www.youtube.com/watch?v=qIxHb7cA6tg">
          <button id="easterEgg" />
        </a>
        <div id="main-container">
          <div id="quote-box">
            <p id="quote-text">{this.state.quote}</p>
            <div id="author-name">
              <p id="author-text">{this.state.author}</p>
              <div id="button-box">
                <button
                  type="button"
                  className="button-color"
                  handleClickSave={this.handleClickSave}
                  style={{ backgroundColor: this.state.primaryColor }}
                  id="save-button"
                  onClick={this.handleClickSave}
                >
                  Save
                </button>
                <button
                  type="button"
                  className="button-color"
                  handleClickTweet={this.handleClickTweet}
                  style={{ backgroundColor: this.state.primaryColor }}
                  id="tweet-button"
                  onClick={this.handleClickTweet}
                >
                  Tweet
                </button>
                <button
                  type="button"
                  className="button-color"
                  style={{ backgroundColor: this.state.primaryColor }}
                  id="new-quote-button"
                  onClick={this.handleClickNewQuote}
                >
                  New Quote
                </button>
              </div>
            </div>
          </div>
        </div>
        <div
          id="saved-quotes-row"
          style={{ backgroundColor: this.state.primaryColor }}
        >
          {quotesToRender}
        </div>
      </div>
    );
  }
}

export default App;
