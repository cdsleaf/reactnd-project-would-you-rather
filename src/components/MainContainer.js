import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { handlInitialData } from '../actions/shared';
import DashBoard from './DashBoard';
import Nav from './Nav';

class MainContainer extends Component {

  componentDidMount() {
    this.props.dispatch(handlInitialData());
  }

  render() {
    const { loading, match } = this.props;
    return (
      <div className="app-container">
        <Nav />
        <hr />
        {loading 
          ? null 
          : <div>
              <Route exact path={match.path} component={DashBoard} />
            </div>
        }
      </div>
    );
  }
}

function mapStateToProps({auth, users, questions}, props){
  return {
    loading: false, //auth.authedUser === null,
    users,
    questions,
    ...props
  };
}

export default connect(mapStateToProps)(MainContainer);
