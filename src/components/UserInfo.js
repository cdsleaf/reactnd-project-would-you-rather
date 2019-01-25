import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FaSignOutAlt } from 'react-icons/fa';
import { logOut } from '../actions/shared';

class UserInfo extends Component {

  constructor(props){
    super(props);

    this.handleClikc = this.handleClikc.bind(this);
  }

  handleClikc() {
    this.props.dispatch(logOut());
  }

  render() {
    const { authedUserName, authedUserAvatarURL } = this.props;
    return (
      <div className='user-info'>
        <p>Hello!!! {authedUserName}</p>
        <img src={process.env.PUBLIC_URL + authedUserAvatarURL} alt="authedUserAvatar" />
        <button onClick={this.handleClikc}>
        <FaSignOutAlt className='logout-icon'/>
          Logout
        </button>
      </div>
    )
  }
}

function mapStateToProps({ auth, users }, props){
  const authedUserObject = users[auth.authedUser];
  return {
    ...props,
    authedUserName: authedUserObject.name,
    authedUserAvatarURL: authedUserObject.avatarURL,
  }
}

export default connect(mapStateToProps)(UserInfo);