import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { handleInitialLoginData } from '../actions/shared';
import { setAuthedUser } from '../actions/auth';
import { setSesstion } from '../utils/api.js';
import { getSession } from '../utils/api.js';

export class Login extends Component {

  constructor(props){
    super(props);
    this.state={
      userId: '',
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange(event){
    const selectedValue = event.target.value;
    this.setState(state => ({
      ...state,
      userId: selectedValue,
    }));
  }

  handleClick(event){
    if(this.state.userId === '') {
      alert("please select the user for login");
      return;
    }
    this.props.dispatch(setAuthedUser(this.state.userId));
    setSesstion(this.state.userId);
  }

  componentDidMount(){
    this.props.dispatch(handleInitialLoginData());
    const currentSessionId = getSession();
    if(currentSessionId !== null) {
      this.props.dispatch(setAuthedUser(currentSessionId));
    }
  }

  render() {
    const { location, toHome, users} = this.props;
    const { from } = location.state || { from: { pathname: '/' } }
    const usersArray = Object.values(users);
    if(toHome) return <Redirect to={from} />

    return (
      <div className={'login-container'}>
        <p>Welcome to the Would You Rather App!!!</p>
        <hr/>
        <img className={'logo'} src={process.env.PUBLIC_URL +'/img/react_redux_logo.jpg'} alt="Logo" />
        <p>Sign In</p>
        <select 
          className={'login-user-list'} 
          value={this.state.userId} 
          onChange={this.handleChange}>
          <option value='' disabled>Select User</option>
          {usersArray.map( user => (
            <option value={user.id} key={user.id}>{user.name}</option>
          ))}
        </select>
        <button 
          type='button'
          className={'login-signIn-button'}
          onClick={this.handleClick}>
            Sign In
        </button>
      </div>
    );
  }
}

function mapStateToProps({ auth, users }){
  return {
    toHome: auth.isAuthenticated,
    users,
  }
}

export default connect(mapStateToProps)(Login)