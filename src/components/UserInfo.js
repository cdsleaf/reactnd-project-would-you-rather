import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FaSignOutAlt } from 'react-icons/fa';

class UserInfo extends Component {

  render() {
    const userName = this.props.authedUserName;
    return (
      <div className='user-info'>
        <p>Hello!!! {userName}</p>
        <button>
        <FaSignOutAlt className='logout-icon'/>
          Logout
        </button>
      </div>
    )
  }
}

function mapStateToProps({ auth }){
  return {
    authedUserName: auth.authedUserName,
  }
}

export default connect(mapStateToProps)(UserInfo);