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
    width: 4rem;
    height: 4rem;
  }

  button {
    margin: 1.5rem;
    border-radius: 0.5rem;
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
  margin: 0.3rem;
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
