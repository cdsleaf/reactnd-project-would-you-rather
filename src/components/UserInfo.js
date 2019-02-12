import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { FaSignOutAlt } from 'react-icons/fa';
import { logOut } from '../actions/shared';

const UserInfo = props => {

  const { 
    authedUser,
    handleLogOut 
  } = props;
  
  return (
    <div className='user-info'>
      {authedUser &&
        <Fragment>
          <p>Hello!!! {authedUser.name}</p>
          <img src={process.env.PUBLIC_URL + authedUser.avatarURL} alt="authedUserAvatar" />
        </Fragment> 
      }
      <button onClick={() => handleLogOut()}>
      <FaSignOutAlt className='logout-icon'/>
        Logout
      </button>
    </div>
  )
}

function mapStateToProps({ auth, users }, props){
  return {
    ...props,
    authedUser: users[auth.authedUser],
  }
}

function mapDispatchToProps(dispatch){
  return {
    handleLogOut: () => dispatch(logOut()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserInfo);