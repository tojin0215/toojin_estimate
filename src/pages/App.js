import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Home from './home/Home';
import Quote from './quote/Quote';
import Buttonpage from './buttonpage/Buttonpage';

class App extends Component {
  render() {
    return (
        <div>
            <Route exact path="/" component={Buttonpage}/>
            <Route exact path="/home" component={Home}/>
            <Route exact path="/quote" component={Quote}/>
        </div>
    );
  }
}

export default App;