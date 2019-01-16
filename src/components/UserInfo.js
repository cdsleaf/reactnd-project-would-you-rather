import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FaSignOutAlt } from 'react-icons/fa';

class UserInfo extends Component {

  render() {
    const { authedUserName, authedUserAvatarURL } = this.props;
    return (
      <div className='user-info'>
        <p>Hello!!! {authedUserName}</p>
        <img src={process.env.PUBLIC_URL + authedUserAvatarURL} alt="authedUserAvatar" />
        <button>
        <FaSignOutAlt className='logout-icon'/>
          Logout
        </button>
      </div>
    )
  }
}

function mapStateToProps({ auth, users }){
  const authedUserObject = users[auth.authedUser];
  return {
    authedUserName: authedUserObject.name,
    authedUserAvatarURL: authedUserObject.avatarURL,
  }
}

export default connect(mapStateToProps)(UserInfo);