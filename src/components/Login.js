import React, { Component } from 'react';
import { connect } from 'react-redux';
import { handleInitialLoginData } from '../actions/shared';
import { setAuthedUser } from '../actions/auth';
import logo from '../images/react_redux_logo.jpg';

export class Login extends Component {

  constructor(props){
    super(props);
    this.state={
      value: null,
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange(event){
    this.setState({value: event.target.value});
  }

  handleClick(event){
    if(this.state.value === null) {
      alert("please select the user for login");
      return;
    }
    this.props.dispatch(setAuthedUser(this.state.value));
  }

  componentDidMount(){
    this.props.dispatch(handleInitialLoginData());
  }

  render() {
    const users = this.props.users;
    return (
      <div className={"login-container"}>
        <p>Welcome to the Would You Rather App!!!</p>
        <hr/>
        <img className={"logo"} src={logo} alt="Logo" />
        <p>Sign In</p>
        <select 
          className={"login-user-list"} 
          value={this.state.value} 
          onChange={this.handleChange}>
          <option value='' disabled>Select User</option>
          {users.map( user => (
            <option value={user.id} key={user.id}>{user.name}</option>
          ))}
        </select>
        <button 
          className={"login-signIn-button"}
          onClick={this.handleClick}>
           Sign In
        </button>
      </div>
    );
  }
}

function mapStateToProps({ users }, props){
  return {
    ...props,
    users: Object.values(users),
  }
}

export default connect(mapStateToProps)(Login)