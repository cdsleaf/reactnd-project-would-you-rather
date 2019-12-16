import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { FaSignOutAlt } from 'react-icons/fa';
import { logOut } from '../actions/shared';
import styled from 'styled-components';

const User = styled.div`
  display: flex;
  margin-left: auto;

  p {
    margin: auto;
  }

  img {
    width: 4em;
    height: 4em;
  }

  button {
    margin: 1.5em;
    border-radius: 0.5em;
    border: none;
    cursor: pointer;
  }

  button:hover {
    background-color: black;
    color: white;
  }
`;

const StyledFaSignOutAlt = styled(FaSignOutAlt)`
  vertical-align: middle;
  margin: 0.3em;
`;

const UserInfo = () => {
  const authedUser = useSelector(({ auth, users }) => users[auth.authedUser]);
  const dispatch = useDispatch();

  return (
    <User>
      {authedUser && (
        <>
          <p>Hello!!! {authedUser.name}</p>
          <img
            src={process.env.PUBLIC_URL + authedUser.avatarURL}
            alt="authedUserAvatar"
          />
        </>
      )}
      <button onClick={() => dispatch(logOut())}>
        <StyledFaSignOutAlt />
        Logout
      </button>
    </User>
  );
};

export default UserInfo;
