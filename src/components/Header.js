import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch, Redirect } from 'react-router-dom'
const Header = () =>{
      return (
      <header id="header">
      <div class="inner">
        <a href="index.html" class="logo">introspect</a>
        <nav id="nav">
          <Link to="/home">Home</Link>
          <Link to="/generic">Generic</Link>
          <Link to="/elements">Elements</Link>
        </nav>
      </div>
    </header>
    )
}

export default Header;
