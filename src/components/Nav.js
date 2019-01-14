import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Nav () {
  return (
    <nav className='nav'>
      <ul>
        <ui>
          <NavLink to='/app' activeClassName='nav-active' >
            Home
          </NavLink>
        </ui>
        <ui>
          <NavLink to='/new' activeClassName='nav-active' >
            New Question
          </NavLink>
        </ui>
        <ui>
          <NavLink to='/leaderboard' activeClassName='nav-active'>
            Leader Board
          </NavLink>
        </ui>
      </ul>
    </nav>
  )
}