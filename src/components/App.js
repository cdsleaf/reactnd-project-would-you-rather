import React, { Component, Fragment } from 'react';
import { BrowserRouter, Route} from 'react-router-dom';
import { connect } from 'react-redux';
import LoadingBar from 'react-redux-loading-bar'
import Login from './Login';
import RequiresAuth from './RequiresAuth';
import MainContainer from './MainContainer';

class App extends Component {

  render() {
    return (
      <BrowserRouter>
        <Fragment>
          <LoadingBar />
          <div>
            <Route exact path="/" component={RequiresAuth(MainContainer)} />
            <Route path="/login" component={Login} />
          </div>
        </Fragment>
      </BrowserRouter>
    );
  }
}
export default connect()(App);
