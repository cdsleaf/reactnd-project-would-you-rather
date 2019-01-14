import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { handleInitialLoginData } from '../actions/shared';
import { setAuthedUser } from '../actions/auth';
import logo from '../images/react_redux_logo.jpg';

export class Login extends Component {

  constructor(props){
    super(props);
    this.state={
      value: '',
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange(event){
    const selectedValue = event.target.value;
    this.setState(state => ({
      ...state,
      value: selectedValue,
    }));
  }

  handleClick(event){
    if(this.state.value === '') {
      alert("please select the user for login");
      return;
    }
    this.props.dispatch(setAuthedUser(this.state.value));
  }

  componentDidMount(){
    this.props.dispatch(handleInitialLoginData());
  }

  render() {
    const {toHome, users} = this.props;
    if(toHome) return <Redirect to='/app' />

    return (
      <div className={'login-container'}>
        <p>Welcome to the Would You Rather App!!!</p>
        <hr/>
        <img className={'logo'} src={logo} alt="Logo" />
        <p>Sign In</p>
        <select 
          className={'login-user-list'} 
          value={this.state.value} 
          onChange={this.handleChange}>
          <option value='' disabled>Select User</option>
          {users.map( user => (
            <option value={user.id} key={user.id}>{user.name}</option>
          ))}
        </select>
        <button 
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
    users: Object.values(users),
  }
}

export default connect(mapStateToProps)(Login)