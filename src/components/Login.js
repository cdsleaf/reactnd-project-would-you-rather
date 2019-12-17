import React, { useState, useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { handleInitialLoginData } from '../actions/shared';
import { setAuthedUser } from '../actions/auth';
import { setSesstion, getSession } from '../utils/api.js';
import styled from 'styled-components';
import { device } from '../deviceBreakpoints';

const LoginContainer = styled.div`
  width: 95%;
  height: 50%;
  margin: 10% auto;
  padding: 0.5em;
  text-align: center;

  @media ${device.tablet} {
    width: 30%;
    border: var(--border-style);
  }
`;

const LoginUserList = styled.select`
  width: 100%;
  height: 2em;
  margin: 0.5em 0;
`;

const LoginSignInButton = styled.button`
  width: 100%;
  height: 2em;
`;

function Login(props) {
  const { toHome, usersArray } = useSelector(({ auth, users }) => ({
    toHome: auth.isAuthenticated,
    usersArray: Object.values(users),
  }));
  const dispatch = useDispatch();
  const [userId, setUserId] = useState('');
  const { location } = props;
  const { from } = location.state || { from: { pathname: '/' } };

  const handleClick = event => {
    if (userId === '') {
      alert('please select the user for login');
      return;
    }
    dispatch(setAuthedUser(userId));
    setSesstion(userId);
  };

  useEffect(() => {
    dispatch(handleInitialLoginData());
    const currentSessionId = getSession();
    if (currentSessionId !== null) {
      dispatch(setAuthedUser(currentSessionId));
    }
  }, [dispatch]);

  if (toHome) return <Redirect to={from} />;

  return (
    <LoginContainer>
      <p>Welcome to the Would You Rather App!!!</p>
      <hr />
      <img
        className={'logo'}
        src={process.env.PUBLIC_URL + '/img/react_redux_logo.jpg'}
        alt="Logo"
      />
      <p>Sign In</p>
      <LoginUserList
        value={userId}
        onChange={({ target }) => setUserId(target.value)}
      >
        <option value="" disabled>
          Select User
        </option>
        {usersArray.map(user => (
          <option value={user.id} key={user.id}>
            {user.name}
          </option>
        ))}
      </LoginUserList>
      <LoginSignInButton type="button" onClick={handleClick}>
        Sign In
      </LoginSignInButton>
    </LoginContainer>
  );
}
export default Login;
