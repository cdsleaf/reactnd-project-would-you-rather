import React from 'react';  
import { connect } from 'react-redux';
import { Redirect, Route } from 'react-router';
import { getSession } from '../utils/api.js';
import { setAuthedUser } from '../actions/auth';

const AuthRoute = props => {
  const { 
    path, 
    redirectUrl,
    isAuthenticated,
    component: Component,
    exact,
  } = props;

  const currentSessionId = getSession();
  if(currentSessionId !== null) {
    props.dispatch(setAuthedUser(currentSessionId));
  }

  return (
    <Route exact={exact} path={path} render={(props) => (
      isAuthenticated === true
        ? <Component {...props} />
        : <Redirect to={{
            pathname: redirectUrl,
            state: { from: props.location }
          }} />
    )} />
  )
}

const mapStateToProps = ( { auth }, props) => {
  return {
    ...props,
    isAuthenticated: auth.isAuthenticated,
    redirectUrl: '/login',
  };
};

export default connect(mapStateToProps)(AuthRoute);