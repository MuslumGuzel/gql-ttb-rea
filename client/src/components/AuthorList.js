import React, { Component } from 'react';
import {gql} from 'apollo-boost';
import { graphql } from 'react-apollo';

const getAuthorsQuery = gql`
    {
        authors{
            name
            id
            books{
                name                
            }
        }
    }
`

class AuthorList extends Component {
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
        <ul id="author-list">
        {this.props.data.authors.map(author => (
            <li>{author.name}
            <ul id="book-list">
                {author.books.map(book => (
                    <li>{book.name}</li>
                ))}                
            </ul>
            </li>
        ))}        
        </ul>
      </div>
    );
  }
}

export default graphql(getAuthorsQuery)(AuthorList);