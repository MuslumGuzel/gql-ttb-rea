import React from "react";
import { Switch, Route } from "react-router-dom";

import ClanDescription from "./pages/clanDescription";
import ClanMembers from "./pages/clanMembers";

export default class Main extends React.Component {
  render() {
    return (
      <main>
        <Switch>
          <Route exact path="/" component={ClanDescription} />
        </Switch>
        <Switch>
          <Route exact path="/clanMembers" component={ClanMembers} />
        </Switch>        
      </main>
    );
  }
}
