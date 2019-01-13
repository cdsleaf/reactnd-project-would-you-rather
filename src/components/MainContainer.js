import React, { Component, Fragment  } from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { handlInitialData } from '../actions/shared';
import DashBoard from './DashBoard';

class MainContainer extends Component {

  componentDidMount() {
    this.props.dispatch(handlInitialData());
  }

  render() {
    const loading = this.props.loading;
    return (
      <Fragment>
        <div className="app-container">

          {loading 
            ? null 
            : <div>
                <Route exact path={this.props.match.path} component={DashBoard} />
              </div>
          }
        </div>
      </Fragment>
    );
  }
}

function mapStateToProps({auth, users, questions}){
  return {
    loading: auth.authedUser === null,
    users,
    questions
  };
}

export default connect(mapStateToProps)(MainContainer);
