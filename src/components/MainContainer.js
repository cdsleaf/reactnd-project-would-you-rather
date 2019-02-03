import React, { Component } from 'react';
import { connect } from 'react-redux';
import { handlInitialData } from '../actions/shared';
import Nav from './Nav';
import UserInfo from './UserInfo';

export default function (ComposedComponent) {  
  class MainContainer extends Component {
    
    componentDidMount() {
      const { questions, getInitialData } = this.props;
      if(Object.keys(questions).length === 0){
        getInitialData();
      }
    }

    render() {
      const { loading }  = this.props;
      return (
        <div className='app-container'>
          <div className='header'>
            <Nav />
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

  const mapStateToProps = ({auth, users, questions}, props) => {
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