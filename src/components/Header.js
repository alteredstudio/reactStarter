import React from 'react'
import NavLink from './NavLink';
import logo from '../assets/img/logo.svg';

export default React.createClass({
  render() {
    return (
      <header className="header">
        <NavLink to="/" onlyActiveOnIndex className="logo-link">
          <img src={logo} className="full-logo" alt="logo" />
        </NavLink>
        <ul>
          <li><NavLink className="" to="/" onlyActiveOnIndex>Home</NavLink></li>
          <li><NavLink className="" to="about">About</NavLink></li>
          <li><NavLink className="" to="blank/about" onlyActiveOnIndex>Blank Home</NavLink></li>
          <li><NavLink className="" to="blank/home">Blank About</NavLink></li>
          <li><NavLink className="" to="notarealurl">404</NavLink></li>
        </ul>
      </header>
    )
  }
})
