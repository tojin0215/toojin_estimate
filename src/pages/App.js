import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Home from './home/Home';
import Quote from './quote/Quote';

class App extends Component {
  render() {
    return (
        <div>
            <Route exact path="/" component={Home}/>
            <Route exact path="/quote" component={Quote}/>
        </div>
    );
  }
}

export default App;