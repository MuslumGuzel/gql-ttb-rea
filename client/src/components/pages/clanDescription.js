import React, { Component } from 'react';
import {gql} from 'apollo-boost';
import { graphql } from 'react-apollo';

const getClanDescriptionQuery = gql`
{
    clanDescriptions
    {
      id
      title
      description
      createDate
    }
  }
`

const styles = {
    border: '1px'
}

class ClanDescription extends Component {
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
        {this.props.data.clanDescriptions.map(clanDescription => (
            <div key={clanDescription.id} style={styles}><p>{clanDescription.title}-({clanDescription.createDate})</p><p>{clanDescription.description}</p></div>
        ))}
      </div>
    );
  }
}

export default graphql(getClanDescriptionQuery)(ClanDescription);