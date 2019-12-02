import React from 'react';
import { NavLink } from 'react-router-dom'


const AppNavLinks = () => (
    <div className="app-nav-links-wrapper">
      <NavLink to="/" activeClassName="active-app-nav-link" exact>Home</NavLink>
      <NavLink to="/posts" activeClassName="active-app-nav-link">Posts</NavLink>
      <NavLink to="/authors" activeClassName="active-app-nav-link">Authors</NavLink>
      <NavLink to="/photos" activeClassName="active-app-nav-link">Photos</NavLink>
      <NavLink to="/albums" activeClassName="active-app-nav-link">Albums</NavLink>
    </div>
);

export default AppNavLinks
