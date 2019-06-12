import React, { Component } from 'react';
import { connect } from 'react-redux';
import { handlInitialData } from '../actions/shared';
import Nav from './Nav';
import UserInfo from './UserInfo';

export default function (ComposedComponent) {  
  class MainContainer extends Component {

    constructor(props){
      super(props);

      this.state = {
        menuClassName: ""
      }
      this.handleMenuClick = this.handleMenuClick.bind(this);
    }
    
    componentDidMount() {
      const { questions, getInitialData } = this.props;
      if(Object.keys(questions).length === 0){
        getInitialData();
      }
    }
    
    handleMenuClick(event) {
      event.preventDefault();

      this.setState((state, props) => {
        return { 
          ...state, 
          menuClassName: state.menuClassName === "" ? "open" : ""
        }
      });
    }

    render() {
      const { loading }  = this.props;
      return (
        <div className='app-container'>
          <div className='header'>
            <a id='menu' href="null" onClick={this.handleMenuClick} className='menu'>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path d="M2 6h20v3H2zm0 5h20v3H2zm0 5h20v3H2z" />
              </svg>
            </a>
            <Nav menuClassName={this.state.menuClassName} />
            <UserInfo />
          </div>
          <hr />
          {loading
            ? null
            : <ComposedComponent {...this.props}/>
          }
        </div>
      )
    }
  }

  const mapStateToProps = ({ users, questions }, props) => {
    return {
      loading: Object.entries(questions).length === 0 && questions.constructor === Object,
      users,
      questions,
      ...props
    };
  }

  const mapDispatchToProps = dispatch => {
    return {
      getInitialData: () => dispatch(handlInitialData()),
    }
  }
  
  return connect(mapStateToProps, mapDispatchToProps)(MainContainer);
}