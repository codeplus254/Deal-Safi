import React, { Component } from 'react';
import { BrowserRouter, Route} from 'react-router-dom';
import Navbar from './views/Navbar'
import Home from './views/Home'

// eslint-disable-next-line react/prefer-stateless-function
export default class App extends Component {
  render() {
    return (
        <BrowserRouter>
          <div className="App">
            <Navbar />
            <Route exact path="/" component={Home} />
          </div>
        </BrowserRouter>
    );
  }
}