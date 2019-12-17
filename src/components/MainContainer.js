import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { handlInitialData } from '../actions/shared';
import Nav from './Nav';
import UserInfo from './UserInfo';
import styled from 'styled-components';

const BackDrop = styled.div`
  position: fixed;
  display: ${props => (props.menuOpen ? 'block' : 'none')};
  top: 0;
  left: 0;
  z-index: 100;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
`;

export default function(ComposedComponent) {
  return function MainContainer(props) {
    const { loading, questions } = useSelector(({ questions }) => ({
      loading:
        Object.entries(questions).length === 0 &&
        questions.constructor === Object,
      questions,
    }));
    const dispatch = useDispatch();
    const [menuOpen, setMenuOpen] = useState(false);
    const handleMenuClick = event => {
      event.preventDefault();
      setMenuOpen(!menuOpen);
    };

    useEffect(() => {
      if (Object.keys(questions).length === 0) {
        dispatch(handlInitialData());
      }
    }, [dispatch, questions]);

    return (
      <>
        <BackDrop menuOpen={menuOpen} onClick={handleMenuClick} />
        <div className="header">
          <a id="menu" href="null" onClick={handleMenuClick} className="menu">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path d="M2 6h20v3H2zm0 5h20v3H2zm0 5h20v3H2z" />
            </svg>
          </a>
          <Nav menuOpen={menuOpen ? 'open' : ''} />
          <UserInfo />
        </div>
        <hr />
        {loading ? null : <ComposedComponent {...props} />}
      </>
    );
  };
}
