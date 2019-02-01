import React from 'react';
import { connect } from 'react-redux';
import { FaSignOutAlt } from 'react-icons/fa';
import { logOut } from '../actions/shared';

const UserInfo = props => {

  const { 
    authedUserName, 
    authedUserAvatarURL,
    handleLogOut 
  } = props;
  
  return (
    <div className='user-info'>
      <p>Hello!!! {authedUserName}</p>
      <img src={process.env.PUBLIC_URL + authedUserAvatarURL} alt="authedUserAvatar" />
      <button onClick={() => handleLogOut()}>
      <FaSignOutAlt className='logout-icon'/>
        Logout
      </button>
    </div>
  )
}

function mapStateToProps({ auth, users }, props){
  const authedUserObject = users[auth.authedUser];
  return {
    ...props,
    authedUserName: authedUserObject.name,
    authedUserAvatarURL: authedUserObject.avatarURL,
  }
}

function mapDispatchToProps(dispatch){
  return {
    handleLogOut: () => dispatch(logOut()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserInfo);