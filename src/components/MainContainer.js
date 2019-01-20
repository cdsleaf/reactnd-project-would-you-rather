import React, { Component, Fragment } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { handlInitialData } from '../actions/shared';
import DashBoard from './DashBoard';
import Nav from './Nav';
import UserInfo from './UserInfo';
import QuestionCard from './QuestionCard';
import AskQuestion from './AskQuestion';
import QuestionResult from './QuestionResult';

class MainContainer extends Component {

  componentDidMount() {
    this.props.dispatch(handlInitialData());
  }

  render() {
    const { loading, match } = this.props;
    return (
      <BrowserRouter>
      <div className='app-container'>
        <div className='header'>
          <Nav />
          <UserInfo />
        </div>
        <hr />
        {loading 
          ? null 
          : <Fragment>
              <Route exact path={match.path} component={DashBoard} />
              <Route path='/ask' component={QuestionCard(AskQuestion, 'question-card-for-asking')} />
              <Route path='/result' component={QuestionCard(QuestionResult, 'question-card-for-asking')} />
            </Fragment>           
        }
      </div>
      </BrowserRouter>
    );
  }
}

function mapStateToProps({auth, users, questions}, props){
  return {
    loading: !auth.isAuthenticated,
    users,
    questions,
    ...props
  };
}

export default connect(mapStateToProps)(MainContainer);
