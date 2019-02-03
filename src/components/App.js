import React, { Component, Fragment } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { Switch } from 'react-router';
import { connect } from 'react-redux';
import LoadingBar from 'react-redux-loading-bar'
import Login from './Login';
import AuthRoute from './RequiresAuth';
import MainContainer from './MainContainer';
import DashBoard from './DashBoard';
import QuestionCard from './QuestionCard';
import QuestionDetail from './QuestionDetail';
import NewQuestion from './NewQuestion';
import LeaderBoard from './LeaderBoard';
import { NoMatch } from './ErrorPages';

class App extends Component {

  render() {
    return (
      <BrowserRouter>
        <Fragment>
          <LoadingBar />
          <div>
            <Switch>
              <Route path="/login" component={Login} />
              <AuthRoute exact={true} path="/" component={MainContainer(DashBoard)} />
              <AuthRoute path="/questions/:questionId" component={MainContainer(QuestionCard(QuestionDetail))} />
              <AuthRoute path='/add' component={MainContainer(NewQuestion)} />
              <AuthRoute path='/leaderboard' component={MainContainer(LeaderBoard)} />
              <Route component={NoMatch} />
            </Switch>
          </div>
        </Fragment>
      </BrowserRouter>
    );
  }
}
export default connect()(App);
