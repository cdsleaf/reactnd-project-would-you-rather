import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Redirect, Route } from 'react-router';
import { getSession } from '../utils/api.js';
import { setAuthedUser } from '../actions/auth';

function AuthRoute(props) {
  const isAuthenticated = useSelector(({ auth }) => auth.isAuthenticated);
  const dispatch = useDispatch();
  const { path, component: Component, exact } = props;
  const redirectUrl = '/login';
  const currentSessionId = getSession();
  if (currentSessionId !== null) {
    dispatch(setAuthedUser(currentSessionId));
  }

  return (
    <Route
      exact={exact}
      path={path}
      render={props =>
        isAuthenticated === true ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: redirectUrl,
              state: { from: props.location },
            }}
          />
        )
      }
    />
  );
}

export default AuthRoute;
