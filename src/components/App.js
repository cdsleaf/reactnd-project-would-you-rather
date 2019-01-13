import React, { Component, Fragment } from 'react';
import { BrowserRouter, Route} from 'react-router-dom';
import { connect } from 'react-redux';
import Login from './Login';
import RequiresAuth from './RequiresAuth';
import MainContainer from './MainContainer';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Fragment>
          <Route path="/login" component={Login} />
          <Route path="/" exact component={RequiresAuth(MainContainer)} />
        </Fragment>
      </BrowserRouter>
    );
  }
}
export default connect()(App);
