import React, { Component } from 'react';
import './App.css';



class App extends Component {
  // constructor{
  //   this.state={
  //     quote: this.state.quote,
  //     author: this.state.author,
  //     category: this.state.category
  //   }
  //   changeQuote(){

  //   }
  //   changeColor(){

  //   }
  // }
  render() {
    return (
      <div className="App">
        <div id="main-container">
          <div id="quote-box">
            <p id="quote-text">"The definition of insanity is doing the same thing repeatedly and expecting a different result"</p>
            <div id="author-name">
            <p id="author-text">Albert Einstein</p>
              <div id="button-box">
                <button type="button" className="button-color" id="save-button">Save</button>
                <button type="button" className="button-color" id="tweet-button">Tweet</button>
                <button type="button" className="button-color" id="new-quote-button">New Quote</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
