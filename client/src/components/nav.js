import React from "react";
import { Link } from "react-router-dom";


export default class Nav extends React.Component {
  render() {
    return (
      <nav className="nav">        
        <Link to="/">
          Klan Tanıtım
        </Link>
        <Link to="/clanMembers">
          Klan Üyeleri
        </Link>        
      </nav>
    );
  }
}