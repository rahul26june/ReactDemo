import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import Generic from './components/Generic';
import Elements from './components/Elements';
import { BrowserRouter as Router, Route, Link, Switch, Redirect } from 'react-router-dom'


class App extends React.Component {
   render() {
      return (
        <Router>
          <React.Fragment>
              <Header />
              <Switch>
                <Route path="/" exact={true} component={Home} />
                <Route path="/home" component={Home} />
                <Route path="/generic" component={Generic} />
                <Route path="/generic/hello" render ={ () => { return <div> Hello Testing world </div> }} />
                <Route path="/elements" component={Elements} />
                </Switch>
              <Footer />
          </React.Fragment>
        </Router>
      );
   }
}

export default App;
