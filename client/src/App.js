import React, { Component } from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import { BrowserRouter } from "react-router-dom";

//components
import Header from "./components/Header";
import Main from "./components/router";


//apollo client setup
const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql'
});



class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <BrowserRouter>
          <div id="main">
            <Header name="Başlık" />
            <Main />
          </div>
          </BrowserRouter>
      </ApolloProvider>
    );
  }
}

export default App;