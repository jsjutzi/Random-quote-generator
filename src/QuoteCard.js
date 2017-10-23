import React, {Component} from 'react';

export default class QuoteCard extends Component {
    render(){
        return (
        <div className="saved-quotes-individual">
            <button id="delete-quote" onClick={() => this.props.handleClickDelete(this.props.quote)} style={{backgroundColor: this.props.color}}>X</button>
            <p className = "saved-quotes-quote">{this.props.quote}</p>
            <p className = "saved-quotes-author">{this.props.author}</p>
          </div>
        )
    }
}