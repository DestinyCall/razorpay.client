import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.scss';
import Header from 'components/Header/Header';
import Footer from 'components/Footer/Footer';
import Landing from 'components/Landing/Landing';

export default class App extends Component {
  render() {
    return (
      <Router>
        <div className='container'>
          <div className='App'>
            <Header />
            <div className='appBody'>
              <Switch>
                <Route exact path='/' component={Landing} />
              </Switch>
            </div>
            <Footer />
          </div>
        </div>
      </Router>
    );
  }
}
