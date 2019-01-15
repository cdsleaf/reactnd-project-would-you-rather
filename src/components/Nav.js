import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Nav () {
  return (
    <nav className='nav'>
      <ul>
        <li>
          <NavLink to='/app' className='nav-link' activeClassName='nav-active' >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to='/new' className='nav-link' activeClassName='nav-active' >
            New Question
          </NavLink>
        </li>
        <li>
          <NavLink to='/leaderboard' className='nav-link' activeClassName='nav-active'>
            Leader Board
          </NavLink>
        </li>
      </ul>
    </nav>
  )
}