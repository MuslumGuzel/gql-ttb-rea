import React, { Component } from 'react';
import {gql} from 'apollo-boost';
import { graphql } from 'react-apollo';

const getBooksQuery = gql`
    {
        books{
            name
            genre
            id
        }
    }
`

class BookList extends Component {
  render() {      
      if(this.props.data.loading){
          return (<div>Loading</div>);
      }

      if(this.props.data.error){
          console.log(this.props.data.error);
          return (<div>An unexpected error occured</div>);
      }

    return (        
      <div id="main">
        <ul id="book-list">
        {this.props.data.books.map(book => (
            <li>{book.name} - {book.genre}</li>
        ))}        
        </ul>
      </div>
    );
  }
}

export default graphql(getBooksQuery)(BookList);