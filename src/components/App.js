import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { Switch } from 'react-router';
import { connect } from 'react-redux';
import LoadingBar from 'react-redux-loading-bar';
import Login from './Login';
import AuthRoute from './RequiresAuth';
import MainContainer from './MainContainer';
import DashBoard from './DashBoard';
import QuestionCard from './QuestionCard';
import QuestionDetail from './QuestionDetail';
import NewQuestion from './NewQuestion';
import LeaderBoard from './LeaderBoard';
import { NoMatch } from './ErrorPages';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  :root {
    --border-style: 0.1rem solid grey;
  }

  body {
    margin: 0;
    padding: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  ul {
    padding-left: 0;
  }

  li {
    list-style-type: none;
    padding: 0.5rem;
    text-decoration: none;
  }

  hr {
    border: 0.1rem solid #0abab5;
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace;
  }
`;

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <>
          <GlobalStyle />
          <LoadingBar />
          <div>
            <Switch>
              <Route path="/login" component={Login} />
              <AuthRoute
                exact={true}
                path="/"
                component={MainContainer(DashBoard)}
              />
              <AuthRoute
                path="/questions/:questionId"
                component={MainContainer(QuestionCard(QuestionDetail))}
              />
              <AuthRoute path="/add" component={MainContainer(NewQuestion)} />
              <AuthRoute
                path="/leaderboard"
                component={MainContainer(LeaderBoard)}
              />
              <Route component={NoMatch} />
            </Switch>
          </div>
        </>
      </BrowserRouter>
    );
  }
}
export default connect()(App);
