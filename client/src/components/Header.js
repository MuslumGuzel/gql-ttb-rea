import React from "react";
import Navs from "./nav";

export default class Header extends React.Component {
  render() {
    
    return (
      <section>
        <h2>{this.props.name}</h2>        
        <div>
          <Navs />
        </div>
      </section>
    );
  }
}
