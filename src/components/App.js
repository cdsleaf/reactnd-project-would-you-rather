import React, { Component } from 'react';
import { BrowserRouter, Route} from 'react-router-dom';
import { connect } from 'react-redux';
import Login from './Login';
import RequiresAuth from './RequiresAuth';
import MainContainer from './MainContainer';

class App extends Component {

  render() {
    return (
      <BrowserRouter>
        <div>
          <Route exact path="/" component={RequiresAuth(MainContainer)} />
          <Route path="/login" component={Login} />
        </div>
      </BrowserRouter>
    );
  }
}
export default connect()(App);
